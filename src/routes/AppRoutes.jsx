import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Treatment from "../pages/Treatment";
import Contact from "../pages/Contact";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About";
import FAQ from "../pages/FAQ";
import Booking from "../pages/Booking";
import Impressum from "../pages/Impressum";
import Datenschutz from "../pages/Datenschutz";
import AppointmentConfirmed from "../pages/AppointmentConfirmed";
const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/treatment" element={<Treatment />} />
          <Route path="/About" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
          <Route
            path="/appointment-confirmed"
            element={<AppointmentConfirmed />}
          />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
        </Route>
      </Routes>
    </>
  );
};
export default AppRoutes;
