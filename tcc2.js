// function cadastro() {
//     const nome = document.getElementById("nome").value;
//     const sobrenome = document.getElementById("sobrenome").value;
//     const telefone = document.getElementById("telefone").value;
//     const email = document.getElementById("email").value;
//     const cpf = document.getElementById("cpf").value;
//     const matricula = document.getElementById("matricula").value;
//     const senha = document.getElementById("senha").value;
//     const confsenha = document.getElementById("confirmar-senha").value;

//     if (senha === confsenha) {
//         fetch('http://localhost:3000/pessoas', {
//             method: 'POST',
            
//             headers: {
//                 'Content-Type': 
//                 'application/json'
//             },
//             body: JSON.stringify({
//                 nome: nome, sobrenome: sobrenome, telefone: telefone, email: email,
//                 cpf: cpf, matricula: matricula, senha: senha
//             })
//         })

//         .then(response => response.json())


//         //pós o cadastro, volta para a tela de login
//         window.location.href = "loginAluno.html";
//         cadastrado()
        

//     }else{
//         senhaIncorreta()
        
//     }
// }

// function cadastroFuncionario(){
//     const nome = document.getElementById("nome").value;
//     const sobrenome = document.getElementById("sobrenome").value;
//     const telefone = document.getElementById("telefone").value;
//     const email = document.getElementById("email").value;
//     const cpf = document.getElementById("cpf").value;
//     const nif = document.getElementById("nif").value;
//     const senha = document.getElementById("senha").value;
//     const confsenha = document.getElementById("confirmar-senha").value;

//     if (senha === confsenha) {
//         fetch('http://localhost:3000/pessoaFuncionario', {
//             method: 'POST',
            
//             headers: {
//                 'Content-Type': 
//                 'application/json'
//             },
//             body: JSON.stringify({
//                 nome: nome, sobrenome: sobrenome, telefone: telefone, email: email,
//                 cpf: cpf, nif: nif, senha: senha
//             })
//         })

//         .then(response => response.json())


//         //pós o cadastro, volta para a tela de login
//         window.location.href = "loginFuncionario.html";
//         cadastrado()
        


//     }else{
//         senhaIncorreta()
        
//     }

// }

// function fazerLoginFuncionario(){
//     const nif = document.getElementById("nif").value;
//     const senha = document.getElementById("senha").value;



//     fetch('http://localhost:3000/pessoaFuncionario/')
//     .then(response => response.json())
//     .then(data =>{
        
       
//         const pessoa1 = data.find(p => 
//             p.nif === nif && p.senha == senha);


//             if(pessoa1){
//                 cadastrado()
//                 setTimeout(() => {
//                     window.location.href = "homeFuncionario.html";
//                 }, 1500);
                
//             }else{
               
//                 procuraCadastroFuncionario()
//             }
//     })
// }


// function fazerLogin(){
//     const matricula = document.getElementById("matricula").value;
//     const senha = document.getElementById("senha").value;



//     fetch('http://localhost:3000/pessoas/')
//     .then(response => response.json())
//     .then(data =>{
        
       
//         const pessoa = data.find(p => 
//             p.matricula === matricula && p.senha == senha);


//             if(pessoa){
//                 cadastrado()
//                 setTimeout(() => {
//                     window.location.href = "homeAluno.html";
//                 }, 1500);
                
//             }else{
               
//                 procuraCadastro()
//             }
//     })
// }


// function mascaraTelefone(input) {
//     var v = input.value;
//     v = v.replace(/\D/g, ''); // Remove caracteres não numéricos

//     // Limita o número de caracteres a 11 (10 números + 1 opcional)
//     if (v.length > 11) v = v.slice(0, 11);

//     // Adiciona a formatação
//     if (v.length > 6) {
//         v = v.replace(/^(\d{2})(\d{5})(\d{0,4})$/, '($1) $2-$3'); // Formata (DD) DDDDD-DDDD
//     } else if (v.length > 2) {
//         v = v.replace(/^(\d{2})(\d{0,5})$/, '($1) $2'); // Formata (DD) DDDDD
//     } else {
//         v = v.replace(/^(\d{0,2})$/, '($1'); // Formata (DD
//     }

//     input.value = v;
// }

// function mascaraMatricula(input) {
//     var v = input.value;
//     v = v.replace(/\D/g, ''); // Remove caracteres não numéricos
//     if (v.length > 8) v = v.slice(0, 8); // Limita o número de caracteres a 11
// }

// function mascaraNif(input) {
//     var v = input.value;
//     v = v.replace(/\D/g, ''); 
//     if (v.length > 7) v = v.slice(0, 7); 
// }



// function mascaraCpf(input) {
//     var v = input.value;
//     v = v.replace(/\D/g, ''); // Remove caracteres não numéricos
//     if (v.length > 11) v = v.slice(0, 11); // Limita o número de caracteres a 11
//     v = v.replace(/(\d{3})(\d)/, '$1.$2'); // Adiciona ponto
//     v = v.replace(/(\d{3})(\d)/, '$1.$2'); // Adiciona ponto
//     v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Adiciona hífen
//     input.value = v;
// }