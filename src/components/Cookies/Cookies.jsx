import { useState } from 'react';
import s from './Cookies.module.scss';
import ReactGA from "react-ga4";

export const Cookies = () => {
    const [cookieAccept, setCookieAccept] = useState();

    const handleAccept = () => {
        setCookieAccept(true);
        closeModal('Cookie_container');
    };

    const handleDeny = () => {
        setCookieAccept(false);
        closeModal('Cookie_container');
    };

    const closeModal = (id) => {
        const modal = document.getElementById(id);
        if (modal) {
            modal.style.display = 'none';
        }
    };

    if (cookieAccept === true) {
        ReactGA.initialize([
            {
                trackingId: "G-BYBXV174FB",
            },
        ]);
    }

    return (
        <>
            <div id="Cookie_container" className={s.cookiesModal}>
                <h2>Cookie politik</h2>
                <p>
                    Et cookiebanner er en pop-up på dit website, der fortæller dine besøgende, at du bruger cookies.
                    Fair nok, du har sikkert set dem. “Vi bruger cookies. Hvis du fortsætter, accepterer du”. Men faktisk
                    skal et cookiebanner ikke kun betragtes som information om cookies. Det skal betragtes som
                    en samtykke-pop-up.
                </p>
                <p>
                    Hvorfor? Fordi når du bruger cookies og især cookies, der indsamler dine brugeres personlige data, er der
                    et par lovgivninger, der træder i kraft.
                    De fleste af disse love handler om behandlingen af personoplysninger. Og det er, hvad størstedelen af
                    alle cookies indsamler. Personlige data om din besøgende. Der kan blive brugt til markedsføringsformål.
                </p>
                <section>
                    <input type="checkbox" id="req" name="req" defaultChecked />
                    <label htmlFor="req">Funktion</label><br />

                    <input type="checkbox" id="stat" name="stat" defaultChecked />
                    <label htmlFor="stat">Statistik</label><br />

                    <input type="checkbox" id="promo" name="promo" defaultChecked />
                    <label htmlFor="promo">Promotion</label><br />
                </section>
                <div className={s.buttonContainer}>
                    <button className={s.Cookie_button_accepted} onClick={handleAccept}>Accept</button>
                    <button className={s.Cookie_button_rejected} onClick={handleDeny}>Reject</button>
                </div>
            </div>
        </>
    );
};