import { useEffect, useState, useCallback } from "react";
import Masonry from "react-masonry-css";
import bookService from "../../services/bookServices";
import BookCard from "./BookCard";
import '../styles/BookGrid.scss';

export default function BookGrid() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleLibraryUpdate = useCallback((updatedUser) => {
        if (updatedUser && updatedUser.books) {
            localStorage.setItem('user', JSON.stringify(updatedUser))
            console.log("LocalStorage 'user' updated from BookGrid after add.");
        }
    }, [])

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

    const breakpointColumnsObj = {
        default: 5,
        1100: 4,
        700: 3,
        500: 1,
    }

    if (loading) return <p>Loading books...</p>
    if (error) return <p>{error}</p>


    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
        >
            {books.map((book, index) => (
                <BookCard 
                key={book.id} 
                book={book} 
                index={index} 
                isLibraryView={false}
                onLibraryUpdate={handleLibraryUpdate}
                />
            ))}
        </Masonry>
    );
}