import { createBrowserRouter, RouterProvider } from "react-router-dom";
import KeyBox from "./components/KeyBox";

import useTeachers from "./hooks/useTeachers";
import useKeys from "./hooks/useKeys";

//* Only for testing
import DUMMY_DATA from "./assets/DUMMY_DATA.json";
import { useEffect } from "react";
import { schedule } from "./lib/ScheduleClient";

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
		//* For future

		// axios.get("example").then((data) => {
		// 	setKeys(data.body.keys);
		// 	setTeachers(data.body.teachers);
		// });

		schedule.syncRooms();
		
		setTeachers(DUMMY_DATA.teachers);
		setKeys(DUMMY_DATA.keys);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <RouterProvider router={router} />;
};

export default App;
