var my =req(my);
describe ('isPal', () => {
    it ('expect true', () => {
        expectToEqual('А роза упала на лапу Азора!', true);
        expectToEqual('Anna', true);
        expectToEqual('12321', true);
        expectToEqual('123212', false);
    })
});