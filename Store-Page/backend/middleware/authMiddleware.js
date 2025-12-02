import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

//SERVICE ROLE KEY (ÄLÄ KÄYTÄ FRONTISSA)
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Puuttuva tai virheellinen auth header" });
    }

    const token = authHeader.split(" ")[1];

    // tarkistaa tokenin
    const { data, error } = await supabase.auth.getUser(token);

    if (error || !data?.user) {
      return res.status(401).json({ error: "Virheellinen tai vanhentunut token" });
    }

    req.user = data.user; // attach user info
    next();
  } catch (err) {
    console.error("Auth middleware error:", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
