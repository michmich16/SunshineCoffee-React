import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import s from './Checkout.module.scss';

export const Checkout = () => {
    const { cartData } = useContext(CartContext);

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');
    const [province, setProvince] = useState('');
    const [country, setCountry] = useState('');
    const [selectedShipping, setSelectedShipping] = useState('FakeEx');

    const totalPrice = cartData.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Customer:', firstname, lastname, 'Address:', address, city, province, country, 'Telephone:', phone);

        setFirstname('');
        setLastname('');
        setAddress('');
        setCity('');
        setPhone('');
        setProvince('');
        setCountry('');
    };

    return (
        <section className={s.checkoutStyle}>
            <h2>Checkout</h2>
            <div className={s.checkoutContainer}>

                {/* left side */}

                <div className={s.checkoutInputStyle}>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="firstname">First name</label>
                        <input
                            type="text"
                            id="firstname"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                            required
                        />
                        <label htmlFor="lastname">Last name</label>
                        <input
                            type="text"
                            id="lastname"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                            required
                        />
                        <label htmlFor="address">Address</label>
                        <input
                            type="text"
                            id="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            id="city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                        />
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="number"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                        <label htmlFor="province">Province</label>
                        <input
                            type="text"
                            id="province"
                            value={province}
                            onChange={(e) => setProvince(e.target.value)}
                            required
                        />
                        <label htmlFor="country">Country</label>
                        <input
                            type="text"
                            id="country"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            required
                        />
                    </form>
                </div>

                {/* right side */}

                <div className={s.checkoutInfo}>
                    <div className={s.checkoutCart}>
                        {cartData.map((item) => (
                            <div key={item.id} className={s.checkOutProducts}>
                                <h4>{item.name}</h4>
                                <div>
                                    <p>x {item.quantity}</p>
                                </div>
                                <div>
                                    <p>{item.price * item.quantity} DKK</p>
                                </div>
                            </div>
                        ))}
                        <div className={s.checkoutTotal}>
                            <p >Total: </p>
                            <p>{totalPrice.toFixed(2)} DKK</p>
                        </div>

                    </div>
                    <div className={s.checkoutShipping}>
                        <h4>Choose Shipping</h4>
                        <label className={s.radioContainer}>FakeEx
                            <input
                                type="radio"
                                name="shipping"
                                value="FakeEx"
                                checked={selectedShipping === "FakeEx"}
                                onChange={(e) => setSelectedShipping(e.target.value)}
                            />
                            <span className={s.radioCheckmark}></span>
                        </label>
                        <label className={s.radioContainer}>FakeEx Express
                            <input
                                type="radio"
                                name="shipping"
                                value="FakeEx Express"
                                checked={selectedShipping === "FakeEx Express"}
                                onChange={(e) => setSelectedShipping(e.target.value)}
                            />
                            <span className={s.radioCheckmark}></span>
                        </label>
                    </div>
                    <div className={s.payButton}>
                        <button>Pay Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
};
