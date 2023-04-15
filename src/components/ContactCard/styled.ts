import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	background-color: white;
	width: 23.7vw;
	height: 14vh;
	margin-bottom: 1%;
	border-radius: 10px;
	box-shadow: 3px 3px 3px 3px rgba(207, 207, 207, 0.2);
	position: relative;
`;

export const MainContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
`;

export const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 1.5rem;

	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;

	strong {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	p {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		color: ${({ theme }) => theme.colors.primary.dark};
	}
`;

export const FooterContainer = styled.div`
	height: 20%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	font-size: 0.9rem;
`;

export const ContainerHover = styled.div`
	z-index: 1;
	background-color: rgba(124, 162, 214, 0.9);
	width: 100%;
	height: 100%;
	border-radius: 10px;
	display: flex;
	align-items: center;
	justify-content: center;

	button {
		padding: 0.7rem 2.6rem;
		border: 1.4px solid white;
		border-radius: 10px;
		background-color: transparent;

		font-size: 1.2rem;
		font-weight: bold;
		color: ${({ theme }) => theme.colors.back};

		&:hover {
			color: rgba(124, 162, 214, 0.9);
			transition: 0.2s linear;
			background-color: ${({ theme }) => theme.colors.back};
		}
	}
`;

export const ContainerDefault = styled.div`
	position: absolute;
	padding: 1rem;
`;
