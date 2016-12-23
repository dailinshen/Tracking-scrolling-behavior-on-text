var div_time = document.createElement("div");
document.body.appendChild(div_time);
div_time.id = "date_time";




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
    if(stop_sign){
    	for(var i=0, l=A.length; i<l; ++i){
			    csvRows.push(A[i].join(','));
			}
			var csvString = csvRows.join("%");
			var a         = document.createElement('a');
			a.href        = 'data:attachment/csv,' +  encodeURIComponent(csvString);
			a.target      = '_blank';
			a.download    = 'extension_download_data.csv';

			document.body.appendChild(a);
			a.click();
    	return false;
    } else {
    	A.push([date, global_scroll]);
    	document.getElementById(id).innerHTML = date;

    	setTimeout('date_time("'+id+'");','1000');
	}
}

date_time('date_time');
