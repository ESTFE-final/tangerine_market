import React from 'react';
import styled from 'styled-components';
import img from '../../icons/upload-file.svg';

const StyledButton = styled.button`
	display: flex;
	position: static;
	align-items: center;
	justify-content: center;

	width: 322px;
	height: 204px;
	top: 32px;
	gap: 0px;
	border-radius: 10px 0px 0px 0px;
	border: 0.5px 0px 0px 0px;
	opacity: 0px;

	z-index: 200;

	transform: translate(415px, -155px);
`;

const FloatinButton = () => {
	return (
		<div>
			<StyledButton>
				<img src={img} width={75} alt="upload" />
			</StyledButton>
		</div>
	);
};

export default FloatinButton;
