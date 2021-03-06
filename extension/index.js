'use strict';

module.exports = function (nodecg) {
	// An array of alerts and their settings
	nodecg.Replicant('alerts', { defaultValue: [{name: 'Alert1', message: '(name) just tipped (amount) (currency)', duration: 5000, media: "none" }] });
	// The currently active aleart, changed via the API
	nodecg.Replicant('activeAlert', { defaultValue: 0 });
};
