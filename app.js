let navItem = document.getElementsByClassName("navItem")
$(navItem).each(function() {
    $(this).css("color", "white")
   });

let nav = $(navItem).parents()[0]
$(nav).css("background-color", "#145")
let test = true
let ul = document.getElementById("ul")
let li = $(ul).children()
$(li).each(function() {
     test = !test
    if (test == true) {
        $(this).css("background-color", "#ccc")
    } else {
        $(this).css("background-color", "#aaa")
    }
   });

document.getElementById("myInput").value = "Ethan";