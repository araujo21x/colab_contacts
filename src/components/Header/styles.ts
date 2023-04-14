import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 6%;
	background-color: ${({ theme }) => theme.colors.back};
	align-items: center;
	box-shadow: 3px 3px 3px 3px rgba(207, 207, 207, 0.2);
`;

export const LogoContainer = styled.div`
	width: 18%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.primary.dark};
	box-shadow: 2px 0 2px -2px rgba(207, 207, 207, 0.2);

	strong {
		color: #fff;
		font-size: 2.3rem;
	}
`;
