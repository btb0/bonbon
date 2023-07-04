import './FilterCategory.css';

export default function FilterCategory({ categories, activeCat, setActiveCat }) {
  const sortedCategories = categories.sort();
  console.log(sortedCategories)
  const inputs = sortedCategories.map(category => (
    <label key={category}>
      <input 
        type="radio"
        name="category"
        onChange={handleChange}
        checked={activeCat === category}
        value={category} 
        key={category} 
      />
      &nbsp;&nbsp;&nbsp;{capitalFirstChar(category)}
    </label>
  ));

  // TODO: remove comments
  // const options = sortedCategories.map(category => (
  //   <option 
  //     value={category}
  //     key={category}
  //   >
  //     {category}
  //   </option>
  // ));

  /*-====== Helper Functions ======-*/
  function handleChange(evt) {
    setActiveCat(evt.target.value);
  }

  function capitalFirstChar(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  return (
    <div className='FilterCategory flex'>
      <h4>Category</h4>
      <label>
        <input 
          type="radio" 
          name='category' 
          value='all'
          onChange={handleChange}
          checked={activeCat === 'all'} 
        />
          &nbsp;&nbsp;&nbsp;All Categories
      </label>
      {inputs}
    </div>
    // <select value={activeCat} onChange={handleChange}>
    //   <option value="all">All Categories</option>
    //   {options}
    // </select>
  );
}