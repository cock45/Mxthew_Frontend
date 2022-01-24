export class CardHelper {
    constructor(props) {
        this.props = props;
        console.log(props);
    }
    borderSelector() {
        if(this.props.isEnemyCard) {
            return "Images/Borders/enemy-border-" + this.props.level + ".png";
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
            if(!this.props.isAnimated) {
                return "Images/Borders/" + borderDictionary[this.props.name][this.props.level] + ".png";
            }
            return borderDictionary[this.props.name][this.props.level];
        }
    }
    avatarSelector() {
        if(this.props.isEnemyCard) {
            if(this.props.isAnimated) {
                return "anim_cat_alien_0" + this.props.level;
            }
            return "Images/Avatars/enemy_avatar_" + this.props.level + ".png";
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
            return avatarDictionary[this.props.name][this.props.level];
        }
    }
    borderClassSelector() {
        if(this.props.isEnemyCard) {
            return "default";
        }
        if(this.props.name == "B'tuin") {
            return this.props.name;
        }
        if(this.props.borderClass == null) {
            return "reg" + this.props.level;
        }
        return this.props.borderClass;
    }
    avatarClassSelector() {
        if(this.props.isEnemyCard) {
            return "default";
        }
        if(this.props.name == "Oralillystorm" && this.props.level != 2) {
            return "Oralillystorm" + this.props.level;
        }
        if(this.props.name == "Ratcher" && this.props.level < 3) {
            return "Ratcher" + this.props.level;
        }
        if(this.props.name == "Riz'gath" && this.props.level == 1) {
            return "Riz'gath1";
        }
        if(this.props.name == 'Jikuru' && this.props.level == 3) {
            return 'Jikuru3';
        }
        if(this.props.name == "B'tuin" || this.props.name == 'Jikuru') {
            return this.props.name;
        }
        if(this.props.avatarClass == null) {
            return "reg" + this.props.level;
        }
    }
}