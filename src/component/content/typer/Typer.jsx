import React from "react";
import TypeIt from "typeit-react";

function Typer() {
    return (
        <div>
            <p style={{textAlign: "left", marginBottom: 50, fontSize: "x-large"}}>
                <TypeIt className="highlight"
                        getBeforeInit={instance => {
                            instance
                                .type("Титов Даниил.")
                                .break({delay: 200})
                                .type("Java разр")
                                .pause(300)
                                .delete(5)
                                .pause(100)
                                .type("/Kotlin разрабо")
                                .pause(300)
                                .move(-8)
                                .pause(200)
                                .type(" (ну и немного React)")
                                .pause(100)
                                .move('END')
                                .type("тчик.")
                                .break({delay: 200})
                                .type("Дратути.")
                                .pause(500)
                                .delete(1)
                                .pause(100)
                                .type("!");

                            return instance;
                        }}
                />
            </p>
        </div>
    );
}

export default Typer;