document.addEventListener('DOMContentLoaded', () => {
    const feedbackForm = document.getElementById('feedbackForm');
    const postsContainer = document.getElementById('postsContainer');
    const ratingStars = document.querySelectorAll('.star');
    const ratingInput = document.getElementById('ratingInput');

    // Recupera as informações do usuário logado do localStorage
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

    // Verifica se o usuário está logado
    if (!usuarioLogado) {
        alert("Você precisa estar logado para acessar esta página.");
        window.location.href = "login.html"; // Redireciona para a página de login
    }

    // Função para carregar os posts de feedback salvos
    const loadFeedbackPosts = () => {
        const feedbackPosts = JSON.parse(localStorage.getItem('feedbackPosts')) || [];
        feedbackPosts.forEach((post, index) => {
            createFeedbackPost(post, index);
        });
    };

    // Função para criar um post de feedback na página
    const createFeedbackPost = (post, index) => {
        const feedbackPost = document.createElement('div');
        feedbackPost.classList.add('feedback-post');
        feedbackPost.style.marginBottom = "20px";
        feedbackPost.style.borderBottom = "1px solid #ddd";
        feedbackPost.style.paddingBottom = "30px";

        // Exibir nome, sobrenome e matrícula com a lixeira ao lado
        const nameContainer = document.createElement('div');
        nameContainer.style.display = "flex";
        nameContainer.style.alignItems = "center"; // Alinhar verticalmente o texto e a lixeira

        const nameElement = document.createElement('h3');
        nameElement.textContent = `${post.nome} ${post.sobrenome} (${post.matricula ? 'Matrícula: ' + post.matricula : 'NIF: ' + usuarioLogado.nif})`;

        // Criar a lixeira ao lado da matrícula
        const deleteIcon = document.createElement('div');
        deleteIcon.classList.add('delete-icon');
        deleteIcon.innerHTML = '&#x1F5D1;'; // Ícone de lixeira (🗑)
        deleteIcon.style.marginLeft = "10px"; // Espaço entre a matrícula e a lixeira
        deleteIcon.style.cursor = "pointer"; // Indicar que é clicável

        // Ação de excluir comentário
        deleteIcon.addEventListener('click', () => {
            
            console.log('Delete icon clicked!');
            Swal.fire({
                title: "Deseja excluir esse comentario?",
               
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#286613", // Cor do botão de confirmar (Sim, excluir)
                cancelButtonColor: "#d33", // Cor do botão de cancelar
                confirmButtonText: "Sim, Apagar"
            }).then((result) => {
                if (result.isConfirmed) {
                    console.log('Confirmed! Deleting the post...');
                    // Remover o post da lista e atualizar o localStorage
                    const feedbackPosts = JSON.parse(localStorage.getItem('feedbackPosts')) || [];
                    feedbackPosts.splice(index, 1);
                    localStorage.setItem('feedbackPosts', JSON.stringify(feedbackPosts));
        
                    // Remover o comentário da página
                    feedbackPost.remove();
        
                    // Exibir o alerta de sucesso
                    Swal.fire({
                        title: "Deletado!",
                        text: "Seu comentario foi apagado",
                        icon: "success"
                    });
                }
            });
        });
        

        // Adicionar nome e lixeira ao container
        nameContainer.appendChild(nameElement);
        nameContainer.appendChild(deleteIcon);

        // Exibir estrelas de avaliação
        const ratingElement = document.createElement('div');
        ratingElement.classList.add('rating');
        for (let i = 0; i < 5; i++) {
            const star = document.createElement('span');
            star.classList.add('star');
            if (i < post.rating) {
                star.classList.add('selected');
            }
            star.textContent = '★';
            ratingElement.appendChild(star);
        }

        // Exibir comentário
        const feedbackElement = document.createElement('p');
        feedbackElement.textContent = `Comentário: ${post.feedback}`;

        // Adicionar os elementos principais ao post
        feedbackPost.appendChild(nameContainer);
        feedbackPost.appendChild(ratingElement);
        feedbackPost.appendChild(feedbackElement);

        // Adicionar resposta do administrador, se houver
        if (post.response) {
            const divider = document.createElement('hr');
            divider.style.margin = "20px 0";
            divider.style.border = "0";
            divider.style.borderTop = "1px solid #ccc";

            const responseContainer = document.createElement('div');
            responseContainer.style.marginTop = "10px";
            responseContainer.style.padding = "20px";
            responseContainer.style.borderRadius = "5px";
            responseContainer.style.backgroundColor = "#f1f8ff";

            const adminNameElement = document.createElement('h4');
            adminNameElement.textContent = `Resposta do Administrador: ${usuarioLogado.nome} ${usuarioLogado.sobrenome}`;

            const responseTextElement = document.createElement('p');
            responseTextElement.textContent = post.response;

            responseContainer.appendChild(adminNameElement);
            responseContainer.appendChild(responseTextElement);

            feedbackPost.appendChild(divider);
            feedbackPost.appendChild(responseContainer);
        }

        // Adicionar o post ao container
        postsContainer.prepend(feedbackPost);
    };

    // Inicializa a lista de feedbacks
    loadFeedbackPosts();

    // Evento de seleção de estrelas
    ratingStars.forEach(star => {
        star.addEventListener('click', () => {
            const value = star.getAttribute('data-value');
            ratingStars.forEach(star => {
                star.classList.toggle('selected', star.getAttribute('data-value') <= value);
            });
            ratingInput.value = value;
        });
    });

    // Evento de envio do formulário
    feedbackForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const feedbackInput = document.getElementById('feedbackInput').value;
        const rating = ratingInput.value;

        if (feedbackInput && rating) {
            const feedbackPost = {
                nome: usuarioLogado.nome,
                sobrenome: usuarioLogado.sobrenome,
                matricula: usuarioLogado.matricula,
                feedback: feedbackInput,
                rating: rating
            };

            // Salvar o novo feedback no Local Storage
            const feedbackPosts = JSON.parse(localStorage.getItem('feedbackPosts')) || [];
            feedbackPosts.unshift(feedbackPost);
            localStorage.setItem('feedbackPosts', JSON.stringify(feedbackPosts));

            // Adicionar o feedback à página
            createFeedbackPost(feedbackPost, 0);

            feedbackForm.reset();
            ratingStars.forEach(star => star.classList.remove('selected'));
        }
    });
});
