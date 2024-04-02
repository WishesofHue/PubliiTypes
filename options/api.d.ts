/* eslint-disable @typescript-eslint/ban-types */
// TODO: improve this unspecific mess of a type definition

import { BinaryLike } from "crypto";

export enum SendChannels {
    AppSaveColorTheme = "app-save-color-theme",
    AppLicenseLoad = "app-license-load",
    AppConfigSave = "app-config-save",
    AppBackupSetLocation = "app-backup-set-location",
    AppThemeUpload = "app-theme-upload",
    AppAuthorSave = "app-author-save",
    AppAuthorCancel = "app-author-cancel",
    AppAuthorsLoad = "app-authors-load",
    AppAuthorDelete = "app-author-delete",
    AppBackupsListLoad = "app-backups-list-load",
    AppBackupRemove = "app-backup-remove",
    AppBackupRename = "app-backup-rename",
    AppBackupCreate = "app-backup-create",
    AppBackupRestore = "app-backup-restore",
    AppSiteReload = "app-site-reload",
    AppSiteCssLoad = "app-site-css-load",
    AppSiteCssSave = "app-site-css-save",
    AppSiteConfigSave = "app-site-config-save",
    AppSiteCheckWebsiteToRestore = "app-site-check-website-to-restore",
    AppSiteCheckWebsiteCatalogAvailability = "app-site-check-website-catalog-availability",
    AppSiteRestoreFromBackup = "app-site-restore-from-backup",
    AppSiteRemoveTemporaryBackupFiles = "app-site-remove-temporary-backup-files",
    AppFileManagerList = "app-file-manager-list",
    AppFileManagerDelete = "app-file-manager-delete",
    AppFileManagerCreate = "app-file-manager-create",
    AppFileManagerUpload = "app-file-manager-upload",
    AppLogFilesLoad = "app-log-files-load",
    AppLogFileLoad = "app-log-file-load",
    AppMenuUpdate = "app-menu-update",
    PubliiSetSpellcheckerLanguage = "publii-set-spellchecker-language",
    AppPostLoad = "app-post-load",
    AppPostSave = "app-post-save",
    AppPostCancel = "app-post-cancel",
    AppImageUpload = "app-image-upload",
    AppImageUploadRemove = "app-image-upload-remove",
    AppPostDelete = "app-post-delete",
    AppPostDuplicate = "app-post-duplicate",
    AppPostStatusChange = "app-post-status-change",
    AppSiteRegenerateThumbnails = "app-site-regenerate-thumbnails",
    AppSiteAbortRegenerateThumbnails = "app-site-abort-regenerate-thumbnails",
    AppPreviewRender = "app-preview-render",
    AppDeployTest = "app-deploy-test",
    AppSiteRegenerateThumbnailsRequired = "app-site-regenerate-thumbnails-required",
    AppSiteSwitch = "app-site-switch",
    AppSiteCreate = "app-site-create",
    AppSiteClone = "app-site-clone",
    AppSiteDelete = "app-site-delete",
    AppLicenseAccept = "app-license-accept",
    AppDeployRenderAbort = "app-deploy-render-abort",
    AppDeployAbort = "app-deploy-abort",
    AppDeployRender = "app-deploy-render",
    AppDeployUpload = "app-deploy-upload",
    AppSyncIsDone = "app-sync-is-done",
    AppTagSave = "app-tag-save",
    AppTagCancel = "app-tag-cancel",
    AppTagsLoad = "app-tags-load",
    AppTagsStatusChange = "app-tags-status-change",
    AppTagDelete = "app-tag-delete",
    AppSiteThemeConfigSave = "app-site-theme-config-save",
    AppThemeDelete = "app-theme-delete",
    AppNotificationsRetrieve = "app-notifications-retrieve",
    AppWxrCheck = "app-wxr-check",
    AppWxrImport = "app-wxr-import",
    AppLanguageUpload = "app-language-upload",
    AppLanguageDelete = "app-language-delete",
    AppPluginUpload = "app-plugin-upload",
    AppPluginDelete = "app-plugin-delete",
    AppSiteGetPluginsState = "app-site-get-plugins-state",
    AppSitePluginActivate = "app-site-plugin-activate",
    AppSitePluginDeactivate = "app-site-plugin-deactivate",
    AppSiteGetPluginConfig = "app-site-get-plugin-config",
    AppSiteSavePluginConfig = "app-site-save-plugin-config",
    AppClose = "app-close",
}

export enum ReceiveChannels {
    AppDataLoaded = "app-data-loaded",
    AppDeployRenderError = "app-deploy-render-error",
    AppThemeModeChanged = "app-theme-mode:changed",
    AppFilesSelected = "app-files-selected",
    AppSiteRegenerateThumbnailsProgress = "app-site-regenerate-thumbnails-progress",
    AppRenderingProgress = "app-rendering-progress",
    AppDeployRendered = "app-deploy-rendered",
    AppConnectionInProgress = "app-connection-in-progress",
    AppConnectionError = "app-connection-error",
    AppConnectionSuccess = "app-connection-success",
    AppUploadingProgress = "app-uploading-progress",
    AppWxrImportProgress = "app-wxr-import-progress",
    AppShowSearchForm = "app-show-search-form",
    BlockEditorUndo = "block-editor-undo",
    BlockEditorRedo = "block-editor-redo",
}

export enum ReceiveOnceChannels {
    AppLicenseLoaded = "app-license-loaded",
    AppConfigSaved = "app-config-saved",
    AppFileSelected = "app-file-selected",
    AppThemeUploaded = "app-theme-uploaded",
    AppAuthorSaved = "app-author-saved",
    AppAuthorsLoaded = "app-authors-loaded",
    AppAuthorDeleted = "app-author-deleted",
    AppBackupsListLoaded = "app-backups-list-loaded",
    AppBackupRemoved = "app-backup-removed",
    AppBackupRenamed = "app-backup-renamed",
    AppBackupCreated = "app-backup-created",
    AppBackupRestored = "app-backup-restored",
    AppSiteReloaded = "app-site-reloaded",
    AppSiteCssLoaded = "app-site-css-loaded",
    AppSiteCssSaved = "app-site-css-saved",
    AppSiteConfigSaved = "app-site-config-saved",
    AppSiteBackupChecked = "app-site-backup-checked",
    AppSiteRestoredFromBackup = "app-site-restored-from-backup",
    AppSiteWebsiteCatalogAvailabilityChecked = "app-site-website-catalog-availability-checked",
    AppFileManagerListed = "app-file-manager-listed",
    AppFileManagerDeleted = "app-file-manager-deleted",
    AppFileManagerCreated = "app-file-manager-created",
    AppFileManagerUploaded = "app-file-manager-uploaded",
    AppLogFilesLoaded = "app-log-files-loaded",
    AppLogFileLoaded = "app-log-file-loaded",
    AppPostLoaded = "app-post-loaded",
    AppPostSaved = "app-post-saved",
    AppPostDeleted = "app-post-deleted",
    AppPostDuplicated = "app-post-duplicated",
    AppPostStatusChanged = "app-post-status-changed",
    AppSiteRegenerateThumbnailsError = "app-site-regenerate-thumbnails-error",
    AppSiteRegenerateThumbnailsSuccess = "app-site-regenerate-thumbnails-success",
    AppPreviewRendered = "app-preview-rendered",
    AppPreviewRenderError = "app-preview-render-error",
    AppDeployTestSuccess = "app-deploy-test-success",
    AppDeployTestWriteError = "app-deploy-test-write-error",
    AppDeployTestError = "app-deploy-test-error",
    AppSiteRegenerateThumbnailsRequiredStatus = "app-site-regenerate-thumbnails-required-status",
    AppSiteSwitched = "app-site-switched",
    AppSiteCreationError = "app-site-creation-error",
    AppSiteCreationDuplicate = "app-site-creation-duplicate",
    AppSiteCreationDbError = "app-site-creation-db-error",
    AppSiteCreated = "app-site-created",
    AppSiteCloned = "app-site-cloned",
    AppSiteDeleted = "app-site-deleted",
    AppLicenseAccepted = "app-license-accepted",
    AppDeployAborted = "app-deploy-aborted",
    AppDeployUploaded = "app-deploy-uploaded",
    AppSyncIsDoneSaved = "app-sync-is-done-saved",
    AppTagSaved = "app-tag-saved",
    AppTagsLoaded = "app-tags-loaded",
    AppTagsStatusChanged = "app-tags-status-changed",
    AppTagDeleted = "app-tag-deleted",
    AppSiteThemeConfigSaved = "app-site-theme-config-saved",
    AppThemeDeleted = "app-theme-deleted",
    AppNotificationsRetrieved = "app-notifications-retrieved",
    AppWxrImported = "app-wxr-imported",
    AppWxrChecked = "app-wxr-checked",
    AppDirectorySelected = "app-directory-selected",
    AppImageUploaded = "app-image-uploaded",
    AppFilesSelected = "app-files-selected",
    AppLanguageUploaded = "app-language-uploaded",
    AppLanguageDeleted = "app-language-deleted",
    AppPluginUploaded = "app-plugin-uploaded",
    AppPluginDeleted = "app-plugin-deleted",
    AppSitePluginConfigSaved = "app-site-plugin-config-saved",
    AppSitePluginsStateLoaded = "app-site-plugins-state-loaded",
    AppSitePluginActivated = "app-site-plugin-activated",
    AppSitePluginDeactivated = "app-site-plugin-deactivated",
    AppSiteGetPluginConfigRetrieved = "app-site-get-plugin-config-retrieved",
}

export enum InvokeCommands {
    AppThemeModesetLight = "app-theme-mode:set-light",
    AppThemeModesetDark = "app-theme-mode:set-dark",
    AppThemeModegetTheme = "app-theme-mode:get-theme",
    AppThemeModesetSystem = "app-theme-mode:set-system",
    AppCreditsListgetAppPath = "app-credits-list:get-app-path",
    AppMainProcessIsOsx11OrHigher = "app-main-process-is-osx11-or-higher",
    AppMainProcessSelectFile = "app-main-process-select-file",
    AppMainProcessCreateSlug = "app-main-process-create-slug",
    AppMainProcessSelectFiles = "app-main-process-select-files",
    PubliiGetSpellcheckerLanguage = "publii-get-spellchecker-language",
    AppMainGetSpellcheckerLanguages = "app-main-get-spellchecker-languages",
    AppMainSetSpellcheckerLanguageForWebview = "app-main-set-spellchecker-language-for-webview",
    AppMainProcessLoadPassword = "app-main-process-load-password",
    AppWindowminimize = "app-window:minimize",
    AppWindowmaximize = "app-window:maximize",
    AppWindowunmaximize = "app-window:unmaximize",
    AppWindowclose = "app-window:close",
    AppMainProcessSelectDirectory = "app-main-process-select-directory",
    AppMainWebviewSearchFindInPage = "app-main-webview-search-find-in-page",
    AppMainWebviewSearchStopFindInPage = "app-main-webview-search-stop-find-in-page",
    AppMainLoadLanguage = "app-main-load-language",
    AppPluginsApisaveConfigFile = "app-plugins-api:save-config-file",
    AppPluginsApisaveLanguageFile = "app-plugins-api:save-language-file",
    AppPluginsApireadConfigFile = "app-plugins-api:read-config-file",
    AppPluginsApireadLanguageFile = "app-plugins-api:read-language-file",
    AppPluginsApireadThemeFile = "app-plugins-api:read-theme-file",
    AppPluginsApideleteConfigFile = "app-plugins-api:delete-config-file",
    AppPluginsApideleteLanguageFile = "app-plugins-api:delete-language-file",
}

export enum StopReceiveChannels {
    AppPreviewRenderError = "app-preview-render-error",
    AppConnectionError = "app-connection-error",
    AppWxrImported = "app-wxr-imported",
    AppWxrImportProgress = "app-wxr-import-progress",
}

export enum StopReceiveAllChannels {
    AppLicenseAccepted = "app-license-accepted",
    AppFilesSelected = "app-files-selected",
    AppSiteRegenerateThumbnailsError = "app-site-regenerate-thumbnails-error",
    AppSiteRegenerateThumbnailsProgress = "app-site-regenerate-thumbnails-progress",
    AppSiteRegenerateThumbnailsSuccess = "app-site-regenerate-thumbnails-success",
    AppPreviewRenderError = "app-preview-render-error",
    AppRenderingProgress = "app-rendering-progress",
    AppSiteCreated = "app-site-created",
    AppSiteCreationDuplicate = "app-site-creation-duplicate",
    AppSiteCreationDbError = "app-site-creation-db-error",
    AppSiteCreationError = "app-site-creation-error",
    AppConnectionError = "app-connection-error",
    AppShowSearchForm = "app-show-search-form",
    BlockEditorUndo = "block-editor-undo",
    BlockEditorRedo = "block-editor-redo",
}

export interface AppSiteGetPluginConfigRetrievedResult {
    pluginConfig?: string;
    pluginData?: PluginData;
} // Improve

export interface ProcessEnv {
    name: string;
    nodeVersion: string;
    chromeVersion: string;
    electronVersion: string;
    platformName: string;
}

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
    shellOpenExternal: (url: string) => Promise<Promise<void>>;
    /**
     * Invokes `fs.existsSync`
     *
     * @memberof MainProcessAPI
     */
    existsSync: (pathToCheck: string) => Promise<boolean>;
    /**
     * `normalizePath`
     *
     * @memberof MainProcessAPI
     */
    normalizePath: (pathToNormalize: string) => Promise<string>;
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
    getEnv: () => ProcessEnv;
    send<T extends SendChannels>(channel: T, ...data: any[]): void; // TODO: improve
    receive<T extends ReceiveChannels>(channel: T, func: Function): void; // TODO: improve
    receiveOnce<T extends ReceiveOnceChannels>(
        channel: T,
        func: T extends ReceiveOnceChannels.AppSiteGetPluginConfigRetrieved
            ? (result?: AppSiteGetPluginConfigRetrievedResult) => void
            : Function, // TODO: all the others, maybe refer to https://stackoverflow.com/questions/64897872/create-typescript-type-from-enum-values
    ): void;
    invoke<T extends InvokeCommands>(
        command: T,
        ...data: any[]
    ): Promise<any> | false; // TODO: improve
    stopReceive<T extends StopReceiveChannels>(channel: T, func): void; // TODO: improve
    stopReceiveAll<T extends StopReceiveAllChannels>(channel: T): void; // TODO: improve
}

interface Dictionary<T> {
    [Key: string]: T;
}

export interface PluginAssets {
    front: string[];
}

export interface MessageInOptions {
    text: string;
    type: string;
}

export interface PluginData {
    assets: PluginAssets;
    author: string;
    config: Dictionary<any>[];
    description: string;
    license: string;
    messageInOptions: MessageInOptions;
    minimumPubliiVersion: string;
    name: string;
    path: string;
    scope: string;
    usePluginSettingsView: boolean;
    version: string;
}
