import { useState } from "react";
import Key from "./components/KeyBox/Key";

const App = () => {
	const [user, setUser] = useState("Andrzej");

	return (
		<main>
			<Key name="202" owner={user} onClick={() => setUser("")} />
		</main>
	);
};

export default App;
