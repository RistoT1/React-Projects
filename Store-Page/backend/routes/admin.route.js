import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { requireRole } from "../middleware/roleMiddleware.js";

const router = express.Router();

// Promote user to admin (only admins can call this)
router.put("/promote/:id", authMiddleware, requireRole("admin"), async (req, res) => {
  const userId = req.params.id;

  // Use the service role client (you must use service key for this)
  const { createClient } = await import("@supabase/supabase-js");
  const serviceClient = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );

  const { data, error } = await serviceClient.auth.admin.updateUserById(userId, {
    user_metadata: { role: "admin" },
  });

  if (error) return res.status(400).json({ error: error.message });
  res.json({ message: "User promoted to admin", user: data.user });
});

export default router;
