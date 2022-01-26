import { useState } from 'react'
import styled from 'styled-components'
import { RewardButton } from '../../atom/button/RewardButton'
import { StateLabelGroup } from './StateLabelGroup'
import { useEffect } from 'react'
import Web3 from 'web3'

export const NavRewardsGroup = () => {
    const [rewardState, setRewardState] = useState(73892838);

    const [{ metaMaskPresent, metaMaskConnected }, setMetaMaskObject] = useState({
        metaMaskPresent: false,
        metaMaskConnected: false
    });
    const [publicKey, setPublicKey] = useState("");
    const web3 = new Web3(Web3.givenProvider || "http://localhost/8545");

    const shorten_pubkey = (pubkey) => {
        let len = pubkey.length;
        let shortkey = pubkey.slice(0, 5) + "....." + pubkey.slice(len - 5, len);
        return shortkey;
    }

    const connectMetaMask = async () => {
        let accounts;
        try {
            if (metaMaskConnected) {
                setMetaMaskObject({ metaMaskConnected: false, metaMaskPresent: false })
                setPublicKey("")
            }
            else {
                await web3?.givenProvider?.request({ method: "eth_requestAccounts" })
                setMetaMaskObject({ metaMaskConnected: true, metaMaskPresent })
                accounts = await web3.eth.getAccounts()
                const account = shorten_pubkey(accounts[0])
                setPublicKey(account)
            }
        } catch (error) {
            console.error("metmask error", error);
        }
    };

    useEffect(() => {
        const isMetaMaskPresent = () => {
            return web3?.givenProvider?.isMetaMask ? true : false;
        };
        setMetaMaskObject(() =>
            isMetaMaskPresent()
                ? { metaMaskPresent: true, metaMaskConnected }
                : { metaMaskPresent: false, metaMaskConnected }
        );
    }, [web3?.givenProvider?.isMetaMask, metaMaskConnected]);

    return (
        <Body>
            <RewardLabel>
                <StateLabelGroup
                    color="#24FF00"
                    title="Reward"
                    count={rewardState}
                />
            </RewardLabel>

            <RewardButton>Claim Reward</RewardButton>
            {/* <Space/> */}
            {/* <RewardButton onClick={() => connectMetaMask()}>
                {(metaMaskPresent && !metaMaskConnected) ? "Connect" : publicKey}
            </RewardButton> */}
        </Body>
    )
}

const RewardLabel = styled.div`
    background: url('./Images/Assets/reward-button-1.png') no-repeat 50%;
    background-size: 100% 100%;
    padding: 14px 25px 8px;
    margin-right: 18px;

    @media (max-width: 991px) {
        padding: 8px 25px 6px;
    }

    @media (max-width: 575px) {
        padding: 5px 15px 3px;
    }

    @media (max-width: 479px) {
        padding: 0px !important;
        background: none;
        margin: 0px;
    }
`;

const Body = styled.div`
    background: url('./Images/Assets/rewards-label.png') no-repeat;
    background-size: 100% 100%;
    width: auto;
    height: auto;
    display: inline-flex;
    align-items: center;
    padding: 14px 28px 14px 14px;

    label {
        font-size: 24px;
    }

    @media (max-width: 991px) {
        width: 70%;
        justify-content: space-between;
    }

    @media (max-width: 767px) {
        label {
            font-size: 18px;
        }
    }

    @media (max-width: 575px) {
        width: 80%;
    }

    @media (max-width: 479px) {
        width: 100%;
        
        button, label {
            font-size: 16px;
        }
    }
    
    @media (max-width: 350px) {
        flex-flow: column;
    }
`

const Space = styled.label`
    width: 10px;
`