import {useNavigate, useParams} from 'react-router-dom';
import {useEffect} from "react";


const Go = () => {
  const {url, first, second} = useParams();
  const navigate = useNavigate();
  // We are assuming params will always start from the 4th index
  const replaceText = window.location.toString().split('/').slice(4)

  const getUrlBySource = async () => {
    return await fetch(`golink/${url}`);
  }

  const doRegex = (text) => {
    debugger;
    // Find all the fields that need replacing
    const re = /\[\[\d*]]/g;
    const parameterList = Array.from(text.matchAll(re));
    parameterList.forEach((p, i) => {
      text = text.replace(p, replaceText[i]);
    });
    return text;
    // assume they are already in order
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
    