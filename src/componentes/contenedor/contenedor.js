import React,{useState, useEffect} from "react";
import Articulos from "./articulos";
import "./estilos-contenedor.css"

export default function Contenedor() {
    //https://newsapi.org/v2/top-headlines?country=co&apiKey=661ad647db6d43e29c9c0c21ae9e0ac2
    //variable para los post
    const [post, setPost] = useState([]);
    //funcion asincrona para obtener los datos
    const obtenerDatos = async ()=>{
        let url = 'https://newsapi.org/v2/top-headlines?country=co&apiKey=8e550213116f48d6822c681631152098'
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        console.log(datos);
        setPost(datos.articles);
        return datos.articles;

    }
    //variables paginacion
    const[startPost, setStartPost] = useState();
    const[endPost, setEndPost] = useState();
    const[pageNumber, setPageNumber] = useState(1);
    const limite = 6;
    //variables para ejecutar botones
    const[prevBoton, setPrevBoton] = useState(true);
    const[nextBoton, setNextBoton] = useState(false);


    //realizar consultas
    useEffect(()=>{
        obtenerDatos();

        setStartPost((pageNumber-1)*limite);
        setEndPost(pageNumber*limite)

    },[pageNumber, startPost, endPost])
    
    //funcion para adelantar paginas
    const  Next =() =>{
        if(pageNumber === (Math.floor(obtenerDatos.length + limite -1/limite))){
            setNextBoton(true);
        }else{
            setPageNumber(pageNumber+1)
            setPrevBoton(false);
        }
    }
    const prev = () =>{
        if(pageNumber===1){
            setPrevBoton(true)
            
        }else{            
            setPageNumber(pageNumber-1)
            setNextBoton(false)
        }
    } 
    return(
        <>
        <div className="w3-row-padding">
            {
                post.slice(startPost,endPost).map((art, index)=>{
                    return <Articulos 
                    key={index} 
                    titulo={art.title}
                    fecha={art.publishedAt}
                    descripcion={art.description}
                    imagen={art.urlToImage}
                    />
                })
            }
          
        </div>
          <div className="paginacion">
          <button disabled={prevBoton} onClick={prev} className="atras">Cargar Menos</button>
          <span className="numero-paginas">{pageNumber} </span>
          <button disabled={nextBoton} onClick={Next} className="adelante">Cargar Más</button>
      </div>
      </>
    );
}