import React, { useState } from "react";  
import axios from 'axios';
import ArticleList from './getArticlesList';
import { getBooksArticles }  from './getBooksArticles';
import "semantic-ui-css/semantic.min.css";
import { Grid, Header, Image, List, Container } from "semantic-ui-react";
export const NEWS_API_KEY = "005a4a7b510a42c6bb35f4f4cf3d63a3";

class News extends React.Component {
    
    state = {
      articles: [],
      apiError: ""
    };
// ComponentDidMount is invoked immediately after a component is mounted. The DOM is setup here
    async componentDidMount() {
        try {
          const response = await getBooksArticles();
          this.setState({ articles: response.articles });
        } catch (error) {
          this.setState({ apiError: "Could not find any articles" });
        }
      }
    render() {
        const { articles, apiError } = this.state;
        return (
          <Container>           
            <Header as="h2" style={{ textAlign: "center", margin: 20 }}>
            Literature Latest News
            <hr></hr>
            </Header>
            {articles.length > 0 &&  <ArticleList articles={articles} />}
            {apiError && <p>Could not fetch any articles. Please try again.</p>}
          </Container>
        );
      }
    }
  export default News;