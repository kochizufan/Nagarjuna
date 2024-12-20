import { FontSystem, FontSettings } from './types';
export declare class FontLoader {
    private loadedFonts;
    private loadingPromises;
    private styleElement;
    constructor();
    loadFonts(settings: FontSettings): Promise<void>;
    private loadFont;
    getFontFamilyString(settings: FontSettings): string;
    isFontLoaded(system: FontSystem): boolean;
}
