import { graphql, useStaticQuery } from 'gatsby';
import { Context } from '../../context/ContextProvider';
import React from 'react'
import ArticleTile from '../ArticleTile/ArticleTile';
import { StyledSectionHeader } from '../GlobalStyle';
import { StyledArticles, StyledArticlesContainer } from './Articles.styled';
import UI from './Articles.ui';

const Articles: React.FC = (): JSX.Element => {


    const { state } = React.useContext<any>(Context)
    const { languageMode } : { languageMode: string } = state;

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
                {UI[languageMode].myProjects}
            </StyledSectionHeader>
            <StyledArticlesContainer id="projects">
                {data.allContentfulPost.edges.map((article,j) => <ArticleTile key={j} props={article.node} />)}
            </StyledArticlesContainer>
        </StyledArticles>
    );
}

export default Articles

