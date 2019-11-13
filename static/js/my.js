/* animation before page loading 
document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'interactive') {
       document.getElementById('page-body-id').style.visibility="hidden";
  } else if (state == 'complete') {
      setTimeout(function(){
         document.getElementById('interactive');
         document.getElementById('load').style.visibility="hidden";
         document.getElementById('page-body-id').style.visibility="visible";
      },1000);
  }
}
/* animation before page loading */

/* index html  */
function sendPostRequest(){ 

var passing = true;
var x = document.forms["contactForm"]["name"].value;
  if (x == "") {
    alert("Name must be filled out");
    passing = false;
  }
var x = document.forms["contactForm"]["email"].value;
  if (x == "") {
    alert("email must be filled out");
	passing = false;
  }
var x = document.forms["contactForm"]["message"].value;
  if (x == "") {
    alert("enter a query also.");
	passing = false;
  }
var x = document.forms["contactForm"]["subject"].value;
  if (x == "") {
    alert("enter the subject please.");
	passing = false;
  }
if (passing == true)
{
try{
var xhr = new XMLHttpRequest();
var url = "http://127.0.0.1:8080/send_query_email";
xhr.open("POST", url, true);
xhr.setRequestHeader("Content-Type", "application/json");
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var subject = document.getElementById("subject").value;
var message = document.getElementById("message").value;
console.log(name,email,message);
var data = JSON.stringify({"name": name, "email": email, "subject":subject, "message": message});
xhr.send(data);

alert('Thanks for your response');
document.location.reload(true);
}
catch(err)
{
alert('some error :'+err);
}

}


}


function toggleShow(){
var show = document.getElementById("toggle-show");
var hide = document.getElementById("toggle-hide");
var toggleitems = document.getElementById("toggle-menu-items-id");

show.style.display = "none";
hide.style.display = "inline-block";
toggleitems.style.display = "block";
}

function toggleHide(){
var show = document.getElementById("toggle-show");
var hide = document.getElementById("toggle-hide");
var toggleitems = document.getElementById("toggle-menu-items-id");

show.style.display = "inline-block";
hide.style.display = "none";
toggleitems.style.display = "none";
}

function myFunction1(x1) {
var show = document.getElementById("toggle-show");
var hide = document.getElementById("toggle-hide");
var toggleitems = document.getElementById("toggle-menu-items-id");
  if (x1.matches) { // If media query matches
show.style.display = "none";
hide.style.display = "none";
toggleitems.style.display = "none";
  } else {
show.style.display = "inline-block";
hide.style.display = "none";
toggleitems.style.display = "none";
  }
}

var x1 = window.matchMedia("(min-width: 1251px)")
myFunction1(x1) // Call listener function at run time
x1.addListener(myFunction1) // Attach listener function on state changes



var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > 500) {
    document.getElementById("navbar").style.backgroundColor = "#ffdc3b";
  } else {
    document.getElementById("navbar").style.backgroundColor = "rgba(0,0,0,0)";
  }
  prevScrollpos = currentScrollPos;
}
/* index html  */



/* blogs html */
var json = "None";
function sendGetRequestBlogs(){
try{
var flag = 0;
var xhr = new XMLHttpRequest();
var url = "http://127.0.0.1:8080/get_all_posts"
xhr.open("GET", url, true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {

	try{

	console.log(xhr.responseText);
        json = JSON.parse(xhr.responseText);
	if(json['blogs'].length <= 0){flag = 1;}
	if(flag == 1){throw "error occured";}
	var i;
	for(i=0; i<json['blogs'].length;i++){
	var node = document.createElement("LI");
	node.setAttribute("onclick","display(this)");
	node.setAttribute("id",i);	
	var textnode = document.createTextNode(json['blogs'][i].title);
  	node.appendChild(textnode);
  	document.getElementById("blogs-list-id").appendChild(node);
								}
	}
	catch(err)
	{
	var blogarea = document.getElementById("blog-area-id");
	blogarea.innerHTML = "No Blogs Present";
	}


    											}
									}

xhr.send();
}
catch(err)
{
}

}

function display(element){
var blogarea = document.getElementById("blog-area-id");
blogarea.innerHTML = "";
var x = $.parseHTML(json['blogs'][element.id].content);
var i;
var y;
blogarea.innerHTML = "<div class='blog-title'>"+json['blogs'][element.id].title;+"</div>"
for(i=0; i<x.length;i++)
{
if(x[i].nodeValue){
y = x[i].nodeValue;
blogarea.innerHTML += y;
}
else if(x[i].outerHTML){
y = x[i].outerHTML;
blogarea.innerHTML += y;
}
}
//var textnode = document.createTextNode(json['blogs'][element.id].content);
//blogarea.appendChild(textnode);
}




function toggleBlogShow(){
var show = document.getElementById("toggle-blog-show");
var hide = document.getElementById("toggle-blog-hide");
var toggleitems = document.getElementById("blog-menu-id");

show.style.display = "none";
hide.style.display = "inline-block";
toggleitems.style.display = "block";
}

function toggleBlogHide(){
var show = document.getElementById("toggle-blog-show");
var hide = document.getElementById("toggle-blog-hide");
var toggleitems = document.getElementById("blog-menu-id");

show.style.display = "inline-block";
hide.style.display = "none";
toggleitems.style.display = "none";

}

function myFunction(x) {
  if (x.matches) { // If media query matches
    document.getElementById("toggle-blog-show").style.display = "none";
    document.getElementById("toggle-blog-hide").style.display = "none";
document.getElementById("blog-menu-id").style.display = "block";
  } else {
document.getElementById("toggle-blog-show").style.display = "inline-block";
    document.getElementById("toggle-blog-hide").style.display = "none";
document.getElementById("blog-menu-id").style.display = "none";
  }
}

var x = window.matchMedia("(min-width: 901px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
/* blogs html */


/* weekly html */
function sendGetRequestWeekly(){
try{
var flag = 0;
var xhr = new XMLHttpRequest();
var url = "http://127.0.0.1:8080/get_all_challenges"
xhr.open("GET", url, true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {

	try{

	console.log(xhr.responseText);
        json = JSON.parse(xhr.responseText);
	var len = json['challenges'].length;
	if(len <= 0){throw "error occured";}

	var node = document.getElementById("new-challenge-id");
	if(len >= 1)
	{
	node.innerHTML = json['challenges'][0].challenge;
	if(json['challenges'][0].winner)
	{
	var newnode = document.createElement("DIV");
	newnode.setAttribute("class","winner");	
	var textnode = document.createTextNode(json['challenges'][0].winner);
	newnode.appendChild(textnode);
	node.appendChild(newnode);
	}	
	}
	if(len > 1)
	{
	var node1 = document.getElementById("last-week-challenge-id");
	node1.innerHTML = json['challenges'][1].challenge;
	if(json['challenges'][1])
	{
	var newnode = document.createElement("DIV");
	newnode.setAttribute("class","winner");	
	var textnode = document.createTextNode(json['challenges'][1].winner);
	newnode.appendChild(textnode);
	node1.appendChild(newnode);
	}
	}

	}
	catch(err)
	{
	var challengearea = document.getElementById("new-challenge-id");
	challengearea.innerHTML = "No Challenges this week";
	}


    											}
									}

xhr.send();
}
catch(err)
{
}

}

/* weekly html */
