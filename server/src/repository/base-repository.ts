import { v4 as uuidv4 } from "uuid";
import _ from "lodash";

export abstract class BaseRepository<T extends {}> {
  /**
   * Generate a new resource version.
   */
  protected generateNewVersion(): string {
    return uuidv4();
  }

  /**
   * Build object with audits.
   */
  protected buildAuditedValue(obj: T): Audited<T> {
    return {
      ...obj,
      version: this.generateNewVersion(),
      audits: {
        createdAt: new Date(),
        lastModifiedAt: new Date(),
      },
    };
  }

  /**
   * Build object without audits.
   */
  protected buildAuditLessValue(obj: T): T {
    return _.omit(obj, ["audits", "version"]) as T;
  }
}
