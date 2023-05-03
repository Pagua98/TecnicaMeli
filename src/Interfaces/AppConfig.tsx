interface AppConfig {
    defaultLanguage: string;
    localeCode: string;
    supportedLanguages: string[];
    maxSearchResults: number;
    apiUrl: string;
    searchApiEndpoint: string;
    productDetailApiEndpoint: string;
    productDescriptionApiEndpoint: string;
    productCategoriesApiEndpoint: string;
}

export default AppConfig;