import styled from 'styled-components';

export const Container = styled.div`
	margin-top: 1rem;
	width: 98vw;
	height: 79vh;
`;

export const CardContainer = styled.div`
	max-height: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: start;
	gap: 1%;
	overflow: auto;

	::-webkit-scrollbar {
		width: 1px;
	}
`;
