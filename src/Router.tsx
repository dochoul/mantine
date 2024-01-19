import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home.page";
import AboutPage from "./pages/About.page";

import ButtonPage from "./pages/Buttons.page";
import CheckboxPage from "./pages/Checkbox.page";
import RadioPage from "./pages/Radio.page";
import ModalPage from "./pages/Modal.page";
import DatePickerPage from "./pages/DatePicker.page";
import PaginationPage from "./pages/Pagination.page";
import TabPage from "./pages/Tab.page";
import TooltipPage from "./pages/Tooltip.page";

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
    path: "/pagination",
    element: <PaginationPage />,
  },
  {
    path: "/tab",
    element: <TabPage />,
  },
  {
    path: "/tooltip",
    element: <TooltipPage />,
  },
  {
    path: "/datepicker",
    element: <DatePickerPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
