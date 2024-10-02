import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const LoginPage = () => (
	<div>
		<h1> 로그인 페이지입니다</h1>
		<Link to="/signup">이메일 로그인 페이지 이동</Link>
	</div>
);

export default LoginPage;
