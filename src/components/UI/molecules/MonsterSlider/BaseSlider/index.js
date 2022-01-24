import React from 'react'
import Slider from 'react-slick'
import { Arrow } from "components/UI/atom/button/ArrowButton"
import { Monstercard } from "../../MonsterCard/MonsterCard"
import { FightButton } from 'components/UI/atom/button/FightButton'
import "./style.css"
import Card from '../../Card';
export const BaseSlider = (props) => {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
    const handleResize = (e) => {
        setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    const items = props.monsters
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
        ),
    };

    return (
        <Slider 
            {...settings}
            nextArrow={<Arrow type="next" />}
            prevArrow={<Arrow type="prev" />}
        >
            {items.map(item => (
                props.isEnemy ? (
                    <div id="cont">
                        <Card level={item.rate} isEnemyCard={true} isAnimated={true} width={windowWidth * 0.25}/> 
                        {!props.hidebtn ? (<FightButton>Fight!!!</FightButton>): ("")}
                    </div>
                ) : (
                    <>
                        <Monstercard monster={item} />
                    </>
                )
                
            ))}
        </Slider>
    )
}