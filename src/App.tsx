import { createBrowserRouter, RouterProvider } from "react-router-dom";
import KeyBox from "./components/KeyBox";

import useTeachers from "./hooks/useTeachers";
import useKeys from "./hooks/useKeys";

//* Only for testing
import DUMMY_DATA from "./assets/DUMMY_DATA.json";
import { useEffect } from "react";

const router = createBrowserRouter([
	{
		path: "/",
		element: <KeyBox />,
	},
	{
		path: "/history",
		element: <div>history</div>,
	},
]);

const App = () => {
	//* Only for testing
	const { setTeachers } = useTeachers();
	const { setKeys } = useKeys();

	useEffect(() => {
		setTeachers(DUMMY_DATA.teachers);
		setKeys(DUMMY_DATA.keys);
	}, []);

	return <RouterProvider router={router} />;
};

export default App;
