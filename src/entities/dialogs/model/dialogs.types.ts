export type DialogsRequest = {
    client_id: number;
    operator_id: number;
    status: string;
    limit: string;
    offset: string;
};

export type DialogMessage = {
    dialog_id: string;
    message: string;
};

export type Dialog = {
    id: string;
    client_id: string;
    created_at: string;
    dialogs_messages: DialogMessage[];
};

export type DialogsResponse = {
    result: Dialog[];
    limit: 0;
    offset: 0;
    page: 0;
};
