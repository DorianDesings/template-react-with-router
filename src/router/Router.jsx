import { Route, Routes } from 'react-router-dom';
import Layout from '../layouts/Layout';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<h1>HOME</h1>} />
				<Route path='about' element={<h1>ABOUT</h1>} />
				<Route path='contact' element={<h1>CONTACT</h1>} />
			</Route>
		</Routes>
	);
};

export default Router;
