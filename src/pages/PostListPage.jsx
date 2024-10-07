import React from 'react';
import MainEmptyFeed from '../components/MainComponents/MainEmptyFeed';
import { NavigationBar } from '../components/SharedComponents/CommonComponents';
import { BodyContainer } from '../components/SharedComponents/CommonComponents';
import MainFeed from '../components/MainComponents/MainFeed';

const PostListPage = () => {
	return (
		<>
			<NavigationBar title={'핸드펫 피드'} />
			<MainFeed />
			<MainEmptyFeed />
		</>
	);
};

export default PostListPage;
