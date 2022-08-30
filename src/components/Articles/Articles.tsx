import { graphql, useStaticQuery } from 'gatsby';
import React from 'react'
import styled from 'styled-components';
import ArticleTile from '../ArticleTile/ArticleTile';
import { FullScreenSection, StyledContainer, StyledSectionHeader } from '../GlobalStyle';

const Articles: React.FC = (): JSX.Element => {
    const data = useStaticQuery(graphql`
        query MyQuery {
            allContentfulPost(limit: 3) {
                edges {
                    node {
                        title
                        author
                        slug
                        intro
                        content {
                            raw
                        },
                        image {
                            gatsbyImageData
                        }
                    }
                }
            }
        }
    `);


    return (
        <StyledArticles>
            <StyledSectionHeader>
                <span>03.</span>
                Moje projekty
            </StyledSectionHeader>
            <StyledArticlesContainer id="projects">
                {data.allContentfulPost.edges.map(article => <ArticleTile props={article.node} />)}
            </StyledArticlesContainer>
        </StyledArticles>
    );
}

const StyledArticles = styled.section`
    height: 100vh;
    background-image: url('/static/underlay_top.png');
    background-size: cover;
    background-position: 0 0;
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const StyledArticlesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 80%;
    justify-content: space-between;
    z-index: 11;
    position: relative;
    margin: 0 -15px;
`;

export default Articles

