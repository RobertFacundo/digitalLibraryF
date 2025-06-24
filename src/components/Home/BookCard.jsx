import { useState } from 'react';
import '../styles/BookCard.scss';

export default function BookCard({ book }) {
    const [expanded, setExpanded] = useState(false)

    return (
        <div className='book-card' onClick={() => setExpanded(!expanded)}>
            <img src={book.coverImageUrl} alt={`Cover of ${book.title}`} className='book-card__image' />
            <h3 className='book-card__title'>{book.title}</h3>
            {expanded && (
                <div className='book-card__details'>
                    <p className='book-card__author-year'>{book.author} - {book.year}</p>
                    <p className='book-card__synopsis'>
                        {book.synopsis}
                    </p>
                    <div className='book-card__categories'>
                        {book.categories.map(cat => (
                            <span key={cat} className='book-card__category'>{cat}</span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}