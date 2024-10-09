import React from 'react';
import styled from 'styled-components';

const InputField = styled.input`
	display: flex;
	position: relative;

	width: 644px;
	height: 408px;
	top: 64px;
	gap: 0px;
	border-radius: 30px;
	border: 1px 0px 0px 0px;
	opacity: 0px;

	border: 1px solid #e5e5e5;
	padding: 8px 16px;
	border: none;

	font-size: 1.5rem;
	background-color: #22222222;
	margin-bottom: 50px;
	padding: 200px;
	justify-content: center;
	align-items: center;
	align-content: center;
	justify-items: center;
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

const InputPic = () => {
	return (
		<div>
			<Label>이미지 등록</Label>
			<InputField type="text" placeholder="" style={{ fontSize: '30px' }} />
		</div>
	);
};

export default InputPic;
