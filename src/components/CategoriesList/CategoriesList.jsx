export default function CategoriesList({ categories }) {
  const options = categories.map(category => (
    <option 
      value=""
      key={category}
    >
      {category}
    </option>
  ));
    // TODO: Add functionality to this
  return (
    <select>
      {options}
    </select>
  );
}