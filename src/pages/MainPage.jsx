import React from 'react';
import styled from 'styled-components';
import { NavigationBar } from '../components/SharedComponents/CommonComponents';
import MainBanner from '../components/MainComponents/MainBanner';
import MainCategory from '../components/MainComponents/MainCategory';
import MainProductList from '../components/MainComponents/MainProductList';

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
const MainPage = () => (
	<>
		<BodyContainer>
			<ListContainer>
				<NavigationBar title={'핸드펫 홈'} />
				<MainBanner />
				<MainCategory />
				<MainProductList />
			</ListContainer>
		</BodyContainer>
	</>
);

export default MainPage;
