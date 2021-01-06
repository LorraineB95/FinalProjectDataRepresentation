import "semantic-ui-css/semantic.min.css";
//the api key from newsapi.org
export const NEWS_API_KEY = "005a4a7b510a42c6bb35f4f4cf3d63a3";


export const getBooksArticles = async () => {
    const response = await fetch(
      //the api key with the domain to pull articles from lithub and store them in a json format
      `https://newsapi.org/v2/everything?domains=lithub.com&pageSize=4&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`
    );
    const json = await response.json();
    return json;
  };
  
