import { useState } from "react";
import LibraryService from "../services/libraryServices";

export default function useBookActions(onLibraryUpdate) {
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState(null);

    const handleAddBook = async (bookId, bookTitle) => {
        setError(null);
        if (!LibraryService.getToken()) {
            alert("Por favor, inicia sesión para añadir libros a tu librería.");
            return;
        }
        setIsProcessing(true);
        try {
            const updatedUser = await LibraryService.addBook(bookId);
            console.log('Libro añadido a la librería, usuario actualizado:', updatedUser);
            if (onLibraryUpdate) {
                onLibraryUpdate(updatedUser);
            }
        } catch (error) {
            console.error('Error al añadir libro a la libreria', error)
            const errorMessage = error.response?.data?.detail || error.message;
            setError(errorMessage)
        } finally {
            setIsProcessing(false);
        }
    };

    const handleRemoveBook = async (bookId, bookTitle) => {
        setError(null);
        if (!LibraryService.getToken()) {
            alert("Debes iniciar sesión para eliminar libros.");
            return;
        }
        setIsProcessing(true);
        try {
            const updatedUser = await LibraryService.removeBook(bookId);
            console.log('Libro eliminado de la librería:', updatedUser);

            localStorage.setItem('user', JSON.stringify(updatedUser));
            console.log("LocalStorage 'user' updated from useBookActions after remove.");

            if (onLibraryUpdate) {
                onLibraryUpdate(updatedUser);
            }
        } catch (error) {
            console.error('Error al eliminar libro de la librería:', error);
            const errorMessage = error.response?.data?.detail || error.message;
            setError(errorMessage);
        } finally {
            setIsProcessing(false);
        }
    };
    return {
        isProcessing,
        handleRemoveBook,
        handleAddBook,
        error
    }
}