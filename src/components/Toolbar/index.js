import React from 'react';

function Toolbar({ filters, selected, onSelectFilter }) {
  return (
    <div className='toolbar'>
      {filters.map((item) => (
        <button
          onClick={onSelectFilter}
          key={item}
          className={item === selected ? 'selected' : ''}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default Toolbar;