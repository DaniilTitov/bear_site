import React from "react";
import Carousel, {Dots} from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './Carousel.css'
import Icon from 'react-fa';
import FirstImg from './images/0.jpg'
import SecondImg from './images/1.jpg'

class CustomizedCarousel extends React.Component {
    constructor() {
        super(undefined);
        this.state = {
            value: 0
        };
    }

    onchange = (value) => {
        if (value > 3) {
            value = 0;
            this.setState({value});
            return
        }

        if (value < 0) {
            value = 3;
            this.setState({value});
            return;
        }

        this.setState({value});
    }

    renderThumbnails = () => {
        return Array(3)
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
                alignContent: 'center',
                textAlign: 'center'
            }}>

                <Carousel arrowLeft={<Icon name="angle-left"/>}
                          arrowRight={<Icon name="angle-right"/>}
                          addArrowClickHandler
                          centered
                          value={this.state.value}
                          onChange={this.onchange}
                >
                    <img src={FirstImg} alt="Sorry"/>
                    <img src={SecondImg} alt="Sorry"/>
                    {/*<img src={imageTwo}/>*/}
                    {/*<img src={imageThree}/>*/}
                    <div>Больше у меня нет хороших фотографий</div>
                    {/*<div>Hello3</div>*/}
                </Carousel>

                <Dots
                    number={3}
                    thumbnails={this.renderThumbnails()}
                    value={this.state.value}
                    onChange={this.onchange}
                />
            </div>
        );
    }
}

export default CustomizedCarousel;