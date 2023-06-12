import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages';
import LandingPage from './pages/landingpage';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';
import 'antd/dist/reset.css';
import AssetTransfer from './pages/assetTransfer';
 
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' exact element={<Home />} />
                <Route path='/landingpage' element={<LandingPage />} />
                <Route path='/assetTransfer' element={<AssetTransfer />} />
                <Route path='/blogs' element={<Blogs />} />
                <Route path='/sign-up' element={<SignUp />} />
            </Routes>
        </Router>
    );
}

export default App;
