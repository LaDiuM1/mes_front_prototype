// 페이지 헤더 설정
export interface PageHeaderConfig {
    title: string;
    buttons: ButtonConfig[];
}

// 버튼 설정
export interface ButtonConfig {
    type: string;
    url: string;
}

// 테이블 설정
export interface TableConfig {
    existCheckbox: boolean;
    columns: ColumnConfig[];
}

export interface ColumnConfig {
    field: string;
    headerName: string;
}

// 검색 필드 설정
export interface SearchFieldConfig {
    name: string;
    label: string;
    type: 'text' | 'select';
    options?: string[];
}

// 상세보기 섹션 설정
export interface DetailColumnConfig {
    field: string;
    headerName: string;
    width?: string;
    colSpan?: number;
    nextRow?: boolean;
}

export interface HeaderDetailConfig {
    headerWidth: string;
    header: string;
    detailColumns: DetailColumnConfig[];
}
