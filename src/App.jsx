
import { useState } from "react";
import DocumentWriter from "./components/DocumentWriter";
import DrawingComponent from "./components/DrawingComponent";
import QRCodeGenerator from "./components/QRCodeGenerator";
import OCRComponent from "./components/OCRComponent";
import PincodeFetcher from "./components/PincodeFetcher";
import { BrowserRouter as  Router, Route, Routes } from "react-router-dom";
import ThemeSelector from "./components/ThemeSelector";
import Login from "./components/Login";

const App = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };


    return (
        <Router>
            <div className={theme}>
                <ThemeSelector toggleTheme={toggleTheme} />
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/document-writer" element={<DocumentWriter />} />
                    <Route path="/drawing" element={<DrawingComponent />} />
                    <Route path="/qrcode" element={<QRCodeGenerator/>} />
                    <Route path="/ocr" element={<OCRComponent />} />
                    <Route path="/pincode" element={<PincodeFetcher/>} />
                </Routes>
            </div>
        </Router>
    );
};
export default App;