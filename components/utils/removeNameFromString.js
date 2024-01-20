export function removeNameFromString(caminhoDaImagem) {
    const partesDoCaminho = caminhoDaImagem.split('/');
    const nomeDoArquivo = partesDoCaminho[partesDoCaminho.length - 1];
    const nomeDoPersonagem = nomeDoArquivo.replace('.png', '');
    return nomeDoPersonagem;
}