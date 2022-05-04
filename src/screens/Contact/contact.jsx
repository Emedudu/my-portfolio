import React from "react";
import './contact.css';
import Whatsapp from '../../images/whatsapp.png';
import Instagram from '../../images/instagram.png';
import Facebook from '../../images/facebook.png';

const Contact = ()=>{
    return(
        <div className="pt-5">
            <p style={{textAlign:'center',textDecoration:'underline'}}><b>Let's Talk</b></p>
            <p>Wanna get in touch or talk about a <b>project</b>? Feel free to contact me via email at <a href="mailto:itzemedev@gmail.com" target='_blank'>itzemedev@gmail.com </a></p>
            <p style={{textAlign:'center',textDecoration:'underline'}}><b>Let's get social</b></p>
            <p>You want us to be friends? Chat me up in just a click</p>
            <span>
                <a href="https://wa.me/2347040169179" target='_blank'><img src={Whatsapp}/></a>
                <a href="https://www.instagram.com/emeduduna/" target='_blank'><img src={Instagram}/></a>
                <a href="https://www.facebook.com/Emeduduna Akerejola" target='_blank'><img src={Facebook}/></a>
            </span>
        </div>
    )
}

export default Contact