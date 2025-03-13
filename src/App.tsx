import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./styles/theme"; // 테마 가져오기
import Layout from "./layouts/Layout"; // 기존 레이아웃

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline /> {/* MUI의 기본 스타일 초기화 (배경색 적용) */}
            <Layout />
        </ThemeProvider>
    );
}

export default App;
