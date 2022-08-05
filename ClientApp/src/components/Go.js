import {useParams} from "react-router-dom";

export const Go = () => {
    const { url } = useParams();
    const getUrlBySource = async () => {
        const response = await fetch(`golink/${url}`);
        const data = await response;
        console.log(data);
        return data;
    }
     getUrlBySource().then(async data => window.location.href = await data.text());
}

    
    
    