import { createRoot } from 'react-dom/client';
import './index.css';
import { Provider } from "react-redux";
import { store } from "@app/store.ts";
import AppRoutes from "@routes/AppRoutes.tsx";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "@styles/theme.ts"; // ✅ MUI 테마 추가

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <ThemeProvider theme={theme}> {/* 전체 기본 테마 */}
            <CssBaseline />
            <AppRoutes />
        </ThemeProvider>
    </Provider>
);
