import { Link, useParams } from "react-router-dom";
import { useStore } from "../store";

export const Single = () => {
    const { theId } = useParams();
    const { characters } = useStore();

    const character = characters.find(
        (char) => char.id === parseInt(theId)
    );

    if (!character) {
        return (
            <div className="container mt-5 text-center">
                <h2>Character not found</h2>

                <Link to="/" className="btn btn-primary mt-3">
                    Back Home
                </Link>
            </div>
        );
    }

    return (
        <div className="container mt-5">
            <div className="card shadow">
                <div className="row g-0">

                    <div className="col-md-4">
                        <img
                            src={character.image}
                            alt={character.name}
                            className="img-fluid rounded-start"
                        />
                    </div>

                    <div className="col-md-8">
                        <div className="card-body">

                            <h1>{character.name}</h1>

                            <p>
                                <strong>Status:</strong> {character.status}
                            </p>

                            <p>
                                <strong>Species:</strong> {character.species}
                            </p>

                            <p>
                                <strong>Gender:</strong> {character.gender}
                            </p>

                            <p>
                                <strong>Origin:</strong> {character.origin?.name}
                            </p>

                            <p>
                                <strong>Location:</strong> {character.location?.name}
                            </p>

                            <Link
                                to="/"
                                className="btn btn-primary"
                            >
                                Back Home
                            </Link>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};