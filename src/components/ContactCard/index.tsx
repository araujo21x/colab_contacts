import { IContact } from '../../services/ContactsService';
import DateHandler from '../../utils/DateHandler';
import Avatar from '../Avatar';
import {
	Container,
	MainContainer,
	TextContainer,
	FooterContainer,
} from './styled';

interface IUserCardProps {
	contact: IContact;
	onModalContent: (contact: IContact | null) => void;
}

export default function ContactCard({
	contact,
	onModalContent,
}: IUserCardProps) {
	function handlerModalContent() {
		onModalContent(contact);
	}

	return (
		<Container onClick={handlerModalContent}>
			<MainContainer>
				<Avatar size={5.5} image={contact.picture.medium} />
				<TextContainer>
					<strong>
						{contact.name.title} {contact.name.first} {contact.name.last}
					</strong>

					<p>Sexo: {contact.gender === 'male' ? 'Masculino' : 'Feminino'}</p>
				</TextContainer>
			</MainContainer>
			<FooterContainer>
				{DateHandler.convertToCard(contact.registered.date)}
			</FooterContainer>
		</Container>
	);
}
