import { FormEvent } from "react";
import BookForm from "./BookForm";

const CreateBookForm = () => {
    const handleCreateBook = async (e: FormEvent<HTMLFormElement>) => {
        try {
            const formData = new FormData(e.currentTarget);
            await fetch("https://myapi.com/books",{ method: "POST", body: formData });
        } catch (err) {
            console.error(err);
        }
    };
    
    return <BookForm onSubmit={handleCreateBook} />;
  };

export default CreateBookForm;