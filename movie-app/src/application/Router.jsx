import React from "react";
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Login } from "../pages/pages/LogIn";
import { MovieDetail } from "../pages/pages/MovieDetail";
import { SubPage } from "../pages/pages/SubPage";

// abreviació teclat = rfc 
// link per entrar a movie_detail posat a movies cards

export default function RouterSample(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={< Home />} />
                <Route path="/login" element={< Login/>} />
                <Route path="/movie_detail" element={< MovieDetail/>} />
                <Route path="/movie_detail/subpage" element={< SubPage />} />
            </Routes>
        </BrowserRouter>
    );
}