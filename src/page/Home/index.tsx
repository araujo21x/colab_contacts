import UserCard from '../../components/UserCard';
import { Container, Teste } from './styles';

export default function Home() {
	const users = [
		{ name: 'Lucas', id: 1 },
		{ name: 'Lucas', id: 2 },
		{ name: 'Lucas', id: 3 },
		{ name: 'Lucas', id: 4 },
		{ name: 'Lucas', id: 5 },
		{ name: 'Lucas', id: 6 },
		{ name: 'Lucas', id: 7 },
		{ name: 'Lucas', id: 8 },
		{ name: 'Lucas', id: 9 },
		{ name: 'Lucas', id: 10 },
		{ name: 'Lucas', id: 11 },
		{ name: 'Lucas', id: 12 },
		{ name: 'Lucas', id: 13 },
	];

	return (
		<Teste>
			<Container>
				{users.map((user) => {
					return <UserCard key={user.id} />;
				})}
			</Container>
		</Teste>
	);
}
