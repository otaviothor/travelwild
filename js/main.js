// altura da tela
var _AlturaDocumento = $(window).height();
var menuHeight = $(".navbar-fixed").height();
$('.iconLogoMenu').height(menuHeight);

// Sidenav
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

// Slider
const slider = document.querySelector('.slider');
M.Slider.init(slider, {
  indicators: false,
  height: _AlturaDocumento - menuHeight,
  transition: 500,
  interval: 6000
});

// Autocomplete
const ac = document.querySelector('.autocomplete');
M.Autocomplete.init(ac, {
  data: {
    "Aruba": null,
    "Cancun Mexico": null,
    "Hawaii": null,
    "Florida": null,
    "California": null,
    "Jamaica": null,
    "Europe": null,
  }
});

// Material Boxed
const mb = document.querySelectorAll('.materialboxed');
M.Materialbox.init(mb, {});

// ScrollSpy
const ss = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(ss, {});

// Dropdown
const dt = document.querySelectorAll('.dropdown-trigger');
M.Dropdown.init(dt, {});

// Modal
const md = document.querySelectorAll('.modal');
M.Modal.init(md, {});

// conta os caracteres do textarea do Contato
$("#mensagemContato").keyup(function() {
  var max = parseInt($("#mensagemContato").attr('maxlength'));
  var tamanho = $('#mensagemContato').val().length;
  var newLength = max - tamanho;
  if (newLength > 0) {
    $("#spanMensagemContato").html(newLength + " caracteres restantes");
  } else if (newLength == 0) {
    $("#spanMensagemContato").html(null);
  } else {
    $("#spanMensagemContato").html(null);
  }
});

// mascara de telefone
$(document).ready(function() {
  $('#telefoneContato').mask('(99) 99999-9999');
});

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
