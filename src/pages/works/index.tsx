import * as React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

export default function index({ data }) {
	return (
		<ul>
			{data.allMdx.nodes.map((node) => (
				<List key={node.id}>
					<Link to="/">{node.frontmatter.title}</Link>
				</List>
			))}
		</ul>
	);
}

export const query = graphql`
	query {
		allMdx(sort: { fields: frontmatter___date, order: DESC }) {
			nodes {
				frontmatter {
					title
				}
				id
			}
		}
	}
`;

const List = styled.li`
	cursor: pointer;
`;
