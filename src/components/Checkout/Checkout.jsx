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

    const [errors, setErrors] = useState({});

    const totalPrice = cartData.reduce((total, item) => total + item.price * item.quantity, 0);

    const validateInputs = () => {
        const errors = {};

        if (!/^[a-zA-Z]+$/.test(firstname)) {
            errors.firstname = "First name should only contain letters.";
        }
        if (!/^[a-zA-Z]+$/.test(lastname)) {
            errors.lastname = "Last name should only contain letters.";
        }
        if (!/^[a-zA-Z0-9\s,.'-]{3,}$/.test(address)) {
            errors.address = "Address should be alphanumeric and at least 3 characters long.";
        }
        if (!/^[a-zA-Z\s]+$/.test(city)) {
            errors.city = "City should only contain letters.";
        }
        if (!/^\d{8,15}$/.test(phone)) {
            errors.phone = "Phone should be numeric and between 8 to 15 digits.";
        }
        if (!/^[a-zA-Z\s]+$/.test(province)) {
            errors.province = "Province should only contain letters.";
        }
        if (!/^[a-zA-Z\s]+$/.test(country)) {
            errors.country = "Country should only contain letters.";
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateInputs()) {
            console.log('Customer:', firstname, lastname, 'Address:', address, city, province, country, 'Telephone:', phone);

            // Clear input fields and errors
            setFirstname('');
            setLastname('');
            setAddress('');
            setCity('');
            setPhone('');
            setProvince('');
            setCountry('');
            setErrors({});
        }
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
                        {errors.firstname && <p className={s.errorMessage}>{errors.firstname}</p>}

                        <label htmlFor="lastname">Last name</label>
                        <input
                            type="text"
                            id="lastname"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                            required
                        />
                        {errors.lastname && <p className={s.errorMessage}>{errors.lastname}</p>}

                        <label htmlFor="address">Address</label>
                        <input
                            type="text"
                            id="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                        {errors.address && <p className={s.errorMessage}>{errors.address}</p>}

                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            id="city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                        />
                        {errors.city && <p className={s.errorMessage}>{errors.city}</p>}

                        <label htmlFor="phone">Phone</label>
                        <input
                            type="text"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                        {errors.phone && <p className={s.errorMessage}>{errors.phone}</p>}

                        <label htmlFor="province">Province</label>
                        <input
                            type="text"
                            id="province"
                            value={province}
                            onChange={(e) => setProvince(e.target.value)}
                            required
                        />
                        {errors.province && <p className={s.errorMessage}>{errors.province}</p>}

                        <label htmlFor="country">Country</label>
                        <input
                            type="text"
                            id="country"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            required
                        />
                        {errors.country && <p className={s.errorMessage}>{errors.country}</p>}

                        {/* Move the Pay Now button inside the form */}
                        <div className={s.payButton}>
                            <button type="submit">Pay Now</button>
                        </div>
                    </form>
                </div>

                {/* right side */}

                <div className={s.checkoutInfo}>
                    <div className={s.checkoutCart}>
                        {cartData.map((item) => (
                            <div key={item.id} className={s.checkOutProducts}>
                                <h4>{item.name}</h4>
                                <p>x {item.quantity}</p>
                                <p>{item.price * item.quantity} DKK</p>
                            </div>
                        ))}
                        <div className={s.checkoutTotal}>
                            <p>Total: </p>
                            <p>{totalPrice} DKK</p>
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
                </div>
            </div>
        </section>
    );
};
