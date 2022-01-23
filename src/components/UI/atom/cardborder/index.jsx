import React from 'react'
import PixiAnimation from "components/UI/atom/PixiAnimation";
import {
    BorderContainer,
    BorderImage
} from './index.styles';

const CardBorder = ({isAnimated, file, width, borderClass = "default"}) => {
    const topDictionary = {
        "reg1": -width * 0.80,
        "reg2": -width * 1.34,
        "reg3": -width * 1.36,
        "default": -width * 0.80,
        "B'tuin": -width * 0.72
    }
    const leftDictionary = {
        "reg1": width * 0.16,
        "reg2": width * 0.16,
        "reg3": width * 0.185,
        "default": width * 0.185,
        "B'tuin": -width * 0.11
    }
    const scaleDictionary = {
        "reg1": width * 1.2,
        "reg2": width * 1.2,
        "reg3": width * 1.15,
        "default": width * 1.2,
        "B'tuin": width * 1.65
    }
    console.log(borderClass);
    return (
        <BorderContainer id={file} style={isAnimated ? {left: -width * 0.2} : {}}>
            {borderClass != "default" ? (
                <PixiAnimation
                    appW={width * 1.4}
                    appH={width * 2}
                    animationId={file}
                    src={file}
                    scale={scaleDictionary[borderClass]}
                    animX={leftDictionary[borderClass]}
                    animY={topDictionary[borderClass]}
                    animation={isAnimated ? "animation" : "idle_01"}
                />
            ) : (
                <BorderImage src={file} alt="border-image" style={{width: width}}></BorderImage>
            )}
        </BorderContainer>
    );
}

export default CardBorder;