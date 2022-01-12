import { useState } from 'react'
import styled from 'styled-components'
import { PrimaryButton } from '../../atom/button/PrimaryButton'
import { StateLabelGroup } from './StateLabelGroup'
import { useEffect } from 'react'
import Web3 from 'web3'

export const NavRewardsGroup = () => {
    const [rewardState, setRewardState] = useState(0);
  
    const [{ metaMaskPresent, metaMaskConnected }, setMetaMaskObject] = useState({
        metaMaskPresent: false,
        metaMaskConnected: false
    });
    const [publicKey, setPublicKey] = useState("");
    console.log("Given Provider => ", Web3.givenProvider)
    console.log("isMetamaskPresent => ", Web3.givenProvider.isMetaMask)
    const web3 = new Web3(Web3.givenProvider || "http://localhost/8545");

    const shorten_pubkey = (pubkey) => {
        let len = pubkey.length;
        let shortkey = pubkey.slice(0, 5) + "....." + pubkey.slice(len-5, len);
        return shortkey;
    }

    const connectMetaMask = async () => {
        let accounts;
        try {
            if(metaMaskConnected) {
                setMetaMaskObject({ metaMaskConnected: false, metaMaskPresent: false })
                setPublicKey("")
                console.log("MetaMaskObject => ", metaMaskPresent, metaMaskConnected, publicKey)
            }
            else {
                await web3?.givenProvider?.request({ method: "eth_requestAccounts" })
                setMetaMaskObject({ metaMaskConnected: true, metaMaskPresent })
                accounts = await web3.eth.getAccounts()
                const account = shorten_pubkey(accounts[0])
                setPublicKey(account)
                console.log("MetaMaskObject => ", metaMaskPresent, metaMaskConnected, publicKey)
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
            
            <PrimaryButton>Claim Reward</PrimaryButton>
            <Space/>
            <PrimaryButton onClick={() => connectMetaMask()}>
                {(metaMaskPresent && !metaMaskConnected) ? "Connect" : publicKey}
            </PrimaryButton>
        </Body>
    )
}

const RewardLabel = styled.div`
    background-color: #2b2278;
    border-radius: 25px;
    padding: 14px 25px 8px;
    box-shadow: inset 0 1px 29px 8px rgb(0 0 0 / 44%);
    margin-right: 18px;

    @media (max-width: 992px) {
        padding: 8px 25px 6px;
    }

    @media (max-width: 576px) {
        padding: 5px 15px 3px;
    }
`;

const Body = styled.div`
    background: url('./Images/Assets/rewards-bg.4a3eba84.png') no-repeat 50%;
    background-size: 100% 100%;
    width: auto;
    height: auto;
    display: inline-flex;
    align-items: center;
    padding: 22px 28px;

    @media (max-width: 768px) {
        width: 100%;
        justify-content: space-between;
    }
`

const Space = styled.label`
    width: 10px;
`