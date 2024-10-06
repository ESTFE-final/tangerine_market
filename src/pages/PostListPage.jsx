import React from 'react';
import MainEmptyFeed from '../components/MainComponents/MainEmptyFeed';
import styled from 'styled-components';
import { NavigationBar } from '../components/SharedComponents/CommonComponents';

const BodyContainer = styled.div`
	width: 100vw;
	height: 100vh;
`;
const ListContainer = styled.div`
	width: 780px;
	margin: auto;
	border: 1px solid black;
	justify-content: center;
	align-items: center;
`;
const PostListPage = () => {
	return (
		<>
			<BodyContainer>
				<ListContainer>
					<NavigationBar title={'핸드펫 피드'} />
					<MainEmptyFeed />
				</ListContainer>
			</BodyContainer>
		</>
	);
};

export default PostListPage;
