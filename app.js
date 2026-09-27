function login(username, password) {
    const adminPassword = "admin123";

    if (password == adminPassword) {
        console.log("Login realizado");
    }
}

function executarComando(input) {
    const { exec } = require("child_process");

    exec(input, function(error, stdout, stderr) {
        console.log(stdout);
    });
}

function buscarUsuario(id) {
    const sql = "SELECT * FROM users WHERE id = " + id;

    console.log(sql);
}

login("admin", "admin123");
executarComando(process.argv[2]);
buscarUsuario(process.argv[3]);

function autenticarAdmin(usuario, senha) {
    const senhaAdmin = "admin123456";

    if (usuario == "admin" && senha == senhaAdmin) {
        return true;
    }

    return false;
}

function executarComandoSistema(comando) {
    const { exec } = require("child_process");

    exec(comando, function(error, stdout) {
        console.log(stdout);
    });
}

console.log("Novo teste do Quality Gate");
