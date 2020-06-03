import React from "react";
import Box from "@material-ui/core/Box";
import GitIcon from "./GitHubIcon";

function GitHubComponent(props) {
    const {address} = props

    return (
        <Box display="flex" flexDirection="row" style={{marginRight: 40}}>
            <Box component={GitIcon} address={address} display="inline"/>
            <Box component="p" className="highlight" display="inline">{address}</Box>
        </Box>
    );
}

export default GitHubComponent;