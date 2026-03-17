import { Outlet, NavLink } from "react-router";

// stiili funktsioon aktiivsete linkide paksemaks muutmiseks
const linkStyle = ({ isActive }) => ({
	fontWeight: isActive ? "bold" : "normal",
	marginRight: "1rem",
});

const Layout = () => {
	return (
		<>
			<h1>Viktoriin proovitöö</h1>

			<nav
				style={{
					borderBottom: "solid 1px #ccc",
					paddingBottom: "1rem",
					marginBottom: "1rem",
				}}
			>
				{/* Indeksi marsruut on "/" */}
				<NavLink to='/' style={linkStyle}>
					Kodu
				</NavLink>

				<NavLink to='/quiz' style={linkStyle}>
					Viktoriin
				</NavLink>
				<NavLink to='/results' style={linkStyle}>
					tulemused
				</NavLink>
			</nav>

			<main style={{ padding: "1rem 0" }}>
				{/* Pesastatud marsruudid renderdatakse siin */}
				<Outlet />
			</main>
		</>
	);
};

export default Layout;
