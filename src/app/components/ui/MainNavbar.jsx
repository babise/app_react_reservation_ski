import React from "react";
import NavbarItem from "./NavbarItem";
import { Box, Grid } from "@mui/material";

export default function MainNavbar() {
	return (
		<Box>
			<Grid container spacing={2} p={2}>
				<Grid
					item
					xs={2}
					display="flex"
					justifyContent="center"
					alignItems="center"
				>
					<img
						src="../assets/images/YETISKI-logo.png"
						alt="Logo Yetiski"
						height={96}
					/>
				</Grid>
				<Grid
					item
					xs={10}
					display="flex"
					alignItems="center"
					justifyContent="flex-end"
				>
					<NavbarItem path="/" label="Accueil" />
					<NavbarItem path="/shop" label="Shop" />
				</Grid>
			</Grid>
		</Box>
	);
}
