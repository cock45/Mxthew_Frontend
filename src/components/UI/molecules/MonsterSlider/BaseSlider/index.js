import Slider from 'react-slick'
import { Arrow } from "components/UI/atom/button/ArrowButton"
import { Monstercard } from "../../MonsterCard/MonsterCard"
import { FightButton } from 'components/UI/atom/button/FightButton'
import "./style.css"

export const BaseSlider = (props) => {
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
                <>
                    <Monstercard monster={item} />
                    {!props.hidebtn ? (<FightButton>Fight!!!</FightButton>): ("")}
                </>
            ))}
        </Slider>
    )
}