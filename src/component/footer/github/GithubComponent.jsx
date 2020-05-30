import React from "react";
import Box from "@material-ui/core/Box";
import GitIcon from "./GitHub";

function GitHubComponent(props) {
    const {address} = props

    return (
        <Box display="flex" flexDirection="row">
            <Box component={GitIcon} address={address} display="inline"/>
            <Box component="p" display="inline">{address}</Box>
        </Box>
    );
}

export default GitHubComponent;