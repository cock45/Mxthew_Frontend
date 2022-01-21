import styled from "styled-components"

export const BlankCard = () => {
    return (
        <Blank>
            <button><i className="fa fa-plus" /></button>
        </Blank>
    )
}

const Blank = styled.div`
    width: 10vw;
    height: 16vw;
    border: 2px solid #fff;
    border-radius: 8px;
    background-color: rgba(0, 108, 191, 0.502);
    opacity: 0.502;
    position: relative;

    button {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: none;
        background: transparent;
    }
    
    button i {
      color: rgb(0, 108, 191);
      font-size: 4vw;
    }
`