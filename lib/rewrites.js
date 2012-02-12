/**
 * Rewrite settings to be exported from the design doc
 */

// The position of rewrites does matter!
module.exports = [

    {from: '/static/*', to: 'static/*'},

	// Login
    {from: '/login', to: '_update/login', method: 'POST'},
    {from: '/login', to: '_show/login'},
    {from: '/loginok', to: '_show/loginok'},

	// Logout
    {from: '/logout', to: '_update/logout'},
    {from: '/logoutok', to: '_show/logoutok'},

	// Add a objective
    {from: '/addOKR', to: '_update/addOKR', method: 'POST'},
    {from: '/addOKR', to: '_show/addOKR'},

	// Change a objective
    {from: '/changeOKR/:id', to: '_update/changeOKR/:id', method: 'POST'},
    {from: '/changeOKR/:id', to: '_show/changeOKR/:id'},

	// Delete a objective
    {from: '/delete/:id', to: '_update/delOKR/:id', method: 'POST'},

	// List all objectives
    {from: '/OKRs', to: '_list/OKRs/OKRs_by_created'},

	// Show one objective
    {from: '/:id', to: '_show/OKR/:id'},

	// Show the start page
    {from: '/', to: '_show/start'},

	// Fall back to 404 page
    {from: '*', to: '_show/not_found'}
];
