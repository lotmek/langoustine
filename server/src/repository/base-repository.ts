import { v4 as uuidv4 } from "uuid";
import _ from "lodash";
import { Audited } from "domain/model/audits";
import { Document } from "mongoose";

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
      audits: {
        createdAt: new Date(),
        lastModifiedAt: new Date(),
      },
    };
  }

  /**
   * Build object without audits.
   */
  protected buildAuditLessValue(obj: Document<unknown, {}, Audited<T>>): T {
    return _.omit(obj.toObject(), ["audits", "version", "_id", "__v"]) as T;
  }
}
