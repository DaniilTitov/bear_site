import React from "react";
import TypeIt from "typeit-react";
import Carousel, {Dots} from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './Content.css'
import Icon from 'react-fa';

class Content extends React.Component {
    constructor() {
        super(undefined);
        this.state = {
            value: 0
        };
        this.onchange = this.onchange.bind(this);
        this.renderThumbnails = this.renderThumbnails.bind(this);
    }

    onchange(value) {
        this.setState({value});
    }

    renderThumbnails() {
        return Array(4)
            .fill()
            .map((_, index) => (
                <div
                    style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: '50%',
                        display: "inline-block",
                        backgroundColor: this.state.value === index ? "white" : "#666666",
                        color: 'green'
                    }}
                />
            ));
    }

    render() {
        return (
            <div style={{
                // display: 'flex',
                // justifyContent: 'center',
                // flexFlow: 'row',
                alignContent: 'center',
                textAlign: 'center',
                minHeight: 300,
                maxHeight: 300
            }}>

                <Carousel arrowLeft={<Icon name="angle-double-left"/>}
                          arrowLeftDisabled={<Icon name="angle-left"/>}
                          arrowRight={<Icon name="angle-double-right"/>}
                          arrowRightDisabled={<Icon name="angle-right"/>}
                          addArrowClickHandler
                          value={this.state.value} onChange={this.onchange}
                    // dots
                >
                    {/*<img src={imageOne}/>*/}
                    {/*<img src={imageTwo}/>*/}
                    {/*<img src={imageThree}/>*/}
                    <div>Hello</div>
                    <div>Hello1</div>
                    <div>Hello2</div>
                    <div>Hello3</div>
                </Carousel>

                <Dots
                    number={4}
                    thumbnails={this.renderThumbnails()}
                    value={this.state.value}
                    onChange={this.onchange}
                />
                {/*<div>*/}
                {/*    <p style={{textAlign: "left", margin: 20, fontSize: "x-large", minHeight: 300}}>*/}
                {/*        <TypeIt>*/}
                {/*            Титов Даниил.*/}
                {/*            <br/>*/}
                {/*            Java разработчик.*/}
                {/*            <br/>*/}
                {/*            Дратути!*/}
                {/*        </TypeIt>*/}
                {/*    </p>*/}
                {/*</div>*/}
            </div>
        );
    }
}

export default Content;