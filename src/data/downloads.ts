// src/data/downloads.ts
export type Variant = { os: string; href: string; note?: string };
export type DownloadItem = {
  title: string;
  description: string;
  badge?: string;
  variants: Variant[];
};

const items: DownloadItem[] = [
  {
    title: "Aplicación Bóveda",
    description: "Cliente de escritorio para administrar tus respaldos.",
    badge: "v1.0.0",
    variants: [
      { os: "Windows", href: "https://drive.google.com/uc?export=download&id=1_IhgLhpB1KzXKQMoSwKVhq92ryQ3L5pB", note: "Installer .exe" },
      { os: "macOS", href: "https://drive.google.com/uc?export=download&id=1eoZ0s9CBpanTaRloxXqZe4O6x9_VGy9e", note: "Universal .jar" },
    ],
  },
  {
    title: "CLI Analyzer",
    description: "Herramienta de línea de comandos para análisis rápido.",
    badge: "v0.3.2",
    variants: [
      { os: "Windows", href: "https://github.com/jonatanLara/AnalyzerApp/releases/download/v1.0.0/main.exe", note: ".exe" },
      { os: "macOS", href: "https://github.com/jonatanLara/AnalyzerApp/releases/download/v1.0.0/main.exe", note: "tar.gz" },
    ],
  },
  {
    title: "Renomix",
    description: "Aplicación de escritorio desarrollada para el renombrado masivo de archivos con historial",
    badge: "v1.0.0",
    variants: [
      { os: "Windows", href: "https://github.com/jonatanLara/Renomix/releases/download/v1.0.0/Renomix.exe", note: "Installer .exe" },
      { os: "macOS", href: "https://github.com/jonatanLara/Renomix/releases/download/v1.0.0/Renomix.exe", note: "Installer .exe" },
    ],
  },
  {
    title: "Apps de Diagnóstico",
    description: "Monitoriza el estado de tus discos duros interno y externos de manera facil",
    badge: "terceros",
    variants: [
      { os: "Windows", href: "https://crystalmark.info/redirect.php?product=CrystalDiskInfoInstaller", note: "CrystalDiskInfo" },
      { os: "macOS", href: "https://apps.apple.com/us/app/amorphousdiskmark/id1168254295?mt=12", note: "AmorphousDiskMark" },
    ],
  },
  {
    title: "Plantillas",
    description: "Archivos base y guías para configurar proyectos.",
    badge: "v0.1.0",
    variants: [{ os: "Docs", href: "#", note: "README" }],
  },
];

export default items;
