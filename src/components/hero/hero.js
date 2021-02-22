import React, {useState} from 'react';
import Navbar from '../navbar/nav';
import SideBar from '../sidebar/sidebar';
import {HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn} from './heroelements';

const Hero = () => {
 const [isOpen, setIsOpen] = useState(false);

 const toggle = () => {
     setIsOpen(!isOpen);
 }
    return (
        <div>
            <HeroContainer>
                <Navbar toggle={toggle}/>
                <SideBar isOpen={isOpen} toggle={toggle}/>
                <HeroContent>
                    <HeroItems>
                        <HeroH1>Pizza For Foodies</HeroH1>
                        <HeroP>Ready in a minute</HeroP>
                        <HeroBtn>Place Orders</HeroBtn>
                    </HeroItems>
                </HeroContent>
            </HeroContainer>
        </div>
    );
}

export default Hero;