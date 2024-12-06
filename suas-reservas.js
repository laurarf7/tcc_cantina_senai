async function carregarMinhasReservas() {
    try {
        // Carrega as reservas e produtos separadamente
        const [responseReservas, responseProdutos] = await Promise.all([
            fetch("http://localhost:3000/reservas"),
            fetch("http://localhost:3000/produtos")
        ]);

        if (!responseReservas.ok || !responseProdutos.ok) {
            throw new Error("Erro ao carregar dados");
        }

        const reservas = await responseReservas.json();
        const produtos = await responseProdutos.json();

        // Cria um mapa de produtos para fácil acesso pelo ID
        const produtoMap = {};
        produtos.forEach(produto => {
            produtoMap[produto.id] = produto;
        });

        const lista = document.getElementById("suas-reservas-lista");
        lista.innerHTML = ""; // Limpa a lista antes de renderizar

        reservas.forEach(reserva => {
            const produto = produtoMap[reserva.produtoId];
            if (produto) {
                const reservaItem = document.createElement("div");
                reservaItem.innerHTML = `
                    <h3>Produto: ${produto.nome}</h3>
                    <p>Quantidade reservada: 1</p>
                `;
                lista.appendChild(reservaItem);
            } else {
                console.error("Produto não encontrado para a reserva com ID:", reserva.id);
            }
        });
    } catch (error) {
        console.error("Erro ao carregar reservas:", error);
    }
}

carregarMinhasReservas();
