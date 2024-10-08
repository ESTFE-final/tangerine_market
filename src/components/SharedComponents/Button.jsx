import styled, { css } from 'styled-components';

const SIZES = {
	xs: css`
		--button-font-size: 2.2rem;
		--button-max-width: 140px;
		--button-padding: 1.4rem 3rem 1.6rem;
		--button-radius: 3.2rem;
	`,
	sm: css`
		--button-max-width: 180px;
		--button-padding: 1.8rem 6.2rem 1.4rem;
		--button-radius: 6.4rem;
	`,
	md: css`
		--button-max-width: 240px;
		--button-padding: 2rem 8rem 1.6rem;
		--button-radius: 6rem;
	`,
	lg: css`
		--button-max-width: 644px;
		--button-padding: 2.6rem 28rem 3rem;
		--button-radius: 8.8rem;
	`,
};

const StyledButton = styled.button`
	${(p) => p.sizeStyle}

	display: inline-flex;
	align-items: center;
	justify-content: center;
	border-color: var(--button-border-color, transparent);
	border-width: 2px;
	border-style: solid;
	border-radius: var(--button-radius);
	font-size: var(--button-font-size, 2.8rem);
	background: var(--button-bg-color, #ff3239);
	color: var(--button-color, #fff);
	width: 100%;
	max-width: var(--button-max-width);
	padding: var(--button-padding);

	&:active {
		background: var(--button-bg-color, #fff);
		border-color: var(--button-border-color, #dbdbdb);
		color: var(--button-color, #b4b4b4);
	}

	&:disabled {
		cursor: default;
		background: var(--button-bg-color, #d1d1d1);
	}
`;

function Button({ disabled, size, children }) {
	const sizeStyle = SIZES[size];

	return (
		<StyledButton disabled={disabled} sizeStyle={sizeStyle}>
			{children}
		</StyledButton>
	);
}

export default Button;
