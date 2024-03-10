import { FormEvent } from "react";

const CreateBookForm = () => {
    const handleCreateBookForm = async (e: FormEvent<HTMLFormElement>) => {
        try {
            const formData = new FormData(e.currentTarget);
            await fetch("https://myapi.com/books",{ method: "POST", body: formData });
        } catch (err) {
            console.error(err);
        }
    };
  
    return (
      <form onSubmit={handleCreateBookForm}>
        <input name="title" />
        <input name="author" />
        <input name="bookType" />
      </form>
    );
  };