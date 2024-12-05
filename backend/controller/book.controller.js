import BookModel from "../models/book.model.js";

export const bookController = async (req, res) => {
  try {
    // Extract query parameters
    const { category, page, limit } = req.query;

    // query object
    let query = {};
    if (category) {
      query.category = category;
    }

    let books;
    let totalBooks;

    if (page && limit) {
      const pageNum = parseInt(page, 10);
      const limitNum = parseInt(limit, 10);

      // Fetch books
      books = await BookModel.find(query)
        .skip((pageNum - 1) * limitNum)
        .limit(limitNum);

      totalBooks = await BookModel.countDocuments(query);

      const totalPages = Math.ceil(totalBooks / limitNum);

      // if the page number exceeds total pages
      if (pageNum > totalPages) {
        return res.status(400).json({
          success: false,
          message: "Page number exceeds total pages",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Books fetched successfully",
        books,
        totalPages,
        currentPage: pageNum,
      });
    } else {
      // Fetch all books
      books = await BookModel.find(query);
      totalBooks = books.length;
      return res.status(200).json({
        success: true,
        message: "Books fetched successfully",
        books,
        totalBooks,
      });
    }
  } catch (error) {
    console.error(`Error fetching books: ${error.message}`);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};
