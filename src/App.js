import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./app/layouts/MainLayout";
import MainRouter from "./app/routers/MainRouter";

function App() {
	return (
		<BrowserRouter>
			<MainLayout>
				<MainRouter />
			</MainLayout>
		</BrowserRouter>
	);
}

export default App;
