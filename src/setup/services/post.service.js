import axios from "axios";

const getAllPosts = async (
	filter = {
		search: "",
		minWeight: 0,
		maxWeight: 1000,
		style: "",
		size: "",
		onlyAvailable: false,
	}
) => {
	const { search, minWeight, maxWeight, style, size, onlyAvailable } = filter;
	const response = await axios.get(
		`${process.env.REACT_APP_API}/posts?search=${search}&minWeight=${minWeight}&maxWeight=${maxWeight}&style=${style}&size=${size}&onlyAvailable=${onlyAvailable}`
	);
	return response.data;
};

const getPostById = async (id) => {
	const response = await axios.get(`${process.env.REACT_APP_API}/posts/${id}`);
	return response.data;
};

const createPost = async (data) => {
	const response = await axios.post(`${process.env.REACT_APP_API}/posts`, data);
	return response.data;
};

const updatePost = async (id, data) => {
	const response = await axios.patch(
		`${process.env.REACT_APP_API}/posts/${id}`,
		data
	);
	return response.data;
};

const deletePost = async (id) => {
	const response = await axios.delete(
		`${process.env.REACT_APP_API}/posts/${id}`
	);
	return response.data;
};

export { getAllPosts, getPostById, updatePost, createPost, deletePost };
