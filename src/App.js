import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./layout/Layout";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Films from "./pages/Films";
import FilmDetailPage from "./pages/filmDetailPage";
import HomePage from "./pages/HomePage";
import PersonalCenterPage from "./pages/PersonalCenter/PersonalCenterPage";
import OrderFinishPage from "./pages/OrderFinishPage/OrderFinishPage";
import PickSeat from "./pages/orderPage/PickSeat";
import Cinema from "./pages/CinemaPage/Cinema";
import CinemaDetailPage from "./pages/CinemaDetailPage";
import HallManagementPage from "./pages/HallManagement/HallManagementPage";
import CinemaManagementPage from "./pages/CinemaManagement/CinemaManagementPage";
import BackStageLayout from "./layout/BackStage/BackStageLayout";
import FilmManagement from "./pages/FilmManagement/FilmManagementPage";
import SessionManagementPage from "./pages/SessionManagementPage/SessionManagementPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="*" element={<NotFoundPage />} />
          <Route index element={<HomePage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/films" element={<Films />} />
          <Route path="/personal" element={<PersonalCenterPage />} />
          <Route path="/films/:id" element={<FilmDetailPage />} />
          <Route path="/myorders" element={<PersonalCenterPage />} />
          <Route path="/order-finish" element={<OrderFinishPage />} />
          <Route path="/pick-seat" element={<PickSeat />} />
          <Route path="/cinemas/:cinemaId" element={<CinemaDetailPage />} />
          <Route path="/cinemas" element={<Cinema />} />
        </Route>
        <Route path="/back-stage" element={<BackStageLayout />}>
          <Route path="*" element={<NotFoundPage />} />
          <Route index element={<CinemaManagementPage />} />
          <Route path="/back-stage/hall" element={<HallManagementPage />} />
          <Route path="/back-stage/cinema" element={<CinemaManagementPage />} />
          <Route path="/back-stage/film" element={<FilmManagement />} />
        </Route>
        <Route
                    path="/back-stage/session"
                    element={<SessionManagementPage />}
                  />
                </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
