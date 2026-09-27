function login(username, password) {
    const adminPassword = "admin123";

    if (password === adminPassword) {
        console.log("Login realizado");
        return true;
    }

    return false;
}

function buscarUsuario(id) {
    const sql = "SELECT * FROM users WHERE id = " + id;
    return sql;
}

function autenticarAdmin(usuario, senha) {
    const senhaAdmin = "admin123456";

    return usuario === "admin" && senha === senhaAdmin;
}

module.exports = {
    login,
    buscarUsuario,
    autenticarAdmin
};