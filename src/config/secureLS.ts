import { Singleton } from "@/src/types/Signleton"
import SecureLS from "secure-ls"

class SecureLSSingleton implements Singleton<SecureLS> {
    private _instance: SecureLS | null = null

    public get instance(): SecureLS {
        if (localStorage === undefined) {
            throw new Error("SecureLS can only be used in client context")
        }

        if (this._instance === null) {
            this._instance = new SecureLS()
        }

        return this._instance
    }
}

export const ls = new SecureLSSingleton()

