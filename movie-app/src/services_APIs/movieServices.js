// OPCIÓ 1: DES D'UNA API INTERNA
// import movies from "./movies.json"
// export const movieServices = {
//     getAllMovies() {
//         return movies;
//     },
// }

// OPCIÓ 2: DES DEL SERVER
// UTILITZANT TIPUS FETCH - EN AQUEST CAS UNA LLIBRERIA QUE ES DIU AXIOS -> IMPORT
// FEM UNA CONSTANT A ON IGUALAR AMB L'URL I LA FEM SERVIR A GET +/MOVIES(ENDPOINT) PER ENTRAR DINS DEL PROJECTE

import axios from "axios"
const baseURL = 'https://62863bbb96bccbf32d71c12e.mockapi.io'
export const movieServices = {
    getAllMovies() {
        const movies = axios.get(baseURL+"/movies").then((res)=> {
                return res.data;
            });
        return movies;
    },

    deleteAMovie(id) {
        const deletedMovie = axios.delete(baseURL+`/movies/${id}`).then((res) => {
            return res.data;
        })
        return deletedMovie;
    },

    postAMovie(data) {
        const postNewMovie = axios.post(baseURL+`/movies`, data).then((res) => {
            return res.data;
        })     
        return postNewMovie;
    },

    // putAMovie(id,data) {
    //     const updatedMovie = axios.post(baseURL+`/movies/${id}`, data).then((res) => {
    //         return res.data;
    //     })
    //     return updatedMovie;
    // },
}



//CLASSE 17/05/22

//PAS 1 - CREAR ARXIU .JSON A SRC --> SIMULA EL SERVIDOR DE L'APP I 
//ÉS PER GUARDAR ENLLOC DE A L'STATE (FRONTEND)FER-HO AL SERVIDOR (BACKEND) (PERÒ FEM SIMULAT)

//PAS 2 - A SOTA DE L'ESTAT DE MOVIELIST, ABANS FUNCIONS
    //POSAR FUNCIÓ QUE S'EXECUTI QUAN EN COMPLEMENT ES MONTI, ES DESMONTI O TAL..
    // FUNCIÓ --> componentDidMount() {console.log("ESTIC AL DOM") console.log(this.state.movies)}
    // this.setState({movies:[]}) --> ELIMINA TOTES LES PELIS DEL DOM NOMÉS COMENÇAR
    // CANVIAR ARRAY per movieServices.getAllMovies() --> nom arxiu + funció o element dins de l'objecte.

    // componentDidMount() {this.setState({movies:movieServices.getAllMovies()})};

    
// PER CRIDAR A UN JSON I BUSCAR LES DADES DEL SERVIDOR "SIMULAT" --> 
// --> FER-HO AMB APIS SERVICES. (NO DINS DE COMPONENTS).
// CREEAR CARPETA "SERVICES" DINS DE SRC, AMB LES APIS A DINS (ARXIUS.JSON AMB LES DADES)
// CREAR ARXIU .JS PER RELACIONAR LES DADES (JSON) del BACKEND SIMULAT CAP AL FRONTEND.
// FER IMPORT DEL JSON DINS DEL JS i CREEM UN OBJECTE A ON DEFINIR LES FUNCIONS --> EXPORT OBJECTE.
// IMPORT X FROM Y (X POT SER QUALSEVOL PERÒ HA DE SER IGUAL AL RETURN DE LA FUNCIÓ)

// NO PODEM GUARDAR ARXIUS PERQUÈ ÉS FRONTEND I NOMÉS UNA SIMULACIÓ DEL BACKEND
// CANVIAR STATE MOVIELIST --> MOVIES:[]

//LLISTA PELIS PER RENDERITZAR A L'INICI:
// SENSE VARIABLES NI NOMS NI RES, NOMÉS L'ARRAY D'OBJECTES I CANVIAR NOM DELS ATRIBUTS AMB "".