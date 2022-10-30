import './Footer.css';


const Footer = ()=>{
    return(
        <footer className="footer">

        <text className='texto'> Seguinos para recibir el newsleater semanal</text>
        <button className='facebook'> <i class="bi bi-facebook"></i></button>
        <button className='instagram'> <i class="bi bi-instagram"></i></button>
        <button className='whatsapp'> <i class="bi bi-whatsapp"></i></button>
        <p className='p'> 
        Copyright  © derechos reservados - Angel Verde
        </p>
        </footer>
    )
}

export default Footer;