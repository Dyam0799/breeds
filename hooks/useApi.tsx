
export const Api = async (url="") => {
    const dataHttp={method: 'GET', headers: new Headers({'API-KEY': 'x-api-key:bda53789-d59e-46cd-9bc4-2936630fde39',
      'Content-Type': 'application/json'})};
    const response = await fetch('https://api.thecatapi.com/v1/' + url, dataHttp);
    const json = await response.json();
   
    return json;
};

export const Breeds = async () => {
    const res = await Api('breeds');
    let breeds = [];
  
    for (let i = 0; i < res.length; i++) {
      let breed = res[i]; 
      breed.image_breeds = await Images(res[i].reference_image_id);
      breeds.push(breed); 
    }
    return   breeds;
 };

 export const Images = async (id) => {
    try {
      const json = await Api('images/' + id);
      return json.url;
    } catch (error) {
        return "";
    }
  };