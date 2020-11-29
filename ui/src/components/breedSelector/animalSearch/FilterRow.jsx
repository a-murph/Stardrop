import React from 'react';

const FilterRow = ({ filterType, removeRow, rowIndex }) => {
  return (
    <div>
      {filterType}
      <button onClick={() => removeRow(rowIndex)}>Remove Row</button>
    </div>
  );
};

export default FilterRow;
