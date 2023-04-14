import { useCallback, useEffect, useState } from 'react';
import ContactCard from '../../components/ContactCard';
import { Container, CardContainer } from './styles';
import contactsService, { IContact } from '../../services/ContactsService';
import Loader from '../../components/Loader';

export default function Home() {
	const [contacts, setContacts] = useState<IContact[]>([]);
	const [limit] = useState<number>(21);
	const [page] = useState<number>(1);
	const [isLoading, setIsLoading] = useState(true);

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
			setIsLoading(false);
		}
	}, [limit, page]);

	useEffect(() => {
		loadContacts();
	}, [loadContacts]);

	return (
		<Container>
			<Loader isLoading={isLoading} />
			<CardContainer>
				{contacts.map((contact: IContact) => {
					return <ContactCard key={contact.login.uuid} contact={contact} />;
				})}
			</CardContainer>
		</Container>
	);
}
