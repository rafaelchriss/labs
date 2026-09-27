const { exec } = require("node:child_process");

function executarComandoUsuario(input) {
    exec(input);
}
const senhaBanco = "SenhaSuperSecreta123";