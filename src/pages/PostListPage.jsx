import React from 'react';
import MainEmptyFeed from '../components/MainComponents/MainEmptyFeed';
import { NavigationBar } from '../components/SharedComponents/CommonComponents';
import {
	WholeContainer,
	BodyContainer,
} from '../components/SharedComponents/CommonComponents';
import MainFeed from '../components/MainComponents/MainFeed';

const PostListPage = () => {
	return (
		<>
			<WholeContainer>
				<BodyContainer>
					<NavigationBar title={'핸드펫 피드'} />
					<MainFeed />
					<MainEmptyFeed />
				</BodyContainer>
			</WholeContainer>
		</>
	);
};

export default PostListPage;
