window.onscroll = function() { scrollFunction() };
function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
   document.getElementById("move-to-top").classList.remove("hidden");
   } else {
        document.getElementById("move-to-top").classList.add("hidden");
      }
    }

    function moveToTop() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    }