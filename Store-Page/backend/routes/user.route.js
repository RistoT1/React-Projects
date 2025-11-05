import express from "express";
import supabase from "../config/supabaseClient.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { requireRole } from "../middleware/roleMiddleware.js";

const router = express.Router();

// Signup
router.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { role: "user" }, 
    },
  });

  if (error) return res.status(400).json({ error: error.message });
  res.json({ message: "Rekisteröityminen onnistui", user: data.user });
});


// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) return res.status(400).json({ error: error.message });
  res.json({
    message: "Kirjautuminen onnistui",
    access_token: data.session.access_token,
    user: data.user,
  });
});

// Protected profile
router.get("/profile", authMiddleware, (req, res) => {
  res.json({ message: "pääsy sallittu", user: req.user });
});

// Admin-only route
router.get("/admin", authMiddleware, requireRole("admin"), (req, res) => {
  res.json({ message: "Tervetulloo admin!", user: req.user });
});

export default router;
