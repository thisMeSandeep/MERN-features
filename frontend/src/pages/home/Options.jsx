import categories from "../../data/categories"
import { useContext } from "react"
import { BookContext } from "../../context/Book"

const Options = () => {

  const { setCategory } = useContext(BookContext);



  return (
    <div className="min-w-[200px] h-[78vh] border-r-2 border-black/200 py-2 px-4">

      <p className="text-lg font-semibold">Filter Books</p>

      {/* category */}
      <select className="w-full outline-none mt-5" onChange={(e) => {
        e.target.value === 'Random' ? setCategory('') : setCategory(e.target.value);
      }}>
        {
          categories.categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))
        }
      </select>

    </div>
  )
}

export default Options