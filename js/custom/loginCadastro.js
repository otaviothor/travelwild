// altura da tela
var _AlturaDocumento = $(window).height();

function AlturaSecao() {
  $('.divForms').height(_AlturaDocumento);
}

$(AlturaSecao);

// verifica a quantidade de caracteres no campo senha do cadastro
function contagemCarac() {
  var x = document.getElementById("senha").value;
  var n = x.length;
  if (n < 8) {
    document.getElementById('spanSenha').innerHTML = "A senha deve conter no mínimo 8 caracteres.";
  } else {
    document.getElementById('spanSenha').innerHTML = "";
  }
}
