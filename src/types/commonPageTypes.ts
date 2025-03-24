import {HeaderDetailConfig, PageHeaderConfig, SearchFieldConfig, TableConfig} from './configTypes';

/* 리스트 영역 */
// 리스트 페이지 Props
export interface ListPageProps {
    pageHeader: PageHeaderConfig;
    searchFields: SearchFieldConfig[];
    table: TableConfig;
    apiUrl: string;
}
// 리스트 테이블 props
export interface ListTableProps {
    table: TableConfig;
    apiUrl: string;
}

// 리스트 컨트롤 props
export interface Props {
    searchFields: SearchFieldConfig[];
}
/* 리스트 영역 END*/

/* 상세보기 리스트 영역 */
// 상세보기-리스트 페이지 Props
export interface DetailPageProps {
    pageHeader: PageHeaderConfig;
    headerDetails: HeaderDetailConfig[];
    apiUrl: string;
}

// 상세보기-리스트 헤더 Props
export interface HeaderDetailsProps {
    headerDetails: HeaderDetailConfig[];
    apiUrl: string;
    id?: string;
}
/* 상세보기 리스트 영역 END */