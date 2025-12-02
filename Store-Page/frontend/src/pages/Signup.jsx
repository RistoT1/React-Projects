import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import { supabase } from "../lib/supabaseClient";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [message, setMessage] = useState("");
  const { user, loading } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) {
      const role = user.user_metadata?.role;
      if (role === "admin") navigate("/create");
      else navigate("/");
    }
  }, [user, loading, navigate]);

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      setMessage("Passwords do not match!");
      return;
    }

    setMessage("Signing up...");

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setMessage(`Error: ${error.message}`);
      return;
    }

    setMessage(
      "Signup successful! Please check your email to confirm your account."
    );
    setEmail("");
    setPassword("");
    setPasswordConfirm("");
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", margin: "5px 0" }}
          />
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", margin: "5px 0" }}
          />
        </div>

        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", margin: "5px 0" }}
          />
        </div>

        <button
          type="submit"
          style={{ padding: "10px 20px", marginTop: "10px" }}
        >
          Sign Up
        </button>
      </form>

      {message && <p style={{ marginTop: "10px" }}>{message}</p>}
    </div>
  );
}

export default Signup;
