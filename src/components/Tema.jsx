import React from 'react'
import mock from "../mock/biblioteca.json"
import {useParams} from 'react-router-dom'

import Articulo from './Articulo'

const Tema = () => {
  const { idCategoria, idLenguaje, idTema } = useParams()
  return (
    <>
      <h2>{idTema}</h2>
      {mock.categorias.find(categoria => categoria.categoria == idCategoria).lenguajes.find(lenguaje => lenguaje.lenguaje == idLenguaje).temas.find(tema=>tema.tema==idTema).articulos.map((articulo)=><Articulo articulo={articulo}/>)}
    </>
  )
}

export default Tema