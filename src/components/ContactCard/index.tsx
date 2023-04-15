import { IContact } from '../../services/ContactsService';
import DateHandler from '../../utils/DateHandler';
import Avatar from '../Avatar';
import {
	Container,
	MainContainer,
	TextContainer,
	FooterContainer,
	ContainerHover,
	ContainerDefault,
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
		<Container>
			<ContainerHover>
				<button onClick={handlerModalContent}>Visualizar</button>
			</ContainerHover>

			<ContainerDefault>
				<MainContainer>
					<Avatar size={5.5} image={contact.picture.medium} />
					<TextContainer>
						<strong>
							{contact.name.title} {contact.name.first} {contact.name.last}
						</strong>
						<label>
							Sexo:
							<p>{contact.gender === 'male' ? 'Masculino' : 'Feminino'} - </p>
							<p>{contact.dob.age} Anos</p>
						</label>
					</TextContainer>
				</MainContainer>
				<FooterContainer>
					{DateHandler.convertToCard(contact.registered.date)}
				</FooterContainer>
			</ContainerDefault>
		</Container>
	);
}
