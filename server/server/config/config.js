
// ------------- [ port ] ------------- //
// cuando se sube a la nube no sabemos qué puerto nos tocará
// process es un objeto global que está funcionando todo el tiempo 
// en nuestro proyecto y tiene el control de los procesos en node
// env= environmentb
// usamos el puerto que este deployad en el servidor externo o bien le digo que me tome 
// el puerto 3005 porque seguro que no esta ocupado (el noce usa el 3000)
process.env.PORT = process.env.PORT || 3005

