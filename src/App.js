import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./layout/Layout";
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="*" element={<NotFoundPage/>}/>
                    <Route index element={<HomePage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
