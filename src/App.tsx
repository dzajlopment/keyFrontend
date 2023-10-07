import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/Layout/RootLayout";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [{ path: "/key/:keyName", element: <div>XD</div> }],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
