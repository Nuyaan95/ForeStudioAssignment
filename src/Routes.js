import { Route, Routes as ReactRoutes } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Users from "./components/Users";

export const Routes = () => {
  return (
    <ReactRoutes>
      <Route>
        <Route exact path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route component={<NotFound />} />
      </Route>
    </ReactRoutes>
  );
};

export default Routes;
