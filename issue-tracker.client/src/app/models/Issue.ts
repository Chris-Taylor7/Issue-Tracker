export interface Issue {
    issueId: number;
    issueName?: string;
    description?: string;
    department?: string;
    status?: Status;
    dateWorking: Date;
    active: boolean;
  }