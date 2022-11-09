import {useNavigate, useParams} from 'react-router-dom';
import {useEffect} from "react";


const Go = () => {
  const {url} = useParams();
  // We need to split out urls because URL encoded search params get decoded with slashes
  const safeUrl = url.split('/')[0];
  
  const navigate = useNavigate();
  // We are assuming params will always start from the 4th index
  // Added decoding because Firefox forces encoding with it's shortcut
  const replaceText = decodeURIComponent(window.location).toString().split('/').slice(4);

  const getUrlBySource = async () => {
    return await fetch(`golink/${safeUrl}`);
  }

  const doRegex = (text) => {
    const re = /\[\[\d*]]/g;
    const parameterList = Array.from(text.matchAll(re));
    parameterList.forEach((p, i) => {
      text = text.replace(p, replaceText[i]);
    });
    return text;
  }

  getUrlBySource().then(async data => {
    console.log(data);
    let response = await data.text();
    
    if (data.status === 404) {
      window.location.href = `${window.location.origin}/create/${url}`;
    } else {
      window.location.href = doRegex(response);
    }
  });

};

export default Go;
    