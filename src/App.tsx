import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./page/Home";
import ToursPage from "./page/ToursPage";
import HotelsPage from "./page/HotelsPage";
import ReviewsPage from "./page/ReviewsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="tours" element={<ToursPage />} />
          <Route path="hotels" element={<HotelsPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
