import React from "react";
import "./Footer.css";
import Box from "@material-ui/core/Box";
import MailComponent from "./mail/MailComponent";
import GitHubComponent from "./github/GithubComponent";
import TelegramComponent from "./telegram/TelegramComponent";

function Footer() {
    return (
        <footer style={{marginTop: 'auto', height: '60px'}}>
            <Box display="flex" flexDirection="row" alignItems="flex-start">
                <MailComponent address="daniil.a.titov@gmail.com"/>
                <GitHubComponent address="https://github.com/DaniilTitov"/>
                <TelegramComponent username="Titov_Daniil"/>
            </Box>
        </footer>
    );
}

export default Footer;