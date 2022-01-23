import styled from "styled-components"

export const BlankCard = () => {
    return (
        <Blank>
            <button><i className="fa fa-plus" /></button>
        </Blank>
    )
}

const Blank = styled.div`
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

    width: 160px;
    height: 256px;
    @media (max-width: 1399px) {
        width: 140px;
        height: 224px;
    }
    @media (max-width: 1199px) {
        width: 120px;
        height: 192px;
    }
    @media (max-width: 991px) {
        height: auto;
        width: 100%;
    }
    /* 
    
    @media (max-width: 767px) {
        width: 
    } 
    @media (max-width: 575px) {
        width: 
    }
    @media (max-width: 479px) {
        width: 
    }
    */
`