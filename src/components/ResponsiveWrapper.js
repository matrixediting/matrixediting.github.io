import React from 'react';
import styled from 'styled-components';

function ResponsiveWrapper({ children }) {

    const Wrapper = styled.div`
        min-width: 320px;
        max-width: 1080px;
        margin: 0 auto;
        padding: 1em;

        display: grid;
        grid-gap: 6em;
        overflow: hidden;
    `

    return(
        <Wrapper>
             {children}
        </Wrapper>
      )

}
export default ResponsiveWrapper;
