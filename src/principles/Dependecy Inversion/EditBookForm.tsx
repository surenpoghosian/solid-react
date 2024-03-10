import { FormEvent } from "react";
import BookForm from "./BookForm";

const EditBookForm = () => {
    const handleEditBook = async (e: FormEvent<HTMLFormElement>) => {
      try {
        // Edit logic
      } catch (err) {
        console.error(err);
      }
    };
    return <BookForm onSubmit={handleEditBook} />;
  };

export default EditBookForm;