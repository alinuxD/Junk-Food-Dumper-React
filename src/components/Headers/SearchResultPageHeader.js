import React from "react";

// reactstrap components
import {
    // Button,
    Container } from "reactstrap";

// core components

function SearchResultPageHeader() {
    let pageHeader = React.createRef();

    React.useEffect(() => {
        if (window.innerWidth > 991) {
            const updateScroll = () => {
                // let windowScrollTop = window.pageYOffset / 3;
                // pageHeader.current.style.transform =
                //     "translate3d(0," + windowScrollTop + "px,0)";
            };
            window.addEventListener("scroll", updateScroll);
            return function cleanup() {
                window.removeEventListener("scroll", updateScroll);
            };
        }
    });
    return (
        <>
            <div className="page-header page-header-small">
                <div
                    className="page-header-image"
                    style={{
                        backgroundImage:
                            "url(" + require("assets/img/Main_background.png").default + ")",
                    }}
                    ref={pageHeader}
                ></div>
                <div className="content-center">
                    <Container>
                        <h1 className="title">Pecipes
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </h1>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default SearchResultPageHeader;
