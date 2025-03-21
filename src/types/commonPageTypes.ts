import {ButtonConfig, Column, DetailSection, SearchFieldConfig} from './configTypes';

// 리스트 영역
    // 리스트 페이지 Props
    export interface ListPageProps {
        title: string;
        apiUrl: string;
        buttons: ButtonConfig[];
        columns: Column[];
        searchFields: SearchFieldConfig[];
    }
    // 리스트 테이블 props
    export interface ListTableProps {
        columns: Column[];
        apiUrl: string;
    }
    // 리스트 컨트롤 props
    export interface Props {
        searchFields: SearchFieldConfig[];
    }


// 상세보기-리스트 페이지 Props
    export interface DetailPageProps {
        title: string;
        apiUrl: string;
        buttons: ButtonConfig[];
        detailColumns: DetailSection[];
    }

    // 상세보기-리스트 헤더 Props
    export interface HeaderDetailsProps {
        detailColumns: DetailSection[];
        apiUrl: string;
        id?: string;
    }