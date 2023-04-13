import styled from 'styled-components';

export const Teste = styled.div`
	margin-top: 1rem;
	width: 97%;
	height: 85%;
`;

export const Container = styled.div`
	max-height: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 1rem;
	overflow: auto;

	::-webkit-scrollbar {
		width: 1px;
	}
`;