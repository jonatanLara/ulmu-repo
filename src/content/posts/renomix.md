---
title: "Guía Renomix app"
description: "Aplicación de escritorio desarrollada para el renombrado masivo de archivos"
published: 2025-09-01
tags: ["manual", "bóveda", "Renomix"]
cover: "https://github.com/jonatanLara/Renomix/blob/developer/recursos/1.png?raw=true"
draft: false
contributors: ["jonatanLara"]
cta:
  name: "Renomix"
  store: "Sitio oficial"
  action: "Cliente de escritorio"
  icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/astro.svg"
  badge: "recomendado"
  websiteUrl: "https://github.com/jonatanLara/Renomix/releases/tag/v1.0.0"
  downloads:
    - os: Windows
      href: "https://github.com/jonatanLara/Renomix/releases/download/v1.0.0/Renomix.exe"
      label: "EXE"
      size: "19 MB"
    - os: macOS
      href: "https://github.com/jonatanLara/Renomix/releases/download/v1.0.0/Renomix.exe"
      label: "DMG"
      size: "22 MB"
---

<p align="center">
  <img 
    src="https://github.com/jonatanLara/jonatanLara/blob/main/src/header_3_t.png?raw=true" 
    alt="Hoja Calendario"
    width="100%"
  />
</p>
<br>

<p align="center">
  <a href="https://github.com/jonatanLara">🐙 GitHub</a> |
  <a href="https://www.youtube.com/@jonatanlara">📺 YouTube</a> |
  <a href="https://www.instagram.com/jonatanlaraortiz/">📸 Instagram</a>
</p>
<br>

# Renomix

**Renomix** es una aplicación de escritorio desarrollada en  para el **renombrado masivo de archivos** con historial, reportes y opción de deshacer cambios.  

<p align="center">
  <img 
    src="https://github.com/jonatanLara/Renomix/blob/developer/recursos/1.png?raw=true" 
    alt="Hoja Calendario"
    width="100%"
  />
</p>
<br>

## ✨ Características principales
* Renombrado masivo con prefijo, sufijo, separador y patrones dinámicos.
* Modos:
    * Renombrar en la misma carpeta.
    * Copiar a carpeta destino (manteniendo originales).
* Políticas de conflicto configurables:
    * increment → agrega (1), (2)…
    * overwrite → reemplaza
    * skip → omite el archivo
* Previsualización antes de aplicar.
* Historial guardado en SQLite (renomix.db).
* Deshacer último lote (undo por batch).
* Menú bar con opciones de reportes y estadísticas.

## 🖥️ Uso

<p align="center">
  <img 
    src="https://github.com/jonatanLara/Renomix/blob/developer/recursos/9.png?raw=true" 
    alt="Hoja Calendario"
    width="100%"
  />
</p>
<br>

## Parámetros principales
- **Carpeta origen**: directorio donde están los archivos.
- **Extensiones**: lista separada por comas (`jpg,png,tif`).
- **Prefijo / Sufijo / Separador**: personaliza el nombre.
- **Patrón**: `{prefix}{name}{suffix}{ext}`.
- **Destino**:
  - `overwrite` → renombra en la misma carpeta.
  - `copy` → copia a carpeta destino.

1. Selecciona la carpeta de origen, donde actualmente se encuentran tus imagenes.
2. En el campo extensiones escribe la extension de los archivos que deseas que se tome encuenta, en caso de ser mas de una extensión, separalos con una coma. (jpg,png,pdf)
3. Seleciona el Prefijo o sufijo que deseas añadir.
4.  Selecciona el separador que deseas que vaya despues de prefijo o sufijo.
5. Si deseas que se sobreescriban los archivos seleciona la opcion renombrar en la misma carpeta o en caso de que desees que los cambios se hagan en una copia selecciona copiar a carpeta de destino y da clic en el boton elegir para guardar la ruta donde desees.


### Acciones

<p align="center">
  <img 
    src="https://github.com/jonatanLara/Renomix/blob/developer/recursos/10.png?raw=true" 
    alt="Hoja Calendario"
    width="100%"
  />
</p>
<br>

- **Previsualizar** → muestra los cambios sin aplicarlos.
- **Aplicar cambios** → ejecuta el renombrado/copiado.
- **Deshacer último lote** → revierte el último renombrado. 

### Recomendaciones.
Si deseas previsualizar como se veria tus archivos da clic en el botón previsualizar
SI estas seguro da clic en el boton aplicar cambios.

<p align="center">
  <img 
    src="https://github.com/jonatanLara/Renomix/blob/developer/recursos/3.png?raw=true" 
    alt="app-view-main"
    width="85%"
  />
</p>
Confirma los cambios.
y listo.


## 📂 Menú Bar


<p align="center">
  <img 
    src="https://github.com/jonatanLara/Renomix/blob/developer/recursos/4.png?raw=true" 
    alt="Hoja Calendario"
    width="100%"
  />
</p>
<br>

### Archivo
- Exportar historial a CSV  
- Abrir carpeta de la BD  
- Salir

<p align="center">
  <img 
    src="https://github.com/jonatanLara/Renomix/blob/developer/recursos/5.png?raw=true" 
    alt="Hoja Calendario"
    width="100%"
  />
</p>
<br>


### Ver *(solo si hay datos en la BD)*
- Actividad reciente  
- Lotes (batches)  
- Top extensiones  

<p align="center">
  <img 
    src="https://github.com/jonatanLara/Renomix/blob/developer/recursos/6.png?raw=true" 
    alt="Hoja Calendario"
    width="100%"
  />
</p>
<br>

### Reportes
- Resumen de operaciones  

<p align="center">
  <img 
    src="https://github.com/jonatanLara/Renomix/blob/developer/recursos/7.png?raw=true" 
    alt="Hoja Calendario"
    width="100%"
  />
</p>
<br>

### Herramientas
- Compactar BD (VACUUM)  

<p align="center">
  <img 
    src="https://github.com/jonatanLara/Renomix/blob/developer/recursos/8.png?raw=true" 
    alt="Hoja Calendario"
    width="100%"
  />
</p>
<br>

### Ayuda
- Documentación  
- Acerca de  


<p align="center">
  <img 
    src="https://github.com/jonatanLara/Renomix/blob/developer/recursos/2.png?raw=true" 
    alt="Hoja Calendario"
    width="100%"
  />
</p>
<br>

## 📊 Historial y Reportes
- Cada lote se guarda con un `batch_id`.
- Consultable desde el menú **Ver/Reportes**.
- Exportable a CSV.

## 🔄 Deshacer (Undo)
- Si fue **copy** → elimina las copias.  
- Si fue **rename** → devuelve el nombre original (si existe, añade `(revert)`).  

