import React from 'react'
import logo from '../image/logo.png'
import styled from 'styled-components'

const Image = styled.img`
    width:5%;
`;

const HeaderWrapper = styled.div`
    height: 100px;
    background: #1d2748 0 0 no-repeat padding-box;
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
        <Image src={logo} alt='ndd'></Image>
    </HeaderWrapper>
)


export default Header;