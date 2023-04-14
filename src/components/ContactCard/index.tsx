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
}

export default function ContactCard({ contact }: IUserCardProps) {
	return (
		<Container>
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
