import React, { useState } from 'react';
import FilterRow from './FilterRow';

const SearchFilters = ({ animal, filter, setFilter }) => {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [rows, setRows] = useState([]);

  const removeRow = (index) => {
    console.log(index)
    const newRows = rows;
    newRows.splice(index, 1);
    console.log(newRows)
    setRows(newRows);
  };

  return (
    <div>
      <select
        onChange={({ target: { value } }) => {
          if (value !== 'Select Filter')
            setSelectedFilter(value)
          else
            setSelectedFilter(null);
        }}
      >
        <option>Select Filter</option>
        <option>Countries</option>
        <option>Focus</option>
        <option>Autosexing</option>
        <option>Tags</option>
        <option>Female Weight</option>
        <option>Male Weight</option>
        <option>Eggs Laid Annually</option>
        <option>Egg Size</option>
        <option>Egg Color</option>
        <option>Broodiness</option>
        <option>Feather Color</option>
        <option>Flight Range</option>
        <option>Weather Tolerance</option>
        <option>Self-Reliance</option>
        <option>Temperament</option>
      </select>
      <button
        onClick={() => {
          if (selectedFilter && !rows.includes(selectedFilter))
            setRows([...rows, selectedFilter])
        }}
      >
        Add filter
      </button>
      {rows.map((row, index) => (
        <FilterRow key={index} filterType={row} removeRow={removeRow} rowIndex={index} />
      ))}
    </div>
  );
};

export default SearchFilters;
