import "./style.css"

export const MyScrollbar = (props) => {
    const { children } = props;

    return (
        <div className="content small-scroll">
            <div className="force-overflow">
                {children}
            </div>
        </div>
    )
}