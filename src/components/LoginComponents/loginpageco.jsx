import styled from 'styled-components';

// 페이지 전체 레이아웃 컴포넌트
export const Page = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	width: 100%;
	max-width: 500px;
	padding: 0 20px;
	left: 50%;
	transform: translate(-50%, 0);
	/* background-color: skyblue; */
	overflow: hidden;
	display: flex;
	flex-direction: column;
`;
