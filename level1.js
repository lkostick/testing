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
    document.getElementById("form1").onfocus=function() {
        this.value = '';
    };
};
