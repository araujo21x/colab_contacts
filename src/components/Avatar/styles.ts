import styled from 'styled-components';

interface IAvatarProps {
	size: number;
}

export const Image = styled.img<IAvatarProps>`
	width: ${({ size }) => size}rem;
	height: ${({ size }) => size}rem;
	border-radius: 50%;
`;
