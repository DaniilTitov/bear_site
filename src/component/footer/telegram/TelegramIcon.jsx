import React from "react";
import TelegramIcon from "@material-ui/icons/Telegram";

function TIcon(props) {
    return <TelegramIcon cursor="pointer"
                         fontSize="large"
                         style={{margin: 10, marginRight: 5}}
                         onClick={() => window.location = `https://t.me/` + props.username}/>;
}

export default TIcon;