import React from "react";
import "./Footer.css";
import Container from "@material-ui/core/Container";

function Footer() {
    return (
        <footer style={{marginTop: 'auto'}}>
            <Container maxWidth="sm">
                <p>
                    Тут будет что то написано
                </p>
            </Container>
        </footer>
    );
}

export default Footer;