import UserCard from '../../components/UserCard';
import { Container, CardContainer } from './styles';

export default function Home() {
	const testeImg =
		'https://img.freepik.com/fotos-gratis/estilo-de-vida-beleza-e-moda-conceito-de-emocoes-de-pessoas-jovem-gerente-de-escritorio-feminino-asiatico-ceo-com-expressao-satisfeita-em-pe-sobre-um-fundo-branco-sorrindo-com-os-bracos-cruzados-sobre-o-peito_1258-59329.jpg';
	const users = [
		{ name: 'Lucas', id: 1, image: testeImg },
		{ name: 'Lucas', id: 2, image: testeImg },
		{ name: 'Lucas', id: 3, image: testeImg },
		{ name: 'Lucas', id: 4, image: testeImg },
		{ name: 'Lucas', id: 5, image: testeImg },
		{ name: 'Lucas', id: 6, image: testeImg },
		{ name: 'Lucas', id: 7, image: testeImg },
		{ name: 'Lucas', id: 8, image: testeImg },
		{ name: 'Lucas', id: 9, image: testeImg },
		{ name: 'Lucas', id: 10, image: testeImg },
	];

	return (
		<Container>
			<CardContainer>
				{users.map((user) => {
					return <UserCard key={user.id} user={user} />;
				})}
			</CardContainer>
		</Container>
	);
}
