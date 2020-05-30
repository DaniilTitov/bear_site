import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';

function GitIcon() {
    return (
        <GitHubIcon cursor="pointer"
                    fontSize="large"
                    style={{margin: 10}}
                    onClick={() => window.location = 'https://github.com/DaniilTitov'}/>
    );
}

export default GitIcon;