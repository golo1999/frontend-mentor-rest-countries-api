import { Route, Routes } from "react-router-dom";

import { Header, NoContent } from "components";
import { CountryDetailsPage, HomePage } from "pages";

export function Router() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/country/:code" element={<CountryDetailsPage />} />
        {/* "NotFound" page */}
        <Route
          path="*"
          element={<NoContent message="The page couldn't be found..." />}
        />
      </Routes>
    </>
  );
}
