export default function geradorSenha(){

    let senha: string = '';
    let caracteres: string = '0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz@#%';
    let limite: number = 8;
    
    for(let i = 0; i < limite; i ++){
        senha = senha + caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    
    return senha;
}