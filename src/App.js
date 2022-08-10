import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./layout/Layout";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Films from "./pages/Films";
import FilmDetailPage from "./pages/filmDetailPage";
import HomePage from "./pages/HomePage";
import PersonalCenterPage from "./pages/PersonalCenter/PersonalCenterPage";
import CinemaDetailPage from "./pages/CinemaDetailPage";
import OrderFinishPage from "./pages/OrderFinishPage/OrderFinishPage";
import PickSeat from "./pages/orderPage/PickSeat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="*" element={<NotFoundPage />} />
          <Route index element={<HomePage />} />
          <Route path="/films" element={<Films />} />
          <Route path="/personal" element={<PersonalCenterPage />} />
          <Route path="/films/:id" element={<FilmDetailPage />} />
          <Route path="/myorders" element={<PersonalCenterPage />} />
          <Route path="/cinemas" element={<CinemaDetailPage />} />
          <Route path="/order-finish" element={<OrderFinishPage />} />
          <Route path="/pick-seat" element={<PickSeat />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
