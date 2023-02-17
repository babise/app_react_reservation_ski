import { Box, Container } from "@mui/material";
import MainNavbar from "../components/ui/MainNavbar";

const MainLayout = ({ children }) => {
	return (
		<Box>
			<MainNavbar />
			<Container maxWidth="lg">{children}</Container>
		</Box>
	);
};

export default MainLayout;
