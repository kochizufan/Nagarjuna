export type IMEType = 'hentaigana' | 'siddham' | 'itaiji' | 'buddha_name';
export interface IMEEntry {
    reading: string;
    char: string;
    type: IMEType;
    isBuddhaName: boolean;
}
export interface IMESearchResult {
    char: string;
    reading: string;
    type: IMEType;
}
export declare class IMEError extends Error {
    constructor(message: string);
}
