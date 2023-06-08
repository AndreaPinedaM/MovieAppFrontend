import { useSelector } from "react-redux";

const Categories = () => {
    const { movies } = useSelector((state) => state.movie);

    const categories = [];
    movies.map(movie => categories.push(movie.vote_average))
    const categoriesFinal = ["All Categories", ...new Set(categories)]

    return (
        <ul className="list-group">
            {categoriesFinal.map((category) => (
                <li
                    key={category}
                    className="list-group-item"
                >
                    {category}
                </li>
            ))}
        </ul>
    );
};
export default Categories;