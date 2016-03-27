/*
   Jaypha Spinner.
   Copyright 2106 Jaypha.
   Distributed under the Boost license.
*/

/* Adds spinner buttons to a widget */

(function($){


$.fn.jaySpinner = function(o)
{
  if (typeof o == "undefined") o = {};

  return this.each(function()
  {
    var self = this;
    var d = $(this).data("jaySpinnerOptions") || $.jaySpinner.defOptions;
    var options = $.extend({}, d, o);
    $(this).data("jaySpinnerOptions", options);

    var width = $(this).outerWidth();
    var docFrag = $("<span class='jaySpinner' style='display:inline-block;'></span>");
    if (options.controlWidth) docFrag.width(width);
    $(this).wrap(docFrag).wrap("<span style='display:table; width: 100%'></span>");
    $(this).css("display","table-cell").css("width","100%");
    $(this).on("keydown", function(event) { $.jaySpinner.keydown($(self),event); });

    if (options.spinner == "both" || options.spinner == "down")
    {
      var spin = $("<span style='display:table-cell' class='jaySpinner-down'>&#9660;</span>");
      spin.on("click", function(){ $.jaySpinner.increment($(self),-1,"step");}); 
      $(this).before(spin);
    }
    if (options.spinner == "both" || options.spinner == "up")
    {
      var spin = $("<span style='display:table-cell' class='jaySpinner-up'>&#9650;</span>");
      spin.on("click", function(){ $.jaySpinner.increment($(self),1,"step");});
      $(this).after(spin);
    }
  });
};

$.jaySpinner = 
{
  defOptions: 
  {
    spinner: "both",
    step: 1, // singular increment/decrement
    page: 10, // jump increment/decrement
    maximum: null, // infinite.
    minimum: null, // infinite.
    precision: null, // no enforced precision.
    controlWidth: true // shrinks width of widget to preserve overall width
  },

  increment: function(jqo, sign, increment)
  {
    var options = jqo.data("jaySpinnerOptions");
    var diff = sign * options[increment];
    var v = jqo.val();
    if (v === '')
      v = 0;
    else
      v = parseInt(v);
    v += diff;
    if (options.minimum !== null && v < options.minimum) v = options.minimum;
    if (options.maximum !== null && v > options.maximum) v = options.maximum;
    jqo.val(v);
  },

  keydown: function(jqo,event)
  {
    switch (event.which)
    {
      case 38: // Up key
        $.jaySpinner.increment(jqo,1,"step");
        break;
      case 40: // Down key
        $.jaySpinner.increment(jqo,-1,"step");
        break;
      case 33: //pgUp key
        $.jaySpinner.increment(jqo,1,"page");
        break;
      case 34: // pgDn key
        $.jaySpinner.increment(jqo,-1,"page");
        break;
      default: // All others.
        break;
    }
  }
}

})(jQuery);
