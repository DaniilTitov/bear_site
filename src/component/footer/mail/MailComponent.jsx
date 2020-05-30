import React from "react";
import Box from "@material-ui/core/Box";
import MailIcon from "./MailIcon";

function MailComponent(props) {
    const {address} = props

    return (
        <Box display="flex" flexDirection="row">
            <Box component={MailIcon} address={address} display="inline"/>
            <Box component="p" display="inline">{address}</Box>
        </Box>
    );
}

export default MailComponent;