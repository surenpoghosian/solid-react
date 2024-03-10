import { BookFormProps } from "./types";

const BookForm = ({ onSubmit }: BookFormProps) => {
    return (
      <form data-testid="book-form" onSubmit={onSubmit}>
        <input name="title" data-testid="title-input" />
        <input name="author" data-testid="author-input" />
        <input name="bookType" data-testid="bookType-input" />
      </form>
    );
  };

export default BookForm;