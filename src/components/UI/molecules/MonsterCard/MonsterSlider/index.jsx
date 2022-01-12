import Slider from 'react-slick'
import { Arrow } from "components/UI/atom/button/SliderButton"
import { Monstercard } from "../MonsterCard"
import "./style.css"

export const MonsterSlider = (props) => {
    const settings = {
        className: "center",
        centerMode: true,
        centerPadding: '33%',
        dots: true,
        infinite: true,
        speed: 300,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        breakpoint: 600,        
       
        // variableWidth: true,
        // adaptiveHeight: true,
        customPaging: function (i) {
            return <div className="dot"></div>;
        },
        appendDots: dots => (
            <div>
              <ul className="slick-dots slick-thumb">
                {dots}
              </ul> 
            </div>
        ),
        customPaging: i => (
            <button />
        )
    };

    const items = props.monsters;

    return (
        <Slider 
            {...settings}
            nextArrow={<Arrow type="next" />}
            prevArrow={<Arrow type="prev" />}
        >
            {items.map(item => (
                <Monstercard monster={item} />
            ))}
        </Slider>
    )
}