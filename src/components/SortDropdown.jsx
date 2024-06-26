import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import "../styles/SortDropdown.css";

const SortDropdown = ({sortOrder, setSortOrder}) => {

    const handleSelect = (eventKey) => {
        setSortOrder(eventKey);
    }

    return (
        <div className="sort-dropdown">
            <DropdownButton id='dropdown-button' title={`Sort By: ${sortOrder}`} onSelect={handleSelect}>
                <Dropdown.Item eventKey="Popular">Popular</Dropdown.Item>
                <Dropdown.Item eventKey="Alphabetical">Alphabetical</Dropdown.Item>
                <Dropdown.Item eventKey="Price">Price</Dropdown.Item>
                <Dropdown.Item eventKey="Newest">Newest</Dropdown.Item>
            </DropdownButton>
        </div>
    )
}

export default SortDropdown;