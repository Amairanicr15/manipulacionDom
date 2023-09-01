# manipulacionDom

DOM
DOM - Document Object Model - Modelo de objetos del documento

Es una representación de los objetos (elementos) que conforman la estructura de un documento en la web.
Es importante representar el documento HTML a través del DOM nos permite acceder a sus elementos y manipularlos.
El DOM representa a los elementos como nodos y objetos con los cuales podemos trabajar JavaScript.
Podemos trabajar con sus propiedades, métodos y con distintos eventos.
DOM:
- Nodo: es un punto específico del diagrama o árbol de nodos del DOM.
         Incluyen: documento, elementos HTML, texto y comentarios
- Objetos


CONCEPTOS
- Root Node (Nodo raíz)
Nodo ubicado en la parte superior de árbol. En HTML, es <html>

- Parent Node (Nodo padre)
Nodo que contiene a otro nodo en la jerarquía del DOM. Por ejemplo: head y body

- Child Node (Nodo hijo)
Nodo contenido directamente dentro de otro nodo. Por ejemplo: title, h1, p

- Descendant Node (Nodo descendiente)
Nodo contenido dentro de otro nodo en la jerarquía del DOM (directa o indirectamente). Por ejemplo: div, p, h1, a

- Sibling Nodes (Nodo hermanos)
Nodo ubicados en el mismo nivel de jerarquía del DOM. Por ejemplo: head y body - h1 Y p

- Nodo vs Elemento
El concepto de nodo es más amplio que el concepto de elemento en el DOM.

Usualmente nos referimos a los elementos del documento HTML como "elementos".
Un nodo puede ser un elemento HTML pero también puede ser texto o comentarios en el documento.
