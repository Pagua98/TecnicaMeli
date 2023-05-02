import AppConfig from "./Interfaces/AppConfig";

const config: AppConfig = {
  defaultLanguage: "es",
  localeCode: "es-UY",
  supportedLanguages: ["es"],
  maxSearchResults: 4,
  apiUrl: "https://api.mercadolibre.com/",
  searchEndpoint: "sites/MLU/search?q=",
  productEndpoint: "items/"
};

export default config;