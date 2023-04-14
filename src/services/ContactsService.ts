/* eslint-disable @typescript-eslint/no-unsafe-assignment */
export interface IContact {
	gender: 'male' | 'female';
	name: {
		title: string;
		first: string;
		last: string;
	};
	location: {
		street: {
			number: string;
			name: string;
		};
		city: string;
		state: string;
		country: string;
		postcode: number;
		coordinates: {
			latitude: string;
			longitude: string;
		};
		timezone: {
			offset: string;
			description: string;
		};
	};
	email: string;
	login: {
		uuid: string;
		username: string;
		password: string;
		salt: string;
		md5: string;
		sha1: string;
		sha256: string;
	};
	dob: {
		date: string;
		age: number;
	};
	registered: {
		date: string;
		age: number;
	};
	phone: string;
	cell: string;
	id: {
		name: string;
		value: string;
	};
	picture: {
		large: string;
		medium: string;
		thumbnail: string;
	};
	nat: string;
}

interface IContactsResponse {
	results: IContact[];
	info: {
		seed?: string;
		results: number;
		page: number;
		version: string;
	};
}

class ContactsService {
	async listContacts(page = 1, limit = 10): Promise<IContact[]> {
		const URL = `https://randomuser.me/api?seed=abc&nat=BR&page=${page}&results=${limit}`;
		const response = await fetch(URL);

		if (!response.ok) alert('erro');
		const data: IContactsResponse = await response.json();

		return data.results;
	}
}

export default new ContactsService();
