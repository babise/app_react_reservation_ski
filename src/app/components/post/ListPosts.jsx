import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllPosts } from "../../../setup/services/post.service";
import CardPost from "./CardPost";

const ListPosts = () => {
	const [posts, setPosts] = useState([]);
	const [search, setSearch] = useState("");
	const [selectedWeight, setSelectedWeight] = useState(0);
	const [style, setStyle] = useState({});
	const [size, setSize] = useState(0);

	const weightOptions = [
		{ minWeight: 0, maxWeight: 1000 },
		{ minWeight: 0, maxWeight: 45 },
		{ minWeight: 45, maxWeight: 65 },
		{ minWeight: 65, maxWeight: 1000 },
	];

	const styleOptions = ["Freeride", "Freestyle", "Piste", "Polyvalent"];

	const sizeOptions = [140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190];

	const handleSearch = (e) => {
		setSearch(e.target.value);
	};

	const handleWeight = (e) => {
		setSelectedWeight(e.target.value);
	};

	const handleStyle = (e) => {
		setStyle(e.target.value);
	};

	const handleSize = (e) => {
		setSize(e.target.value);
	};

	useEffect(() => {
		const filter = {
			search,
			minWeight: weightOptions[selectedWeight].minWeight,
			maxWeight: weightOptions[selectedWeight].maxWeight,
			style,
			size,
		};
		getAllPosts(filter).then((posts) => {
			setPosts([...posts]);
		});
	}, [search, selectedWeight, style, size]);

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				width: "100%",
				height: "100%",
			}}
		>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					width: "100%",
				}}
			>
				<TextField
					type={"search"}
					label={"Rechercher"}
					size={"small"}
					onChange={handleSearch}
				/>
				<FormControl>
					<InputLabel id="weight">Poids</InputLabel>
					<Select
						labelId="weight"
						id="weight"
						label="Poids"
						value={selectedWeight}
						onChange={handleWeight}
					>
						{weightOptions.map((weight, index) => {
							return (
								<MenuItem key={index} value={index}>
									{weight.minWeight} - {weight.maxWeight}
								</MenuItem>
							);
						})}
					</Select>
				</FormControl>
				<FormControl>
					<InputLabel id="style">Style</InputLabel>
					<Select
						id="style"
						label="Style"
						value={style}
						onChange={handleStyle}
						labelId="style"
					>
						<MenuItem value={""}>Tous</MenuItem>
						{styleOptions.map((style, index) => {
							return (
								<MenuItem key={index} value={style}>
									{style}
								</MenuItem>
							);
						})}
					</Select>
				</FormControl>
				<FormControl>
					<InputLabel id="size">Taille</InputLabel>
					<Select
						labelId="size"
						id="size"
						label="Taille"
						value={size}
						onChange={handleSize}
					>
						<MenuItem value={0}>Tous</MenuItem>
						{sizeOptions.map((size, index) => {
							return (
								<MenuItem key={index} value={size}>
									{size}
								</MenuItem>
							);
						})}
					</Select>
				</FormControl>
			</Box>

			{posts.map((post) => {
				return (
					<Box
						sx={{
							width: "100%",
						}}
						key={post._id}
					>
						<Link
							style={{ textDecoration: "none" }}
							md={{ textDecoration: "none" }}
							to={`/${post._id}`}
						>
							<CardPost post={post} />
						</Link>
					</Box>
				);
			})}
		</Box>
	);
};

export default ListPosts;
