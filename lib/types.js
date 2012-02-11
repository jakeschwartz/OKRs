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
        a: fields.string({widget: widgets.textarea({cols: 40, rows: 1}), required: false}) ,
        b: fields.string({widget: widgets.textarea({cols: 40, rows: 1}), required: false}) ,
       	c: fields.string({widget: widgets.textarea({cols: 40, rows: 1}), required: false}) ,
        d: fields.string({widget: widgets.textarea({cols: 40, rows: 1}), required: false})     	
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

