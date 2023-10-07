import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store";
import WebSocketProvider from "./components/core/WebSocketProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<Provider store={store}>
		<WebSocketProvider url="ws://your-websocket-server-url">
			<App />
		</WebSocketProvider>
	</Provider>
);
