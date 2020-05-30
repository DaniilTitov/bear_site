import React from "react";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

function MailIcon() {
    return (
        <MailOutlineIcon cursor="pointer"
                         fontSize="large"
                         style={{margin: 10}}
                         onClick={() => window.location = 'mailto:daniil.a.titov@gmail.com'}/>
    );
}

export default MailIcon;