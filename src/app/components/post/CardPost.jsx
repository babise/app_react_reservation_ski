import React from "react";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";

const CardPost = ({ post }) => {
	return (
		<Card
			sx={{
				display: "flex",
				width: "100%",
				boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
				borderRadius: "12px",
			}}
		>
			<CardMedia
				component="img"
				sx={{ width: "30%" }}
				image={post.imageUrl}
				alt={post.title}
			/>
			<CardContent
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					width: "70%",
				}}
			>
				<Box>
					<Typography variant="h5" component="h2">
						{post.title}
					</Typography>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							marginBottom: "16px",
						}}
					>
						<Typography variant="body1">{post.weight} g</Typography>
						<Typography variant="body1">{post.size} cm</Typography>
						<Typography variant="body1">{post.style}</Typography>
					</Box>
					<Typography variant="body1">{post.description}</Typography>
				</Box>
				<Typography variant="h1" component="h3" sx={{ fontWeight: "bold" }}>
					{post.price} €
				</Typography>
			</CardContent>
		</Card>
	);
};

export default CardPost;
