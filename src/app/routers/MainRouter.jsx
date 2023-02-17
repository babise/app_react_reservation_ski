import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Homepage";
import DetailPost from "../pages/DetailPost";

const MainRouter = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/:id" element={<DetailPost />} />
			</Routes>
		</>
	);
};

export default MainRouter;
