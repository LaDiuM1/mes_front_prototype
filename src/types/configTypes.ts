
// 리스트 컬럼
export interface Column {
    field: string;
    headerName: string;
}

// 버튼 설정
export interface ButtonConfig {
    type: string;
    url: string;
}

// 검색 필드
export interface SearchFieldConfig {
    name: string;
    label: string;
    type: 'text' | 'select';
    options?: string[];
}

// 상세보기 컬럼
export interface DetailColumn {
    field: string;
    headerName: string;
    width?: string;
    colSpan?: number;
    nextRow?: boolean;
}

// 상세보기 섹션
export interface DetailSection {
    headerWidth: string;
    header: string;
    columns: DetailColumn[];
}
