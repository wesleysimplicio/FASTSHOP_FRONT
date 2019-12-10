export interface IAppSettings {
    baseUrl: string;
    homeUrl: string;
    apiUrl: string;
}

export class AppConfig {
    public static settings: IAppSettings;
}
