import { ApplicationError } from "@/src/errors/ApplicationError"

export class FetchExchangeRatesError extends ApplicationError {
    constructor() {
        super("An unexpected error occured while fetching exchange rates", 500)
    }
}
