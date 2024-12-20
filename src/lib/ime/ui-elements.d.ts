import { IMEUIProps } from './ui-types';
export interface IMEUIElement extends HTMLElement {
    props: IMEUIProps;
    updatePosition: () => void;
    updateOptions: (options: IMEUIProps['options']) => void;
}
declare global {
    interface HTMLElementTagNameMap {
        'ime-ui': IMEUIElement;
    }
}
