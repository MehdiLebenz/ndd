import React from 'react'
import altavia from '../image/altavia.png'
import styled from 'styled-components'

const Image = styled.img`
    width:10%;
`;

const HeaderWrapper = styled.div`
    height: 100px;
    background: #000 0 0 no-repeat padding-box;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
`


const  Header = () => (

    <HeaderWrapper>
        <Image src={altavia} alt='Altavia'></Image>
    </HeaderWrapper>
)


export default Header;