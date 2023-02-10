import { Project } from "./project";

export interface Task {
    id?: number;
    title?: string;
    archived?: boolean;
    done?: boolean;
    category?: string;
    text?: string;
    startDate?: Date;
    endDate?: Date;
    project?: Project;
    type?: string;
}