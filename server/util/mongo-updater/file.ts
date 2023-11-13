import * as fs from "fs";

/**
 * Retrieve version files in order.
 */
export const getSortedVersionFiles = (directoryPath: string) => {
  // Get the list of files in the current directory
  const files = fs.readdirSync(directoryPath);

  // Filter files to include only those matching the 'X.X.X.ts' pattern
  const versionedFiles = files.filter((file) => /^\d+\.\d+\.\d+\.ts$/.test(file));

  // Sort files in numerical order
  const sortedFiles = versionedFiles.sort((a, b) => {
    const [aMajor, aMinor, aPatch] = a.split(".").map(Number);
    const [bMajor, bMinor, bPatch] = b.split(".").map(Number);

    if (aMajor !== bMajor) return aMajor - bMajor;
    if (aMinor !== bMinor) return aMinor - bMinor;
    return aPatch - bPatch;
  });

  return sortedFiles;
};

/**
 * Extract the file version from the file path.
 */
export const getFileVersion = (file: string): string | null => {
  const match = file.match(/^\d+\.\d+\.\d+/);
  return match?.at(0) ?? null;
};
