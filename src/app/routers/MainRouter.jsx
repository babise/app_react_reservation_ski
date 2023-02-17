import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Homepage";
import DetailPost from "../pages/DetailPost";
import AddShopPage from "../pages/AddShopPage";

const MainRouter = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/:id" element={<DetailPost />} />
				<Route path="/addShop" element={<AddShopPage />} />
			</Routes>
		</>
	);
};

export default MainRouter;
