import React from "react";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import "./OutlinedButtonLink.css"

function OutlinedButtonLink(props) {
    return (
        <Button
                style={{color: "white", fontSize: "x-large", zIndex: 1, width: "250px", height: "60px", border: 0}}
                component={Link}
                variant="outlined"
                className="Button"
                to={props.to}>
            {props.text}
        </Button>
    )
}

export default OutlinedButtonLink;