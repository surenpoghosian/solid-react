import { Book } from "./Book";
import useGetBooks from "./hooks/useGetBooks.hook";



export default function BookList(){
    const { books, loading, error } = useGetBooks();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    
    return (
        <div>
            {books.map(item => (
                <Book key={item.id} id={item.id} name={item.name} imageUrl={item.image} createdAt={item.createdAt}/>
            ))}
        </div>
    )
    }