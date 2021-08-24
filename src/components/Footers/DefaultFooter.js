/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
    return (
        <>
            <footer className="footer footer-default">
                <Container>
                    <nav>
                        <ul>
                            <li>
                                <a>
                                    TECHPATHY
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="copyright" id="copyright">
                        © {new Date().getFullYear()},

                        Coded by{" "}
                        <a
                        >
                            TECHPATHY
                        </a>
                        .
                    </div>
                </Container>
            </footer>
        </>
    );
}

export default DefaultFooter;
