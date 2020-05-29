import React from "react";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";

function Header() {
    return (
        <div style={{background: "#323232"}}>
            <Button style={{color: "white"}} component={Link} variant="outlined" to="/">Home</Button>
            <Button component={Link} variant="outlined" to="/users">Users</Button>
            <Button component={Link} variant="outlined" to="/contact">Ko</Button>
        </div>
    );
}

export default Header;