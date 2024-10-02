import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const LoginEmailPage = () => (
	<div>
		<h1> 이메일 로그인 페이지입니다</h1>
		<Link to="/signup">회원가입 페이지 이동</Link>
	</div>
);

export default LoginEmailPage;
