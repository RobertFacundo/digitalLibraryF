import useAuthForm from "../../hooks/useAuthForm";

export default function Authentication() {
    const {
        formData,
        handleChange,
        handleSubmit,
        toggleMode,
        isSignup,
        error,
        loading,
    } = useAuthForm();

    return (
        <div>
            <h2>Authentication</h2>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                name="username"
                placeholder="username"
                value={formData.username}
                onChange={handleChange}
                required
                />
                <input 
                type="password" 
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Loading...' :isSignup ? 'Create Account' : 'Log In'}
                </button>
            </form>
            {error && <p>{error}</p>}
            <p>
                {isSignup ? (
                    <>
                    Already have an account?{' '}
                    <span onClick={toggleMode}>
                        Log In
                    </span>
                    </>
                ):(
                    <>
                    No account?{' '}
                    <span onClick={toggleMode}>
                        Sign Up
                    </span>
                    </>
                )}
            </p>
        </div>
    )
}