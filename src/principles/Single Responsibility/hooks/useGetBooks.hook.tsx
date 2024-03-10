import {useState, useEffect} from "react";

interface BookType {
    id: string;
    name: string;
    image: string;
    createdAt: string;
}

export default function useGetBooks(){
    const [books, setBooks] = useState<BookType[]>([])
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    async function fetchBooks(): Promise<void> {
        try {
            const response = await fetch('https://65ec52bd0ddee626c9affdf6.mockapi.io/api/v1/books/');
            const data = await response.json();
            setBooks(data);
        } catch (error) {
            setError(error instanceof Error ? error : new Error('Unknown error')); 
        } finally {
            setLoading(false);
        }
    }

      useEffect(() => {
        fetchBooks()
    },[])

    return { books: books, loading: loading, error: error };}