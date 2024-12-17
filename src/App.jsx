// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/home";
// import Packages from "./pages/Packages";
// import Places from "./pages/Places";
// import AboutUs from "./pages/AboutUs";
// // import Pk1 from "./pages/pk1" // Ensure the path and case match

// import pk1 from "./pages/pk1";
// import pk2 from "./pages/pk2";

// import Header from "./components/Header";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/packages" element={<Packages />} />
//         <Route path="/Places" element={<Places />} />
//         <Route path="/about" element={<AboutUs />} />
//         <Route path="/pk1" element={<pk1 />} /> 
//         <Route path="/pk2" element={<pk2 />} /> 
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Packages from "./pages/Packages";
import Places from "./pages/Places";
import AboutUs from "./pages/AboutUs";

import Pk1 from "./pages/pk1"; // Updated import
import Pk2 from "./pages/pk2"; // Updated import
import Pk3 from "./pages/pk3"; // Updated import
import Pk4 from "./pages/pk4"; // Updated import
import Pk5 from "./pages/pk5"; // Updated import
import Pk6 from "./pages/pk6"; // Updated import
import Pk7 from "./pages/pk7"; // Updated import
import Pk8 from "./pages/pk8"; // Updated import
import Pk9 from "./pages/pk9"; // Updated import
import Pk10 from "./pages/pk10"; // Updated import
import Pk11 from "./pages/pk11"; // Updated import
import Pk12 from "./pages/pk12"; // Updated import
import Pk13 from "./pages/pk13"; // Updated import
import Pk14 from "./pages/pk14"; // Updated import
import Pk15 from "./pages/pk15"; // Updated import
import Pk16 from "./pages/pk16"; // Updated import
import Pk17 from "./pages/pk17"; // Updated import
import Pk18 from "./pages/pk18"; // Updated import
import Pk19 from "./pages/pk19"; // Updated import
import Pk20 from "./pages/pk20"; // Updated import
import sendmail from "./pages/sendmail"; //

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/places" element={<Places />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/pk1" element={<Pk1 />} /> {/* Fixed component usage */}
        <Route path="/pk2" element={<Pk2 />} />
        <Route path="/pk3" element={<Pk3 />} />
        <Route path="/pk4" element={<Pk4 />} />
        <Route path="/pk5" element={<Pk5 />} />
        <Route path="/pk6" element={<Pk6 />} />
        <Route path="/pk7" element={<Pk7 />} />
        <Route path="/pk8" element={<Pk8 />} />
        <Route path="/pk9" element={<Pk9 />} />
        <Route path="/pk10" element={<Pk10 />} />
        <Route path="/pk11" element={<Pk11 />} /> {/* Fixed component usage */}
        <Route path="/pk12" element={<Pk12 />} />
        <Route path="/pk13" element={<Pk13 />} />
        <Route path="/pk14" element={<Pk14 />} />
        <Route path="/pk15" element={<Pk15 />} />
        <Route path="/pk16" element={<Pk16 />} />
        <Route path="/pk17" element={<Pk17 />} />
        <Route path="/pk18" element={<Pk18 />} />
        <Route path="/pk19" element={<Pk19 />} />
        <Route path="/pk20" element={<Pk20 />} />
        <Route path="/sendmail" element={<sendmail />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

