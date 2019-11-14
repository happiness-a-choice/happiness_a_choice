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
  if (x1.matches) {
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
myFunction1(x1)
x1.addListener(myFunction1)



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



var json = "None";
function sendGetRequestBlogs(){
try{
var flag = 0;
var xhr = new XMLHttpRequest();
var url = "https://happiness-a-choice.appspot.com/get_all_posts"
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
  if (x.matches) { 
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
myFunction(x) 
x.addListener(myFunction)
