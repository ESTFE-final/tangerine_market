import React from 'react';
import styled from 'styled-components';

const InputField = styled.input`
	display: flex;
	direction: column;

	padding: 8px 16px;
	border-radius: 30px;
	border: none;

	viewport-fit: 70%;
	font-size: rem;
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
