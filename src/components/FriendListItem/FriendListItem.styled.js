import styled from "styled-components";

export const FriendItem = styled.li`
    display: flex;
    align-items: center;
    gap: ${p => p.theme.space[4]}px;
    border: ${p => p.theme.borders.normal};
    border-color: ${p => p.theme.colors.text};
    border-radius: ${p => p.theme.radii.normal};
    padding: ${p => p.theme.space[3]}px;
    box-shadow: 0px 4px 24px -1px rgba(0,0,0,0.75);

    :not(:last-child) {
        margin-bottom: ${p => p.theme.space[4]}px;
    }
`;

export const FriendStatus = styled.span`
    width: 20px;
    height: 20px;
    border: ${p => p.theme.borders.none};
    border-radius: ${p => p.theme.radii.round};
    background-color: ${p => p.isOnline ?
        p.theme.colors.online : p.theme.colors.offline};
`;

export const FriendAvatar = styled.img`
    width: 50px;
    height: 50px;
`;

export const FriendName = styled.p`
    font-size: ${p => p.theme.fontSizes.m};
    font-weight: ${p => p.theme.fontWeights.bold};
`;