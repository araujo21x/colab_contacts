import Avatar from '../Avatar';
import {
	Container,
	MainContainer,
	TextContainer,
	FooterContainer,
} from './styled';
interface IUserCardProps {
	user: {
		id: number;
		name: string;
		image: string;
	};
}

export default function UserCard({ user }: IUserCardProps) {
	return (
		<Container>
			<MainContainer>
				<Avatar size={5} image={user.image} />
				<TextContainer>
					<strong>{user.name}</strong>
					<p>contacts</p>
				</TextContainer>
			</MainContainer>
			<FooterContainer>Jan 15, 2019</FooterContainer>
		</Container>
	);
}
