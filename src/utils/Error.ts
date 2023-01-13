// You can name this whatever you want
// This is the error class.
export class ModuleError extends Error {
    constructor(message: string) {
        super(message);
        // You might want to replace this
        this.name = "[YourPackage_Error]";
    }

    public static throw(message: string) {
        throw new ModuleError(message);
    }
}