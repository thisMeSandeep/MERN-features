import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { BookContext } from "../../context/Book";

const BookDetail = () => {
  const [singleBook, setSingleBook] = useState(null);
  const { books } = useContext(BookContext);
  const { id } = useParams();

  const getBookData = () => {
    const getBook = books.find((item) => item._id === id);
    setSingleBook(getBook);
  };

  useEffect(() => {
    getBookData();
  }, [books, id]);

  if (!singleBook) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      <h1>{singleBook.title}</h1>
      <p>{singleBook.author}</p>
      <p>{singleBook.description}</p>
      {/* Add more book details as needed */}
    </div>
  );
};

export default BookDetail;
