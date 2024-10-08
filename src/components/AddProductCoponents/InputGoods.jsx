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
	width: 644px;
	height: 72px;
`;

const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

const Label = styled.label`
	font-size: 30px;
	margin-bottom: 8px;
`;

const InputGoods = () => {
	return (
		<InputContainer>
			<Label>가격</Label>
			<InputField
				type="text"
				placeholder="검색어를 입력하세요2"
				style={{ fontSize: '30px' }}
			/>
		</InputContainer>
	);
};

export default InputGoods;
