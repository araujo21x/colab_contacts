import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const ContainerClose = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
`;

export const ContainerModal = styled.div`
	position: relative;
	z-index: 1;
	width: 35rem;
	height: 40rem;
	border-radius: 10px;
	background-color: white;
	border: 1px solid rgba(207, 207, 207, 0.2);
	display: flex;
	flex-direction: column;
	align-items: center;
	overflow: auto;

	box-shadow: 5px 5px 5px 5px rgba(207, 207, 207, 0.2);
`;

export const ContainerBackGround = styled.div`
	width: 100%;
	height: 6.5rem;
	background-color: ${({ theme }) => theme.colors.primary.dark};
	border-radius: 10px;
	box-shadow: 3px 3px 3px 3px rgba(207, 207, 207, 0.2);

	h1 {
		color: ${({ theme }) => theme.colors.back};
		font-size: 1.2em;

		margin: 0.3rem 0.6rem;
	}
`;

export const ContainerAvatar = styled.div`
	margin-top: calc(0px - 3.25rem - 6px);
`;

export const Title = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 0.7rem;
	margin-bottom: 0.2rem;

	p {
		margin-left: 1rem;
	}
`;

export const PersonalInformation = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 0 1.3rem;
	margin-top: 0.7rem;
	gap: 0.32rem;
`;

export const DoubleFields = styled.div`
	display: flex;
	gap: 3.8rem;
	p {
		width: 50%;
	}
`;

export const AddressInformation = styled.div`
	margin-top: 1.5rem;
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 0 1.3rem;
	gap: 0.32rem;

	h2 {
		margin-bottom: 0.4rem;
	}
`;
