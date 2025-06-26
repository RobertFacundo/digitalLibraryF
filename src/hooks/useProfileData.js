import { useState, useEffect, useCallback } from 'react';

export default function useProfileData() {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const refreshUserData = useCallback((updatedUserObject = null) => {
        setLoading(true);
        try {
            let userToSetInState = null;

            if(updatedUserObject){
                userToSetInState = updatedUserObject;
            }else{
                const storedUser = localStorage.getItem('user');
                if(storedUser){
                    userToSetInState = JSON.parse(storedUser)
                }
            }

            if(userToSetInState){
                setCurrentUser(userToSetInState);
                setError(null)
            }else{
                setError('No User data found, Please log in');
                setCurrentUser(null);
            }
        } catch (error) {
            console.error("Failed to parse user data from localStorage during refresh:", error)
            setError("Failed to load user data after update. Data might be corrupted.");
            setCurrentUser(null);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        refreshUserData()
    }, [refreshUserData])

    return {
        currentUser,
        loading,
        error,
        refreshUserData,
    }
}