/**
 * Kanso document types to export
 */

var Type = require('couchtypes/types').Type,
    fields = require('couchtypes/fields'),
    permissions = require('couchtypes/permissions'),
    widgets = require('couchtypes/widgets');


exports.keyResult = new Type('keyResults', {
	fields: {
		kr: fields.string({
			widget: widgets.textarea({cols: 40, rows: 1})
			}),
		quantGoal: fields.number(),
		quantGoalTerms: fields.string(),
	}
});

// a objective
exports.objective = new Type('objectives', {


	// a objective has the following fields/schema
    fields: {
        created: fields.createdTime(),
		creator: fields.creator(),
        goal: fields.string({widget: widgets.textarea({cols: 40, rows: 1})}) ,
        keyResult: fields.embedList({
        	required: false,
        	type: exports.keyResult	//THIS IS WHERE I'M HAVING PROBLEMS
        	
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

