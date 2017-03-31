window.onload = (function(){
  setTimeout(function(){
    getData('/search',function(err,result){
      if(err){console.log(err)};
      var list = document.getElementById('results')
      var pagination = document.getElementsByClassName('pagination-div')
      while(!result){
        list.innerHTML = "<p>loading...</p>"
      }
      if(result){
      elmentsArr = convertToHtml(result)
      pages = paginate(elmentsArr)
      createLinks(pagination[0], pages)
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
