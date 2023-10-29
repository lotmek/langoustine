interface IAudits {
  createdAt: Date;
  lastModifiedAt: Date;
}

type Audited<T extends {}> = T & {
  version: string;
  audits: IAudits;
};
