import { IMEUIProps } from './ui-types';
export declare class IMEUIElement extends HTMLElement {
    private props;
    private state;
    private ime;
    private fontLoader;
    private container;
    private input;
    private candidateList;
    constructor();
    connectedCallback(): void;
    private render;
    private setupStyles;
    private setupElements;
    private setupEventListeners;
    private handleInput;
    private updateCandidates;
    private renderCandidates;
    private handleCandidateSelect;
    private handleClose;
    updatePosition(): void;
    updateOptions(options: IMEUIProps['options']): void;
}
