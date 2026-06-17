import { Link } from "react-router-dom";
import { useStore } from "../store";

export const Navbar = () => {
    const { favorites } = useStore();

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">

                <Link to="/">
                    <span className="navbar-brand">
                        Rick & Morty
                    </span>
                </Link>

                <Link
                    to="/favorites"
                    className="btn btn-warning"
                >
                    Favorites ({favorites.length})
                </Link>

            </div>
        </nav>
    );
};