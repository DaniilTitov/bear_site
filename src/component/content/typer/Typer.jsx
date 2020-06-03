import React from "react";
import TypeIt from "typeit-react";

function Typer() {
    return (
        <div>
            <p style={{textAlign: "left", margin: 15, marginTop: 10, fontSize: "x-large"}}>
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