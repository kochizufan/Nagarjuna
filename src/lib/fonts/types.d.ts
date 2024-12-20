export type FontSystem = 'hentaigana' | 'siddham' | 'itaiji';
interface RemoteFontConfig {
    type: 'remote';
    url: string;
    family: string;
}
interface LocalFontConfig {
    type: 'local';
    style: string;
    family: string;
}
export type FontConfig = RemoteFontConfig | LocalFontConfig;
export type FontSettings = {
    [K in FontSystem]?: boolean;
};
export declare class FontLoadError extends Error {
    readonly system: FontSystem;
    readonly url?: string | undefined;
    constructor(system: FontSystem, url?: string | undefined, message?: string);
}
export {};
