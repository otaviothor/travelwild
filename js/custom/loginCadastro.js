// altura da tela
var _AlturaDocumento = $(window).height();

function AlturaSecao() {
  $('.divForms').height(_AlturaDocumento);
}

$(AlturaSecao);

// verifica a quantidade de caracteres no campo senha do cadastro
$("#senha").keyup(function() {
  var tamanho = $('#senha').val().length;
  if (tamanho < 8 || tamanho > 12) {
    $("#spanSenha").html("A senha deve conter no mínimo 8 caracteres e no máximo 12");
    $('#confsenha').prop('disabled', true);
  } else if (tamanho == 0) {
    $("#spanSenha").html(null);
  } else {
    $("#spanSenha").html(null);
    $('#confsenha').prop('disabled', false);
  }
});

// verifica se as senhas são iguais
$("#confsenha").keyup(function() {
  var senhaValue = $('#senha').val();
  var confSenhaValue = $('#confsenha').val();
  if (confSenhaValue != senhaValue) {
    $("#spanConfSenha").html("As senhas não conferem");
    $('#btnCadastro').prop('disabled', true);
  }
  else {
    $("#spanConfSenha").html(null);
    $('#btnCadastro').prop('disabled', false);
  }
});
