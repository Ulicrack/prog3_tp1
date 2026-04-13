# 📝 App de Notas - Next.js

Aplicación web desarrollada con Next.js que permite crear, visualizar y organizar notas con categorías, incluyendo papelera y estadísticas.

---

## 🚀 Funcionalidades

* Crear notas
* Ver notas individuales
* Eliminar y restaurar (papelera)
* Filtrar por categoría
* Ver estadísticas

---

## 📂 Rutas implementadas

### 🔹 Rutas simples

* `/` → Página de inicio personalizada
* `/notes` → Listado de notas
* `/about` → Información del proyecto
* `/stats` → Estadísticas

### 🔹 Rutas anidadas

* `/notes/create` → Crear nota
* `/notes/trash` → Papelera

### 🔹 Rutas dinámicas

* `/notes/[id]` → Ver nota
* `/notes/categories/[id]` → Filtrar por categoría

---

## ✏️ Mejora en "Create Note"

### 🔸 Versión original

El formulario inicial solo renderizaba inputs, pero **no guardaba las notas ni manejaba estado**, por lo que no se creaban realmente.

---

### 🔸 Versión actual

Se implementó:

* `useState` para manejar datos del formulario
* `localStorage` para persistencia
* generación de IDs consecutivos
* redirección automática

```js
const lastId = notes.length > 0 
  ? Math.max(...notes.map(n => n.id)) 
  : 0;

const newNote = {
  id: lastId + 1,
  title,
  content,
  category
};
```

Esto permite crear notas reales, almacenarlas y visualizarlas correctamente en la aplicación.

---

## 🛠 Tecnologías

* Next.js (App Router)
* React
* Tailwind CSS
* LocalStorage

---

## ▶️ Ejecución

```bash
npm install
npm run dev
```

---
