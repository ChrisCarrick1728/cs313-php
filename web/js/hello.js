window.onload = function () {
   // Ajax request
   var ajax = new XMLHttpRequest();
   ajax.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         document.getElementsByTagName("h1")[0].innerHTML = this.responseText;
      }
   };
   ajax.open("GET", "php/hello.php", true);
   ajax.send();
}