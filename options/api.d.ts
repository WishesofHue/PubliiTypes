/* eslint-disable @typescript-eslint/ban-types */
// TODO: improve this unspecific mess of a type definition

import { BinaryLike } from "crypto";

export declare class MainProcessAPI {
    /** 
     * Invokes `electron.shell.showItemInFolder` 
     * 
     * @memberof MainProcessAPI
    */
    shellShowItemInFolder: (url: string) => Promise<void>;
    /** 
     * Invokes `electron.shell.openPath` 
     * 
     * @memberof MainProcessAPI
     */
    shellOpenPath: (filePath: string) => Promise<Promise<string>>;
    /**
     * Invokes `electron.shell.openExternal`
     *
     * @memberof MainProcessAPI
     */
    shellOpenExternal: (url:string) => Promise<Promise<void>>;
    /**
     * Invokes `fs.existsSync`
     *
     * @memberof MainProcessAPI
     */
    existsSync: (pathToCheck:string) => Promise<boolean>;
    /**
     * `normalizePath`
     *
     * @memberof MainProcessAPI
     */
    normalizePath: (pathToNormalize:string) => Promise<string>;
    /**
     * `crypto.createHash('md5').update(value).digest('hex'))`
     *
     * @memberof MainProcessAPI
     */
    createMD5: (value: BinaryLike) => Promise<string>;
    /**
     * Get env info
     *
     * @memberof MainProcessAPI
     */
    getEnv: () => ({
        name: string,
        nodeVersion: string,
        chromeVersion: string,
        electronVersion: string,
        platformName: string
    });
    send: (channel: string, ...data: any[]) => void;
    receive: (channel: string, func: Function) => void; // TODO: not sure about this one, figure out
    receiveOnce: (channel: string, func: Function) => void;  // TODO: same as above, figure out
    invoke: (command, ...data: any[]) => Promise<any> | false;
    stopReceive: (channel, func) => void;
    stopReceiveAll: (channel) => void;
}