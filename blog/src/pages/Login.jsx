import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [selectedInput, setSelectedInput] = useState('');
  const [isEdge, setIsEdge] = useState(false);

  useEffect(() => {
    const ua = window.navigator.userAgent;
    setIsEdge(ua.includes("Edg/"));
  }, []);

  const TogglePassword = () => setShowPassword(prev => !prev);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      alert(error.message);
    } else {
      alert('Logged in successfully!');
      console.log('User session:', data.session);
      // Redirect or store session as needed
    }
  };

  return (
    <div className="w-full max-w-md bg-white rounded p-12 flex flex-col gap-24 h-screen max-h-[70vh] justify-start shadow-md text-center">
      <h1 className="text-5xl font-bold">Login</h1>
      <form onSubmit={handleSubmit} className="border-2 border-gray-400 p-6 flex flex-col gap-4 w-full max-w-md mx-auto mt-10 bg-white rounded shadow-md">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          onFocus={() => setSelectedInput('email')}
          onBlur={() => setSelectedInput('')}
          required
          autoComplete="username"
          className={`border-2 border-gray-400 p-2 rounded-sm transition-transform duration-200
          hover:scale-105 ${selectedInput === 'email' ? 'scale-105 border-gray-600' : ''} hover:border-gray-600 outline-none`}
        />

        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onFocus={() => setSelectedInput('password')}
            onBlur={() => setSelectedInput('')}
            required
            autoComplete="current-password"
            className={`w-full border-2 border-gray-400 p-2 rounded-sm transition-transform duration-200
            hover:scale-105 ${selectedInput === 'password' ? 'scale-105 border-gray-600' : ''} hover:border-gray-600 outline-none`}
          />
          {!isEdge && (
            <button
              type="button"
              onClick={TogglePassword}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          )}
        </div>

        <button type="submit" className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
          Login
        </button>
      </form>
      <a href="">Register</a>
    </div>
  );
};

export default Login;
