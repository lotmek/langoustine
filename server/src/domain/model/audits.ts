export interface IAudits {
  createdAt: Date;
  lastModifiedAt: Date;
}

export type Audited<T extends {}> = T & {
  audits: IAudits;
};
