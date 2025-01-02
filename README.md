# **Prueba API restfull** 

## **1. Introduccion**

Bienvenido a la API restfull, aqui puedes gestionar tus productos, los cuales estaran en una lista, los puedes pedir, modificar, crear y eliminar para poder gestionar la lista de productos. 

## **2. Requisitos**
### Herramientas necesarias
- **Lenguaje backend:** nodeJS
- **Framework:** ExpressJS, express-validator, uuid & nodemon *encontraras en npm cada paquete*
- **Herramienta de prueba:** Postman
- **Docker:** Para contener el proyecto y facilitar su despliegue
- *No se uso base de datos, se guarda en memoria los datos, al ser esta una prueba se deja un archivo JSON en la carpeta para que se pueda copiar para insertar productos (deben ser insertados manualmente)*

---

## **3. Estructura del proyecto**
```
 /nodeexpress
    /controllers #logica de la API
    /routes #endpoints
```

## **4. EndPoints**

### **A) Crear un producto**
- **URL:** `/products`
- **Metodo:** `POST`
- **Descripcion:** Crear un nuevo producto.
- **Cuerpo de solicitud:** hay un archivo JSON en la carpeta con 4 ejemplos para copiar
```json
    {
        "name": "brush",
        "price": 10.99,
        "category": "house",
        "description": "a usefull brush with you can clean your teeth"
    }
```
- **Mensaje de Respuesta**
- `product with the name ${product.name} added to the database!`
- **Estructura de producto creado**
```json
{
        "name": "brush",
        "price": 10.99,
        "category": "house",
        "description": "a usefull brush with you can clean your teeth",
        "id": "43d29fcd-306b-4512-a375-f6f073ca8080"
    }
```
### **B) Optener lista de productos**
- **URL:** `/products`
- **Metodo:** `GET`
- **Descripcion:** Pedir lista de productos completa.
- **Estructura de Respuesta:**
```json
    {
        "name": "brush",
        "price": 10.99,
        "category": "house",
        "description": "a usefull brush with you can clean your teeth"
    },
    {
        "name": "toothpaste",
        "price": 5.99,
        "category": "house",
        "description": "a usefull toothpaste with you can clean your teeth"
    },
    {
        "name": "iPhone",
        "price": 4500,
        "category": "Tenchology",
        "description": "comunication think with that u can call your parents"
    },
    {
        "name": "Motorola",
        "price": 5000,
        "category": "Tenchology",
        "description": "comunication think with that u can call your parents"
    },
    {
        "name": "Samsung",
        "price": 900,
        "category": "Tenchology",
        "description": "comunication think with that u can call your parents"
    }

```
### **C) pedir en especifico un producto ya guardado**
- **URL:** `/products/**id del producto**` *se consigue en el espacio creado id unico al crear un producto.*
- **Metodo:** `GET`
- **Descripcion:** Pedir un producto en especifico.
- **Estructura de Respuesta:**
```json
{
    "name": "brush",
    "price": 500,
    "category": "house",
    "description": "a usefull brush with you can clean your teeth",
    "id": "43d29fcd-306b-4512-a375-f6f073ca8080"
}
```
### **D) Modificar un producto**
- **URL:** `/products/**id del producto**` *se consigue en el espacio creado id unico al crear un producto.*
- **Metodo:** `PATCH`
- **Descripcion:** Cambiar algun dato de un producto.
- **Mensaje de Respuesta**
- `product with id ${id} was been updated!`
### **E) Eliominar un producto***
- **URL:** `/products/**id del producto**`
- **Método:** `DELETE`
- **Descripción:** Elimina una producto específico.
- **Parámetros de URL:**
  - `id` (número): El ID del producto.
- **Response (204):**
Sin contenido.
---
## **5. Manejo de errores**
- La API revisa los datos entregados y todos los campos son requeridos a la hora de crear el producto `400 Bad request`
- **Estructura de respuesta**
```json
{
    "errors": [
        {
            "type": "field",
            "value": 0,
            "msg": "Price must be a number and be greater to 0",
            "path": "price",
            "location": "body"
        }
    ]
}
```
---
## **6. Tecnologías utilizadas**
- **Node.js:** Plataforma de JavaScript para el desarrollo del backend.
- **Express.js:** Framework minimalista para construir servidores web y APIs.
- **Express-validator** express es un conjunto de medias express.js que envuelve el amplia colección de validadores ofrecidos por validator.js.
- **uuid** creador de id unico de cada producto, nunca es el mismo 2 veces!
- **nodemon** herramienta usada para no tirar el servidor y que se actualice periodicamente al realizar cambios en los archivos y poder tener en tiempo real el desarrollo de la API.
---
## **7. Correr el proyecto**
### Instrucciones:
1. Clona el repositorio:
```bash
git clone https://github.com/Zombiamedias/nodeExpress.git
```
2. Descargar la imagen docker:
```bash
docker pull mapemc/node-api:latest
```
3. Corre el contenedor:
```bash
docker run -p 5000:5000 mapemc/node-api
```
4. Accede a la API en `http://localhost:5000`.
5. *Se puede ejecutar con `npm start` en el bash con node y probar con postman como alternativa*

## **8.Conclusiones**
- Es un gran desafio para mi como frontend este tema, me diverti mucho, dejare los enlaces que me salvaron y de que la pena por enviar tarde la prueba no te pregunte, espero que haya cumplido con tus espectativas, aun asi, aprendi mucho y se que me costo hacer esta API, aun asi, soy feliz con esto y me ayudo mucho en conocimiento y backend.
- planeo mas adelante con un form de html en react pero para mi pag principal. 
---
### links donde me base para ayudarme
- <https://stackoverflow.com/questions/8817423/why-is-dirname-not-defined-in-node-repl>
- <https://stackoverflow.com/questions/74522014/how-to-authenticate-with-private-repository-in-docker-container>
- <https://www.hostinger.co/tutoriales/como-crear-contenedor-docker>
- <https://www.ochobitshacenunbyte.com/2020/12/14/como-accedo-a-un-contenedor-con-docker/>
- <https://hub.docker.com/repository/docker/mapemc/node-api/general?editDescription=true>
- <https://stackoverflow.com/questions/41553291/can-you-import-nodes-path-module-using-import-path-from-path>

### links de documentacion de herramientas para apoyo
- **Express** <https://expressjs.com/es/starter/installing.html>
- **Express-validator** <https://express-validator.github.io/docs/>
- **Docker** <https://docs.docker.com/>
- **uuid** <https://github.com/uuidjs/uuid#readme>
- **nodemon** <https://github.com/remy/nodemon>

