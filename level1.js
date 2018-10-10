//$(document).ready(function(){
//    console.log("hello world");
////    $("#form1").focus(function() {
////    $("#form1").on("focus", function() {
////        //$(this).value='';
////        console.log("form focused");
////    });
//});
//$("#form1").on("focus", function() {
//    //$(this).value='';
//    console.log("form focused");
//});
window.onload = function() {
    var element = documentgetElementById("form1");
    element.addEventListener("focus", myScript(element));
//    document.getElementById("form1").onfocus=function() {
//        this.value = '';
//    };
};
function myScript(element) {
    element.value = '';
};
