import './App.css'
import Layout from '../components/ Layout/Layout'
import LoginPage from '../features/auth/LoginPage'
import { Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <><Routes>
      <Route path="/login" element={<LoginPage />} /> {/* login page */}
    </Routes><><Layout /></></>
  );
}

export default App
