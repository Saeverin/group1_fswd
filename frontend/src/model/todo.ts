export interface ToDo {
    id?: number;
    title?: string;
    archived?: boolean;
    done?: boolean;
    category?: string;
    text?: string;
    startDate?: Date;
    endDate?: Date;
}