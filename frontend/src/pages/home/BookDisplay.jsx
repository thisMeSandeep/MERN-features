
import { Link } from "react-router-dom"
import { useContext } from "react"
import { BookContext } from "../../context/Book"

const BookDisplay = () => {


    const { books, totalPages, setPage } = useContext(BookContext);



    return (
        <div className="px-3 relative">
            {/* book display */}
            <div className="flex  items-center  gap-5 flex-wrap">
                {books.map((book, index) => (

                    <Link key={index} className="border shadow w-[300px] h-[200px]  px-5 py-2 rounded-sm hover:scale-105 transition-all duration-300 ">
                        <p>Title: <span className="font-semibold">{book.title}</span></p>
                        <p>Author:{book.author}</p>
                        <p>Price: $<span className="font-semibold">{book.price}</span></p>
                        <p>{book.category}</p>
                    </Link>

                ))}
            </div>

            {/* pagination */}
            <div className="bg-gray-400 fixed min-w-[400px] bottom-5 left-1/2 translate-x-[-50%] flex items-center justify-center gap-5 px-10 py-2 rounded-full ">
                {
                    [...Array(totalPages)].map((_, index) => (
                        <button key={index} onClick={() => setPage(index + 1)} className="bg-gray-300 hover:bg-gray-500 hover:text-white px-4 py-2 rounded-full">
                            {index + 1}
                        </button>
                    ))
                }
            </div>
        </div>
    )
}

export default BookDisplay