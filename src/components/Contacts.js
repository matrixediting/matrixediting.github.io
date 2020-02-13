import React from 'react';
import { sections } from '../config/CMSFetch.json';
import styled from 'styled-components';
import Section from './Section';

function Contacts () {

   

    const ContactList = styled.ul`
        display: grid;
        grid-template-columns: repeat(3, auto);
        grid-gap: 5em;
        align-items: center;
        justify-content:center;
        @media(max-width: 850px){
            grid-template-columns: auto;
            grid-gap: 1em;
        }
    `
    const Contact = styled.a`
        display: flex;
        align-items: center;
    `

    const Image = styled.img`
        --min-size: 30;
        --max-size: 35;
        height: var(--responsive);
        opacity: 0.7;
        margin-right: 1em;
    `

    const Text = styled.h4``

    return (
        <Section title="Contact" image="undraw_mobile_user_7oqo.svg">
            <ContactList>
                {sections.contacts.map(({ image, alt, text, link }, idx) => (
                    <Contact href={link ? link : null} key={idx}>
                        <Image src={require(`../assets/${image}`)} alt={alt}></Image>
                        <Text>{text}</Text>
                    </Contact>
                ))}
            </ContactList>
        </Section>
    )
}

export default Contacts;