import React from "react";
import Home from "./Home"; // Ensure this component exists
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Import from react-router-dom
import Create from "./Create"; // Ensure this component exists
import Update from "./Update"; // Ensure this component exists

const App = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/update/:id" element={<Update />} /> {/* Dynamic ID route */}
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
