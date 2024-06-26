import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import { Provider } from "react-redux";
import store from "./store";
import WebSocketProvider from "./components/Providers/WebSocketProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<Provider store={store}>
		<WebSocketProvider url="ws://your-websocket-server-url">
			<App />
		</WebSocketProvider>
	</Provider>
);
