import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./layout/Layout";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilmDetailPage from "./pages/filmDetailPage";
import HomePage from "./pages/HomePage";
import PersonalCenterPage from "./pages/PersonalCenter/PersonalCenterPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="*" element={<NotFoundPage />} />
          <Route index element={<HomePage />} />
          <Route path="/film" element={<FilmDetailPage />} />
          <Route path="/personal" element={<PersonalCenterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
