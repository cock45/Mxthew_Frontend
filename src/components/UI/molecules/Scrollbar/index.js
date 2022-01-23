import "./style.css"

export const MyScrollbar = (props) => {
    const { children } = props;
    const className = "content small-scroll " + props.className

    return (
        <div className={className}>
            <div className="force-overflow">
                {children}
            </div>
        </div>
    )
}