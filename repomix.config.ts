import { defineConfig } from "repomix";
export default defineConfig({
  output: {
    filePath: "repomix-output_wac.txt",
    style: "plain",
    showLineNumbers: true,
  },
  ignore: {
    customPatterns: [
      "repomix-output.txt",
      "repomix-output_wac.txt",
      "**/*.svg",
    ],
  },
});
