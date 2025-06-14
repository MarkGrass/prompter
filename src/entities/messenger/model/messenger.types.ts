export type DialogHints = {
    confidence: number;
    database_file: string;
    database_file_part: string;
    dialog_id: string;
    message: string;
    relative_questions: string[];
};

export type DialogMessage = {
    dialog_id: string;
    message: string;
    role: string;
};

export type Dialog = {
    client_id: number;
    created_at: string;
    data: DialogHints;
    dialogs_messages: DialogMessage[];
    id: string;
    operator_id: number;
    status: string;
};
