'use strict';

module.exports = function (nodecg) {
	// An array of alerts and their settings
	nodecg.Replicant('alerts', { defaultValue: [{name: 'Alert1', message: '', duration: 5000, media: 'none', sound: 'none', layout: 'banner', volume: '80', keywordColour: '#4FE639', fontColour: '#FFFFFF', customCSS: '', font: '"Palanquin"', fontWeight: '800', fontSize: '64'}] });
	// The currently active aleart, changed via the API
	nodecg.Replicant('activeAlert', { defaultValue: 0, persistent: false });
	// Will use an array to queue up alerts
	nodecg.Replicant('alertQueue', { defaultValue: [], persistent: false });
	// Will use this to prevent alerts overlapping
	nodecg.Replicant('isAlertPlaying', { defaultValue: false, persistent: false });
	// Current alert message is stored here
	nodecg.Replicant('activateAlert', { defaultValue: { activate: false, message: "", alert: 0 }, persistent: false});

	const router = nodecg.Router();
	const alerts = nodecg.Replicant('alerts');
	const alertQueue = nodecg.Replicant('alertQueue');
	const activeAlert = nodecg.Replicant('activeAlert');
	const isAlertPlaying = nodecg.Replicant('isAlertPlaying');

	router.post('/alert', (req, res) => {
			const alertName = req.body.name;
			const message = req.body.message;
			alerts.value.forEach(findAlert);
			res.send("Alert will be added to queue");
			function findAlert(value, index, array) {
				if ( value.name == alertName ) {
					console.log(value.message);
					// Add message to Queue
					if (typeof req.body.attachMsg != 'undefined') {
						alertQueue.value.push({message: message, attachedMsg: req.body.attachMsg, alert: index});
					} else {
						alertQueue.value.push({message: message, alert: index});
					}
				}
			}
	});

	nodecg.mount('/simple-alerts', router); // The route '/my-bundle/customroute` is now available

	function activateAlert(message) {
			const activate = nodecg.Replicant('activateAlert');
			const activeAlert = nodecg.Replicant('activeAlert');
			var change = false;
			// Bool alway's changes, in case message's are the same.
			if (activate.value.activate == true ) {
				change = false;
			} else {
				change = true;
			}
			activeAlert.value = message.alert;
			if (typeof message.attachedMsg != 'undefined') {
				activate.value = { message: message.message, attachedMsg: message.attachedMsg, alert: message.alert, activate: change};
			} else {
				activate.value = { message: message.message, alert: message.alert, activate: change};
			}
	}

	alertQueue.on('change', value => {
		console.log(alertQueue.value);
		if ( isAlertPlaying.value == false && alertQueue.value.length > 0 ) {
			activateAlert(alertQueue.value[0]);
			//The graphics module sets this back to false when it is finished.
		}
	});

};
