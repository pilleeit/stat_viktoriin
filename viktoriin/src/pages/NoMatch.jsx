import { Link } from "react-router";

const NoMatch = () => {
	return (
		<>
			<h2>404 - Lehte ei leitud</h2>
			<p>Palun kontrolli, kas sisestatud URL on õige.</p>
			<p>
				Tagasi <Link to='/'>avalehele</Link>.
			</p>
		</>
	);
};

export default NoMatch;
