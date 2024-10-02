import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const PostUploadPage = () => (
	<div>
		<h1>게시글 작성 페이지입니다</h1>
		<Link to="/profile">업로드 완료 후 메인 페이지로 이동</Link>
	</div>
);

export default PostUploadPage;
