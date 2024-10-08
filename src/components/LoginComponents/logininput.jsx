import styled from 'styled-components';

// 입력 필드 제목 컴포넌트
export const InputTitle = styled.div`
	font-size: 12px;
	font-weight: 600;
	color: #262626;
	background-color: red;
`;

// 입력 필드 감싸는 컴포넌트
export const InputWrap = styled.div`
width: 322px;
	display: flex;
	border-radius: 44px;
	padding: 16px;
	margin-top: 8px;
	background-color: yellow;
	border: 1px solid #e2e0c0;

	&:focus-within {
		border: 1px solid #9e30f4;
	}
`;

// 실제 입력 필드 컴포넌트
export const Input = styled.input`
	width: 322px;
	outline: none;
	border: none;
	height: 48px;
	font-size: 14px;
	font-weight: 400;

	&::placeholder {
		color: #dadada;
	}
`;

// 에러 메시지 컴포넌트
export const ErrorMessageWrap = styled.div`
	margin-top: 8px;
	color: #ef0000;
	font-size: 12px;
`;
