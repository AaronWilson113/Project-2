const withAuth = (req, res, next) => {
    //setting up middleware for authorization
    if (!req.session.loggedIn) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;