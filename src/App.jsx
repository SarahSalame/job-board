import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Jobs from "./pages/Jobs";
import AllJobs from "./pages/AllJobs";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";


function HomePage() {
  return (
    <div className="min-h-screen bg-[#f7f8f5]">

      <Navbar />

      <main>
        <Hero />
        <Jobs />
      </main>

      <Footer />

    </div>
  );
}


function JobsPage() {
  return (
    <div className="min-h-screen bg-[#f7f8f5]">

      <Navbar />

      <AllJobs />

      <Footer />

    </div>
  );
}


function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#f7f8f5]">

      <Navbar />

      <Profile />

      <Footer />

    </div>
  );
}


function App() {

  return (
    <BrowserRouter>

      <Routes>

        {/* HOME */}

        <Route
          path="/"
          element={<HomePage />}
        />


        {/* ALL JOBS */}

        <Route
          path="/jobs"
          element={<JobsPage />}
        />


        {/* PROFILE */}

        <Route
          path="/profile"
          element={<ProfilePage />}
        />

      </Routes>

    </BrowserRouter>
  );
}


export default App;