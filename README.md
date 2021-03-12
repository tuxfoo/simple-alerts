# simple-alerts for nodecg

This is WIP. While you can use this in production, this bundle does not do any sort of user input validation on the form; an incorrect value could result in the alerts not playing.

Contributions and improvements are welcome.

The goal is to be able to set up multiple alerts for any purpose for live streams.
There will be multiple layouts and customisation options.
The alerts will be triggered/activated by other software/scripts using a rest API.

## known issues/To do

* Add a "test" to the dashboard panel.
* Add show/hide button for each alert on dashboard to make it more tidy.
* Add customisable fonts and sizes(For now, this can be done via customCSS).
* Make alerts fade in and out (Maybe some other animations too)
* Add form validation, incorrect values can make the alert get stuck in a loop or not work at all.
* Create a simple tip/donation ticker (this might be better as a separate bundle).

## How to send an alert using cURL

Make sure to provide an alert name, place keywords in brackets. Keywords will be animated and are a different colour.
```
curl -X POST -H "Content-Type:application/json" http://localhost:9090/simple-alerts/alert -d '{"name":"alertname", "message":"(Billy) tipped (20) LBC"}'
```
