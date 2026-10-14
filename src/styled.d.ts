import "styled-components";
import { theme } from "./theme";

type WacTheme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends WacTheme {}
}
