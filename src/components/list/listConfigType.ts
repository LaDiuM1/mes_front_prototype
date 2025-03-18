export interface Column {
    field: string;
    headerName: string;
}

export interface ButtonConfig {
    type: string;
    url: string;
}

export interface SearchField {
    name: string;
    label: string;
    type: 'text' | 'select';
    options?: string[];
}

export interface ListPageConfig {
    columns: Column[];
    buttons: ButtonConfig[];
    searchFields: SearchFieldConfig[];
    apiUrl: string;
}

export interface SearchFieldConfig {
    name: string;
    label: string;
    type: 'text' | 'select';
    options?: string[];
}
