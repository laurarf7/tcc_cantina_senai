async function carregarProdutos() {
    const response = await fetch("http://localhost:3000/produtos");
    const produtos = await response.json();
    const lista = document.getElementById("produtos-lista");
    lista.innerHTML = ""; // Limpa a lista antes de renderizar

    produtos.forEach(produto => {
        const produtoItem = document.createElement("div");
        produtoItem.innerHTML = `
            <div class="caixa-reserva">
            <h3>Produto: ${produto.nome}</h3>
            <p>Quantidade disponível: ${produto.quantidade}</p>
            <button class="BOTAO-RESERVAR" onclick="reservarProduto('${produto.id}')">Reservar</button>
            </div>
            
        `;
        lista.appendChild(produtoItem);
    });
}

async function reservarProduto(produtoId) {
    const response = await fetch("http://localhost:3000/reservas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ produtoId: String(produtoId) }) // Certifique-se de que produtoId é uma string
    });

    if (response.ok) {
        alert("Produto reservado com sucesso!");
    } else {
        alert("Erro ao reservar o produto.");
    }
}

carregarProdutos();
