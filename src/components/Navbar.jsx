import React from 'react'
import { navLinks } from '../../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Navbar = () => {
    useGSAP(() => {
        /*gsap timeline based on scroll trigger */
        const navTween = gsap.timeline({
            scrollTrigger:{
                trigger: 'nav',
                start: 'bottom top'
            }
        });

        /*starts from a known style and ends with a specific effect */
        navTween.fromTo('nav', {backgroundColor: 'transparent'}, 
            {backgroundColor: '##00000050', backgroundFilter: 'blur(10px)', duration: 1, ease: 'power1.inOut'});
    })
return (
    <nav>
        <div>
        <a href="#home" className="flex items-center gap-2">
            <img src="/images/logo.png" alt="logo" />
            <p>Cocktail Craze</p>
        </a>

        <ul>
            {navLinks.map((links) => (
                <li key={links.id}>
                    <a href={`#${links.id}`}>{links.title}</a>
                </li>
            ))}
        </ul>
        </div>
    </nav>
)
}

export default Navbar
