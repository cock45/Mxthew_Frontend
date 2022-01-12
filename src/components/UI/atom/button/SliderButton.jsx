

export const Arrow = (props) => {
    let className = props.type === "next" ? "nextArrow" : "prevArrow";
    className += " arrow";
    const image = props.type === "next" ? "./Images/Assets/slider-right-arrow.c8b636e4.png" : "./Images/Assets/slider-left-arrow.60df0050.png";
    return (
        <span className={className} onClick={props.onClick}>
            <img src={image} />
        </span>
    );
}