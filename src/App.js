import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import BackStageLayout from "./layout/BackStage/BackStageLayout";
import Layout from "./layout/Layout";
import CinemaDetailPage from "./pages/CinemaDetailPage";
import CinemaManagementPage from "./pages/CinemaManagement/CinemaManagementPage";
import Cinema from "./pages/CinemaPage/Cinema";
import FilmDetailPage from "./pages/filmDetailPage";
import FilmManagement from "./pages/FilmManagement/FilmManagementPage";
import Films from "./pages/Films";
import HallManagementPage from "./pages/HallManagement/HallManagementPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import OrderFinishPage from "./pages/OrderFinishPage/OrderFinishPage";
import PickSeat from "./pages/orderPage/PickSeat";
import PersonalCenterPage from "./pages/PersonalCenter/PersonalCenterPage";
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
