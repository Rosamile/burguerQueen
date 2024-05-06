# Restaurant Burger App
Este proyecto consiste en el desarrollo de una aplicación para gestionar pedidos en un restaurante de hamburguesas. La aplicación permite a los meseros crear pedidos, mientras que el personal de cocina puede ver los pedidos entrantes y actualizar su estado (por ejemplo, "pedido listo"). Además, incluye funcionalidades como la creación de usuarios, autenticación, modificación de usuarios, creación de productos y gestión de órdenes.

## Características
### Creación de Usuario: 
Los usuarios pueden registrarse en la aplicación como meseros o personal de cocina.
### Autenticación: 
Los usuarios pueden iniciar sesión utilizando sus credenciales.
### Modificación de Usuarios:
Los usuarios con permisos adecuados pueden actualizar su información personal.
### Creación de Productos:
Los administradores pueden agregar nuevos productos al menú.
### Modificación o Eliminación de Productos:
Los administradores pueden actualizar o eliminar productos existentes del menú.
### Creación de Órdenes:
Los meseros pueden crear órdenes para los clientes, seleccionando los productos deseados.
### Gestión de Órdenes en la Cocina:
El personal de cocina puede ver las órdenes entrantes y actualizar su estado según avance la preparación.
## Tecnologías Utilizadas
## MongoDB: 
Base de datos utilizada para almacenar información sobre usuarios, productos y órdenes.
## Node.js: 
Entorno de ejecución utilizado para ejecutar el servidor de la aplicación.
## Express:
Framework de Node.js utilizado para construir la API RESTful que maneja las solicitudes HTTP.
## AWS (EC2):
Plataforma de servicios en la nube utilizada para alojar la aplicación en un entorno de instancia EC2.
## Postman:
Herramienta utilizada para probar y depurar la API RESTful.
## Librería de Pruebas:
Se incluye una librería de pruebas CON SUPERTEST para garantizar la calidad y fiabilidad del código.
Instalación y Uso
--Clona este repositorio en tu máquina local.
Asegúrate de tener Node.js y MongoDB instalados en tu sistema.
Instala las dependencias del proyecto utilizando el comando npm install.
Configura las variables de entorno necesarias, como las credenciales de MongoDB y la configuración de AWS.
Inicia el servidor utilizando el comando npm start.
Accede a la aplicación a través de tu navegador web en la dirección local proporcionada.
