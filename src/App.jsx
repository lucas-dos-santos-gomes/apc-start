import Authentication from "./routes/Authentication.jsx";

import './App.css'
import { AuthProvider } from "./contexts/Auth.jsx";

export default function App() {
  return (
    <AuthProvider>
      <Authentication />
    </AuthProvider>
  )
}