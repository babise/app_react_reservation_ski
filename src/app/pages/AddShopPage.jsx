import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { createShop } from "../../setup/services/shop.service";

const AddShopPage = () => {
	const [shop, setShop] = useState({
		name: "",
		address: "",
		logo: "",
		password: "",
	});

	const onChangeShop = (e) => {
		setShop({ ...shop, [e.target.name]: e.target.value });
	};

	const addShop = (e) => {
		e.preventDefault();
		const data = {
			...shop,
		};
		createShop(data).then((res) => {
			setShop({ name: "", address: "", logo: "", password: "" });
		});
	};

	return (
		<Box
			component="form"
			onSubmit={addShop}
			sx={{
				display: "flex",
				justifyContent: "center",
				flexDirection: "column",
			}}
		>
			<TextField
				label="Nom"
				name="name"
				value={shop.name}
				onChange={onChangeShop}
			/>
			<TextField
				label="Adresse"
				name="address"
				id="address"
				value={shop.address}
				onChange={onChangeShop}
			/>
			<TextField
				label="Logo"
				name="logo"
				value={shop.logo}
				onChange={onChangeShop}
			/>
			<TextField
				label="Mot de passe"
				name="password"
				value={shop.password}
				onChange={onChangeShop}
			/>
			<Button type="submit" variant="contained">
				Ajouter un magasin
			</Button>
		</Box>
	);
};

export default AddShopPage;
