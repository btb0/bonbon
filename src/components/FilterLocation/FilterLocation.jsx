export default function FilterLocation({ locations, activeLoc, setActiveLoc }) {
  const sortedLocations = locations.sort();
  const options = sortedLocations.map(location => (
    <option 
      value={location}
      key={location}
    >
      {location}
    </option>
  ));
  
  /*-====== Helper Functions ======-*/
  function handleChange(evt) {
    setActiveLoc(evt.target.value);
  }

  return (
    <select value={activeLoc} onChange={handleChange}>
      {options}
    </select>
  );
}