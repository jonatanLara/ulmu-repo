---
title: "Guía Analyzer"
description: "Aprende como usar la app de tree para archivos .json"
published: 2025-08-31
tags: ["manual", "bóveda", "anayzer"]
cover: "https://github.com/jonatanLara/AnalyzerApp/blob/developer/recursos/1.png?raw=true"
draft: false
contributors: ["jonatanLara"]

cta:
  name: "Analyzer"
  store: "Sitio oficial"
  action: "Cliente de escritorio"
  icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/astro.svg"
  badge: "recomendado"
  websiteUrl: "https://github.com/jonatanLara/AnalyzerApp/releases/tag/v2.0.0"
  downloads:
    - os: Windows
      href: "https://github.com/jonatanLara/AnalyzerApp/releases/download/v1.0.0/main.exe"
      label: "EXE"
      size: "19 MB"
    - os: macOS
      href: "https://example.com/analyzer.dmg"
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

# AnalyzerApp

**AnalyzerApp** es una herramienta para analizar discos duros y detectar rutas problemáticas.
**Escanea carpetas y archivos, identifica aquellas que exceden los 260** caracteres o contienen caracteres inválidos,
y genera un reporte en Excel optimizado incluso para discos de varios TB con millones de archivos.
La aplicación ofrece:
<p align="center">
  <img 
    src="https://github.com/jonatanLara/AnalyzerApp/blob/developer/recursos/1.png?raw=true" 
    alt="Hoja Calendario"
    width="100%"
  />
</p>
<br>

## ✨ Características principales
* Escanea carpetas y subcarpetas, calculando la longitud de cada ruta.
* Detecta rutas que exceden los límites de Windows y aquellas con caracteres no permitidos (\/:*?"<>|), evitando fallos de copia.

## 🖥️ Uso

<p align="center">
  <img 
    src="https://github.com/jonatanLara/AnalyzerApp/blob/developer/recursos/2.png?raw=true" 
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
    src="https://github.com/jonatanLara/AnalyzerApp/blob/developer/recursos/3.png?raw=true" 
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
    src="https://github.com/jonatanLara/AnalyzerApp/blob/developer/recursos/4.png?raw=true" 
    alt="app-view-main"
    width="85%"
  />
</p>
Confirma los cambios.
y listo.


## 📂 Menú Bar


<p align="center">
  <img 
    src="https://github.com/jonatanLara/AnalyzerApp/blob/developer/recursos/5.png?raw=true" 
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
    src="https://github.com/jonatanLara/AnalyzerApp/blob/developer/recursos/6.png?raw=true" 
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