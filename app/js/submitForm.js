function sendForm(e) {
  e.preventDefault()
  var form = $('#sendForm');
  $.ajax({
    type: 'POST',
    url: 'mail/mail.php',
    data: $(form).serialize(),
    beforeSend: function () {
      $('.preloader').show();
      $(form).hide();
    },
    success: function (data) {
      $('.preloader').hide();
      $('.thank_div').show();
    }
  })
}