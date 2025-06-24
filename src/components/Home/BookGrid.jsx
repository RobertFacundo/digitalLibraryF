import { useEffect, useState } from "react";
import bookService from "../../services/bookServices";
import BookCard from "./BookCard";
import '../styles/BookGrid.scss';

export default function BookGrid() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        bookService.getBooks()
            .then(res => {
                const shuffled = shuffleArray(res.data)
                setBooks(shuffled);
            })
            .catch(err => {
                setError("failed to fetch books");
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    function shuffleArray(array) {
        return array
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)
    }

    if (loading) return <p>Loading books...</p>
    if (error) return <p>{error}</p>


    return (
        <div className="book-grid">
            {books.map(book => (
                <BookCard key={book.id} book={book} />
            ))}
        </div>
    );
}