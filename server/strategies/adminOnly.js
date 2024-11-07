const adminOnly = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
      next(); // Allow access if the user has the 'admin' role
    } else {
      res.status(403).send('Access denied. Admins only.');
    }
  };
  
  module.exports = adminOnly;
  