import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import ShowContact from './page/ShowContact';
import { DefaultLayout } from './layouts/DefaultLayout';

export default function Router() {
	return (
		<Routes>
			<Route path="/" Component={DefaultLayout}>
				<Route path="/" Component={Home}></Route>
				<Route path="/:id" Component={ShowContact}></Route>
			</Route>
		</Routes>
	);
}
