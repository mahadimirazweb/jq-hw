// JQuery
// ex.1
$(document).ready(function(){

    $("#alt").on("click", function(){
        alert("Hello, World!");
    })
    
})
// ex.2
$(document).ready(function(){

    $('#show').on('click', function(){
        $('.shtext').show();
    });

    $('#hide').on('click', function(){
        $('.shtext').hide();
    });
    $('#toggle').on('click', function(){
        $('.shtext').toggle(500);
    });
})
// ex.3
$(document).ready(function(){
    $('#fin').on('click', function(){
        $('.ftext').fadeIn();
    });
     $('#fout').on('click', function(){
        $('.ftext').fadeOut();
    });
     $('#ftoggle').on('click', function(){
        $('.ftext').fadeToggle(500);
    });
})
// ex.4
$(document).ready(function(){

    $('#qns').on('click', function(){
        $('#ans').slideToggle();
    });
})
// ex.5
$(document).ready(function(){
    $('#drag').draggable();

})
// ex.6
$(document).ready(function(){
    $('#dg').draggable();
    $('#drop').droppable({
        drop: function(event, ui){
            $(this).addClass('ui-state-highlight')
            .find('p')
            .html('Dropped!');
        }
    });
})
// ex.7
$(document).ready(function(){
    $('#resizable').resizable();
})
// ex.8
$(document).ready(function(){
    $('#selectable').selectable();
})
// ex.9
$(document).ready(function(){
    $('#sortable').sortable();
})
// ex.10
$(document).ready(function(){
    $('#datepicker').datepicker();
})
// ex.11
$(document).ready(function(){
    $('.dialog').dialog();
})
// ex.12
$(document).ready(function(){
    $('#slider').slider();
})
// ex.13
$(document).ready(function(){
    $('#tabs').tabs();
})
// ex.14
  $( function() {
    $( "#button" ).on( "click", function() {
      $( "#effect" ).addClass( "neweffect", 800, callback );
    });
 
    function callback() {
      setTimeout(function() {
        $( "#effect" ).removeClass( "neweffect" );
      }, 1000);
    }
  } );