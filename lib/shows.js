/**
 * Show functions to be exported from the design doc.
 */

var templates = require('duality/templates'),
    forms = require('couchtypes/forms'),
    types = require('./types');

// Show the loginok page
exports.loginok = function (doc, req) {

    return {
		title: 'Login performed',
		content: templates.render('loginok.html', req, {})
    };
};

// Show the logoutok page
exports.logoutok = function (doc, req) {

    return {
		title: 'Logout performed',
		content: templates.render('logoutok.html', req, {})
    };
};

// Show login form
exports.login = function (doc, req) {

	// New form
	var form = new forms.Form(types.login, null, {});

    // render the markup for a login form
    var content = templates.render('login.html', req, {
        form_title: 'Login',
		form: form.toHTML(req)
    });

	// return the title and the rendered form
    return {
		title: 'Login',
		content: content
	};
};

// Show add a objective form
exports.addobjective = function (doc, req) {

	// New form
	var form = new forms.Form(types.objective, null, {
        exclude: ['created', 'creator']
    });

    // render the markup for a add form
    var content = templates.render('addobjective.html', req, {
        form_title: 'Add new objective',
		form: form.toHTML(req)
    });

	// return the title and the rendered form
    return {
		title: 'Add new objective',
		content: content
	};
};

// Show change a objective form
exports.changeobjective = function (doc, req) {

		// New form populated with values from the doc that should be changed
		var form = new forms.Form(types.objective, doc, {
    	    exclude: ['created']
    	});

    	// render the markup for a change form
    	var content = templates.render('changeobjective.html', req, {
    	    form_title: 'Change objective',
			form: form.toHTML(req)
    	});
	
		// return the title and the rendered form
    	return {
			title: 'Change objective',
			content: content
		};
};

// Show one objective
exports.objective = function (doc, req) {
    return {
        title: doc.title,
        content: templates.render('objective.html', req, doc)
    };
};

// Show the start page
exports.start = function (doc, req) {

    return {
		title: 'Startpage',
		content: templates.render('start.html', req, {})
    };
};

// Show 404 - not found page
exports.not_found = function (doc, req) {
    return {
        title: '404 - Not Found',
        content: templates.render('404.html', req, {})
    };
};
