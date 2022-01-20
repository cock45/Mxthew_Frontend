import styled from "styled-components"

export const CloseButton = (props) => {
    return (
        <Button onClick={props.onClick}>
            <i className="fa fa-times" />
        </Button>
    )
}

const Button = styled.button`
    background-color: #ffcc00;
    position: absolute;
    top: -16px;
    right: -16px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid #ffcc00;
    padding: 0px;

    i {
        font-size: 30px;
        color: #FFF;
    }
`