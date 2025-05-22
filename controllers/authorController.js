const db = require("../db"); // Assuming you have a db module to interact with your databaseexpress-async-handler
const asyncHandler = require("express-async-handler");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

// The function will automatically catch any errors thrown and call the next function
const getAuthorById = asyncHandler(async (req, res) => {
  const { authorId } = req.params;

  const author = await db.getAuthorById(Number(authorId));

  if (!author) {
    throw new CustomNotFoundError ("Author not found");
  }

  res.send(`Author Name: ${author.name}`);
});
module.exports = {
  getAuthorById, 
}