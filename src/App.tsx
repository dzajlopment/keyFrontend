import { createBrowserRouter, RouterProvider } from "react-router-dom";
import KeyBox from "./components/KeyBox";

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
	return <RouterProvider router={router} />;
};

export default App;
