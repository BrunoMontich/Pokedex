import React, { useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";

import { useBackground } from "../Context/background";

import "./Pokemon.css";

const Pokemon = ({ name, id }) => {
	const [isVisible, setIsVisible] = useState(false);
	const { pokelista, setPokelista, attPokelista, setAttPokelista } =
		useBackground();

	const reference = useRef();

	useEffect(() => {
		let options = {
			rootMargin: "0px",
		};

		let observer = new IntersectionObserver((e) => {
			setIsVisible(e[0].isIntersecting);

			pokelista[name] = { name, id, isVisible: e[0].isIntersecting };
			setPokelista(pokelista);
			setAttPokelista(Math.random() * 1000);
		}, options);

		observer.observe(reference.current);
	}, []);

	return (
		<div className="pokemon-list">
			{/* <span>{isVisible.toString()}</span> */}
			<span
				style={{
					color: "white",
					fontWeight: "bold",
					fontFamily: "Montserrat",
				}}
			>
				{name.substring(0, 1).toUpperCase() + name.substring(1)}
			</span>

			<img
				src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
				className="pokemon-img"
				ref={reference}
			/>
			<Link to={`/info/${id}`} className="pokemon-button">
				Info
			</Link>
		</div>
	);
};

export default Pokemon;
