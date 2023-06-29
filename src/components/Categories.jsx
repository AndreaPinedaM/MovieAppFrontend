import { useSelector } from "react-redux";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Categories = () => {
    const { movies } = useSelector((state) => state.movie);

    const categories = [];
    movies.map(movie => categories.push(movie.vote_average))
    const categoriesFinal = ["All Movies", ...new Set(categories)]

    return (
        <DropdownButton id="dropdown-basic-button" className="list-group" title="Vote average">
            {categoriesFinal.map((category) => (
                <Dropdown.Item
                    key={category}
                    className="list-group-item"
                >{category}</Dropdown.Item>
            ))}
        </DropdownButton>
    );
};
export default Categories;