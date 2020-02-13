import React from 'react';
import { sections } from '../config/CMSFetch.json';
import Section from './Section';
import styled from 'styled-components';

function Reviews () {

    const ReviewList = styled.div`
        display: grid;
        grid-gap: 3em;
        justify-content: flex-start;
        grid-template-columns: 1fr 1fr;
        @media (max-width: 650px){
            grid-template-columns: 1fr;
        }
    `

    const Review = styled.div`
        display: grid;
        justify-content: space-between;
        grid-gap: 0.5em;
    `

    const Author = styled.p`
        font-weight: bold;
    `

    const Message = styled.blockquote`
        margin-bottom: 1em;
        
    `
  
    return (
        <Section title="Reviews" image="undraw_personal_opinions_g3kr.svg">
            <ReviewList>
                {sections.reviews.map(({ message, author }, idx) => (
                    <Review key={idx}>
                        <Message><p>{message}</p></Message>
                        <Author>{author}</Author>
                    </Review>
                ))}
            </ReviewList>
        </Section>
    )
}

export default Reviews;