import styled from 'styled-components';

import { NavigationBar } from '../components/SharedComponents/CommonComponents';
import InputField from '../components/AddProductCoponents/InputTotal';
import SaveButton from '../components/AddProductCoponents/SaveButton';

const StyledDiv = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	align-content: center;
	justify-items: center;
`;

const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	padding: 0 20px;
	width: 644px;
	height: 72px;
`;

const AddProduct = () => (
	<div>
		<StyledDiv>
			<NavigationBar title={'상품 등록'} />
			<SaveButton />
			<InputField />
		</StyledDiv>
	</div>
);

export default AddProduct;
