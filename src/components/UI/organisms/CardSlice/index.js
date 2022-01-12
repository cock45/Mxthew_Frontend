// import styled from "styled-components";
import { Monstercard } from "components/UI/molecules/MonsterCard/MonsterCard"
import { MonsterSlider } from "../../molecules/MonsterCard/MonsterSlider/index"
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

    return (
        <>
            <div className="container d-none d-md-none d-lg-block">
                <div 
                    className="row" 
                    style={{margin: '50px 0px'}}
                >
                    {monsters.map(monster => (
                        <div className="col-lg-3 col-md-12">
                            <Monstercard  monster={monster} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="container d-block d-md-block d-lg-none" 
                style={{
                    marginTop: "20px",
                    marginBottom: "80px",
                    animation: "fadeOut 2s",
                }}>
                <MonsterSlider monsters={monsters} />
            </div>
        </>
    )
}