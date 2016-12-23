var div_scroll = document.createElement("div");
document.body.appendChild(div_scroll);
div_scroll.id = 'scroll_percentage';

var scroll_to_ = $(window).scrollTop();
var document_height_ = $(document).height();
var window_height_ = $(window).height();
var scroll_percent_ = scroll_to_ / (document_height_ - window_height_) * 100;
scroll_percent_ = scroll_percent_.toFixed(1);
div_scroll.innerText = scroll_percent_;

var global_scroll = 0;

$(window).scroll(function(){
	var scroll_to = $(window).scrollTop();
	var document_height = $(document).height();
	var window_height = $(window).height();
	var scroll_percent = scroll_to / (document_height - window_height) * 100;
	scroll_percent = scroll_percent.toFixed(1);

	global_scroll = scroll_percent;

	div_scroll.innerText = (scroll_percent + "%");
	// console.log(scroll_percent);
});