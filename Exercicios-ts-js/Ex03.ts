interface Livro {
    titulo: string;
    autor: string;
    anoPublicacao: number;
}

let livro: Livro = {
    titulo: 'As Crônicas de Gelo e Fogo',
    autor: 'George R. R. Martin',
    anoPublicacao: 1996
};

function exibirLivro(livro: Livro): void {
    console.log(`Título: ${livro.titulo}`);
    console.log(`Autor: ${livro.autor}`);
    console.log(`Ano de publicação: ${livro.anoPublicacao}`);
}

exibirLivro(livro);
