import { createResult, Result } from "./result";

export function jsonPerse(str: string): Result<unknown> {
    try {
        const overview = JSON.parse(str);

        return createResult.ok(overview);
    } catch {
        return createResult.err("パースエラーです。");
    }
}
