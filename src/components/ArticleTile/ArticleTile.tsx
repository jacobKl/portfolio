import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Button from "../Button/Button";
import { StyledArticleTile, StyledArticleContent, StyledArticleTileWrapper } from "./ArticleTile.styled";

type Props = {
    props: {
        title: string,
        author: string,
        slug: string,
        intro: string,
        image: any
    }
}


const ArticleTile = ({props}: Props) => {
    return (
        <StyledArticleTileWrapper>
            <StyledArticleTile>
                <GatsbyImage image={props.image.gatsbyImageData} alt={props.title}/>
                <StyledArticleContent>
                    <div>
                        <h2>
                            <a href={props.slug}>
                                {props.title}
                            </a>
                        </h2>
                        <p>{props.intro}</p>
                    </div>
                    <div>
                        <Button text={"Przeczytaj"} variant={"primary"} anchor={props.slug} />
                     </div>
                </StyledArticleContent>
            </StyledArticleTile>
        </StyledArticleTileWrapper>
    );
}

export default ArticleTile;