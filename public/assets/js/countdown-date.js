( function($) {
  'use strict';  
$(function(e) {
/*------------------------------------------------------------------
	Event Start Countdown Js
	-------------------------------------------------------------------*/
	
	var endDate = "December 25, 2021";
	$('.event_countdown').countdown({
	  date: endDate,
	  render: function(data) {
		$(this.el).html("<ul class='list-style-none'><li><div class='time-box'><strong>" + this.leadingZeros(data.days, 2) + "</strong> <span class='countdown-period'>Days</span></div></li><li><div class='time-box'><strong>" + this.leadingZeros(data.hours, 2) + "</strong> <span class='countdown-period'>Hours</span></div></li><li><div class='time-box'><strong>" + this.leadingZeros(data.min, 2) + " </strong><span class='countdown-period'>Minutes</span></div></li><li><div class='time-box'><strong>" + this.leadingZeros(data.sec, 2) + " </strong><span class='countdown-period'>Seconds</span></div></li></ul>");
	  }
	});
	
/*------------------------------------------------------------------
	Coming Soon Countdown Js
	-------------------------------------------------------------------*/
	
	var endDate = "December 25, 2021";
	$('.countdown').countdown({
	  date: endDate,
	  render: function(data) {
		$(this.el).html("<ul class='list-style-none'><li><div class='time-box'><strong>" + this.leadingZeros(data.days, 2) + "</strong> <span class='countdown-period'>Days</span></div></li><li><div class='time-box'><strong>" + this.leadingZeros(data.hours, 2) + "</strong> <span class='countdown-period'>Hours</span></div></li><li><div class='time-box'><strong>" + this.leadingZeros(data.min, 2) + " </strong><span class='countdown-period'>Minutes</span></div></li><li><div class='time-box'><strong>" + this.leadingZeros(data.sec, 2) + " </strong><span class='countdown-period'>Seconds</span></div></li></ul>");
	  }
	});
	
	
	});

})(jQuery);