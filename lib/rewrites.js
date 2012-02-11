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
    {from: '/addobjective', to: '_update/addobjective', method: 'POST'},
    {from: '/addobjective', to: '_show/addobjective'},

	// Change a objective
    {from: '/changeobjective/:id', to: '_update/changeobjective/:id', method: 'POST'},
    {from: '/changeobjective/:id', to: '_show/changeobjective/:id'},

	// Delete a objective
    {from: '/delete/:id', to: '_update/delobjective/:id', method: 'POST'},

	// List all objectives
    {from: '/objectives', to: '_list/objectives/objectives_by_created'},

	// Show one objective
    {from: '/:id', to: '_show/objective/:id'},

	// Show the start page
    {from: '/', to: '_show/start'},

	// Fall back to 404 page
    {from: '*', to: '_show/not_found'}
];
