import React, { useState } from "react";
import CardBorder from "components/UI/atom/cardborder";
import CardAvatar from "components/UI/atom/CardAvatar";
import {
    CardContainer,
    CardComponentsConatiner,
    CardEnemyStats
} from './index.styles';

const Card = ({isEnemyCard, isAnimated, level, width, name = null, borderClass = null, avatarClass = null, defenseProps = null}) => {
    if(defenseProps == null) {
        const range = {
            1: [15, 30],
            2: [31, 45],
            3: [46, 60],
            4: [70, 80]
        }
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
        }
        defenseProps = {
            defense: getRandomInt(range[level][0], range[level][1] + 1),
            chance: 69
        }
    }
    const borderSelector = () => {
        if(isEnemyCard) {
            return "Images/Borders/enemy-border-" + level + ".png";
        }
        else {
            var borderDictionary = {
                "B'tuin": {
                    4: "boder_btuin"
                },
                "Fraethes": {
                    1: "boder_01_dragon",
                    2: "boder_02_dragon",
                    3: "boder_03_dragon"
                },
                "Asheal": {
                    1: "boder_01_holi",
                    2: "boder_02_holi",
                    3: "boder_03_holi"
                },
                "Jikuru": {
                    1: "boder_01_ninja",
                    2: "boder_02_ninja",
                    3: "boder_03_ninja"
                },
                "Riz'gath": {
                    1: "boder_01_hell",
                    2: "boder_02_hell",
                    3: "boder_03_hell"
                },
                "Ratcher": {
                    1: "boder_01_robot",
                    2: "boder_02_robot",
                    3: "boder_03_robot"
                },
                "Oralillystorm": {
                    1: "boder_01_fairy",
                    2: "boder_02_fairy",
                    3: "boder_03_fairy"
                }
            };
            return borderDictionary[name][level];
        }
    }
    const avatarSelector = () => {
        if(isEnemyCard) {
            if(isAnimated) {
                return "anim_cat_alien_0" + level;
            }
            return "Images/Avatars/enemy_avatar_" + level + ".png";
        }
        else {
            var avatarDictionary = {
                "B'tuin": {
                    4: "anim_btuin"
                },
                "Fraethes": {
                    1: "anim_cat_dragon_01",
                    2: "anim_cat_dragon_02",
                    3: "anim_cat_dragon_03"
                },
                "Asheal": {
                    1: "anim_cat_holi_01",
                    2: "anim_cat_holi_02",
                    3: "anim_cat_holi_03"
                },
                "Jikuru": {
                    1: "anim_cat_ninja_01",
                    2: "anim_cat_ninja_02",
                    3: "anim_cat_ninja_03"
                },
                "Riz'gath": {
                    1: "anim_cat_hell_01",
                    2: "anim_cat_hell_02",
                    3: "anim_cat_hell_03"
                },
                "Ratcher": {
                    1: "anim_cat_robot_01",
                    2: "anim_cat_robot_02",
                    3: "anim_cat_robot_03"
                },
                "Oralillystorm": {
                    1: "anim_cat_fairy_01",
                    2: "anim_cat_fairy_02",
                    3: "anim_cat_fairy_03"
                }
            };
            return avatarDictionary[name][level];
        }
    }
    const borderClassSelector = () => {
        if(isEnemyCard) {
            return "default";
        }
        if(name == "B'tuin") {
            return name;
        }
        if(borderClass == null) {
            return "reg" + level;
        }
        return borderClass;
    }
    const avatarClassSelector = () => {
        if(isEnemyCard) {
            return "default";
        }
        if(name == "Oralillystorm" && level != 2) {
            return "Oralillystorm" + level;
        }
        if(name == "Ratcher" && level < 3) {
            return "Ratcher" + level;
        }
        if(name == "Riz'gath" && level == 1) {
            return "Riz'gath1";
        }
        if(name == 'Jikuru' && level == 3) {
            return 'Jikuru3';
        }
        if(name == "B'tuin" || name == 'Jikuru') {
            return name;
        }
        if(avatarClass == null) {
            return "reg" + level;
        }
    }
    return (
      <CardContainer style={{width: width, height: width * 1.67}}>
          <CardComponentsConatiner>
              <CardBorder isAnimated={isAnimated && !isEnemyCard} file={borderSelector()} width={width} borderClass={borderClassSelector()}></CardBorder>
              <CardAvatar isAnimated={isAnimated} file={avatarSelector()} width={width} avatarClass={avatarClassSelector()}></CardAvatar>
              {
                  isEnemyCard ? (
                    <CardEnemyStats style={{top: width * 1.34, lineHeight: width * 0.008, fontSize: width * 0.06}}>
                        Defense: {defenseProps.defense} ({defenseProps.chance}%)
                    </CardEnemyStats>
                  ) : (
                      null
                  )
              }
          </CardComponentsConatiner>
      </CardContainer>  
    );
}

export default Card;