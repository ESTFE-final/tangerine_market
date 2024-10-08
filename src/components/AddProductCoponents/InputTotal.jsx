import styled from 'styled-components';

import InputPic from './InputPic';
import FloatinButton from './FloatinButton';
import Input from './GoodsName';
import InputGoods from './InputGoods';
import InputSell from './InputSell';

const InputField = () => {
	return (
		<>
			<div>
				<InputPic />
				<FloatinButton />
				<Input />
				<InputGoods />
				<InputSell />
			</div>
		</>
	);
};

export default InputField;
