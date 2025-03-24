// ==============================
// 페이지 헤더 구성
// ==============================

export interface PageHeaderButton {
    type: string;
    url: string;
}

export interface PageHeaderConfig {
    title: string;
    buttons: PageHeaderButton[];
}

// ==============================
// 검색 필드 구성
// ==============================

export type SearchFieldType = 'text' | 'select' | 'date' | 'datetime';

export interface SearchField {
    name: string;
    label: string;
    type: SearchFieldType;
    options?: string[];
}

// ==============================
// 테이블 구성
// ==============================

export interface TableColumn {
    field: string;
    headerName: string;
}

export interface TableConfig {
    existCheckbox?: boolean;
    columns: TableColumn[];
}

// ==============================
// 상세 정보(HeaderDetails) 구성
// ==============================

export interface DetailColumnConfig {
    field: string;
    headerName: string;
    width?: string;
    nextRow?: boolean;
    colSpan?: number;
}

export interface HeaderDetailSection {
    headerWidth: string;
    header: string;
    detailColumns: DetailColumnConfig[];
}
