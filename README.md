# simple-alerts for nodecg

This is WIP and not for use in production but you are welcome to help me finish it.

The goal is to be able to set up multiple alerts for any purpose for live streams.
There will be multiple layouts and customisation options.
The alerts will be triggered/activated by other software/scripts using a rest API.

## known issues/To do

* Finish creating the API. (Partially implemented for testing)
* Add a "test" to the dashboard panel.
* Allow custom CSS (The menu for this is just a placeholder)
* Add show/hide button for each alert on dashboard to make it more tidy.
* Add customisable fonts and sizes.
* Make alerts fade in and out
* Add form validation, incorrect values can make the alert get stuck in a loop.
* Create a simple tip/donation ticker (this might be better as a separate bundle).

## How to send an alert using cURL

Make sure to provide an alert name, place keywords in brackets. Keywords will be animated and are a different colour.
```
curl -X POST -H "Content-Type:application/json" http://localhost:9090/simple-alerts/alert -d '{"name":"alertname", "message":"(Billy) tipped (20) LBC"}'
```
