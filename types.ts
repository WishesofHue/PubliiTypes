/* eslint-disable @typescript-eslint/ban-types */ // TODO: remove "function" type

export abstract class PubliiPlugin {
    api: RendererPlugins;
    name: string;
    config: Dictionary<any>;

    constructor(api: RendererPlugins, name: string, config: Dictionary<any>) {
        this.api = api;
        this.name = name;
        this.config = config;
    }

    addInsertion?(): void;
    addModifier?(): void;
    addEvent?(): void;
}

export interface Dictionary<T> {
    [Key: string]: T;
}

export interface SiteConfig {
    domain: string;

    advanced?: Dictionary<any>;

    [Key: string]: any;
}

export interface ErrorMessage {
    message: string;
    desc: string;
}

export interface StatusMessage {
    status: string;
}

// TODO: improve
export interface FinalContentStructure {
    posts;
    tags;
    authors;
}

export interface Context extends Dictionary<any> {} // TODO
// TODO RendererContext
// TODO RendererContext.context

export interface Renderer {
    siteConfig: SiteConfig;
    appDir?: string;
    sitesDir?: string;
    siteName?: string;
    themeName?: string;
    menuContext?: string[] | "";
    errorLog?: ErrorMessage[];
    previewMode?: boolean;
    useRelativeUrls?: boolean;
    sitePath?: string;
    plugins?: RendererPlugins;
    translations?: Dictionary<boolean>;
    contentStructure?: false | FinalContentStructure;
    commonData?: Dictionary<any>; // TODO: improve
    cachedItems?: Dictionary<any>; // TODO: improve
    globalContext?: any; // TODO: improve
    itemID?: number | boolean;
    postData?: Dictionary<any> | boolean; // TODO: improve;
    pluginsDir?: string;
    loadPlugins?(): void;
}

export interface RendererParam {
    priority: number;
    callback: Function;
    pluginInstance: PubliiPlugin;
}

export type RendererAdd = (
    value: string,
    callback: Function,
    priority: number,
    pluginInstance: PubliiPlugin,
) => void;
export type RendererGet = (value: string) => RendererParam;
export type RendererHas = (value: string) => boolean;
export type RendererRemove = (
    value: string,
    callback: Function,
    priority: number,
) => void;
export type RendererReset = (value: string) => void;
export type RendererContext = Context | false;

export type RendererInsertCallback = (
    rendererInstance: Renderer,
    params: RendererContext,
) => string;

export interface RendererPlugins {
    sitePath: string;
    insertions: Dictionary<RendererParam>;
    modifiers: Dictionary<RendererParam>;
    events: Dictionary<RendererParam>;

    addInsertion: RendererAdd;
    addModifier: RendererAdd;
    addEvent: RendererAdd;

    getInsertions: RendererGet;
    getModifiers: RendererGet;
    getEvents: RendererGet;

    hasInsertions: RendererHas;
    hasModifiers: RendererHas;
    hasEvents: RendererHas;

    removeInsertions: RendererRemove;
    removeModifiers: RendererRemove;
    removeEvents: RendererRemove;

    resetInsertions: RendererRemove;
    resetModifiers: RendererRemove;
    resetEvents: RendererRemove;

    runInsertions(
        place: string,
        rendererInstance: Renderer,
        params: RendererContext,
    ): string;
    runModifiers<T>(
        value: string,
        rendererInstance: Renderer,
        originalValue: T,
        params: Context | false,  // TODO: adapt to 0.43.0 release and all I overlooked
    ): T;
    runEvents(
        value: string,
        rendererInstance: Renderer,
        params: RendererContext,
    ): true;

    sortByPriority(itemA: RendererParam, itemB: RendererParam): number;
    readFile(
        fileName: string,
        pluginInstance: PubliiPlugin,
    ): string | undefined;
    createFile(
        fileName: string,
        fileContent: string,
        pluginInstance: PubliiPlugin,
    ): StatusMessage;
}
