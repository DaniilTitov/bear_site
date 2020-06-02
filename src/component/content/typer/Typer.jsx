import React from "react";
import TypeIt from "typeit-react";

function Typer() {
    return (
        <div>
            <p style={{textAlign: "left", margin: 20, fontSize: "x-large", minHeight: 300, minWidth: 300, maxWidth: 300}}>
                <TypeIt>
                    Титов Даниил.
                    <br/>
                    Java разработчик.
                    <br/>
                    Дратути!
                </TypeIt>
            </p>
        </div>
    );
}

export default Typer;