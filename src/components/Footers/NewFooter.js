/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function NewFooter() {
    return (
        <>
            <footer className="footer1 footer-default">
                <Container style={{marginTop:'1500px'}}>
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

export default NewFooter;
