import { useState } from "react";

const Login = () => {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const TogglePassword = () => {
        setShowPassword((prevs) => !prevs);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="email"
                placeholder="Email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <i className="toggle-password" onClick={TogglePassword}>aa</i>
            <button type="submit"></button>
        </form>
    );
}

export default Login
