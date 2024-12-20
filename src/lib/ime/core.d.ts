import { IMEEntry, IMESearchResult } from './internal-types';
import { IMEOptions } from './types';
export declare class IMECore {
    private dictionary;
    private options;
    constructor(options?: IMEOptions);
    setDictionary(entries: IMEEntry[]): void;
    updateOptions(options: IMEOptions): void;
    search(reading: string): IMESearchResult[];
    searchExact(reading: string): IMESearchResult[];
}
