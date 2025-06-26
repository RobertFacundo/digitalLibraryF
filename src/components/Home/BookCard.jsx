import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import '../styles/BookCard.scss';
import useBookActions from '../../hooks/useBookActions';

export default function BookCard({ book, index, isLibraryView, onLibraryUpdate }) {
    const [expanded, setExpanded] = useState(false)
    const { isProcessing, handleAddBook, handleRemoveBook } = useBookActions(onLibraryUpdate)

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    }

    const ArrowIcon = ({ className }) => (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
    );

    const onClickAdd = (e) => {
        e.stopPropagation();
        handleAddBook(book.id, book.title);
    };
    const onClickRemove = (e) => {
        e.stopPropagation();
        handleRemoveBook(book.id, book.title)
    }

    return (
        <motion.div
            className='book-card'
            onClick={() => setExpanded(!expanded)}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{
                delay: index * 0.2,
                duration: 1.1,
                ease: "easeOut"
            }}
        >
            <img src={book.coverImageUrl} alt={`Cover of ${book.title}`} className='book-card__image' />
            <h3 className='book-card__title'>
                {book.title}
                {!isLibraryView && (
                    <button
                        className='book-card__action-btn book-card__add-btn'
                        onClick={onClickAdd}
                        disabled={isProcessing}
                        title={isProcessing ? 'Adding' : 'Add to library'}
                    >
                        📙
                    </button>
                )}
                {isLibraryView && (
                    <button
                        className='book-card__action-btn book-card__remove-btn'
                        onClick={onClickRemove}
                        disabled={isProcessing}
                        title={isProcessing ? 'Removing' : 'Remove from library'}
                    >
                        📙
                    </button>
                )}
            </h3>
            <AnimatePresence>
                {expanded && (
                    <motion.div
                        className='book-card__details'
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 1.1, ease: 'easeInOut' }}
                    >
                        <p className='book-card__author-year'>{book.author} - {book.year}</p>
                        <p className='book-card__synopsis'>
                            {book.synopsis}
                        </p>
                        <div className='book-card__categories'>
                            {book.categories.map(cat => (
                                <span key={cat} className='book-card__category'>{cat}</span>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <div className={`book-card__expand-icon ${expanded ? 'expanded' : ''}`}>
                <ArrowIcon />
            </div>
        </motion.div>
    );
}