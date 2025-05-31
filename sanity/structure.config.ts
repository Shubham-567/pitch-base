import type { StructureResolver } from "@/sanity/structure.config";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("author").title("Author"),
      S.documentTypeListItem("startup").title("Startup"),
    ]);
