import React from "react";
import Box from "@material-ui/core/Box";
import MailIcon from "./MailIcon";
import Grid from "@material-ui/core/Grid";

function MailComponent() {
    return (
        <Grid container direction="row" justify="flex-start" alignItems="center">
            <Box component={MailIcon} display="inline"/>
            <Box component="p" display="inline">daniil.a.titov@gmail.com</Box>
        </Grid>
    );
}

export default MailComponent;