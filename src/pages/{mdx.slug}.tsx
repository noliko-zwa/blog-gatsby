import { graphql } from 'gatsby';
import * as React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

export default function BlogPost({ data }) {
	return (
		<div>
			<p>My blog post contents will go here (eventually).</p>
			<p>{data.mdx.frontmatter.date}</p>
			<MDXRenderer>{data.mdx.body}</MDXRenderer>
		</div>
	);
}

export const query = graphql`
	query ($id: String) {
		mdx(id: { eq: $id }) {
			frontmatter {
				title
				date(formatString: "MMMM D, YYYY")
			}
			body
		}
	}
`;
