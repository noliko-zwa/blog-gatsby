import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { UseApp } from '../contexts/AppContext';

export const App:FC =()=> {
	const { title, works } = UseApp();
	const artworksTitles = works
		?.map((el) => el.title)
		.reverse()
		.join(' / ');
	return (
		<>
			<title>hi</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<ArtWorkList>
				<ArtWorkLink to='/work'>
					work
				</ArtWorkLink>
			</ArtWorkList>
		</>
	);
}

const ArtWorkList = styled.div`
	margin-top: ${({ theme }) => theme.space.xl}px;
	font-size: ${({ theme }) => theme.fontsize.l}px;
	line-height: 226%;
`;

const ArtWorkLink = styled(Link)`
color: ${({ theme }) => theme.color.light};
		:hover {
		color: ${({ theme }) => theme.color.link};
	}
`;
