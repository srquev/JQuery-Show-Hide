$(document).ready(function(){
   $('header').show('slow'); 
    $('#btn1').click(function(){
        $('p').hide(2000);
    });
    
    $('#btn2').click(function(){
        $('p').show('slow');
    });
});