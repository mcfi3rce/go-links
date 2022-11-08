import {useNavigate, useParams} from 'react-router-dom';
import {useEffect} from "react";


const Go = () => {
  const { url } = useParams();
  const navigate = useNavigate();
  const getUrlBySource = async () => {
    return await fetch(`golink/${url}`);
  }

  getUrlBySource().then(async data => {
    console.log(data);
    if (data.status === 404) {
      window.location.href = `${window.location.origin}/create/${url}`; 
    } else {
      window.location.href = await data.text();
    }
  });

};

export default Go;
    