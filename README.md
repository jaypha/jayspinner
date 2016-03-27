# jayspinner

Adds spinner buttons to a widget to enable easy increment and decrement
operations.

Also adds a keydown event handler to allow up/down arrow keys and page up/down
keys to cause incrementation and decrementation.

Requires
--------

jQuery (http://jquery.com/)

Usage
-----

<jQueryObject>.jaySpinner(<options>);

options include:

spinner: "up", "down" or "both". Which spinner buttons to add. Default: "both"
step: Amount to increment/decrement when pressing buttons or arrow keys. Default 1.
page: Amount to increment/decrement when pressing page up/down keys. Default 10.
maximum: Maximum number allowable. Default: null (no maximum)
minimum: Minimum number allowable. Default: null (no minimum)
controlWidth: If true, will shrink the text box so that the width of widget + buttons is the same. is the same. Default: true.
