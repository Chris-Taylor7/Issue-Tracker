import { Priority } from "./enums/Priority";
import { Status } from "./enums/Status";

export interface Issue {
    issueId: number;
    issueName?: string;
    description?: string;
    department?: string;
    status: Status | undefined;
    priority: Priority | undefined;
    dateWorking: Date;
    active: boolean;
  }