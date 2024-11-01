import { NavLink } from 'react-router-dom'
import s from './Footer.module.scss'

export const Footer = () => {

    return (
        <footer className={s.footerStyle}>
            <div>
                <ul>
                    <p>Contact</p>
                    <li>Supercoffeeroad 223b</li>
                    <li>92230 New Coffeeland</li>
                    <li>Phone: 22331122</li>
                    <li>Main: coffeeland@info.com</li>
                </ul>
            </div>
            <div>
                <ul>
                    <p>Legal</p>
                    <li><NavLink to={'/CookiesPolicyPage'}>Cookie policy</NavLink></li>
                    <li><NavLink to={'/ReturnPolicyPage'}>Return policy</NavLink></li>
                    <li><NavLink>Shipping</NavLink></li>
                    <li><NavLink>Terms and Conditions</NavLink></li>
                </ul>
            </div>
            <div className={s.aboutUsFooter}>
                <ul>
                    <p>About</p>
                    <li><NavLink>History</NavLink></li>
                    <li><NavLink>The people behind</NavLink></li>
                    <li><NavLink>Partnerships</NavLink></li>
                    <li><NavLink>International</NavLink></li>
                </ul>
            </div>
        </footer>
    )
}