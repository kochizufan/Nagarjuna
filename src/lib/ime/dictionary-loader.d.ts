import { IMEEntry } from './internal-types';
interface RawDictionaryEntry {
    reading: string;
    character: string;
    type: string;
    description: string;
}
export declare class DictionaryLoader {
    /**
     * 生のデータファイルからIMEエントリーを生成
     */
    static parseEntries(hentaigana: RawDictionaryEntry[], siddham: RawDictionaryEntry[], itaiji: RawDictionaryEntry[], kumimoji: RawDictionaryEntry[]): IMEEntry[];
    private static convertHentaigana;
    private static convertSiddham;
    private static convertItaiji;
    private static convertKumimoji;
}
export {};
