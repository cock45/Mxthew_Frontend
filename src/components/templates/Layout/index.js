import styled from 'styled-components';
import { Header } from '../../UI/organisms/Header'
import 'index.css'

export const Layout = (props) => {
    const { children } = props;

    return (
        <Body>
            <Header />
            {children}
        </Body>
    )
}

const Body = styled.div`
    font-family: AgencyFB-Bold;
    background: url("/Images/home-bg.1da653b9.png") no-repeat 50%;
    background-size: cover;
    padding: 10px 20px;
    max-width: 100%;
    min-height: 100vh;
    @media (max-width: 991px) {
        padding: 15px;
        background: url("/Images/mobile-bg.a3c60a42.png") no-repeat 50%;
        background-size: cover;
    }
`