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
        let arrowLeft = <div style={{fontSize: 30, cursor: 'pointer'}}><Icon name="arrow-left"/></div>;
        let arrowRight = <div style={{fontSize: 30, marginLeft: 10, marginRight: 10, cursor: 'pointer'}}><Icon
            name="arrow-right"/></div>;

        return (
            <div style={{
                alignContent: 'center',
                textAlign: 'center'
            }}>

                <Carousel arrowLeft={arrowLeft}
                          arrowRight={arrowRight}
                    // arrowRightDisabled
                    // arrowLeftDisabled
                          addArrowClickHandler
                          centered
                          value={this.state.value}
                          onChange={this.onchange}
                >
                    <img src={FirstImg} alt="Sorry"/>
                    <img src={SecondImg} alt="Sorry"/>
                    <div style={{fontSize: 20}}>Больше у меня нет хороших фотографий</div>
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