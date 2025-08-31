// src/data/documents.ts
export type DocArea =
  | "Administración"
  | "Recursos Humanos"
  | "Informes técnicos"
  | "Minutas"
  | "Materiales";

export type DocVariant = {
  label: string;          // texto del botón (p.ej. "PDF")
  href: string;           // enlace al archivo
  format?: "PDF" | "DOCX" | "XLSX" | "PPTX" | "TXT" | "ZIP";
  size?: string;          // opcional, p.ej. "1.2 MB"
};

export type DocumentItem = {
  title: string;
  description: string;
  area: DocArea;
  updated?: string;       // ISO string: "2025-02-01"
  tags?: string[];        // p.ej. ["política", "2025"]
  variants: DocVariant[];
};

const documents: DocumentItem[] = [
  {
    title: "Política de respaldo y retención",
    description: "Normativa interna para copias de seguridad y tiempos de retención.",
    area: "Administración",
    updated: "2025-02-01",
    tags: ["política", "seguridad"],
    variants: [
      { label: "PDF", format: "PDF", href: "#" },
      { label: "Word", format: "DOCX", href: "#" }
    ]
  },
  {
    title: "Manual de incorporación",
    description: "Guía para nuevos colaboradores: accesos, buenas prácticas y herramientas.",
    area: "Recursos Humanos",
    updated: "2025-01-15",
    tags: ["onboarding"],
    variants: [{ label: "PDF", format: "PDF", href: "#" }]
  },
  {
    title: "Informe técnico trimestral",
    description: "Resultados de salud de discos y métricas de desempeño.",
    area: "Informes técnicos",
    updated: "2024-12-31",
    tags: ["Q4", "métricas"],
    variants: [
      { label: "PDF", format: "PDF", href: "#" },
      { label: "Excel", format: "XLSX", href: "#" }
    ]
  },
  {
    title: "Minuta – Comité de preservación",
    description: "Acuerdos y tareas de la reunión mensual.",
    area: "Minutas",
    updated: "2025-01-10",
    tags: ["reunión", "acuerdos"],
    variants: [{ label: "PDF", format: "PDF", href: "#" }]
  },
  {
    title: "Plantilla de checklist",
    description: "Checklist para verificación de medios y firma de conformidad.",
    area: "Materiales",
    tags: ["template"],
    variants: [
      { label: "Word", format: "DOCX", href: "#" },
      { label: "PDF", format: "PDF", href: "#" }
    ]
  }
];

export default documents;
