// Griglia 6x6, ad ogni click sul quadrato parte una richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato.
// I quadrati fateli prima a mano e poi con javascript.

$(document).ready(function() {
  $('.square').click(function() {
    var forma = $(this);
      $.ajax(
        {
          url: 'https://flynn.boolean.careers/exercises/api/random/int',
          method: "GET",
          success: function(data, stato) {
            console.log(this);
            if (data.response <= 5) {
              $(forma).removeClass('red');
              $(forma).addClass('yellow');
              $(forma).text(data.response);
            } else {
              $(forma).removeClass('yellow');
              $(forma).addClass('red');
              $(forma).text(data.response);
            }

          },
          error: function(richiesta, stato, errori) {
            alert('E\' avvenuto un errore.' + errori);
          }
        }
      )
    }
  );
});
