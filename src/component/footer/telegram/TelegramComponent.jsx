import React from "react";
import Box from "@material-ui/core/Box";
import TIcon from "./TelegramIcon";

function TelegramComponent(props) {
    const {username} = props

    return (
        <Box display="flex" flexDirection="row" style={{marginRight: 40}}>
            <Box component={TIcon} username={username} display="inline"/>
            <Box component="p" className="highlight" display="inline">@{username.split("/").pop()}</Box>
        </Box>
    );
}

export default TelegramComponent;