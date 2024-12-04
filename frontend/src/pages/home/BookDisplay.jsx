import books from "../../data/books"
import { Link } from "react-router-dom"

const BookDisplay = () => {

    return (
        <div className="px-3">
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
        </div>
    )
}

export default BookDisplay