import { Outlet } from "react-router-dom";
import KeyBox from "../KeyBox";

const RootLayout = () => {
	return (
		<main>
			<KeyBox />
			<Outlet />
		</main>
	);
};

export default RootLayout;
