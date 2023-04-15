import styled, { css } from 'styled-components';

interface IPaginationProps {
	isCurrent?: boolean;
}

export const Container = styled.div`
	height: 2.2rem;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 3rem;

	label {
		height: 100%;
		width: 3rem;
	}
`;

export const SelectLimit = styled.select`
	text-align: center;
	height: 100%;
	width: 100%;
	border: none;
	background-color: red;
	border-radius: 10px;
	color: ${({ theme }) => theme.colors.gray.main};

	font-weight: bold;
	font-size: 1.1rem;
	background-color: ${({ theme }) => theme.colors.back};
`;

export const PageNumbers = styled.ul`
	height: 100%;
	display: flex;
	justify-content: center;
	list-style: none;
`;

export const LiItem = styled.li<IPaginationProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 2.5rem;
	font-weight: bold;
	font-size: 1.1rem;
	cursor: pointer;
	background-color: ${({ theme }) => theme.colors.back};

	&:hover {
		color: ${({ theme }) => theme.colors.back};
		background-color: ${({ theme }) => theme.colors.primary.light};
	}

	${({ theme, isCurrent }) =>
		isCurrent &&
		css`
			color: ${theme.colors.back};
			background-color: ${theme.colors.background};
		`}

	&+& {
		margin-left: 1px;
	}

	button {
		height: 100%;
		width: 100%;
		border: none;
		font-size: 1.1rem;
		font-weight: bold;
		background-color: transparent;

		cursor: pointer;
		color: ${({ theme }) => theme.colors.gray.main};

		&:hover {
			color: ${({ theme }) => theme.colors.back};
			background-color: ${({ theme }) => theme.colors.primary.light};
		}
	}

	&:first-child {
		border-radius: 10px 0 0 10px;
		width: 4rem;

		button {
			border-radius: 10px 0 0 10px;
		}
	}

	&:last-child {
		border-radius: 0 10px 10px 0;
		width: 4rem;

		button {
			border-radius: 0 10px 10px 0;
		}
	}
`;
