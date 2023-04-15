import { useCallback, useEffect, useState } from 'react';
import ContactCard from '../../components/ContactCard';
import { Container, CardContainer } from './styles';
import contactsService, { IContact } from '../../services/ContactsService';
import Loader from '../../components/Loader';
import ModalContact from '../../components/ModalContact';

export default function Home() {
	const [contacts, setContacts] = useState<IContact[]>([]);
	const [limit] = useState<number>(21);
	const [page] = useState<number>(1);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [modalContent, setModalContent] = useState<IContact | null>(null);

	const loadContacts = useCallback(async () => {
		try {
			setIsLoading(true);
			const contactsList: IContact[] = await contactsService.listContacts(
				page,
				limit
			);

			setContacts(contactsList);
		} catch (err) {
			alert(err);
		} finally {
			setTimeout(() => {
				setIsLoading(false);
			}, 1000);
		}
	}, [limit, page]);

	useEffect(() => {
		loadContacts();
	}, [loadContacts]);

	function handlerModalContent(contact: IContact | null) {
		setModalContent(contact);
	}

	return (
		<Container>
			<Loader isLoading={isLoading} />
			<ModalContact
				contact={modalContent}
				onModalContent={handlerModalContent}
			/>

			<CardContainer>
				{contacts.map((contact: IContact) => {
					return (
						<ContactCard
							key={contact.login.uuid}
							contact={contact}
							onModalContent={handlerModalContent}
						/>
					);
				})}
			</CardContainer>
		</Container>
	);
}
