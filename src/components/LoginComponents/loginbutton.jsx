import styled from 'styled-components';

// 하단 버튼 컴포넌트
export const BottomButton = styled.button`
	width: 322px;
	height: 48px;
	border: none;
	font-weight: 700;
	background-color: #9e30f4;
	border-radius: 44px;
	color: white;
	cursor: pointer;

	&:disabled {
		background-color: #dadada;
		color: white;
	}
`;
