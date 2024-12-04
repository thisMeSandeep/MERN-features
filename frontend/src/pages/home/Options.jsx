import categories from "../../data/categories"

const Options = () => {
  return (
    <div className="min-w-[200px] h-[78vh] border-r-2 border-black/200 py-2 px-4">

      <p className="text-lg font-semibold">Filter Books</p>

      {/* category */}
      <select className="w-full outline-none mt-5">
        {
          categories.categories.map((category, index) => (
            <option key={index}>
              {category}
            </option>
          ))
        }
      </select>

    </div>
  )
}

export default Options