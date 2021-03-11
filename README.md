# simple-alerts for nodecg

This is WIP and not for use in production but you are welcome to help me finish it.

The goal is to be able to set up multiple alerts for any purpose for live streams.
There will be multiple layouts and customisation options.
The alerts will be triggered/activated by other software/scripts using a rest API.

## known issues/To do

* Finish creating the API. (Partially implemented for testing)
* Add "none" option to graphics and sounds
* Add a queue for the alerts.
* Add a "test" to the dashboard panel.
* Add a few different layouts
    * Media left, message center
    * media left, message center top
    * media left, message top left
    * media fullscreen, message center (This is currently the default)
* Allow custom CSS (The menu for this is just a placeholder)
* Add show/hide button for each alert on dashboard to make it more tidy.
* Customisable fonts and colours (The menu for this is just a placeholder).
* Stop alert from playing when page loads.
* Make alerts fade in and out
* Create a simple tip/donation ticker (this might be better as a separate bundle).
* Add form validation, incorrect values can make the alert get stuck in a loop.
