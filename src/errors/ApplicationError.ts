export class ApplicationError extends Error {
    constructor(message: string, status: number) {
        super(message)
        this.name = this.constructor.name
        this.status = status
        Error.captureStackTrace(this, this.constructor)
    }

    status: number
}

