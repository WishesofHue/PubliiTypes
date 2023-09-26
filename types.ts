abstract class PubliiPlugin {
    constructor (API: RendererPlugins, name: string, config: Dictionary<any>) {
        // NOT IMPLEMENTED
    };

    addInsertion?(): void;
    addModifier?(): void;
    addEvent?(): void;
}

interface Dictionary<T> {
    [Key: string]: T;
}

interface SiteConfig {
    domain: string;

    advanced?: Dictionary<any>;

    [Key: string]: any;
}

interface ErrorMessage {
    message: string;
    desc: string;
}

interface StatusMessage {
    status: string;
}

// TODO: improve
interface FinalContentStructure {
    posts;
    tags;
    authors;
}

interface Renderer {
    siteConfig: SiteConfig;
    appDir?: string;
    sitesDir?: string;
    siteName?: string;
    themeName?: string;
    menuContext?: string[] | '';
    errorLog?: ErrorMessage[];
    previewMode?: boolean;
    useRelativeUrls?: boolean;
    sitePath?: string;
    plugins?: RendererPlugins;
    translations?: Dictionary<boolean>;
    contentStructure?: false | FinalContentStructure;
    commonData?: Dictionary<any>;  // TODO: improve
    cachedItems?: Dictionary<any>;  // TODO: improve
    globalContext?: any;  // TODO: improve
    itemID?: number | boolean;
    postData?: Dictionary<any> | boolean;  // TODO: improve;
    pluginsDir?: string;
    loadPlugins?(): void;
}

interface RendererParam {
    priority: number;
    callback: Function;
    pluginInstance: PubliiPlugin;
}

type RendererAdd = (value: string, callback: Function, priority: number, pluginInstance: PubliiPlugin) => void;
type RendererGet = (value: string) => RendererParam;
type RendererHas = (value: string) => boolean;
type RendererRemove = (value: string, callback: Function, priority: number) => void;
type RendererReset = (value: string) => void;

interface RendererPlugins {
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

    runModifiers <T extends any> ( value: string, rendererInstance: Renderer, originalValue: T, params: boolean): T;
    runEvents ( value: string, rendererInstance:Renderer, params: boolean): true;
    
    sortByPriority (itemA: RendererParam, itemB: RendererParam): number;
    readFile (fileName: string, pluginInstance: PubliiPlugin): string | undefined;
    createFile (fileName: string, fileContent: string, pluginInstance: PubliiPlugin): StatusMessage;
}