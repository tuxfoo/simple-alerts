# simple-alerts for nodecg

This is WIP. While you can use this in production, this bundle does not do any sort of user input validation on the form; an incorrect value could result in the alerts not playing. It is recommended that you only run one instance of index.html at a time.

Contributions and improvements are welcome.

The goal is to be able to set up multiple alerts for any purpose for live streams.
There will be multiple layouts and customisation options.
The alerts will be triggered/activated by other software/scripts/bots using a rest API.

## known issues/To do

* Add a "test" to the dashboard panel.
* Make alerts fade in and out (Maybe some other animations too)
* Correctly repopulate the sound and graphics menu after new ones have been uploaded.
* Add form validation, incorrect values can make the alert get stuck in a loop or not work at all.
* Create a simple tip/donation ticker (this might be better as a separate bundle).

## How to send an alert using cURL

Make sure to provide an alert name, place keywords in brackets. Keywords will be animated and are a different colour.
```
curl -X POST -H "Content-Type:application/json" http://localhost:9090/simple-alerts/alert -d '{"name":"alertname", "message":"(Billy) tipped (20) LBC"}'
```

## Preview

* You can add as many alert's as you want
* The alert text is animated.
* You can change the layout, duration, colours and fonts.
* Upload your own sounds and animated graphics in the Assets tab.
* The Custom CSS is compatible with streamlabs customCSS.

![preview 1](https://github.com/tuxfoo/simple-alerts/blob/main/preview.jpg?raw=true)
![preview 2](https://github.com/tuxfoo/simple-alerts/blob/main/preview2.jpg?raw=true)
