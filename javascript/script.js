let sidebar = document.getElementById('mysidebar')

function OPENNAV(){
    sidebar.style.width = '200px'
}

// Login
let cardRemove = document.getElementById ('segundoCardRemovido');
let login = document.getElementById('login-bottom');
let formulario = document.getElementById('formulariodosite')
  function LOGIN(){
  formulario.style.display = 'block'
  formulario.style.position = 'absolute'
  cardRemove.style.display = 'none';
  document.body.style.overflow = 'hidden'
  }
;

// cadastro da página

let email = document.getElementById('email');
let senha = document.getElementById('senha')
let preenchimentoDoEmail = document.getElementById('preenchimento-do-email')
let preenchimentoDasenha = document.getElementById('preenchimento-da-senha')
let preenchimentoDoFormconcluido = document.getElementById('cadastroConcluido')
let formulariodosite = document.getElementById('formulariodosite')

function CADASTRO(){
  
  if(email.value == "" || senha.value == ""){
    preenchimentoDasenha.style.display = 'block'
    email.value = ""
    senha.value = ""
  }
  else{
    window.alert('Você não possui cadastro em nosso site')
    formulario.style.display = 'none'
preenchimentoDoFormconcluido.style.display = 'block'

  }
};

//login 2

let login2 = document.getElementById('login-bottom2');
let formulario2 = document.getElementById('formulariodosite2')
  function LOGIN2(){
  formulario2.style.display = 'block'
  formulario2.style.position = 'absolute'
  }
;

// cadastro da página 2

let email2 = document.getElementById('email2');
let senha2 = document.getElementById('senha2')
let preenchimentoDoEmail2 = document.getElementById('preenchimento-do-email2')
let preenchimentoDasenha2 = document.getElementById('preenchimento-da-senha2')
let preenchimentoDoFormconcluido2 = document.getElementById('cadastroConcluido2')
let formulariodosite2 = document.getElementById('formulariodosite2')

function CADASTRO2(){
  
  if(email2.value == "" || senha2.value == ""){
    preenchimentoDasenha2.style.display = 'block'
    email2.value = ""
    senha2.value = ""
  }
  else{
    window.alert('Você não possui cadastro em nosso site')
    formulario2.style.display = 'none'
preenchimentoDoFormconcluido2.style.display = 'block'

  }
};
//  mostrar perfil 

let perfil = document.getElementById('perfilDousuario');

function MOSTRARPERFIL(){
  perfil.style.display='block' 
  document.body.style.overflow='hidden'
};

  //mostrar perfil 2
let perfil2 = document.getElementById('perfilDousuario2');

function MOSTRARPERFIL2(){
  perfil2.style.display='block' };

  // feedback

  let feedback = document.getElementById("FEEDBACKENVIADO");
  let enviado = document.getElementById("FEEDBACKENVIADO2")

  function FEEDBACK(){
    feedback.style.display= 'none'
    enviado.style.display = 'block'
  };