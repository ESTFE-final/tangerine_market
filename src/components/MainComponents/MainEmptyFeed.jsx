import React from 'react';
import styled from 'styled-components';
import FeedLogo from '../../icons/icon-feed-logo.svg';
import Button from '../SharedComponents/Button';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

const Logo = styled.img`
	width: 150px;
	margin-bottom: 20px;
`;

const Text = styled.p`
	font-size: 1.5rem;
	color: #666;
	margin-bottom: 20px;
`;

const MainEmptyFeed = () => {
	return (
		<Container>
			<Logo src={FeedLogo} alt="Feed Logo" />
			<Text>유저를 검색해 팔로우 해보세요!</Text>
			<Button size={'md'}>검색하기</Button>
		</Container>
	);
};

export default MainEmptyFeed;
