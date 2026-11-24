import { defineConfig } from "repomix";
export default defineConfig({
  output: {
    filePath: "repomix-output_wac.txt",
    style: "plain",
    showLineNumbers: true,
  },
  ignore: {
    customPatterns: [
      "repomix-output_wac - starter 2026.09.16.txt",
      "repomix-output_wac.txt",
      "WAC - opis i założenia.docx",
      "src/assets/Facebook_Logo.png",
      "src/assets/mail32.png",
      "**/*.svg",
    ],
  },
});
