$('input').on({
  mouseenter: function() {
    $(this).css('background-color', '#ccc');
  },

  mouseleave: function() {
    $(this).css('background-color', '#fff');
  },
  
  focus: function() {
    $(this).css('box-shadow', 'inset 0 0 5px darkcyan');
  },
  
  blur: function() {
    $(this).css('box-shadow', 'none');
  },
  
})

$('button').click(function() {
  $('#div').animate({
    left: '250px',
    backgoundColor: '#000',
    width: '500px',
    height: '5px',
  });
});
