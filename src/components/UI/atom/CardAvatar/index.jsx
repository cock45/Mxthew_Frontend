import React from "react";
import PixiAnimation from "../PixiAnimation";
import {
    AvatarContainer,
    AvatarImage
} from './index.styles';

const CardAvatar = ({isAnimated, file, width, avatarClass}) => {
    const topDictionary = {
        "reg1": width * 0.1 + 10,
        "reg2": width * 0.1 + 10,
        "reg3": width * 0.1,
        "default": width * 0.1 + 10,
        "B'tuin": -width * 0.55,
        "Jikuru": width * 0.07,
        "Jikuru3": width * 0.05,
        "Riz'gath1": width * 0.15,
        "Ratcher1": width * 0.075,
        "Ratcher2": width * 0.1,
        "Oralillystorm1": width * 0.1,
        "Oralillystorm3": width * 0.1
    }
    const leftDictionary = {
        "reg1": (width - (width * 0.7 - 20))/2,
        "reg2": (width - (width * 0.7 - 20))/2,
        "reg3": (width - (width * 0.75 - 20))/2,
        "default": (width - (width * 0.8 - 20))/2,
        "B'tuin": -width * 0.11,
        "Jikuru": (width - (width * 0.7 - 20))/2,
        "Jikuru3": -width * 0.07,
        "Riz'gath1": (width - (width * 0.6 - 20))/2,
        "Ratcher1": (width - (width * 0.7 - 20))/2,
        "Ratcher2": (width - (width * 0.6 - 20))/2,
        "Oralillystorm1": (width - (width * 0.65 - 20))/2,
        "Oralillystorm3": (width - (width * 0.75 - 20))/2,
    }
    const scaleDictionary = {
        "reg1": width * 0.8 - 20,
        "reg2": width * 0.8 - 20,
        "reg3": width * 0.8,
        "default": width * 0.8 - 20,
        "B'tuin": width * 1.25,
        "Jikuru": width * 0.8 - 20,
        "Jikuru3": width * 1.25,
        "Riz'gath1": width * 0.62,
        "Ratcher1": width * 0.8 - 20,
        "Ratcher2": width * 0.65,
        "Oralillystorm1": width * 0.65,
        "Oralillystorm3": width * 0.7 ,
    }
    return (
        isAnimated ? (
            <AvatarContainer id={file} style={{
                width: width, 
                height: width * 0.84, 
                top: width * 0.4
            }}>
                <PixiAnimation
                    appW={width * 1.5}
                    appH={width * 1.5}
                    animationId={file}
                    src={file}
                    scale={scaleDictionary[avatarClass]}
                    animX={leftDictionary[avatarClass]}
                    animY={topDictionary[avatarClass]}
                    animation="animation"
                />
            </AvatarContainer>
        ) : (
            <AvatarContainer id={file} style={{width: width, height: width * 0.84, top: width * 0.4}}>
                <AvatarImage src={file} alt="enemy-avatar"/>
            </AvatarContainer>
        )
        
    );
}

export default CardAvatar;