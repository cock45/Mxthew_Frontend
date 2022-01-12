import styled from 'styled-components';
import { Header } from '../../UI/organisms/Header'
import 'index.css'

export const Layout = (props) => {
    const {children} = props;

    return (
        <Body
            className="container"
        >
            <Header />
            {children}
        </Body>
    )
}

const Body = styled.div`
    font-family: AgencyFB-Bold;
    background: url("/Images/home-bg.1da653b9.png");
    background-size: cover;
    height: 100vh;
    padding: 30px;
    max-width: 100%;

    @media (max-width: 992px) {
        padding: 15px;
        background: url("/Images/mobile-bg.a3c60a42.png");
        background-size: cover;
    }
`