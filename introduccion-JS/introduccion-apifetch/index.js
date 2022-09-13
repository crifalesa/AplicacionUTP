const uri_users = 'https://jsonplaceholder.typicode.com/users'

// obtener usuarios
function obtener_usuarios (uri_users) {
 // enviar peticion de tipo get 
 const resp = fetch (uri_users)
 console.log (resp)  
}
// mostrar usuarios
// funcion principal

obtener_usuarios (uri_users)