import {HeaderDetailSection, PageHeaderConfig, SearchField, TableConfig} from './configTypes';

// ==============================
// 리스트 페이지 Props
// ==============================

export interface ListPageProps {
    pageHeader: PageHeaderConfig;
    searchFields: SearchField[];
    table: TableConfig;
    apiUrl: string;
}

// ==============================
// 상세 리스트 페이지 Props
// ==============================

export interface DetailPageProps {
    pageHeader: PageHeaderConfig;
    headerDetails: HeaderDetailSection[];
    table: TableConfig;
    apiUrl: string;
}

// ==============================
// 리스트 테이블 Props
// ==============================

export interface ListTableProps {
    table: TableConfig;
    apiUrl: string;
}

// ==============================
// 상세 헤더 정보 Props
// ==============================

export interface HeaderDetailsProps {
    headerDetails: HeaderDetailSection[];
    apiUrl: string;
    id?: string;
}

// ==============================
// 검색 컨트롤 Props
// ==============================

export interface ListControlsProps {
    searchFields: SearchField[];
}
