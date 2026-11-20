import "styled-components";
import { theme } from "./theme";

type WacTheme = typeof theme;

declare module "styled-components" {
  // ESLint: intentional module augmentation
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends WacTheme {}
}
