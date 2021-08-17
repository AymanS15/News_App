// JavaScript Document
 $(document).ready(function() {
    $(['#autoWidth','#autoWidth2','autoWidth3']).lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });
