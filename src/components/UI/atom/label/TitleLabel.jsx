import { BigLabel } from "./BigLabel";

export const TitleLabel = (props) => {
    return (
        <BigLabel style={{ color: props.color }} className="title">{props.text}: </BigLabel>
    )
}