import * as path from "path";

export const PACKAGE_DIRECTORY = path.join(__dirname, "..");

export function joinToPackageDirectory(item: string) {
    return path.join(PACKAGE_DIRECTORY, item);
}
