export interface IMEUIProps {
    target: HTMLInputElement | HTMLTextAreaElement;
    options: {
        enabledTypes: {
            hentaigana?: boolean;
            siddham?: boolean;
            itaiji?: boolean;
            buddha_name?: boolean;
        };
    };
    position?: 'bottom' | 'cursor';
    onClose?: () => void;
    onChange?: (value: string) => void;
    onUpdateOptions?: (options: IMEUIProps['options']) => void;
}
export interface IMEUIState {
    input: string;
    candidates: Array<{
        char: string;
        reading: string;
        type: string;
    }>;
    cursorPosition: {
        x: number;
        y: number;
    } | null;
}
