import React from "react";
import "./Footer.css";
import Container from "@material-ui/core/Container";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Grid from "@material-ui/core/Grid";
import OutlinedButtonLink from "../button/OutlinedButtonLink";
import Box from "@material-ui/core/Box";
import MailIcon from "./mail/MailIcon";
import MailComponent from "./mail/MailComponent";

function Footer() {
    return (
        <footer style={{marginTop: 'auto', height: '50px'}}>
            <Container maxWidth="sm">
                <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                    <MailComponent />
                    {/*<Grid item xs={2}>*/}
                    {/*    /!*<OutlinedButtonLink to="/notes" text="Notes"/>*!/*/}
                    {/*</Grid>*/}
                    {/*<Grid item xs={2}>*/}
                    {/*    /!*<OutlinedButtonLink to="/contacts" text="About"/>*!/*/}
                    {/*</Grid>*/}
                </Grid>
            </Container>
        </footer>
    );
}

export default Footer;