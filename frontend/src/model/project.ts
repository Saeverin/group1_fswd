export interface Project {
    id?: number;
    title?: string;
    archived?: boolean;
    done?: boolean;
    priority?: number; //@Max: Enum??
    deadline?: string;
}