'use strict';
var paginate = function(arr){
  var paginateArray = [];
  while(arr.length > 0) {
    if(arr.length > 20){
    paginateArray.push(arr.splice(0,20));
    }
    else{
      paginateArray.push(arr.splice(0,arr.length));
    }
  }
  return paginateArray
}

var convertToHtml = function(arr){
  var arrHTML = [];
  for (var i = 0; i < arr.length; i++) {
    arrHTML.push("<li class='headline'><a href='"+arr[i].location.uri+"'> <h4 class='headline-title'>"+arr[i].title.title+"</h4></a><p>"+arr[i].summary.excerpt+"...</p></li>")
  }
  return arrHTML
}

var updateHTML = function (num, element, arr) {
  if(Number.isInteger(num)){
    var pageNum = num - 1;
    element.innerHTML = arr[pageNum].join('')
  }
}

var createLinks = function(element,arr) {
  for (var i = 0; i < arr.length; i++) {
    element.innerHTML += ("<a href='#' class= paginationLink> Page "+(i+1)+"</a>")
  }
}
