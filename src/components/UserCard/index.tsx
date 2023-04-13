import Avatar from '../Avatar';
import { Container } from './styled';

export default function UserCard() {
	const testeImg =
		'https://img.freepik.com/fotos-gratis/estilo-de-vida-beleza-e-moda-conceito-de-emocoes-de-pessoas-jovem-gerente-de-escritorio-feminino-asiatico-ceo-com-expressao-satisfeita-em-pe-sobre-um-fundo-branco-sorrindo-com-os-bracos-cruzados-sobre-o-peito_1258-59329.jpg';

	return (
		<Container>
			<Avatar size={5.5} image={testeImg} />
		</Container>
	);
}
