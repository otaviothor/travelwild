// altura da div que esta o forms
var _AlturaDocumento = $(window).height();

function AlturaSecao() {
  $('.divForms').height(_AlturaDocumento);
}

// rolagem por sessao
function ScrollSecao() {
  var body = $('html, body');
  if ($(this).parent('.secao').is('#secao01')) {
    //verifica se está na primeira seção e rola para a segunda
    body.animate({
      scrollTop: _AlturaDocumento
    }, '500');
  } else if ($(this).parent('.secao').is('#secao02')) {
    //rola para o início da página
    body.animate({
      scrollTop: 0
    }, '800');
  }
}
$('.sectionRollForm').click(ScrollSecao); //chama a função na ação de click no ícone
$(AlturaSecao); //chama a nossa função só depois que o documento estiver completamente carregado
