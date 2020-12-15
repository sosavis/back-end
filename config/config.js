
// ------------- [ port ] ------------- //
process.env.PORT = process.env.PORT || 3005;
/*
cuando el backend esté corriendo en mi compu, lo hará sobre el puerto 3000
pero cuando se monta el servidor en la nube no sabemos en qué puerto tendrá asignado

PROCESS es un objeto global que está funcionando todo el tiempo en nuestro proyecto 
y nos proporciona información y también control sobre procesos que están 
funcionando en node
usamos process para obtener la información del puerto que actualmente este funcionando
mi servidor sobre todo cuando esté en la nube
process.env.PORT = process.env.PORT || 3005 (env= environment)
con esto le asigno a process.env.PORT el mismo puerto que se le asignó al estar en la
nube sino está en la nube entonces que use el 3005
el front usa el puerto 3000 por eso le decimos que al backend que use el 3005

en server.js importo este config:
    require('./config/config')
*/

//definimos variales de entorno
//si estoy en ambiente de produccion que me avise sino me devuelve DEV
process.env.NODE_ENV=process.env.NODE_ENV || 'dev';

//defino la base de datos
let urlDB

if(process.env.NODE_ENV==='dev') {
    urlDB='mongodb://localhost:27017/rolling'
} else{
    urlDB=''
}

process.env.URLDB=urlDB