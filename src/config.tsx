import AppConfig from "./Interfaces/AppConfig";

const config: AppConfig = {
  defaultLanguage: "es",
  localeCode: "es-UY",
  supportedLanguages: ["es"],
  maxSearchResults: 4,
  apiUrl: "http://localhost:9000/api/v1/",
  searchApiEndpoint: "items/search/",
  productDetailApiEndpoint: "items/",
  productDescriptionApiEndpoint: "items/description/",
  productCategoriesApiEndpoint: "items/getCategories/",
};

export default config;