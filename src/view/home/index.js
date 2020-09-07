import React from "react";
import "./home.css";
import NavBar from '../../components/navbar/'

import { useSelector} from 'react-redux'

function Home() {
    return (
        <>
            <NavBar />
            <h1>Usuario logado: {useSelector(state => state.usuarioEmail)}</h1>
        </>
    )
}

export default Home
