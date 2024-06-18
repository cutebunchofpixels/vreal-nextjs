export enum Locale {
    English = "en",
    Hebrew = "he",
}

export type Translations = {
    [key: string]: string | Translations
}

export type TranslationFunction = (key: string) => string

