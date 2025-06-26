import React from "react";
import Masonry from "react-masonry-css";
import BookCard from "../Home/BookCard";
import useProfileData from "../../hooks/useProfileData";
import './ProfileGrid.scss'

export default function ProfileGrid() {
    const { currentUser, loading, error, refreshUserData } = useProfileData();

    const breakpointColumnsObj = {
        default: 5,
        1100: 4,
        700: 3,
        500: 1,
    };

    // --- Renderizado Condicional de la UI del Perfil ---
    if (loading) {
        return <p className="profile-message">Cargando perfil...</p>;
    }

    if (error) {
        return <p className="profile-message error-message">{error}</p>;
    }

    if (!currentUser) {
        return <p className="profile-message">Por favor, inicia sesión para ver tu perfil.</p>;
    }

    return (
        <div className="profile-container">
            {currentUser.books && currentUser.books.length > 0 ? (
                <>
                    <h2 className="library-title">Your library</h2>
                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column"
                    >
                        {currentUser.books.map((book) =>
                        (<BookCard
                            key={book.id}
                            book={book}
                            isLibraryView={true} // Indica a BookCard que estamos en la vista de librería
                            onLibraryUpdate={refreshUserData} // Pasa el callback para actualizar el estado del usuario
                        />
                        ))}
                    </Masonry>
                </>
            ) : (
                <p className="no-books-message">
                    You haven't added any books to your library yet <br />
                    ¡Explore and add your favorites!
                </p>
            )}
        </div>
    );
}