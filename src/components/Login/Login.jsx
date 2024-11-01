import { useState } from "react";
import styles from './Login.module.scss';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validationMessage, setValidationMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setValidationMessage('Please enter a valid email address.');
            return;
        }

        console.log('Email:', email);
        console.log('Password:', password);

        // Clear input fields and validation message
        setEmail('');
        setPassword('');
        setValidationMessage('');
    };

    return (
        <section className={styles.loginStyle}>
            <div className={styles.loginContainer}>
                <h2>Login</h2>
                <form onSubmit={handleSubmit} className={styles.loginForm}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        {validationMessage && (
                            <p className={styles.errorMessage}>{validationMessage}</p>
                        )}
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.buttonContainer}>
                        <button className={styles.signUpButton}>Sign up</button>
                        <button type="submit" className={styles.submitButton}>Submit</button>
                    </div>
                </form>
            </div>
        </section>
    );
};
