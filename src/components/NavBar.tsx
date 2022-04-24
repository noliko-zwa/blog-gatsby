import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { UseApp } from '../contexts/AppContext';

export function NavBar() {
	const { menu } = UseApp();
	return (
		<>
			<Navbar>
				{menu
					? menu.map((el, idx) => {
							const url = `/${el.toLowerCase()}`;
							return (
								<>
									<NavElement key={idx + el}>
										<NavLink to={url}>{el}</NavLink>
									</NavElement>
								</>
							);
					  })
					: null}
			</Navbar>
		</>
	);
}

const Navbar = styled.ul`
	display: flex;
	padding: 0;
	justify-content: center;
	margin-top: ${({ theme }) => theme.space.xl}px;
	list-style-type: none;
	height: ${({ theme }) => theme.space.l}px;
`;

const NavElement = styled.li`
	list-style: none;
	width: 60px;
	margin-right: ${({ theme }) => theme.space.m}px;
`;

const NavLink = styled(Link)`
	:hover {
		border-bottom: 1px solid ${({ theme }) => theme.color.basic};
		padding-bottom: ${({ theme }) => theme.space.s}px;
	}
`;
