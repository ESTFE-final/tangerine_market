import React from 'react';
import styled from 'styled-components';

import { NavigationBar } from '../components/SharedComponents/CommonComponents';
import MainBanner from '../components/MainComponents/MainBanner';
import MainCategory from '../components/MainComponents/MainCategory';
import MainProductList from '../components/MainComponents/MainProductList';

import { Link } from 'react-router-dom';
import { BodyContainer } from '../components/SharedComponents/CommonComponents';
import TapNavi from '../components/TabMenuComponents/TapNavi';

const Tap__Navi = styled.div`
	display: flex;
	position: fixed;
	justify-content: space-evenly;
	align-items: center;
	width: 100%;
	bottom: 0;
	max-height: 96px;
	height: 96px;
	max-width: 775px;
	background-color: #ffffff;
`;

const TapNaviButton = styled.button`
	display: inline-flex;
	flex-direction: column;
	justify-content: center;
	justify-items: center;
	align-items: center;
	align-content: space-evenly;
	padding: 0;
	margin: 0;
	width: 107px;
	max-height: 96px;
	background: none;
	border: none;
	font-family: 'Gmarket Sans TTF';
	font-size: 20px;
	color: #767676;
	font-weight: 900;
	line-height: 28px;
	max-width: 126px;
	word-break: keep-all;
`;

const TapNaviImg = styled.img`
	min-width: 48px;
	width: 48px;
	max-height: 48px;
	margin: auto;
	padding: auto;
	justify-content: center;
	align-items: center;
`;

const MainPage = () => (
	<>
		<NavigationBar title={'핸드펫 홈'} />
		<MainBanner />
		<MainCategory />
		<MainProductList />
		<TapNavi />
	</>
);

export default MainPage;
