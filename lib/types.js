/**
 * Kanso document types to export
 */

var Type = require('couchtypes/types').Type,
    fields = require('couchtypes/fields'),
    permissions = require('couchtypes/permissions'),
    widgets = require('couchtypes/widgets');


exports.keyresult = new Type('keyresult', {
	fields: {
		results: fields.string()
	}
});

// a objective
exports.objective = new Type('objective', {


	// a objective has the following fields/schema
    fields: {
        created: fields.createdTime(),
		creator: fields.creator(),
        goal: fields.string({widget: widgets.textarea({cols: 40, rows: 1})}) ,
        keyresults: fields.embedList({
        	type: exports.keyresult

        })
    }
});

exports.OKR = new Type('OKR', {
	fields: {
		created: fields.createdTime(),
		creator: fields.creator(),
		quarter: fields.number(),
		objectives: fields.embedList({
			type: exports.objective
		})
	}
});


// a login
exports.login = new Type('login', {

	// we need a username and password to login a user
    fields: {
        user: fields.string(),
        pass: fields.string(),
    }
});

