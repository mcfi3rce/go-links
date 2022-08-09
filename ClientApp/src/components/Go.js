import {useParams} from "react-router-dom";

export const Go = () => {
    const { url } = useParams();
    const getUrlBySource = async () => {
        return await fetch(`golink/${url}`);
    }
     getUrlBySource().then(async data => window.location.href = await data.text());
}

    
    
    