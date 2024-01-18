import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home.page";
import AboutPage from "./pages/About.page";

import ButtonPage from "./pages/Buttons.page";
import CheckboxPage from "./pages/Checkbox.page";
import RadioPage from "./pages/Radio.page";
import ModalPage from "./pages/Modal.page";
import DatePickerPage from "./pages/DatePicker.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/button",
    element: <ButtonPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/checkbox",
    element: <CheckboxPage />,
  },
  {
    path: "/radio",
    element: <RadioPage />,
  },
  {
    path: "/modal",
    element: <ModalPage />,
  },
  {
    path: "/datepicker",
    element: <DatePickerPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
