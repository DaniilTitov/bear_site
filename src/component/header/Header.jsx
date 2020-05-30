import React from "react";
import Grid from "@material-ui/core/Grid";
import {Box} from "@material-ui/core";
import OutlinedButtonLink from "../button/OutlinedButtonLink";

function Header() {
    return (
        <Box borderBottom={1} style={{padding: 15}}>
            <Grid container direction="row" justify="space-around" alignItems="center">
                <Grid item xs={4}>
                    <OutlinedButtonLink to="/" text="Home"/>
                </Grid>
                <Grid item xs={4}>
                    <OutlinedButtonLink to="/notes" text="Notes"/>
                </Grid>
                <Grid item xs={4}>
                    <OutlinedButtonLink to="/contacts" text="About"/>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Header;