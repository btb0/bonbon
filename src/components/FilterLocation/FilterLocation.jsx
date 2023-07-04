import './FilterLocation.css';

export default function FilterLocation({ locations, activeLoc, setActiveLoc }) {
  const sortedLocations = locations.sort();
  const inputs = sortedLocations.map(location => (
    <label key={location}>
      <input 
        type="radio"
        name="location"
        onChange={handleChange}
        checked={activeLoc === location}
        value={location} 
        key={location} 
      />
        &nbsp;&nbsp;&nbsp;{location}
    </label>
  ));

  // TODO: REMOVE COMMENTS
  // const options = sortedLocations.map(location => (
  //   <option 
  //     value={location}
  //     key={location}
  //   >
  //     {location}
  //   </option>
  // ));
  
  /*-====== Helper Functions ======-*/
  function handleChange(evt) {
    setActiveLoc(evt.target.value);
  }

  return (
    <div className='FilterLocation flex'>
      <h4>Locations</h4>
      <label>
        <input 
          type="radio" 
          name='location' 
          value='all'
          onChange={handleChange}
          checked={activeLoc === 'all'} 
        />
          &nbsp;&nbsp;&nbsp;All Locations
      </label>
      {inputs}
    </div>
    // <select value={activeLoc} onChange={handleChange}>
    //   <option value="all">All Locations</option>
    //   {options}
    // </select>
  );
}