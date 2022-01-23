import styled from "styled-components";

export const AvatarContainer = styled.div`
    position: absolute;
    left: 0;
    & > * {
        position: absolute;
    }
`;
export const AvatarImage = styled.img`
    width: 75%;
    left: 12.5%;
    top: 12.5%;
`;