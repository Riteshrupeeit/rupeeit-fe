import { BrowserRouter } from "react-router-dom";
import Rout from "./route/Rout";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  // Define the query client outside of the return

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Rout />
    </BrowserRouter>
  );
}

export default App;
