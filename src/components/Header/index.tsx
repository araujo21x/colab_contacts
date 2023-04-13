import { Container, LogoContainer, NavContainer, Link } from './styles';
export function Header() {
	return (
		<Container>
			<LogoContainer>
				<strong>colab</strong>
			</LogoContainer>

			<NavContainer>
				<Link to="/" title="Home">
					<strong>Home</strong>
				</Link>
			</NavContainer>
		</Container>
	);
}
