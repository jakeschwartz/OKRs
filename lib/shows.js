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
exports.addOKR = function (doc, req) {

	// New form
	var form = new forms.Form(types.OKR, null, {
        exclude: ['created', 'creator']
    });
    
 


    // render the markup for a add form
    var content = templates.render('addOKR.html', req, {
        form_title: 'Add new OKR',
		form: form.toHTML(req)
    });
    

	// return the title and the rendered form
    return {
		title: 'Add new OKRs',
		content: content
	};
};

// Show change a objective form
exports.changeOKR = function (doc, req) {

		// New form populated with values from the doc that should be changed
		var form = new forms.Form(types.OKR, doc, {
    	    exclude: ['created']
    	});

    	// render the markup for a change form
    	var content = templates.render('changeOKR.html', req, {
    	    form_title: 'Change OKR',
			form: form.toHTML(req)
    	});
	
		// return the title and the rendered form
    	return {
			title: 'Change OKR',
			content: content
		};
};

// Show one objective
exports.OKR = function (doc, req) {
    return {
        title: doc.title,
        content: templates.render('OKR.html', req, doc)
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
