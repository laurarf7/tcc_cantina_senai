const nif = "7777777"
const senha = "12"



if (!nif || !senha) {
    procuraCadastroFuncionario();
} else {
    fetch('http://localhost:3000/pessoaFuncionario')
        .then(response => response.json())
        .then(data => {
            // Converte para strings para evitar problemas de tipo na comparação
            const pessoa = data.find(p => String(p.nif) === nif && String(p.senha) === senha);

           
            

            if (pessoa) {
                console.log("Alerta que deu certo")
                // window.location.href = "homeFuncionario.html";
            } else {
                console.log("procuraCadastroFuncionario()")
            }
        })
    
} 







function fazerLoginFuncionario() {
    const nif = document.getElementById("nif").value.trim();
    const senha = document.getElementById("senha").value.trim();



    if (!nif || !senha) {
        procuraCadastroFuncionario();
    } else {
        fetch('http://localhost:3000/pessoaFuncionario')
            .then(response => response.json())
            .then(data => {
                // Converte para strings para evitar problemas de tipo na comparação
                const pessoa1 = data.find(p => String(p.nif) === nif && String(p.senha) === senha);
                
                console.log(p.nif)

                // if (pessoa1) {
                //     cadastrado();
                //     window.location.href = "homeFuncionario.html";
                // } else {
                //     procuraCadastroFuncionario();
                // }
            })
            .catch(error => console.error("Erro ao fazer a requisição:", error));
    } 
}



// function fazerLoginFuncionario(){
//     const nif = document.getElementById("nif").value;
//     const senha = document.getElementById("senha").value;

//     if (nif == 0 || senha ==0 ||nif == null || senha ==null){
//         procuraCadastroFuncionario()
//     }
//     else{
//         fetch('http://localhost:3000/pessoaFuncionario')
//         .then(response => response.json())
//         .then(data =>{
            
//             const pessoa1 = data.find(p => 
//                 p.nif === nif && p.senha == senha);
//                 console.log("teste")
    
//                 if(pessoa1){
//                   cadastrado()
//                   window.location.href = "homeFuncionario.html";
//                 }else{
//                     procuraCadastroFuncionario()
//                 }
//         })
//     } 
// }


function procuraCadastroFuncionario(){
    Swal.fire({
        title: "Cadastro não encontrado",
        text: "Verifique se o seu N° do NIF ou/e senha estão corretos. Ou crie uma conta.",
        icon: "error" 
    });
}


function cadastrado() {
    Swal.fire({
        icon: "success",
        title: "Login Realizado",
        text: "Você entrou com sucesso!"
        
    });
}




// function fazerLoginFuncionario(){

//    const nif = document.getElementById("nif").value;
//    const senha = document.getElementById("senha").value;



//     console.log(nif)

//     console.log(senha)


//     fetch('http://localhost:3000/pessoaFuncionario')
//         .then(response => response.json())
//         .then(data =>{

//           console.log(data)


//         })


// }






// fetch('http://localhost:3000/pessoaFuncionario')
//         .then(response => response.json())
//         .then(data =>{

//             // console.log(data)


            
//             const pessoa1 = data.find(p => 
//                 p.nif === nif && p.senha == senha);
              




    
//                 if(pessoa1){
//                     // cadastrado()
//                     console.log("Alerta que deu certo")
//                     setTimeout(() => {
//                         window.location.href = "homeFuncionario.html";
//                     }, 1500);
                    
//                 }else{
//                    console.log("procuraCadastroFuncionario()")
//                     // procuraCadastroFuncionario()
//                 }
//         })