import { useState } from 'react';

const DropdownContent = ({ dropdownTittle, dropdownContent }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="dropdpwn">
            <div onClick={toggleDropdown}>
                {dropdownTittle}
            </div>
            {isDropdownOpen && (
                <div className="dropdown-content">
                    {dropdownContent}
                </div>
            )}
        </div>
    );
};

export default DropdownContent