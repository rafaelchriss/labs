function executarCodigo(codigo) {
    eval(codigo);
}

const password = "Admin123456!";

executarCodigo(process.argv[2]);