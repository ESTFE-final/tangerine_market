import React from 'react';
import styled from 'styled-components';

const InputField = styled.input`
	border: 1px solid #e5e5e5;
	padding: 8px 16px;
	border-radius: 30px;
	border: none;
	font-size: 1.5rem;
	background-color: #22222222;
	margin-bottom: 50px;
	width: 70%;
	height: 50px;
`;

const InputContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const InputGoods = () => {
	return (
		<InputContainer>
			<InputField type="text" placeholder="검색어를 입력하세요" />
		</InputContainer>
	);
};

export default InputGoods;
