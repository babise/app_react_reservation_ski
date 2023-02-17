import { Typography } from "@mui/material";
import { Link as link } from "react-router-dom";
const NavbarItem = ({ path, label }) => {
	return (
		<Typography
			variant="p"
			component={link}
			to={path}
			sx={{ m: 2, textDecoration: "none", color: "primary.main" }}
		>
			{label}
		</Typography>
	);
};

export default NavbarItem;
