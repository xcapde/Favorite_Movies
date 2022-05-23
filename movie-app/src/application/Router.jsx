import React from "react";
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import { Home } from "../pages/home/Home";
import { MovieDetails } from "../pages/pages/MovieDetails";
import { SubPage } from "../pages/pages/SubPage";

// Abreviació teclat = rfc 
// Link per entrar a movie_detail posat a movies cards
// Posem els : al "path" per indicar que "id" és un valor dinàmic


export default function RouterSample(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={< Home />} />
                <Route path="/movie_detail/:id" element={< MovieDetails/>} />
                <Route path="/movie_detail/:id/subpage" element={< SubPage />} />
            </Routes>
        </BrowserRouter>
    );
}