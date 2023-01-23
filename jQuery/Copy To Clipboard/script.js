$(document).ready(function (){
    function add() {
        $(".copied").addClass("bounce-effect");
      }
      function remove() {
        $(".copied").removeClass("bounce-effect");
      }
    $('.copy_btn').click(function(){
        $('#text_select').select();
        document.execCommand("copy");
        add();
    setTimeout(remove, 800);
    })

})