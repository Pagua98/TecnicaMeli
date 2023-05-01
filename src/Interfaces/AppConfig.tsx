interface AppConfig {
    defaultLanguage: string;
    supportedLanguages: string[];
    maxSearchResults: number;
    apiUrl: string;
    searchEndpoint: string;
    productEndpoint: string;
}

export default AppConfig;