import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import { DefaultLayout } from './layouts/DefaultLayout';

export default function Router() {
	return (
		<Routes>
			<Route path="/" Component={DefaultLayout}>
				<Route path="/" Component={Home}></Route>
			</Route>
		</Routes>
	);
}
