import { atom } from "recoil";
import { THEME_MODES } from "../constants";

export const themeMode = atom({
    key: 'themeMode', 
    default: THEME_MODES.light, 
});