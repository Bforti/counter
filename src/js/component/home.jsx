import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		<div className="text-center bg-black text-light d-flex justify-content-center m-1">
			<h1 className="border border-4 rounded m-2 p-3 fa-regular fa-clock"></h1>
			<h1 className="border border-4 rounded m-2 p-3">{props.five}</h1>
			<h1 className="border border-4 rounded m-2 p-3">{props.four}</h1>
			<h1 className="border border-4 rounded m-2 p-3">{props.three}</h1>
			<h1 className="border border-4 rounded m-2 p-3">{props.two}</h1>
			<h1 className="border border-4 rounded m-2 p-3">{props.one}</h1>
			
			
		</div>
	);
};

export default Home;
