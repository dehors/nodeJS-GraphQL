import {
	GraphQLObjectType,
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLID
} from 'graphql';

export const postType = new GraphQLObjectType({
	name: 'Post',
	description: 'User api',
	fields: () => ({
		_id: {
			type: new GraphQLNonNull(GraphQLID)
		},
		uid: {
			type:GraphQLString
		},
		title: {
			type: GraphQLString
		},
		body: {
			type: GraphQLString
		}
	})
});

export cons postInputType: new GraphQLInputObjectType({
	name: 'postInput',
	description: 'Insert Post',
	fields: () => ({
		uid: {
			type: GraphQLString
		},
		title: {
			type: GraphQLString
		},
		body:{
			type: GraphQLString
		}
	})
});