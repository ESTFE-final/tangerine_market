import React from 'react';
import styled from 'styled-components';
import InputPic from './InputPic';
import FloatinButton from './FloatinButton';
import Input from './GoodsName';
import InputGoods from './InputGoods';
import InputSell from './InputSell';

const InputDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	width: 100%;
	height: 100vh;
	box-sizing: border-box;
	padding: 0 20px;
	margin: 0 auto;
`;

const InputField = () => {
	return (
		<>
			<InputDiv>
				<InputPic />
				<FloatinButton />
				<Input />
				<InputGoods />
				<InputSell />
			</InputDiv>
		</>
	);
};

export default InputField;
