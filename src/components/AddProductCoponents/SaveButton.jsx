import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
	display: flex;
	position: static;
	align-items: center;
	justify-content: center;
	color: #ffffff;
	background-color: #ff010a;
	width: 122px;
	height: 54px;
	top: 64px;
	gap: 0px;
	border-radius: 20px 20px;
	border: 1px 0px 0px 0px;
	opacity: 0px;
	transform: translate(245px, -122px);
`;

const InputContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
`;

const SaveButton = () => {
	return (
		<div>
			<StyledButton>
				<button>
					<div style={{ fontSize: '22px' }}>저장하기</div>
				</button>
			</StyledButton>
		</div>
	);
};

export default SaveButton;
