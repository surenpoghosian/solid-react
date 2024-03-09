import { useEffect, useState } from 'react';

interface Book {
    id: string;
    name: string;
    image: string;
    createdAt: string;
}


export default function BookList(){
    const [books, setBooks] = useState<Book[]>([])

    async function fetchBooks(): Promise<Book[]> {
        const response = await fetch('https://65ec52bd0ddee626c9affdf6.mockapi.io/api/v1/books/');
        const data = await response.json();
        return data;
      }

    useEffect(() => {
        fetchBooks().then(data => setBooks(data))
    },[])
 
    return (
        <div>
            {books.map(book => (
                <div>
                    <h1>{book.id}</h1>
                    <h1>{book.name}</h1>
                    <h1>{book.image}</h1>
                    <h1>{book.createdAt}</h1>
                </div>
            ))}
        </div>
    )
}