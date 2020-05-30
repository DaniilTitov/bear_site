import React from 'react';
import Button from '@material-ui/core/Button';
import {withStyles} from "@material-ui/core";
import {Link} from "react-router-dom";

const StyledButton = withStyles({
    root: {
        fontSize: "x-large",
        width: "250px",
        height: "60px",
        border: 0,
        borderRadius: 0,
        background: "none",
        marginTop: 1,
        color: 'white',
        padding: '0 30px',
        transition: 'all 0.5s',
        position: 'relative',

        '&:after': {
            content: '""',
            position: 'absolute',
            top: '-1px',
            left: '-1px',
            width: '100%',
            height: '100%',
            zIndex: 0,
            opacity: 0,
            transition: 'all 0.3s',
            border: '1px solid rgba(255, 255, 255, 1)',
            transform: 'scale(1.2, 1.2)'
        },
        "&:hover:after": {
            opacity: 1,
            transform: "scale(1, 1)"
        }
    }
})(Button);

export default function OutlinedButtonLink(props) {
    return <StyledButton component={Link} variant="outlined" to={props.to}>{props.text}</StyledButton>
}