
  var getData = function(url ,callback) {
          var xhr = new XMLHttpRequest();
          xhr.open('POST', url, true);
          xhr.setRequestHeader("Content-type", "application/json");

          xhr.onreadystatechange = function() {
              if(xhr.readyState == 4) {
                  if(xhr.status == 200) {
                      callback(null,  JSON.parse(xhr.responseText));
                  }
                  else {
                      callback(xhr.status, "failure");
                  }
              }
          };
          xhr.send();
        }
