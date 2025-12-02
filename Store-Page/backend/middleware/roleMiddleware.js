export const requireRole = (role) => {
  return (req, res, next) => {
    const userRole = req.user?.user_metadata?.role;
    if (userRole !== role) {
      return res.status(403).json({ error: "Access denied: Käyttäjällä ei ole oikeutta suorittaa toimintoa" });
    }
    next();
  };
};
