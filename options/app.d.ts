/* eslint-disable @typescript-eslint/ban-types */
export interface CustomElement {
    label: string;
    cssClasses: string;
    selector: string;
    themeSettings?: any; // TODO: investigate
    tag?: string;
    postEditor?: boolean;
}

export declare class WindowApp {
    languageLoadingError: boolean;
    getSiteName: () => string;
    getSiteDir: () => string;
    getSiteTheme: () => string | undefined;
    getThemeCustomElementsMode: () => string | undefined;
    getThemeCustomElements: () => CustomElement[] | false;
    spellcheckerIsEnabled: () => boolean;
    wysiwygAdditionalValidElements: () => string;
    wysiwygCustomElements: () => {[name: string]: {}} | undefined;
    tinymceCustomConfig: () => string | undefined;
    getCurrentAppTheme: () => Promise<string> | string;
    reportPossibleDataLoss: () => void;
    writersPanelOpen: () => void;
    writersPanelRefresh: () => void;
    sourceCodeEditorShow: (content: string, editor: any) => void; // TODO: maybe specify editor
    updateLinkEditor: (data: any) => void;  // TODO: maybe specify data
    updateGalleryPopup: (data: any) => void;  // TODO: maybe specify data
    hasPostEditorConfigOverride: () => boolean;
    initLinkPopup: (data: any) => void;
    initLinkEditor: (iframe: any) => void;
    initInlineEditor: (customFormats: any) => void;
    updateInlineEditor: (data: any) => void;
    galleryPopupUpdated: (callback: Function) => void;
    getWysiwygTranslation: () => any;
    translate: (phraseKey) => string;
    overridedCssVariables: () => string;
}