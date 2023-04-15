import * as ReactDOM from 'react-dom';
import {
	Container,
	ContainerModal,
	ContainerAvatar,
	ContainerBackGround,
	Title,
	PersonalInformation,
	DoubleFields,
	AddressInformation,
	ContainerClose,
} from './styles';
import Avatar from '../Avatar';
import { IContact } from '../../services/ContactsService';
import DateHandler from '../../utils/DateHandler';

interface IModalContactProp {
	contact: IContact | null;
	onModalContent: (contact: IContact | null) => void;
}

export default function ModalContact({
	contact,
	onModalContent,
}: IModalContactProp) {
	if (!contact) return null;

	function handlerModalContent() {
		onModalContent(null);
	}

	return ReactDOM.createPortal(
		<Container>
			<ContainerClose onClick={handlerModalContent} />
			<ContainerModal>
				<ContainerBackGround>
					<h1 onClick={handlerModalContent}>X</h1>
				</ContainerBackGround>

				<ContainerAvatar>
					<Avatar size={7} image={contact.picture.large}></Avatar>
				</ContainerAvatar>

				<Title>
					<h1>
						{contact.name.first} {contact.name.last}
					</h1>
				</Title>

				<p>{contact.dob.age} Anos</p>

				<PersonalInformation>
					<p>
						<strong>Username</strong>: {contact.login.username}
					</p>

					<p>
						<strong>E-mail</strong>: {contact.email}
					</p>

					<DoubleFields>
						<p>
							<strong>Telefone</strong>: {contact.phone}
						</p>

						<p>
							<strong>Sexo</strong>:{' '}
							{contact.gender === 'male' ? 'Masculino' : 'Feminino'}
						</p>
					</DoubleFields>

					<DoubleFields>
						<p>
							<strong>Nascimento</strong>:
							{DateHandler.clientFormat(contact.dob.date)}
						</p>

						<p>
							<strong>Idade</strong>: {contact.dob.age} Anos
						</p>
					</DoubleFields>
				</PersonalInformation>

				<AddressInformation>
					<h2>Endereço</h2>

					<DoubleFields>
						<p>
							<strong>Rua</strong>: {contact.location.street.name}
						</p>
						<p>
							<strong>Numero</strong>: {contact.location.street.number}
						</p>
					</DoubleFields>

					<DoubleFields>
						<p>
							<strong>Cidade</strong>: {contact.location.city}
						</p>
						<p>
							<strong>Estado</strong>: {contact.location.state}
						</p>
					</DoubleFields>

					<p>
						<strong>CEP</strong>: {contact.location.postcode}
					</p>
				</AddressInformation>
			</ContainerModal>
		</Container>,
		document.getElementById('modal-root') as HTMLElement
	);
}
