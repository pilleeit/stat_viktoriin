import { Outlet, NavLink } from "react-router";

const Layout = () => {
	return (
		<>
			<div className='container'>
				<header className='header'>
					<h1 className='title'>Viktoriin proovitöö</h1>
				</header>

				<main>
					<Outlet />
				</main>
			</div>
		</>
	);
};

export default Layout;
