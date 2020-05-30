import React from "react";
import OutlinedButtonLink from "../button/OutlinedButtonLink";
import Grid from "@material-ui/core/Grid";
import {Box} from "@material-ui/core";

function Header() {
    return (
        <Box borderBottom={1} style={{padding: 15}}>
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid item xs={4}>
                    <div className="btn btn-three">
                        <OutlinedButtonLink to="/" text="Home"/>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <OutlinedButtonLink to="/users" text="Users"/>
                </Grid>
                <Grid item xs={4}>
                    <OutlinedButtonLink to="/contacts" text="Ko"/>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Header;