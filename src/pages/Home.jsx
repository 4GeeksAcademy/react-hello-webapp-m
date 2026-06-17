import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useStore } from "../store";

export const Home = () => {
	const {
		characters,
		favorites,
		setCharacters,
		toggleFavorite
	} = useStore();

	useEffect(() => {
		fetchCharacters();
	}, []);

	const fetchCharacters = async () => {
		try {
			const response = await fetch(
				"https://rickandmortyapi.com/api/character"
			);

			const data = await response.json();

			setCharacters(data.results);
		} catch (error) {
			console.error("Error fetching characters:", error);
		}
	};

	return (
		<div className="container mt-4">
			<h1 className="text-center mb-5">
				Rick & Morty Characters
			</h1>

			<div className="row">
				{characters?.map((character) => (
					<div
						key={character.id}
						className="col-md-3 mb-4"
					>
						<div className="card h-100 shadow">

							<img
								src={character.image}
								className="card-img-top"
								alt={character.name}
							/>

							<div className="card-body d-flex flex-column">

								<h5 className="card-title">
									{character.name}
								</h5>

								<p className="card-text">
									<strong>Status:</strong> {character.status}
								</p>

								<p className="card-text">
									<strong>Species:</strong> {character.species}
								</p>

								<p className="card-text">
									<strong>Gender:</strong> {character.gender}
								</p>

								<div className="mt-auto d-flex justify-content-between">

									<Link
										to={`/single/${character.id}`}
										className="btn btn-primary"
									>
										Learn More
									</Link>

									<button
										className="btn btn-warning"
										onClick={() => toggleFavorite(character)}
									>
										{favorites.some(
											fav => fav.id === character.id
										)
											? "💔"
											: "❤️"}
									</button>

								</div>

							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);

};
