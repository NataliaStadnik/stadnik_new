export enum Theme {
  Light = "light",
  Dark = "dark",
}

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};
