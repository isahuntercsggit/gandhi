'use strict';

var util = require('util');
var EmbeddedCollection = require('../../EmbeddedCollection');
var Assignment = require('../../models/cycle/Assignment');

function Assignments (data, parent) {
	this.model = Assignment;
	EmbeddedCollection.call(this, data, parent);
}

util.inherits(Assignments, EmbeddedCollection);

// TODO: check authorizations for cycle/assignments:read

module.exports = Assignments;