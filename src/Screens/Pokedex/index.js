import React, { useEffect, useState } from "react";
import axios from "axios";

import "./index.css";
import analyze from "rgbaster";
import Pokemon from "../../components/Pokemon";
import SearchBar from "../../components/SearchBar";
import { useBackground } from "../../Context/background";

function PokeInfo() {
	const [pokes, setPokes] = useState([]);
	const { pokelista, attPokelista } = useBackground();

	useEffect(() => {
		const fetchPokemons = async () => {
			const { data } = await axios.get(
				"https://pokeapi.co/api/v2/pokemon?limit=200"
			);
			setPokes(
				data.results.map((poke, id) => ({
					...poke,
					id: id + 1,
				}))
			);
		};
		fetchPokemons();
	}, []);

	const imgResult = async () => {
		if (Object.values(pokelista).length === 0) {
			return;
		}
		const visiblePokes = Object.values(pokelista).filter(
			(elm) => elm.isVisible
		);

		const randomIndex = Math.floor(Math.random() * visiblePokes.length);
		const randomPoke = visiblePokes[randomIndex];

		const result = randomPoke
			? await analyze(
					`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomPoke?.id}.png`,
					{ ignore: ["rgb(255,255,255)", "rgb(0,0,0)"], scale: 1 }
			  )
			: [
					{ color: "rgb(128, 155, 136)" },
					{ color: "rgb(128, 155, 136)" },
					{ color: "rgb(128, 155, 136)" },
					{ color: "rgb(128, 155, 136)" },
			  ];

		document.querySelector("body").style.backgroundColor = result[0].color;
	};

	useEffect(() => {
		imgResult();
	}, [attPokelista]);

	const [search, setSearch] = useState("");

	return (
		<>
			{pokes && (
				<>
					<SearchBar setSearch={setSearch} />
					<div className="pokemon-container">
						<div className="pokemon-list-container">
							{pokes
								.filter((val) => {
									if (search === "") {
										return val;
									} else if (
										val.name
											.toLowerCase()
											.includes(search.toLowerCase())
									) {
										return val;
									}
								})
								.map((poke) => (
									<Pokemon name={poke.name} id={poke.id} />
								))}
						</div>
					</div>
				</>
			)}
		</>
	);
}

export default PokeInfo;
