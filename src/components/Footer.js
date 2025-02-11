import react from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
    return (
        <>

            <div className="footer-copyright text-center mt-1]">
                <MDBContainer fluid>
                    Copyright &copy;<a href="https://www.uxd.co.jp/uxbd/"> ULTRA-X BD LIMITED</a>, All rights reserved.
                </MDBContainer>
            </div>

            {/* <MDBFooter color="blue" className="font-small pt-4 mt-4">
                <MDBContainer fluid className="text-center text-md-left">
                    <MDBRow>
                        <MDBCol md="6">
                            <h5 className="title">Footer Content</h5>
                            <p>
                                Here you can use rows and columns here to organize your footer
                                content.
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright: <a href="https://www.uxd.com"> uxd.com </a>
                    </MDBContainer>
                </div>
            </MDBFooter> */}
        </>
    );
}

export default Footer;
