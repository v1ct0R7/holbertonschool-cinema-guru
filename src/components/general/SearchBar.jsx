import './general.css'

function SearchBar({ title, setTitle }) {
  const handleInput = (event) => {
    setTitle(event.target.value)
  }

  return (
    <input
      type="text"
      placeholder="Search..."
      value={title}
      onChange={handleInput}
    />
  )
}

export default SearchBar