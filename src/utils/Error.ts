export class ModuleError extends Error {
    constructor(message: string) {
        super(message);
        // You might want to replace this
        this.name = "[AirdotAPI_Error]";
    }

    public static throw(message: string) {
        throw new ModuleError(message);
    }
}