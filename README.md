# simple-alerts for nodecg

This is WIP. While you can use this in production, this bundle does not do any sort of user input validation on the form; an incorrect value could result in the alerts not playing. It is recommended that you only run one instance of index.html at a time.

Contributions and improvements are welcome.

The goal is to be able to set up multiple alerts for any purpose for live streams.
There will be multiple layouts and customisation options.

This bundle is only responsible for creating and rendering alerts. The alerts will be triggered/activated by other bundles/software/scripts/bots using a rest API.

Currently there is a connector for the following streaming services.
* Odysee https://github.com/tuxfoo/odysee-simple-alerts-connector

## known issues/To do

* Make alerts fade in and out (Maybe some other animations too)
* Add form validation, incorrect values can make the alert get stuck in a loop or not work at all.

## How to send an alert using cURL

Make sure to provide an alert name, place keywords in brackets. Keywords will be animated and are a different colour.
```
curl -X POST -H "Content-Type:application/json" http://localhost:9090/simple-alerts/alert -d '{"name":"alertname", "message":"(Billy) tipped (20) LBC"}'
```
You can attach a message using "attachMsg"  eg;
```
curl -X POST -H "Content-Type:application/json" http://localhost:9090/simple-alerts/alert -d '{"name":"alertname", "message":"(Billy) tipped (20) LBC", "attachMsg": "That was awesome"}'
```

## How to send an alert using invoke-webrequest (WINDOWS PowerShell)
Make sure to provide an alert name, place keywords in brackets. Keywords will be animated and are a different colour.
```
invoke-webrequest -Uri http://localhost:9090/simple-alerts/alert -Method POST -Headers @{'Content-Type' = 'application/json; charset=utf-8'} -Body '{"name":"alertname", "message":"(Billy) tipped (20) LBC"}' -UseBasicParsing
```

## Preview

* You can add as many alert's as you want
* The alert text is animated.
* You can change the layout, duration, colours and fonts.
* Upload your own sounds and animated graphics in the Assets tab.
* The Custom CSS is compatible with streamlabs customCSS.

![preview 1](https://github.com/tuxfoo/simple-alerts/blob/main/preview.jpg?raw=true)
![preview 2](https://github.com/tuxfoo/simple-alerts/blob/main/preview2.jpg?raw=true)
