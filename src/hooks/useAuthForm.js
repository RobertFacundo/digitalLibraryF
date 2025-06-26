import { useState } from "react";
import authService from "../services/AuthServices";
import { useNavigate } from "react-router-dom";

export default function useAuthForm() {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [isSignup, setIsSignup] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const toggleMode = () => {
        setIsSignup(prev => !prev);
        setError(null);
    };

    const handleChange = (e) => {
        console.log('handleChange', e.target.name, e.target.value);
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        console.log('handleSubmit called with data:', formData);
        setLoading(true);
        setError(null);
        try {
            const response = isSignup
                ? await authService.signup(formData)
                : await authService.login(formData);
            console.log('✅ Auth successful:', response.data);
            localStorage.setItem('access_token', response.data.access_token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            
            navigate('/Home')
        } catch (error){
            console.error('Auth error:', error);
            setError(error.response?.data?.message || 'Unexpected error')
        } finally {
            setLoading(false)
        }
    };

    return {
        formData,
        handleChange,
        handleSubmit,
        toggleMode,
        isSignup,
        error,
        loading
    };
}