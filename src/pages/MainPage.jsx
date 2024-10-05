import React from 'react';
import styled from 'styled-components';
import {
	Input,
	NavigationBar,
} from '../components/SharedComponents/CommonComponents';
import MainBanner from '../components/MainComponents/MainBanner';
import MainCategory from '../components/MainComponents/MainCategory';

const BodyContainer = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
`;
const ListContainer = styled.div`
	width: 780px;
	height: 100vh;
	margin: auto;
	border: 1px solid black;
	justify-content: center;
	align-items: center;
`;
const MainPage = () => (
	<>
		<BodyContainer>
			<ListContainer>
				<NavigationBar title={'핸드펫 홈'} />
				<MainBanner />
				<MainCategory />
			</ListContainer>
		</BodyContainer>
	</>
);

export default MainPage;
