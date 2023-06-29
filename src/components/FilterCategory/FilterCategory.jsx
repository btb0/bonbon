export default function FilterCategory({ categories, activeCat, setActiveCat }) {
  const sortedCategories = categories.sort();
  const options = sortedCategories.map(category => (
    <option 
      value={category}
      key={category}
    >
      {category}
    </option>
  ));

  /*-====== Helper Functions ======-*/
  function handleChange(evt) {
    setActiveCat(evt.target.value);
  }
  return (
    <select value={activeCat} onChange={handleChange}>
      <option value="all">All Categories</option>
      {options}
    </select>
  );
}