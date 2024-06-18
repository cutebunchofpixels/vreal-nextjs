import { ApplicationError } from "@/src/errors/ApplicationError"

export class InvalidExchangeIntervalError extends ApplicationError {
    constructor() {
        super("Provided exchange chart date interval is invalid", 400)
    }
}

