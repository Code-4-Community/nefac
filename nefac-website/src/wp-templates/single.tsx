import { FaustTemplate } from "@faustwp/core";
import { gql } from "@apollo/client";
import { GetPostQuery } from "../__generated__/graphql";

const SingleTemplate: FaustTemplate<GetPostQuery> = (props) => {

    const post = props?.data?.post;

	return (
		<>
			<h1>{post?.title}</h1>
			<div dangerouslySetInnerHTML={{ __html: post?.content || '' }} />
		</>
	);
}

// Replaced blocks instead of content??
SingleTemplate.query = gql(`
	query GetPost($uri: ID!) {
		post(id: $uri, idType: URI) {
			title
			blocks {
                name
                attributes
                innerBlocks {
                    name
                    attributes
                }
            }
		}
	}
`);

SingleTemplate.variables = (seedQuery: { uri?: string }, ctx: any) => {
	return {
		uri: seedQuery?.uri,
	};
};

export default SingleTemplate;