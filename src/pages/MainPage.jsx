import React from 'react';
import styled from 'styled-components';
import { NavigationBar } from '../components/SharedComponents/CommonComponents';
import MainBanner from '../components/MainComponents/MainBanner';
import MainCategory from '../components/MainComponents/MainCategory';
import MainProductList from '../components/MainComponents/MainProductList';
import { Link } from 'react-router-dom';
import { BodyContainer } from '../components/SharedComponents/CommonComponents';

const MainPage = () => (
	<>
		<NavigationBar title={'핸드펫 홈'} />
		<MainBanner />
		<MainCategory />
		<MainProductList />
	</>
);

export default MainPage;
