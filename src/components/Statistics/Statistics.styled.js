import styled from "styled-components";

export const StatisticsTitle = styled.h2`
    padding-top: ${p => p.theme.space[4]}px;
    padding-bottom: ${p => p.theme.space[4]}px;
    font-family: ${p => p.theme.fonts.monospace};
    text-align: center;
`;

export const StatList = styled.ul`
    display: flex;
    border-top: ${p => p.theme.borders.normal};
    border-color: ${p => p.theme.colors.text};
`;

export const StatListItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: calc(100% / 5);
    padding: ${p => p.theme.space[4]}px;
    background-color: ${p => getRandomHexColor(p.index)};
    
    :not(:last-child) {
    border-right: ${p => p.theme.borders.normal};
    border-color: ${p => p.theme.colors.text};
    }
`;

export const StatItemLabel = styled.span`
    margin-bottom: ${p => p.theme.space[3]}px;
    font-size: ${p => p.theme.fontSizes.xs};
`;

export const StatItemPercentage = styled.span`
    font-size: ${p => p.theme.fontSizes.m};
`;

function getRandomHexColor(index) {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}