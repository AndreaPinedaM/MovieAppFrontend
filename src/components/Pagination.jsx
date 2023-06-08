import _ from "lodash";

const Pagination = ({
    noOfPosts,
    postsPerPage,
    onPageChange,
    currentPage,
    onPreviousClick,
    onNextClick,
}) => {
    const noOfPages = Math.ceil(noOfPosts.length / postsPerPage);
    const pages = _.range(1, noOfPages + 1);
    if (noOfPages === 1) return null;
    return (
        <div className="paginationSection">
            <ul className="pagination">
                {currentPage !== 1 && (
                    <li className="page-item">
                        <a
                            className="page-link"
                            style={{ cursor: "pointer" }}
                            onClick={onPreviousClick}
                        >
                            Previous
                        </a>
                    </li>
                )}
                {pages.map((page) => (
                    <li
                        key={page}
                        className={page === currentPage ? "page-item active" : "page-item"}
                    >
                        <a
                            className="page-link"
                            style={{ cursor: "pointer" }}
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </a>
                    </li>
                ))}
                {currentPage !== noOfPages && (
                    <li className="page-item">
                        <a
                            className="page-link"
                            style={{ cursor: "pointer" }}
                            onClick={onNextClick}
                        >
                            Next
                        </a>
                    </li>
                )}
            </ul>
        </div>
    );
};
export default Pagination;