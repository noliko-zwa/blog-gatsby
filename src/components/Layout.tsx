import * as React from 'react';

import { NavBar } from './NavBar';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Footer } from './Footer';
import datas from '../data.json';
import { AppContext, AppContextList } from '../contexts/AppContext';
import { theme, ThemeType } from '../style/theme';
interface Props {
	children: React.ReactNode;
}

export default function Layout({ children }: Props) {
	const staticProps = datas as AppContextList;
	const currentRoute = window.location.pathname;
	return (
		<ThemeProvider theme={theme}>
			<AppContext.Provider value={staticProps}>
				<LayoutStyle />
				{currentRoute === '/' ? <Headline>{staticProps.title}</Headline> : null}
				<NavBar />
				{children}
				<Footer />
			</AppContext.Provider>
		</ThemeProvider>
	);
}

const LayoutStyle = createGlobalStyle<{ theme: ThemeType }>`
@import "../style/typography.css";

	body {
  text-align: center;
  font-size: ${({ theme }) => theme.fontsize.m}px;
  color: ${({ theme }) => theme.color.basic};
  font-family: 'Century Gothic','Mulish', sans-serif;
  letter-spacing: 0.07em;
  height:100%;
  margin: 0;
  padding: 0;
  }
  #wrapper {
    display: flex;
    flex-direction: column;
}
	a, a:visited, a:active {
		color:  ${({ theme }) => theme.color.basic};
		text-decoration: none;
	}
`;

const Headline = styled.div<{ theme: ThemeType }>`
	font-size: ${({ theme }) => theme.fontsize.xl}px;
	font-weight: 400;
	letter-spacing: 0.1em;
	margin-top: ${({ theme }) => theme.space.xl}px;
`;
