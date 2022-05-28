import * as React from 'react';

import { NavBar } from './NavBar';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Footer } from './Footer';
import { Link, useStaticQuery, graphql } from 'gatsby';
import datas from '../../content/data.json';
import { AppContext, AppContextList } from '../contexts/AppContext';
import { theme, ThemeType } from './style/theme';
import { FC } from 'react';
import { Helmet } from 'react-helmet';
interface Props {
	children: React.ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
	const staticProps = datas as AppContextList;
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);
	const currentRoute = window.location.pathname;
	return (
		<>
			<Helmet>
				<link href="typography.css" rel="stylesheet" />
			</Helmet>
			<ThemeProvider theme={theme}>
				<AppContext.Provider value={staticProps}>
					<LayoutStyle />
					{currentRoute === '/' ? (
						<Headline>{data.site.siteMetadata.title}</Headline>
					) : null}
					<NavBar />
					{children}
					<Footer />
				</AppContext.Provider>
			</ThemeProvider>
		</>
	);
};

const LayoutStyle = createGlobalStyle<{ theme: ThemeType }>`
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
