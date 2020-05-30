import React from "react";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

function MailIcon(props) {
    return <MailOutlineIcon cursor="pointer"
                            fontSize="large"
                            style={{margin: 10}}
                            onClick={() => window.location = `mailto:` + props.address}/>;
}

export default MailIcon;