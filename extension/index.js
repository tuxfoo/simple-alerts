'use strict';
var express = require('express');
var app = express();

module.exports = function (nodecg) {
	// An array of alerts and their settings
	nodecg.Replicant('alerts', { defaultValue: [{name: 'Alert1', message: '(name) just tipped (amount) (currency)', duration: 5000, media: "none" }] });
	// The currently active aleart, changed via the API
	nodecg.Replicant('activeAlert', { defaultValue: 0 });
};


module.exports = function (nodecg) {
    const router = nodecg.Router();
		const alerts = nodecg.Replicant('alerts');
    router.get('/test', (req, res) => {
        res.send('OK!');
    });

		router.post('/alert', (req, res) => {
				//alerts[0].value.name = "Tada";
				const data = req.body.name;
				const message = req.body.message;
				alerts.value[0].message = message;
				alerts.value[0].name = data;
				res.send("Done " + data);
		});

    nodecg.mount('/simple-alerts', router); // The route '/my-bundle/customroute` is now available
};
