import React from "react";
import { StyledContainer, StyledRow } from "../components/GlobalStyle";
import Layout from "../components/Layout";
import { StyledArticleImageWrapper, StyledArticleIntro, StyledArticleWrapper } from "./Post.styled";
import { GatsbyImage } from "gatsby-plugin-image";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const PostTemplate = ({pageContext}) => {
    console.log(pageContext);
    return (
        <Layout>
            <>
                <StyledContainer>
                    <StyledArticleIntro>
                        <p style={{marginBottom: 0}}>{pageContext.postedAt}</p>
                        <h1>{pageContext.title}</h1>
                        <h4>{pageContext.secondTitle}</h4>
                        <p>{pageContext.intro}</p>
                    </StyledArticleIntro>
                </StyledContainer>
                <StyledArticleImageWrapper>
                        <GatsbyImage image={pageContext.image.gatsbyImageData} alt={pageContext.title} />
                </StyledArticleImageWrapper>
                <StyledArticleWrapper>
                    {documentToReactComponents(JSON.parse(pageContext.content.raw))}
                </StyledArticleWrapper>
            </>
        </Layout>
    );
}

export default PostTemplate;