import React from "react";
import Box from "@material-ui/core/Box";
import MailIcon from "./MailIcon";

function MailComponent(props) {
    const {address} = props

    return (
        <Box display="flex" flexDirection="row" style={{marginRight: 40, marginLeft: 10}}>
            <Box component={MailIcon} address={address} display="inline"/>
            <Box component="p" className="highlight" display="inline">{address}</Box>
        </Box>
    );
}

export default MailComponent;