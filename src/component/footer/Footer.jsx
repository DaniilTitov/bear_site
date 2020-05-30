import React from "react";
import "./Footer.css";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import MailComponent from "./mail/MailComponent";
import GitHubComponent from "./github/GithubComponent";

function Footer() {
    return (
        <footer style={{marginTop: 'auto', height: '60px'}}>
            <Container maxWidth="sm">
                <Box display="flex" flexDirection="row">
                    <MailComponent address="daniil.a.titov@gmail.com"/>
                    <GitHubComponent address="https://github.com/DaniilTitov"/>
                </Box>
            </Container>
        </footer>
    );
}

export default Footer;