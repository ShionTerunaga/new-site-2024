import { createResult, Result } from "./result";

export function jsonPerse(str: string): Result<unknown, Error> {
    try {
        const overview = JSON.parse(str);

        return createResult.ok(overview);
    } catch {
        return createResult.err(new Error("パースエラーです。"));
    }
}
