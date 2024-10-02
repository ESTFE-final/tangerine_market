import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const SignUpPage = () => (
	<div>
		<h1>회원가입 페이지입니다</h1>
		<Link to="/">회원가입 완료 후 메인으로 이동</Link>
	</div>
);

export default SignUpPage;
