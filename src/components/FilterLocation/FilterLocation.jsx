export default function FilterLocation({ locations }) {
  const options = locations.map(location => (
    <option 
      value=""
      key={location}
    >
      {location}
    </option>
  ));
  
  //TODO: Add Functionality to this
  return (
    <select>
      {options}
    </select>
  );
}