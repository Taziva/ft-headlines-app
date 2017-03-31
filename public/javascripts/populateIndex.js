window.onload = (function(){
  setTimeout(function(){
    getData("/headlines" ,function(err,result){
      if(err){console.log(err)};
      var list = document.getElementById('headlines')
      var pagination = document.getElementsByClassName('pagination-div')
      while(!result){
        list.innerHTML = "<p>loading...</p>"
      }
      if(result){
      elmentsArr = convertToHtml(result)
      pages = paginate(elmentsArr)
      Array.from(pagination).forEach(function(element){
        createLinks(element, pages)
      })
      updateHTML(1,list,pages);
      var paginationLinks = document.getElementsByClassName('paginationLink')
      Array.from(paginationLinks).forEach(function(link){
        link.addEventListener("click",function(e){
          e.preventDefault();
          updateHTML(parseInt(this.text.slice(-1)),list, pages)
        })
      })
    }
    })
  },1500)
})
