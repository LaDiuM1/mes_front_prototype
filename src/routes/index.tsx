import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import Layout from "@layouts/Layout.tsx";
import Home from "@pages/Home.tsx";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;