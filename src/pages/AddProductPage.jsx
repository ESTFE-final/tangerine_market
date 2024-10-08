import styled from 'styled-components';

import { NavigationBar } from '../components/SharedComponents/CommonComponents';
import InputField from '../components/AddProductCoponents/InputTotal';

const StyledDiv = styled.div`
	display: flex;
	flex-direction: column;
	viewport-fit: 70%;
	height: 100%;
	justify-content: space-around;
	align-items: center;
	align-content: center;
	justify-items: center;
	background-color: #f5f5f5;
`;

const AddProduct = () => (
	<div>
		<StyledDiv>
			<NavigationBar title={'상품 등록'} />
			<InputField />
		</StyledDiv>
	</div>
);

export default AddProduct;
