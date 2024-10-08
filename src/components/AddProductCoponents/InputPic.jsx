import React from 'react';
import styled from 'styled-components';

const InputField = styled.input`
	display: flex;
	position: relative;
	direction: column;

	border: 1px solid #e5e5e5;
	padding: 8px 16px;
	border-radius: 30px;
	border: none;

	font-size: 1.5rem;
	background-color: #22222222;
	margin-bottom: 100px;
	padding: 200px;
	justify-content: center;
	align-items: center;
	align-content: center;
	justify-items: center;
`;

const InputPic = () => {
	return (
		<div>
			<InputField type="text" placeholder="검색어를 입력하세요" />
		</div>
	);
};

export default InputPic;
