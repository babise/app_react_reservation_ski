import { Button, CardMedia, Rating, Typography } from "@mui/material";
import { getPostById } from "../../setup/services/post.service";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Box } from "@mui/system";
import { useMemo } from "react";
import { createComment } from "../../setup/services/comment.service";
import { createBooking } from "../../setup/services/booking.service";
import { TextField } from "@mui/material";
import { getShop } from "../../setup/services/shop.service";

const DetailPost = () => {
	const [post, setPost] = useState(null);
	const { id } = useParams();

	const [comment, setComment] = useState({
		stars: 0,
		username: "",
		description: "",
	});
	const [phone, setPhone] = useState();

	const onChangeComment = (e) => {
		setComment({ ...comment, [e.target.name]: e.target.value });
	};

	const onChangePhone = (e) => {
		setPhone(Number(e.target.value));
	};

	const renderStars = useMemo(() => {
		return (
			post?.comments.reduce((acc, comment) => {
				return acc + comment.stars;
			}, 0) / post?.comments.length
		);
	}, [post?.comments]);

	const addComment = (e) => {
		e.preventDefault();
		const data = {
			...comment,
			post: id,
		};
		createComment(data).then((res) => {
			setComment({ stars: 0, username: "", description: "" });
		});
	};

	const handleBooking = (e) => {
		e.preventDefault();
		createBooking({ telephoneNumber: phone, post: id }).then((res) => {});
	};

	useEffect(() => {
		getPostById(id).then(async (post) => {
			const shop = await getShop(post.shop);
			post.shop = shop;
			setPost(post);
		});
	}, [id]);
	return (
		<Box>
			<Button
				component={Link}
				to="/"
				variant="contained"
				sx={{ margin: "12px" }}
			>
				Retour
			</Button>
			{post && (
				<Box
					sx={{
						backgroundColor: "#F5F5F5",
						borderRadius: "12px",
						boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
					}}
				>
					<CardMedia
						component="img"
						height={300}
						image={post.imageUrl}
						alt={post.title}
						sx={{ borderRadius: "12px 12px 0 0" }}
					/>
					<Box sx={{ display: "flex", padding: "32px" }}>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-between",
								width: "50%",
								padding: "16px",
								borderRight: "2px solid black",
							}}
						>
							<Typography variant="h2">{post.title}</Typography>
							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
									marginBottom: "16px",
								}}
							>
								<Typography variant="p">{post.weight} g</Typography>
								<Typography variant="p">{post.size} cm</Typography>
								<Typography variant="p">{post.style}</Typography>
							</Box>
							<Typography variant="p">{post.description}</Typography>
							<Typography variant="p">{post.shop.address}</Typography>
						</Box>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								width: "50%",
							}}
						>
							<Rating name="read-only" value={renderStars} readOnly />
							<Typography variant="h2">{post.price} €</Typography>
						</Box>
					</Box>
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							padding: "32px",
							gap: "32px",
						}}
						component="form"
						onSubmit={handleBooking}
					>
						<TextField
							label="Téléphone"
							variant="outlined"
							name="phone"
							value={phone}
							onChange={onChangePhone}
						/>
						<Button variant="contained" type="submit">
							Réserver
						</Button>
					</Box>
					{/* Comment form */}
					<Box sx={{ display: "flex" }}>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								flexDirection: "column",
								padding: "32px",
								gap: "32px",
								width: "50%",
							}}
							component="form"
							onSubmit={addComment}
						>
							<TextField
								label="Nom"
								variant="outlined"
								name="username"
								value={comment.username}
								onChange={onChangeComment}
							/>
							<TextField
								label="Commentaire"
								variant="outlined"
								name="description"
								value={comment.description}
								onChange={onChangeComment}
							/>
							<Rating
								name="stars"
								value={comment.stars}
								onChange={onChangeComment}
							/>
							<Button variant="contained" type="submit">
								Ajouter un commentaire
							</Button>
						</Box>
						{/* Comments */}
						<Box
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								flexDirection: "column",
								padding: "32px",
								gap: "32px",
								width: "50%",
							}}
						>
							{post.comments.map((comment) => (
								<Box
									key={comment._id}
									sx={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										flexDirection: "column",
										padding: "32px",
										gap: "32px",
									}}
								>
									<Typography variant="h4" component="p">
										{comment.username}
									</Typography>
									<Rating name="read-only" value={comment.stars} readOnly />
									<Typography variant="p">{comment.description}</Typography>
								</Box>
							))}
						</Box>
					</Box>
				</Box>
			)}
		</Box>
	);
};

export default DetailPost;
