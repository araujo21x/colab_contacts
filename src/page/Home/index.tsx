import { useCallback, useEffect, useState } from 'react';
import ContactCard from '../../components/ContactCard';
import { Container, CardContainer } from './styles';
import contactsService, { IContact } from '../../services/ContactsService';
import Loader from '../../components/Loader';
import ModalContact from '../../components/ModalContact';
import Pagination from '../../components/Pagination';

export default function Home() {
	const [contacts, setContacts] = useState<IContact[]>([]);
	const [limitPerPage, setLimitPerPage] = useState<number>(20);
	const [currentPage, serCurrentPage] = useState<number>(1);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [modalContent, setModalContent] = useState<IContact | null>(null);
	const totalNumberOfItems = 200;

	const loadContacts = useCallback(async () => {
		try {
			setIsLoading(true);
			const contactsList: IContact[] = await contactsService.listContacts(
				currentPage,
				limitPerPage
			);

			setContacts(contactsList);
		} catch (err) {
			alert(err);
		} finally {
			setTimeout(() => {
				setIsLoading(false);
			}, 1000);
		}
	}, [limitPerPage, currentPage]);

	useEffect(() => {
		loadContacts();
	}, [loadContacts]);

	function handlerModalContent(contact: IContact | null) {
		setModalContent(contact);
	}

	function handlerCurrentPage(page: number) {
		serCurrentPage(page);
	}

	function handlerLimitPerPage(page: number) {
		setLimitPerPage(page);
	}

	return (
		<>
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
			<Pagination
				totalNumberOfItems={totalNumberOfItems}
				limitPerPage={limitPerPage}
				currentPage={currentPage}
				onCurrentPage={handlerCurrentPage}
				onLimitPerPage={handlerLimitPerPage}
			/>
		</>
	);
}
