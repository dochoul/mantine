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
    path: "/guide",
    element: <HomePage />,
  },
  {
    path: "/guide/button",
    element: <ButtonPage />,
  },
  {
    path: "/guide/about",
    element: <AboutPage />,
  },
  {
    path: "/guide/checkbox",
    element: <CheckboxPage />,
  },
  {
    path: "/guide/radio",
    element: <RadioPage />,
  },
  {
    path: "/guide/modal",
    element: <ModalPage />,
  },
  {
    path: "/guide/pagination",
    element: <PaginationPage />,
  },
  {
    path: "/guide/tab",
    element: <TabPage />,
  },
  {
    path: "/guide/tooltip",
    element: <TooltipPage />,
  },
  {
    path: "/guide/datepicker",
    element: <DatePickerPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
