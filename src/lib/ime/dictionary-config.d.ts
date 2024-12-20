import { IMEType } from './internal-types';
export interface DictionaryFileConfig {
    filename: string;
    type: IMEType;
    requirements?: IMEType[];
}
export declare const DICTIONARY_FILES: DictionaryFileConfig[];
