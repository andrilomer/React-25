import  { useState, useCallback } from 'react';

const ItemFilter = () => {
  const [items, setItems] = useState(['apple', 'banana', 'cherry', 'date', 'fig']);
  const [search, setSearch] = useState('');

  // Memoize the filtering function
  const filterItems = useCallback(() => {
    // Filter the list based on the search input
    return items.filter(item => item.includes(search));
  }, [search, items]); // This function will change if search or items change

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)} // Update search input
        placeholder="Search items"
      />
      <ul>
        {filterItems().map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemFilter;
