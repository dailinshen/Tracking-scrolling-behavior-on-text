var btn_switch = document.createElement("button");
document.body.appendChild(btn_switch);
btn_switch.className= "btn btn-success";
// btn_switch.onclick = click_button();

btn_switch.addEventListener('click', function() {
	click_button();
});

btn_switch.id = "new_button";
btn_switch.innerText = "Show Graph";



var btn_stop = document.createElement("button");
document.body.appendChild(btn_stop);
btn_stop.className= "btn btn-success";
// btn_switch.onclick = click_button();

var stop_sign = false;
btn_stop.addEventListener('click', function() {
	stop_sign = true;
});

btn_stop.id = "stop_button";
btn_stop.innerText = "Stop and download CSV file";





var outer_div = document.createElement("div");
document.body.appendChild(outer_div);

outer_div.id = "outer_div";

var chart_div = document.createElement("div");
document.getElementById("outer_div").appendChild(chart_div);
chart_div.id = "chart";
// chart_div.hide();

// var well_div = document.createElement("div");
// document.getElementById("chart").appendChild(well_div);
// well_div.className = "well";
// well_div.id = "well_div";

// var h4_value = document.createElement("h4");
// document.getElementById("well_div").append(h4_value);
// h4_value.innerText = "Scroll Pattern";

var view_div = document.createElement("div");
document.getElementById("chart").appendChild(view_div);
view_div.id = "viewDiv";


// document.getElementById("chart").hide();


function click_button(){
    $("#chart").toggle();
}

