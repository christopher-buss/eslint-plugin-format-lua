import { fileURLToPath } from "node:url";

export const directoryWorkers = fileURLToPath(new URL("../workers", import.meta.url));
