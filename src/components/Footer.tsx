
import React from 'react';
import styled from 'styled-components';
import { UseApp } from '../contexts/AppContext';
import { ThemeType } from '../style/theme';

export function Footer() {
	const { copyright } = UseApp();
	return <StyledFooter>{copyright}</StyledFooter>;
}

const StyledFooter = styled.div<{ theme: ThemeType }>`
	position: absolute;
	bottom: 0;
	width: 100%;
	font-size: ${({ theme }) => theme.fontsize.xs}px;
	height: ${({ theme }) => theme.space.l}px;
`;
