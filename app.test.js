const {
    login,
    buscarUsuario,
    autenticarAdmin
} = require('./app');

test('login correto deve retornar true', () => {
    expect(login('admin', 'admin123')).toBe(true);
});

test('login incorreto deve retornar false', () => {
    expect(login('admin', 'senhaerrada')).toBe(false);
});

test('buscarUsuario deve montar a query', () => {
    expect(buscarUsuario(10))
        .toBe('SELECT * FROM users WHERE id = 10');
});

test('autenticarAdmin deve aceitar credenciais corretas', () => {
    expect(
        autenticarAdmin('admin', 'admin123456')
    ).toBe(true);
});

test('autenticarAdmin deve negar credenciais incorretas', () => {
    expect(
        autenticarAdmin('admin', 'errada')
    ).toBe(false);
});