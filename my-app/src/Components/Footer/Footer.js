import React from 'react'
import css from './Footer.css'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import {Link} from 'react-router-dom'

export const Footer = () => {
    return (
            <footer className="footer">
                <div className="container-footer container row no-gutters mt-3">
                <div className="delsurwines-footer col-3">
                    <ul>
                    <p>DEL SUR WINES</p>
                    <p className='nosotros'> "Estamos orgullosos de ofrecerte una amplia selección de los mejores vinos boutique
                         y de autor. Nuestra misión es brindar una experiencia de compra superior, 
                        con precios competitivos"</p>
                        </ul>
                </div>
                <div className="shop-footer col-5">
                    <ul>
                    <p>SHOP</p>
                    <li>
                    <Link to='/Malbec'>Malbec</Link>
                    </li>
                    <li>
                    <Link to='/Merlot'>Merlot</Link>
                    </li>
                    <li>
                    <Link to='/Bonarda'>Bonarda</Link>
                    </li>
                    <li>
                    <Link to='/Blend'>Blend</Link>
                    </li>
                    <li>
                    <Link to='/Cabernet'>Cabernet</Link>
                    </li>
                    <li>
                    <Link to='/Chardonnay'>Chardonnay</Link>
                    </li>
                    </ul>
                </div>
                <div className="rrss col-4">
                    <p>REDES</p>
                    <a href="https://www.facebook.com/Del-Sur-Wines-108394624212884" target="_blank">
                    <FacebookIcon className='iconoRs'/>
                    </a>

                    <a href="https://www.instagram.com/delsur.wines/" target="_blank">
                    <InstagramIcon className='iconoRs'/>
                    </a>

                    <a href="https://twitter.com/Delsurwines" target="_blank">
                    <TwitterIcon className='iconoRs'/>
                    </a>

                    <a href="https://api.whatsapp.com/send?phone=5491169516942&text=Hola!%20Me%20gustar%C3%ADa%20hacer%20un%20pedido.."
                    target="_blank">
                    <WhatsAppIcon className='iconoRs'/>
                    </a>
                </div>

                <div className="copyright col-12 text-center">
                    <p>&copy; 2021. Del Sur Wines. Beber con moderación. Prohibida la venta de alcohol a menores de 18 años</p>
                </div>

                </div>
            </footer>
    )
}
