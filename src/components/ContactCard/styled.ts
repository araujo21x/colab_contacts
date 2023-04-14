import styled from 'styled-components';

export const Container = styled.div`
	background-color: white;
	padding: 1rem;
	width: 24.2%;
	height: auto;
	margin-bottom: 1%;
	border-radius: 10px;
	box-shadow: 3px 3px 3px 3px rgba(207, 207, 207, 0.2);
	display: flex;
	flex-direction: column;
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
