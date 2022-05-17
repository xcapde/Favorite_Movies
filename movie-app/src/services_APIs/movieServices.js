import movies from "./movies.json"

export const movieServices = {
    getAllMovies() {
        return movies;
    },
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
// FER IMPORT del JSON dins del JS i creem objecte a on executar les funcions

// NO PODEM GUARDAR ARXIUS PERQUÈ ÉS FRONTEND I NOMÉS UNA SIMULACIÓ DEL BACKEND
// CANVIAR STATE MOVIELIST --> MOVIES:[]

//LLISTA PELIS PER RENDERITZAR A L'INICI:
// SENSE VARIABLES NI NOMS NI RES, NOMÉS L'ARRAY D'OBJECTES I CANVIAR NOM DELS ATRIBUTS AMB "".