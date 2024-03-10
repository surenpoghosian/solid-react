const Book = ({ book }: any) => {
    return (
      <div>
        <img src={book.image} alt="Book image" />
        <p>{book.title}</p>
        <p>{book.author}</p>
      </div>
    );
  };

  export default Book;