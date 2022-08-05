import styled from 'styled-components';

export const ProfileAvatar = styled.img`
    width: 150px;
    height: 150px;
    border-radius: ${p => p.theme.radii.round};
    background-color: ${p => p.theme.colors.bgImage};
`;

export const ProfileName = styled.p`
    margin-top: ${p => p.theme.space[4]}px;
    margin-bottom: ${p => p.theme.space[4]}px;
    font-family: ${p => p.theme.fonts.monospace};
    font-size: ${p => p.theme.fontSizes.l};
    font-weight: ${p => p.theme.fontWeights.bold};
`;

export const ProfileTag = styled.p`
    margin-bottom: ${p => p.theme.space[3]}px;
    color: ${p => p.theme.colors.text};
`;

export const ProfileLocation = styled.p`
    color: ${p => p.theme.colors.text};
    font-size: ${p => p.theme.fontSizes.m};
`;

export const ProfileStats = styled.ul`
    display: flex;
    justify-content: space-between;
    border-top: ${p => p.theme.borders.normal};
    border-color: ${p => p.theme.colors.text};
`;

export const ProfileStatItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: calc(100% / 3);
    padding: ${p => p.theme.space[4]}px;
    background-color: ${p => p.theme.colors.bgImage};
    
    :not(:last-child) {
        border-right: ${p => p.theme.borders.normal};
        border-color: ${p => p.theme.colors.text};
    }
`;

export const ProfileStatLabel = styled.span`
    margin-bottom: ${p => p.theme.space[3]}px;
    font-size: ${p => p.theme.fontSizes.m};
`;

export const ProfileStatQuantity = styled.span`
    font-size: ${p => p.theme.fontSizes.s};
    font-weight: ${p => p.theme.fontWeights.bold};
`;