import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import {
    Collapse,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    UncontrolledTooltip,
} from "reactstrap";

function HomeNavbar() {
    const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
    const [collapseOpen, setCollapseOpen] = React.useState(false);
    React.useEffect(() => {
        const updateNavbarColor = () => {
            if (
                document.documentElement.scrollTop > 399 ||
                document.body.scrollTop > 399
            ) {
                setNavbarColor("");
            } else if (
                document.documentElement.scrollTop < 400 ||
                document.body.scrollTop < 400
            ) {
                setNavbarColor("navbar-transparent");
            }
        };
        window.addEventListener("scroll", updateNavbarColor);
        return function cleanup() {
            window.removeEventListener("scroll", updateNavbarColor);
        };
    });
    return (
        <>
            {collapseOpen ? (
                <div
                    id="bodyClick"
                    onClick={() => {
                        document.documentElement.classList.toggle("nav-open");
                        setCollapseOpen(false);
                    }}
                />
            ) : null}
            <Navbar className={"fixed-top " + navbarColor} color={'white'} expand="xl" style={{backgroundColor: "#2125294a !important"}}>
                <Container>
                    <div className="navbar-translate" >
                        <NavbarBrand
                            to="/home-page"
                            // target="_blank"
                            id="navbar-brand"
                            style={{fontSize: "1.8571em"}}
                        >

                            Junk Food Dumper
                        </NavbarBrand>

                        <UncontrolledTooltip target="#navbar-brand">
                            Your healthy mentor
                        </UncontrolledTooltip>
                        <button
                            className="navbar-toggler navbar-toggler"
                            onClick={() => {
                                document.documentElement.classList.toggle("nav-open");
                                setCollapseOpen(!collapseOpen);
                            }}
                            aria-expanded={collapseOpen}
                            type="button"
                        >
                            <span className="navbar-toggler-bar top-bar"></span>
                            <span className="navbar-toggler-bar middle-bar"></span>
                            <span className="navbar-toggler-bar bottom-bar"></span>
                        </button>
                    </div>
                    <Collapse
                        className="justify-content-end"
                        isOpen={collapseOpen}
                        navbar
                    >
                        <Nav navbar >

                            <NavItem>
                                <NavLink to="/home-page" tag={Link} style={{fontSize: "1em"}}>
                                    <p>Home</p>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/about-page" tag={Link} style={{fontSize: "1em"}}>
                                    About
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/bmi-page" tag={Link} style={{fontSize: "1em"}}>
                                    BMI Calculator
                                </NavLink>
                            </NavItem>
                            {/*<NavItem>*/}
                            {/*    <NavLink to="/food-details-page" tag={Link} style={{fontSize: "1em"}}>*/}
                            {/*        Food Details*/}
                            {/*    </NavLink>*/}
                            {/*</NavItem>*/}
                            <NavItem>
                                <NavLink to="/diet-plan-page" tag={Link} style={{fontSize: "1em"}}>
                                    Diet Plan
                                </NavLink>
                            </NavItem>
                            {/*<NavItem>*/}
                            {/*    <NavLink to="/help-page"> style={{fontSize: "1em"}}*/}
                            {/*        Help*/}
                            {/*    </NavLink>*/}
                            {/*</NavItem>*/}
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default HomeNavbar;
