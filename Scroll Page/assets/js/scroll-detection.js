var scrollTo_ = $( window ).scrollTop();
var docHeight_ = $( document ).height();
var windowHeight_ = $( window ).height();
var scrollPercent_ = ( scrollTo_ / ( docHeight_-windowHeight_ ) ) * 100;
var scrollPercent_ = scrollPercent_.toFixed( 1 );


var global_Scroll_Percent = scrollPercent_;


var stop_sign = false;
function click_stop(){
	stop_sign = true;
}

// Check whether your browser allows localstorage.
// if(window.localStorage){
//     alert('Your browser allows localStorage!');
// }else{
//     alert('Your browser doesn\'t allow localStorage!');
// }

// localStorage.myName='walkingp';
// localStorage['mySite']='http://www.cnblogs.com/walkingp';
// alert('name:' + localStorage.myName + '\rsite:' + localStorage['mySite']);

// localStorage.setItem('favoriteflavor','vanilla');
// var taste = localStorage.getItem("favoriteflavor");
// alert(taste);


(function($) {

    $.fn.detectScroll = function(options) {

    	var settings = $.extend({
            position     : "fade",
            target       : "#targetContainer",
            size         : null,
            testMode     : false,
            targetPercent: 70,
            objectHeight: null,
            objectWidth: null,
            speed: 400
        }, options);


        return this.each( function() 
        {
			var self = this;

	        $( this ).on( 'scroll', function()
	        {

	        	this.scrollTo = $( window ).scrollTop();
				this.docHeight = $( document ).height();
				this.windowHeight = $( window ).height();
				this.scrollPercent = ( scrollTo / ( docHeight-windowHeight ) ) * 100;
				this.scrollPercent = scrollPercent.toFixed( 1 );

                global_Scroll_Percent = this.scrollPercent;

				// If testMode is on then update the counter in real time
			    if ( settings.testMode ) 
			    {
		        	$( '#detectScrollTestView' ).html( scrollPercent+"%" );
		    	} // testMode

			    return self;

	    	}); // on scrolll

		    // Is testMode on? Better show a percentage counter
		    if ( settings.testMode ) 
		    {
		        $( 'body' ).append( '<div id="detectScrollTestView">Scroll</div>' );
		        $( '#detectScrollTestView' ).css({
		        	position:'fixed',
		        	bottom:'20px',
		        	right:'30px',
		        	background:'rgba(44, 62, 80,.25)',
		        	width: '48px',
		        	height: '48px',
		        	'font-size':'18px',
		        	'line-height': '42px',
		        	'text-align': 'center',
		        	borderRadius: '50%',
		        	padding: '16px',
		        });
	    	} // End of testMode
		});
    }

}(jQuery));




var $content_children = document.getElementById("content").children;

function detect_visibility(){
	var V = [];
	for(var j = 1; j < $content_children.length; j ++){

	  var rect = $content_children[j].getBoundingClientRect();
	  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
	  if (!(rect.bottom < 0 || rect.top - viewHeight >= 0)){
	  	V.push($content_children[j].id);
	  	// alert($content_children[j].id);
	  }

	}
	return V;
}

var A = [];

// for(var j=1; j<10; ++j){ 
//     A.push([j, Math.sqrt(j)]);
// }

var csvRows = [];

// a.click();

var starttime = new Date();

function date_time(id)
{	
        date = new Date();
        date = (date - starttime) / 1000;
        if (stop_sign){
        	for(var i=0, l=A.length; i<l; ++i){
			    csvRows.push(A[i].join(','));
			}
			var csvString = csvRows.join("%");
			var a         = document.createElement('a');
			a.href        = 'data:attachment/csv,' +  encodeURIComponent(csvString);
			a.target      = '_blank';
			a.download    = 'page_download_data.csv';


			document.body.appendChild(a);
			a.click();
        	return false;
        } else{

			var V_ = detect_visibility();

			A.push([date, global_Scroll_Percent,V_]);

	        document.getElementById(id).innerHTML = date;
	        setTimeout('date_time("'+id+'");','1000');
	        return true;
    	}
}


function click_button(){
    $("#chart").toggle();
}
















