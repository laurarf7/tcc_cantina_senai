////////////////////////////////////////MOSTRAR SENHA...    //////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
    // Função para alternar o tipo de senha
    function togglePasswordVisibility(checkboxId, inputId) {
        const checkbox = document.getElementById(checkboxId);
        const input = document.getElementById(inputId);
        
        if (checkbox && input) {
            checkbox.addEventListener('change', function() {
                input.type = this.checked ? 'text' : 'password';
            });
        }
    }

    // Mostrar/Ocultar Senha
    togglePasswordVisibility('showSenha', 'senha');

    // Mostrar/Ocultar Confirmar Senha
    togglePasswordVisibility('showConfirmarSenha', 'confirmar-senha');

    // Mostrar/Ocultar Senha Padrão
    togglePasswordVisibility('showSenhaPadrao', 'confirmar-senha-padrao');

   
    
    


});


function mascaraTelefone(input) {
    var v = input.value;
    v = v.replace(/\D/g, ''); // Remove caracteres não numéricos

    // Limita o número de caracteres a 11 (10 números + 1 opcional)
    if (v.length > 11) v = v.slice(0, 11);

    // Adiciona a formatação
    if (v.length > 6) {
        v = v.replace(/^(\d{2})(\d{5})(\d{0,4})$/, '($1) $2-$3'); // Formata (DD) DDDDD-DDDD
    } else if (v.length > 2) {
        v = v.replace(/^(\d{2})(\d{0,5})$/, '($1) $2'); // Formata (DD) DDDDD
    } else {
        v = v.replace(/^(\d{0,2})$/, '($1'); // Formata (DD
    }

    input.value = v;
}

function mascaraMatricula(input) {
    var v = input.value;
    v = v.replace(/\D/g, ''); // Remove caracteres não numéricos
    if (v.length > 8) v = v.slice(0, 8); // Limita o número de caracteres a 11
}

function mascaraNif(input) {
    var v = input.value;
    v = v.replace(/\D/g, ''); 
    if (v.length > 7) v = v.slice(0, 7); 
}



function mascaraCpf(input) {
    var v = input.value;
    v = v.replace(/\D/g, ''); // Remove caracteres não numéricos
    if (v.length > 11) v = v.slice(0, 11); // Limita o número de caracteres a 11
    v = v.replace(/(\d{3})(\d)/, '$1.$2'); // Adiciona ponto
    v = v.replace(/(\d{3})(\d)/, '$1.$2'); // Adiciona ponto
    v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Adiciona hífen
    input.value = v;
}


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

function cadastro() {
    const nome = document.getElementById("nome").value;
    const sobrenome = document.getElementById("sobrenome").value;
    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value;
    const cpf = document.getElementById("cpf").value;
    const matricula = document.getElementById("matricula").value;
    const senha = document.getElementById("senha").value;
    const confsenha = document.getElementById("confirmar-senha").value;

    if (senha === confsenha) {
        const usuario = {
            nome,
            sobrenome,
            telefone,
            email,
            cpf,
            matricula,
            senha
        };

        fetch('http://localhost:3000/pessoas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario)
        })
        .then(response => response.json())
        .then(data => {
            // Armazena os dados no localStorage
            localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
            
            // Redireciona para a tela de login
            window.location.href = "loginAluno.html";
        });
    } else {
       senhaIncorreta()
    }
}
// function cadastro() {
//     const nome = document.getElementById("nome").value.trim();
//     const sobrenome = document.getElementById("sobrenome").value.trim();
//     const telefone = document.getElementById("telefone").value.trim();
//     const email = document.getElementById("email").value.trim();
//     const cpf = document.getElementById("cpf").value.trim();
//     const matricula = document.getElementById("matricula").value.trim();
//     const senha = document.getElementById("senha").value.trim();
//     const confsenha = document.getElementById("confirmar-senha").value.trim();

//     // Verifica se a senha e a confirmação são iguais
//     if (senha !== confsenha) {
//         senhaIncorreta();  // Alerta de erro caso as senhas não coincidam
//         return;
//     }

//     // Verifica se o CPF, Email ou Matrícula já existe
//     verificarCadastro(cpf, email, matricula).then(usuarioExistente => {
//         if (usuarioExistente) {
//             // Se já existir o CPF, Email ou Matrícula, exibe um alerta
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Cadastro não permitido!',
//                 text: 'Já existe um usuário com esse CPF, email ou matrícula.',
//             });
//         } else {
//             // Se não existir, cria o novo usuário
//             const usuario = {
//                 nome,
//                 sobrenome,
//                 telefone,
//                 email,
//                 cpf,
//                 matricula,
//                 senha
//             };

//             // Envia os dados para o servidor para salvar
//             fetch('http://localhost:3000/pessoas', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(usuario)
//             })
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error("Erro ao cadastrar usuário.");
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 // Armazena os dados no localStorage
//                 localStorage.setItem('usuarioLogado', JSON.stringify(usuario));

//                 // Redireciona para a tela de login
//                 window.location.href = "loginAluno.html";
//             })
//             .catch(error => {
//                 // Caso haja algum erro no envio ao servidor, exibe alerta de erro
//                 Swal.fire({
//                     icon: 'error',
//                     title: 'Erro',
//                     text: 'Não foi possível realizar o cadastro. Tente novamente.',
//                 });
//             });
//         }
//     }).catch(error => {
//         console.error("Erro ao verificar duplicidade:", error);
//         Swal.fire({
//             icon: 'error',
//             title: 'Erro',
//             text: 'Não foi possível verificar os dados do servidor.',
//         });
//     });
// }

// // Função para verificar se o CPF, Email ou Matrícula já existe
// async function verificarCadastro(cpf, email, matricula) {
//     try {
//         const response = await fetch('http://localhost:3000/pessoas');
//         if (!response.ok) {
//             throw new Error("Erro ao carregar dados.");
//         }
//         const pessoas = await response.json();

//         // Verifica se algum usuário possui o mesmo CPF, email ou matrícula
//         return pessoas.some(usuario =>
//             usuario.cpf === cpf || usuario.email === email || usuario.matricula === matricula
//         );
//     } catch (error) {
//         console.error("Erro ao verificar duplicidade:", error);
//         throw new Error("Erro ao verificar duplicidade.");
//     }
// }

// // Função para mostrar alerta de senha incorreta
// function senhaIncorreta() {
//     Swal.fire({
//         icon: 'error',
//         title: 'Erro',
//         text: 'As senhas não coincidem.',
//     });
// }


// // Função para verificar se o CPF, Email ou Matrícula já existe
// async function verificarCadastro(cpf, email, matricula) {
//     try {
//         const response = await fetch('http://localhost:3000/pessoas');
//         const pessoas = await response.json();

//         // Verifica se algum usuário possui o mesmo CPF, email ou matrícula
//         return pessoas.some(usuario =>
//             usuario.cpf === cpf || usuario.email === email || usuario.matricula === matricula
//         );
//     } catch (error) {
//         console.error("Erro ao verificar duplicidade:", error);
//         Swal.fire({
//             icon: 'error',
//             title: 'Erro',
//             text: 'Não foi possível verificar os dados do servidor.',
//         });
//         return false;
//     }
// }

// // Função para mostrar alerta de senha incorreta
// function senhaIncorreta() {
//     Swal.fire({
//         icon: 'error',
//         title: 'Erro',
//         text: 'As senhas não coincidem.',
//     });
// }

function cadastroADM(){
    const nome = document.getElementById("nome").value;
    const sobrenome = document.getElementById("sobrenome").value;
    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value;
    const cpf = document.getElementById("cpf").value;
    const nif = document.getElementById("nif").value;
    const senha = document.getElementById("senha").value;
    const confsenha = document.getElementById("confirmar-senha").value;

    // Verifica se a senha e a confirmação são iguais
    if (senha !== confsenha) {
        senhaIncorreta();  // Alerta de erro caso as senhas não coincidam
        return;
    }

    // Função para verificar se o CPF, Email ou Matrícula já existe
    verificarCadastro(cpf, email, nif).then(usuarioExistente => {
        if (usuarioExistente) {
            // Se já existir o CPF, Email ou Matrícula, exibe um alerta
            Swal.fire({
                icon: 'error',
                title: 'Cadastro não permitido!',
                text: 'Já existe um usuário com esse CPF, email ou NIF.',
            });
        } else {
            // Se não existir, cria o novo usuário
            const usuario = {
                nome,
                sobrenome,
                telefone,
                email,
                cpf,
                nif,
                senha
            };

            // Envia os dados para o servidor para salvar
            fetch('http://localhost:3000/pessoaFuncionario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(usuario)
            })
            .then(response => response.json())
            .then(data => {
                // Armazena os dados no localStorage
                localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
                
                // Redireciona para a tela de login
                window.location.href = "loginADM.html";
            });
        }
    });

}


function cadastroFuncionario() {
    const nome = document.getElementById("nome").value;
    const sobrenome = document.getElementById("sobrenome").value;
    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value;
    const cpf = document.getElementById("cpf").value;
    const nif = document.getElementById("nif").value;
    const senha = document.getElementById("senha").value;
    const confsenha = document.getElementById("confirmar-senha").value;

    // Verifica se a senha e a confirmação são iguais
    if (senha !== confsenha) {
        senhaIncorreta();  // Alerta de erro caso as senhas não coincidam
        return;
    }

    // Função para verificar se o CPF, Email ou Matrícula já existe
    verificarCadastro(cpf, email, nif).then(usuarioExistente => {
        if (usuarioExistente) {
            // Se já existir o CPF, Email ou Matrícula, exibe um alerta
            Swal.fire({
                icon: 'error',
                title: 'Cadastro não permitido!',
                text: 'Já existe um usuário com esse CPF, email ou NIF.',
            });
        } else {
            // Se não existir, cria o novo usuário
            const usuario = {
                nome,
                sobrenome,
                telefone,
                email,
                cpf,
                nif,
                senha
            };

            // Envia os dados para o servidor para salvar
            fetch('http://localhost:3000/pessoaFuncionario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(usuario)
            })
            .then(response => response.json())
            .then(data => {
                // Armazena os dados no localStorage
                localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
                
                // Redireciona para a tela de login
                window.location.href = "loginFuncionario.html";
            });
        }
    });
}

// Função para verificar se o CPF, Email ou Matrícula já existe
async function verificarCadastro(cpf, email, nif) {
    // Realiza uma requisição GET para buscar todos os usuários
    const response = await fetch('http://localhost:3000/pessoaFuncionario');
    const pessoas = await response.json();

    // Verifica se algum usuário possui o mesmo CPF, email ou matrícula
    return pessoas.some(usuario => usuario.cpf === cpf || usuario.email === email || usuario.nif === nif);
}

// Função para mostrar alerta de senha incorreta
function senhaIncorreta() {
    Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: 'As senhas não coincidem.',
    });
}





function fazerLoginFuncionario() {
   
    const nif = document.getElementById("nif").value;
    const senha = document.getElementById("senha").value;
    const senha_padrao = document.getElementById("confirmar-senha-padrao").value.trim();

    if (!nif || !senha || !senha_padrao) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    // Validação da Senha Padrão
    const senhaPadraoCorreta = senha_padrao === "Funcionario@Sen4i_";

    if (!senhaPadraoCorreta) {
        senhaPadraoIncorreta();
        
        return;
    }

   
    fetch('http://localhost:3000/pessoaFuncionario/')
        .then(response => response.json())
        .then(data => {
            
            const pessoa = data.find(p => p.nif === nif && p.senha === senha);

            if (pessoa) {
                
                localStorage.setItem('usuarioLogado', JSON.stringify(pessoa));

                // Chama a função de sucesso (cadastrado) e redireciona para a página inicial
                cadastrado();
                setTimeout(() => {
                    window.location.href = "homeFuncionario.html";
                }, 1500);
            } else {
                
                procuraCadastroFuncionario();
            }
        })
        .catch(error => {
            console.error('Erro ao fazer login:', error);
        });
}


function fazerLoginAdm() {
    // Captura os valores dos campos de entrada
    const nif = document.getElementById("nif").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const senha_padrao = document.getElementById("confirmar-senha-padrao").value.trim();

    // Validação básica para garantir que todos os campos estão preenchidos
    if (!nif || !senha || !senha_padrao) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    // Validação da Senha Padrão
    const senhaPadraoCorreta = senha_padrao === "Adm@Senai";

    if (!senhaPadraoCorreta) {
        senhaPadraoIncorreta();
        
        return;
    }

   
    fetch('http://localhost:3000/pessoaFuncionario/')
        .then(response => response.json())
        .then(data => {
            
            const pessoa = data.find(p => p.nif === nif && p.senha === senha);

            if (pessoa) {
                
                localStorage.setItem('usuarioLogado', JSON.stringify(pessoa));

                // Chama a função de sucesso (cadastrado) e redireciona para a página inicial
                cadastrado();
                setTimeout(() => {
                    window.location.href = "homeADM.html";
                }, 1500);
            } else {
                
                procuraCadastroFuncionario();
            }
        })
        .catch(error => {
            console.error('Erro ao fazer login:', error);
        });
}



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
function fazerLogin() {
    const matricula = document.getElementById("matricula").value;
    const senha = document.getElementById("senha").value;

    fetch('http://localhost:3000/pessoas/')
        .then(response => response.json())
        .then(data => {
            // Busca a pessoa que tem a matrícula e senha fornecidas
            const pessoa = data.find(p => p.matricula === matricula && p.senha === senha);

            if (pessoa) {
                // Armazena as informações do usuário logado no localStorage
                localStorage.setItem('usuarioLogado', JSON.stringify(pessoa));

                // Chama a função de sucesso (cadastrado) e redireciona para a página inicial
                cadastrado();
                setTimeout(() => {
                    window.location.href = "homeAluno.html";
                }, 1500);
            } else {
                // Caso não encontre o usuário, chama a função de erro (procuraCadastro)
                procuraCadastro();
            }
        })
        .catch(error => {
            console.error('Erro ao fazer login:', error);
        });
}



/*************************CARDAPIO***********************************/
function salvarCardapio() {

    
    var data = document.getElementById("data").value;
    var comida1 = document.getElementById("comida1").value;
    var comida2 = document.getElementById("comida2").value;
    var comida3 = document.getElementById("comida3").value;
    var comida4 = document.getElementById("comida4").value;
    var comida5 = document.getElementById("comida5").value;
    var comida6 = document.getElementById("comida6").value;
    var comida7 = document.getElementById("comida7").value;
    var comida8 = document.getElementById("comida8").value;
    var comida9 = document.getElementById("comida9").value;
    var comida10 = document.getElementById("comida10").value;
    var bebida = document.getElementById("bebida").value;
    var sobremesa = document.getElementById("sobremesa").value;

    fetch("http://localhost:3000/cardapio", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            data: data,
            comida1: comida1,
            comida2: comida2,
            comida3: comida3,
            comida4: comida4,
            comida5: comida5,
            comida6: comida6,
            comida7: comida7,
            comida8: comida8,
            comida9: comida9,
            comida10: comida10,
            bebida: bebida,
            sobremesa: sobremesa,

        }),
    })
        .then((response) => response.json())
        .then(() => {
            Swal.fire({
                title: "Você registrou o Cardápio",
                text: "",
                icon: "success",
                showConfirmButton: true,
                allowOutsideClick: false,
                allowEscapeKey: false,
                timer: null 
            });
            
            
            
        })
        .catch((error) => {
            console.error("Erro ao salvar o cardápio:", error);
            // Tratar o erro, se necessário
        });
}

function buscarId(){

    var id= document.getElementById("id_busca").value

    console.log(id)

    fetch(`http://localhost:3000/cardapio/${id}`, {
    method: "GET",
    })
    .then((response) => response.json())
    .then((data) => {
    console.log(data);

    document.getElementById("mostrarCardapio").innerHTML = 

        

        "<label for='nome'>Data:</label><br>"+
        "<input type='text' id='data' class='inputCardapio' value='"+data.data +"'><br>"+

        "<label for=''>Comida 1:</label><br>"+
        "<input type='text' id='comida1' class='inputCardapio' value='"+data.comida1 +"'><br>" +  
        
        "<label for=''>Comida 2:</label><br>"+
        "<input type='text' id='comida2' class='inputCardapio' value='"+data.comida2 +"'><br>" +  

        "<label for=''>Comida 3:</label><br>"+
        "<input type='text' id='comida3' class='inputCardapio' value='"+data.comida3 +"'><br>" +  

        "<label for=''>Comida 4:</label><br>"+
        "<input type='text' id='comida4' class='inputCardapio' value='"+data.comida4 +"'><br>" +  

        "<label for=''>Comida 5:</label><br>"+
        "<input type='text' id='comida5'class='inputCardapio'  value='"+data.comida5 +"'><br>" +  

        "<label for=''>Comida 6:</label><br>"+
        "<input type='text' id='comida6'class='inputCardapio'  value='"+data.comida6 +"'><br>" +  

        "<label for=''>Comida 7:</label><br>"+
        "<input type='text' id='comida7' class='inputCardapio' value='"+data.comida7 +"'><br>" +

        "<label for=''>Comida 8:</label><br>"+
        "<input type='text' id='comida8' class='inputCardapio' value='"+data.comida8 +"'><br>" +

        "<label for=''>Comida 9:</label><br>"+
        "<input type='text' id='comida9' class='inputCardapio' value='"+data.comida9 +"'><br>"  +

        "<label for=''>Comida 10:</label><br>"+
        "<input type='text' id='comida10' class='inputCardapio' value='"+data.comida10 +"'><br>" +
        
        "<label for=''>Bebida:</label><br>"+
        "<input type='text' id='bebida' class='inputCardapio' value='"+data.bebida +"'><br>" +

        "<label for=''>Sobremesa:</label><br>"+
        "<input type='text' id='sobremesa' class='inputCardapio' value='"+data.sobremesa +"'><br>" 

        
    });   
        
}

/**************************  BUSCAR POR DATA  ******************************************/
function buscarPorData() {
    var dataDigitada = document.getElementById("data_busca").value; // Captura a data digitada pelo usuário

    fetch("http://localhost:3000/cardapio")
        .then(response => response.json())
        .then(data => {
            // Busca o cardápio que corresponde à data digitada
            const cardapio = data.find(c => c.data === dataDigitada);

            if (cardapio) {
                document.getElementById("mostrarCardapio").innerHTML = 
                    "<br> " +
                    "<label for='nome'>Data:</label><br>" +
                    "<input type='text' id='data' class='inputCardapio' value='" + cardapio.data + "'><br>" +

                    "<label for=''>Guarnição:</label><br>" +
                    "<input type='text' id='comida1' class='inputCardapio' value='" + cardapio.comida1 + "'><br>" +

                    "<label for=''>Guarnição:</label><br>" +
                    "<input type='text' id='comida2' class='inputCardapio' value='" + cardapio.comida2 + "'><br>" +

                    "<label for=''>Guarnição:</label><br>" +
                    "<input type='text' id='comida3' class='inputCardapio' value='" + cardapio.comida3 + "'><br>" +

                    "<label for=''>Comida:</label><br>" +
                    "<input type='text' id='comida4' class='inputCardapio' value='" + cardapio.comida4 + "'><br>" +

                    "<label for=''>Comida:</label><br>" +
                    "<input type='text' id='comida5' class='inputCardapio' value='" + cardapio.comida5 + "'><br>" +

                    "<label for=''>Comida:</label><br>" +
                    "<input type='text' id='comida6' class='inputCardapio' value='" + cardapio.comida6 + "'><br>" +

                    "<label for=''>Comida:</label><br>" +
                    "<input type='text' id='comida7' class='inputCardapio' value='" + cardapio.comida7 + "'><br>" +

                    "<label for=''>Salada:</label><br>" +
                    "<input type='text' id='comida8' class='inputCardapio' value='" + cardapio.comida8 + "'><br>" +

                    "<label for=''>Salada:</label><br>" +
                    "<input type='text' id='comida9' class='inputCardapio' value='" + cardapio.comida9 + "'><br>" +

                    "<label for=''>Salada:</label><br>" +
                    "<input type='text' id='comida10' class='inputCardapio' value='" + cardapio.comida10 + "'><br>" +

                    "<label for=''>Bebida:</label><br>" +
                    "<input type='text' id='bebida' class='inputCardapio' value='" + cardapio.bebida + "'><br>" +

                    "<label for=''>Sobremesa:</label><br>" +
                    "<input type='text' id='sobremesa' class='inputCardapio' value='" + cardapio.sobremesa + "'><br>";
            } else {
                
                document.getElementById("mostrarCardapio").innerHTML = "Nenhum cardápio encontrado para essa data.";
            }
        })
        .catch(error => {
            console.error("Erro ao buscar o cardápio:", error);
            document.getElementById("mostrarCardapio").innerHTML = "Erro ao buscar o cardápio.";
        });
}
/********************************************************************/
function atualizar() {

    var dataDigitada = document.getElementById("data").value; // Captura a data fornecida

    // Busca o cardápio correspondente à data informada
    fetch("http://localhost:3000/cardapio")
        .then(response => response.json())
        .then(data => {
            // Encontra o cardápio que corresponde à data digitada
            const cardapio = data.find(c => c.data === dataDigitada);

            if (cardapio) {
                var id = cardapio.id; // Obtém o ID correspondente à data

                // Captura os novos valores dos campos do formulário
                var comida1 = document.getElementById("comida1").value;
                var comida2 = document.getElementById("comida2").value;
                var comida3 = document.getElementById("comida3").value;
                var comida4 = document.getElementById("comida4").value;
                var comida5 = document.getElementById("comida5").value;
                var comida6 = document.getElementById("comida6").value;
                var comida7 = document.getElementById("comida7").value;
                var comida8 = document.getElementById("comida8").value;
                var comida9 = document.getElementById("comida9").value;
                var comida10 = document.getElementById("comida10").value;
                var bebida = document.getElementById("bebida").value;
                var sobremesa = document.getElementById("sobremesa").value;

                // Faz o update no cardápio com base no ID encontrado
                fetch(`http://localhost:3000/cardapio/${id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        data: dataDigitada,
                        comida1: comida1,
                        comida2: comida2,
                        comida3: comida3,
                        comida4: comida4,
                        comida5: comida5,
                        comida6: comida6,
                        comida7: comida7,
                        comida8: comida8,
                        comida9: comida9,
                        comida10: comida10,
                        bebida: bebida,
                        sobremesa: sobremesa
                    }),
                })
                .then((response) => response.json())
                .then(() => {
                    setTimeout(cardapioAtualizado, 3000);
                })
                .catch((error) => {
                    console.error("Erro ao atualizar o cardápio:", error);
                });
            } else {
                console.error("Cardápio não encontrado para a data fornecida.");
                document.getElementById("mostrarCardapio").innerHTML = "Nenhum cardápio encontrado para essa data.";
            }
        })
        .catch((error) => {
            console.error("Erro ao buscar o cardápio:", error);
        });
    }

    function deletar() {
        var dataDigitada = document.getElementById("data_busca").value; // Captura a data digitada pelo usuário
    
        // Verifica se a data foi digitada
        if (!dataDigitada) {
            Swal.fire("Por favor, insira uma data antes de deletar.");
            return;
        }
    
        fetch("http://localhost:3000/cardapio")
            .then(response => response.json())
            .then(data => {
                // Busca o cardápio que corresponde à data digitada
                const cardapio = data.find(c => c.data === dataDigitada);
    
                // Verifica se o cardápio foi encontrado
                if (!cardapio) {
                    Swal.fire("Nenhum Cardápio encontrado para essa data.");
                    return;
                }
    
                // Passa o id do cardápio para a função de confirmação
                confirmarDeletar(cardapio.id); // Supondo que 'id' é o identificador único do cardápio
            })
            .catch(error => {
                console.error("Erro ao buscar o cardápio:", error);
                document.getElementById("mostrarCardapio").innerHTML = "Erro ao buscar o cardápio.";
            });
    }
    function confirmarDeletar(data) {
            Swal.fire({
                title: "Você deseja excluir esse Cardápio?",
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: "Excluir",
                denyButtonText: "Cancelar",
                confirmButtonColor: "#008000",
                cancelButtonColor: "#3085d6",
            }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:3000/cardapio/${data}`, {
                        method: "DELETE",
                    })
                    .then((response) => {
                        if (response.ok) {
                            Swal.fire("Excluído", "", "success");
                            // Você pode atualizar a lista ou a interface após a exclusão, se necessário
                        } else {
                            Swal.fire("Erro ao excluir o Cardápio", "", "error");
                        }
                    })
                    .catch(() => {
                        Swal.fire("Erro ao excluir o Cardápio", "", "error");
                    });
                } else if (result.isDenied) {
                    Swal.fire("Cardápio não excluído", "", "error");
                }
            });
        }
    
    
   





/*********************** ALERTS ********************************/

function cardapioAtualizado() {
    Swal.fire({
        title: "Cardápio Atualizado",
        text: "Você atualizou o cardápio!",
        icon: "success"
    });
}

function senhaPadraoIncorreta(){
    Swal.fire({
        icon: "error",
        title: "Senha Padrão Incorreta",
        text: "Verifique se a senha digitada esta correta."
        
    });
}




function senhaIncorreta() {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "As senhas inseridas não são iguais",
      });
}

function cadastrado() {
    Swal.fire({
        icon: "success",
        title: "Login Realizado",
        text: "Você entrou com sucesso!"
        
    });
}

function procuraCadastro() {
    Swal.fire({
        icon: "error",
        title: "Cadastro não encontrado",
        text: "Verifique se o seu N° de Matrícula ou/e senha estão corretos. Ou crie uma conta."
        
    });
}

function procuraCadastroFuncionario(){
    Swal.fire({
        title: "Cadastro não encontrado",
        text: "Verifique se o seu N° do NIF ou/e senha estão corretos. Ou crie uma conta.",
        icon: "error" 
    });
}







////////////////////////////TESTEEEEEEEEEEE///////////////////////////////////////////
// server.js
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static('public')); // Para servir arquivos estáticos

// Rota para receber os dados do cadastro
app.post('/api/cadastro', (req, res) => {
    const novoCadastro = req.body;

    // Ler dados existentes do JSON
    fs.readFile('cadastros.json', (err, data) => {
        if (err) {
            return res.status(500).send('Erro ao ler arquivo.');
        }

        const cadastros = JSON.parse(data);
        cadastros.push(novoCadastro);

        // Escrever os dados atualizados de volta ao arquivo
        fs.writeFile('cadastros.json', JSON.stringify(cadastros, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Erro ao salvar arquivo.');
            }
            res.status(201).send('Cadastro salvo com sucesso!');
        });
    });
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});