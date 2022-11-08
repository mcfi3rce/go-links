const Go = (url) => {
  const getUrlBySource = async () => {
        return await fetch(`golink/${url}`);
    }
     getUrlBySource().then(async data => {
       
       let url = await data.text();
       if (url === "") {
         window.location.replace(`${window.location.origin}?url=${url}`);
       }
       window.location.href = url;
     });
};

export default Go;
    