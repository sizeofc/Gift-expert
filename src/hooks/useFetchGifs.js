import { useEffect, useState } from "react"
import { getGifs } from './../helpers/getGifs';



export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(category)
            .then(imgs => {

                setTimeout(() => {
                    console.log(imgs);

                    setState({
                        data: imgs,
                        loading: false
                    });
                }, 100);
            });//es la funcion fetch a la api en la carpeta helpers
    }, [category]);


   
    return state;
}
