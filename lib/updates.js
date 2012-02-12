/**
 * Update functions to be exported from the design doc.
 */

var templates = require('duality/templates'),
    forms = require('couchtypes/forms'),
    utils = require('duality/utils'),
	db = require('db'),
	session = require('session'),
    types = require('./types');


// a login is performed
exports.login = function (doc, req) {

	// bind login type to form
	var form = new forms.Form(types.login, null, {
	});

	// parse the request data and check validation and permission functions
    form.validate(req);	

	// log the user in
	if (form.values.user && form.values.pass) {
		session.login(form.values.user, form.values.pass, function (err) {});
    }

	// redirect user to loginok page
	return [null, utils.redirect(req, '/loginok')];
};

// a logout is performed
exports.logout = function (doc, req) {

	// log the user out
	session.logout();

	// redirect user to logoutok page
	return [null, utils.redirect(req, '/logoutok')];
};

// a objective should be deleted
exports.delOKR = function (doc, req) {
	
	// remove the document with the objective
	db.removeDoc(doc ,function (err, resp) {
	
	});
    
	// redirect user to list with objectives
	return [null, utils.redirect(req, '/OKRs')];

};

// a objective should be added
exports.addOKR = function (doc, req) {

	// bind objective type to form
    var form = new forms.Form(types.OKR, null, {
        exclude: ['created']
    });

	// parse the request data and check validation and permission functions
    form.validate(req);

 if (form.isValid()) {
        // the form is valid, save the document and redirect to the new page
        return [form.values, utils.redirect(req, '/' + form.values._id)];
    }
    else {
        // the form is not valid, so render it again with error messages
        var content = templates.render('addOKR.html', req, {
            form_title: 'Add new OKR',
            form: form.toHTML(req)
        });
        // return null as the first argument so the document isn't saved
        return [null, {content: content, title: 'Add new OKR'}];
    }
};

// a objective should be changed
exports.changeOKR = function (doc, req) {

	// bind objective type to form
    var form = new forms.Form(types.OKR, doc, {
        exclude: ['created']
    });

	// parse the request data and check validation and permission functions
    form.validate(req);

 if (form.isValid()) {
        // the form is valid, save the document and redirect to the changed page
        return [form.values, utils.redirect(req, '/' + form.values._id)];
    }
    else {
        // the form is not valid, so render it again with error messages
        var content = templates.render('changeOKR.html', req, {
            form_title: 'Change OKR',
            form: form.toHTML(req)
        });
        // return null as the first argument so the document isn't saved
        return [null, {content: content, title: 'Change OKR'}];
    }
};
