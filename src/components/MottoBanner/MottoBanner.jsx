import pic1 from '../../assets/images/coffeehand.jpeg'
import pic2 from '../../assets/images/coffeebag.jpeg'
import pic3 from '../../assets/images/coffeecup.jpeg'
import s from './MottoBanner.module.scss'

export const MottoBanner = () => {
    return (
        <>
            <section className={s.BannerStyle}>
                <article>
                    <h3>The right beans</h3>
                    <p>Our journey begins with a deep-rooted connection to the  land, as we seek out farmers who uphold environmentally- friendly practices and prioritize the well-being of their communities. Through personal relationships and mutual respect, we collaborate closely with these farmers, understanding their methods and values.</p>
                    <img src={pic1} alt="" />
                </article>
                <article>
                    <h3>Carefully handled</h3>
                    <p>Each bean is carefully handpicked at the peak of ripeness, ensuring optimal flavor and aroma. We embrace diversity in  our selection, cherishing the unique characteristics of each  region and varietal. From the lush mountainsides to the sun- kissed valleys, we traverse the landscapes in search of perfection. </p>
                    <img src={pic2} alt="" />
                </article>
                <article>
                    <h3>From us to you</h3>
                    <p>Our commitment to organic farming means that our beans  are free from harmful chemicals, allowing the natural flavors to shine through. We believe in transparency and traceability, providing our customers with a genuine  connection to the origins of their coffee. </p>
                    <img src={pic3} alt="" />
                </article>
            </section>
        </>
    )
}