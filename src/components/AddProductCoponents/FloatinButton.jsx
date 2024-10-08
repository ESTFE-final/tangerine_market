import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
	display: flex;
	position: static;
	align-items: center;
	justify-content: center;

	border: 1px solid #e5e5e5;
	font-size: 2rem;
	font-weight: 800;
	border-radius: 20px;
	width: 70px;
	background-color: #22222222;
	padding: 10px;
	z-index: 200;

	transform: translate(420px, -200px);
`;

const FloatinButton = () => {
	return (
		<div>
			<StyledButton>pic</StyledButton>
		</div>
	);
};

export default FloatinButton;
