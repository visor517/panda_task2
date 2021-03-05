 function switchSliders() {
  let typeOfColor = $( "[name='typeOfColor']").filter(":checked").attr("data-type");

  let arr_color = $( "#swatch" ).css(typeOfColor).match(/\d+/g);
  
  $( "#sliderRed" ).slider( "value", arr_color[0] );
  $( "#sliderGreen" ).slider( "value", arr_color[1] );
  $( "#sliderBlue" ).slider( "value", arr_color[2] );
}

function hexFromRGB(r, g, b) {
  var hex = [
    r.toString( 16 ),
    g.toString( 16 ),
    b.toString( 16 )
  ];
  $.each( hex, function( nr, val ) {
    if ( val.length === 1 ) {
      hex[ nr ] = "0" + val;
    }
  });
  return hex.join( "" ).toUpperCase();
}
function refreshSwatch() {
  let typeOfColor = $( "[name='typeOfColor']").filter(":checked").attr("data-type");
  var red = $( "#sliderRed" ).slider( "value" ),
    green = $( "#sliderGreen" ).slider( "value" ),
    blue = $( "#sliderBlue" ).slider( "value" ),
    hex = hexFromRGB( red, green, blue );

  $( "#swatch" ).css( typeOfColor, "#" + hex );
}

$( "#sliderRed, #sliderGreen, #sliderBlue" ).slider({
  range: "min",
  max: 255,
  value: 127,
  slide: refreshSwatch,
  change: refreshSwatch
});

switchSliders()

$( "input" ).checkboxradio({ icon: false });
$( "[name='typeOfColor']").on( "change", switchSliders );