import { createBrowserRouter, Routes, Route, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Education from "./pages/Education"
import Experience from "./pages/Experience"
import Projects from "./pages/Projects"
import References from "./pages/References"
import Certifications from "./pages/Certifications"
import Credits from "./pages/Credits"

function Root() {
  return(
    <Routes>
      <Route path="/*" element={<Home/>} />
      <Route path="/education/*" element={<Education/>} />
      <Route path="/experience/*" element={<Experience/>} />
      <Route path="/projects/*" element={<Projects/>} />
      <Route path="/references/*" element={<References/>} />
      <Route path="/certifications/*" element={<Certifications/>} />
      <Route path="/credits/*" element={<Credits/>} />
    </Routes>
  )
}

const router = createBrowserRouter(
  [{path: "*", Component: Root}]
)

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

