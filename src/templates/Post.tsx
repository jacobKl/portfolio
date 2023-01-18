import React, { useRef } from "react";
import { StyledRow } from "../components/GlobalStyle";
import Layout from "../components/Layout";
import { StyledArticleImageWrapper, StyledArticleIntro, StyledArticleWrapper, StyledCite } from "./Post.styled";
import { GatsbyImage } from "gatsby-plugin-image";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

type Props = {
    pageContext: {
        title: string,
        secondTitle: string,
        slug: string,
        author: string,
        intro: string,
        image: any,
        postedAt: string,
        imageInfo: string,
        content: any,
    }
}


const PostTemplate = ({pageContext}: Props): JSX.Element => {
    const imageRef = useRef(0);

    const OPTIONS = {   
        counter: 0,
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node, children)=> {
                let src;
                if (pageContext.content.references[imageRef.current]) {
                    src = pageContext.content.references[imageRef.current].url;
                    imageRef.current += 1;
                }
                return <img style={{maxWidth: 100 + "%"}} src={src ? src : ''} />
            },
            [BLOCKS.QUOTE]: (node, children) => {
                return <StyledCite>{children}</StyledCite>
            }
        }
    }

    return (
        <Layout title={pageContext.title} description={pageContext.intro}>
            <>
                <StyledRow style={{margin: 0, alignItems: 'center'}}>
                    <StyledArticleImageWrapper>
                            <GatsbyImage objectFit="cover" image={pageContext.image.gatsbyImageData} alt={pageContext.title} />
                    </StyledArticleImageWrapper>
                    <StyledArticleIntro>
                        <p style={{marginBottom: 0}}>{pageContext.postedAt}</p>
                        <h1>{pageContext.title}</h1>
                        <h4>{pageContext.secondTitle}</h4>
                        <p>{pageContext.intro}</p>
                    </StyledArticleIntro>
                </StyledRow>
                <StyledArticleWrapper>
                    {documentToReactComponents(JSON.parse(pageContext.content.raw), OPTIONS)}
                </StyledArticleWrapper>
            </>
        </Layout>
    );
}

export default PostTemplate;