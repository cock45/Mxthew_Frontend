// import styled from "styled-components";
import { MainSlider } from "components/UI/molecules/MonsterSlider/MainSlider";
import { BgSlider } from "components/UI/molecules/MonsterSlider/BgSlider";
import { SmSlider } from "components/UI/molecules/MonsterSlider/SmSlider";
import "./style.css"

export const CardSlice = () => {
    const monsters = [
        {
            name: 'Aluntian',
            rate: 1,
            attr: 'Goblin',
            defence: 17,
            nftName: 'Universe: Eirian',
            nft: './Images/Monsters/card-monster-1.28fa7690.png',
            background: './Images/Assets/card-bg-1.93e2e308.png',
            image: './Images/Monsters/1.png'
        },
        {
            name: 'Lason',
            rate: 2,
            attr: 'Imp',
            defence: 37,
            nftName: 'Universe: Eirian',
            nft: './Images/Monsters/card-monster.a700a81d.png',
            background: './Images/Assets/card-bg.3e99c198.png',
            image: './Images/Monsters/2.png'
        },
        {
            name: 'Sisilim',
            rate: 3,
            attr: 'Ewes',
            defence: 59,
            nftName: 'Universe: Eirian',
            nft: './Images/Monsters/card-monster-3.5e4c6ed2.png',
            background: './Images/Assets/card-bg-3.8377a6b7.png',
            image: './Images/Monsters/3.png'
        },
        {
            name: 'Glacio',
            rate: 4,
            attr: 'Yeti',
            defence: 77,
            nftName: 'Universe: Eirian',
            nft: './Images/Monsters/card-monster-4.6443181e.png',
            background: './Images/Assets/card-bg-4.d3182482.png',
            image: './Images/Monsters/4.png'
        }
    ];

    const settings_bg = {
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

    const selectCards = [
        {
            name: 'Aluntian',
            rate: 1,
            attr: 'Goblin',
            nftName: 'Universe: Eirian',
            nft: './Images/Monsters/slider-monster-1.png.png',
            background: './Images/Assets/slider-monster-1.png',
            image: './Images/Monsters/slider-monster-1.png'
        },
        {
            name: 'Aluntian',
            rate: 1,
            attr: 'Goblin',
            nftName: 'Universe: Eirian',
            nft: './Images/Monsters/slider-monster-2.png',
            background: './Images/Assets/slider-monster-2.png',
            image: './Images/Monsters/slider-monster-2.png'
        },
        {
            name: 'Aluntian',
            rate: 1,
            attr: 'Goblin',
            nftName: 'Universe: Eirian',
            nft: './Images/Monsters/slider-monster-2.png',
            background: './Images/Assets/slider-monster-2.png',
            image: './Images/Monsters/slider-monster-2.png'
        },
    ]

    const settings_sm = {
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

    return (
        <>
            <div className="container" >
                <div className="d-none d-md-none d-lg-block">
                    <MainSlider monsters={monsters} />
                </div>
                <div className="d-block d-md-block d-lg-none">
                    <BgSlider monsters={monsters} />
                </div>
                <SmSlider monsters={selectCards}/>
            </div>
        </>
    )
}