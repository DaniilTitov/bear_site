import React from "react";
import CustomizedCarousel from "./carousel/Carousel";
import Typer from "./typer/Typer";
import Grid from "@material-ui/core/Grid";


function Content() {
    return (
        <Grid style={{marginTop: 35}} container direction="row" justify="space-around" alignItems="center">
            <Grid item xs={6}>
                <CustomizedCarousel/>
            </Grid>
            <Grid item xs={4}>
                <Typer/>
            </Grid>
        </Grid>
    );
}

export default Content;