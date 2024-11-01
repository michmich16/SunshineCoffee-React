import React from "react";

export const ReturnPolicy = () => {
    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1 style={styles.headerTitle}>Return Policy</h1>
            </header>
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>Our Return Policy</h2>
                <p style={styles.text}>
                    At Sunshine Coffee, we are committed to providing quality products. If you are not fully satisfied with your purchase, we offer a hassle-free return policy to ensure your satisfaction.
                </p>

                <h2 style={styles.sectionTitle}>Return Eligibility</h2>
                <p style={styles.text}>
                    To qualify for a return, please ensure the following:
                </p>
                <ul style={styles.list}>
                    <li style={styles.listItem}>
                        The item must be unused, in its original packaging, and in the same condition as received.
                    </li>
                    <li style={styles.listItem}>
                        Returns must be initiated within 30 days of the purchase date.
                    </li>
                    <li style={styles.listItem}>
                        Proof of purchase, such as a receipt or order confirmation, is required for processing returns.
                    </li>
                </ul>

                <h2 style={styles.sectionTitle}>Non-Returnable Items</h2>
                <p style={styles.text}>
                    Certain items are non-returnable, including gift cards, downloadable products, and personalized items. For health and safety reasons, any opened perishable items cannot be returned.
                </p>

                <h2 style={styles.sectionTitle}>How to Initiate a Return</h2>
                <p style={styles.text}>
                    To initiate a return, please contact our customer service team at{" "}
                    <a href="mailto:returns@sunshinecoffee.com" style={styles.link}>
                        returns@sunshinecoffee.com
                    </a>{" "}
                    with your order number and reason for return. Our team will provide you with the necessary instructions and a return shipping address.
                </p>

                <h2 style={styles.sectionTitle}>Refunds</h2>
                <p style={styles.text}>
                    Once we receive and inspect your returned item, we will notify you of the approval or rejection of your refund. If approved, a refund will be processed to your original payment method within 5-7 business days.
                </p>

                <h2 style={styles.sectionTitle}>Exchanges</h2>
                <p style={styles.text}>
                    If you need to exchange an item, please contact us to check the availability of the item you wish to receive. Exchanges are handled as a new order after the return of the original item.
                </p>

                <h2 style={styles.sectionTitle}>Contact Us</h2>
                <p style={styles.text}>
                    If you have any questions about our Return Policy, please reach out to our team at{" "}
                    <a href="mailto:returns@sunshinecoffee.com" style={styles.link}>
                        returns@sunshinecoffee.com
                    </a>.
                </p>
            </section>
        </div>
    );
};

const styles = {
    container: {
        fontFamily: "Arial, sans-serif",
        lineHeight: 1.6,
        margin: 0,
        padding: 0,
    },
    header: {
        backgroundColor: "white",
        paddingTop: "8rem",
        textAlign: "center",
    },
    headerTitle: {
        margin: 0,
        color: "#663300",
    },
    section: {
        maxWidth: "800px",
        margin: "20px auto",
        padding: "20px",
    },
    sectionTitle: {
        color: "#FF9933",
    },
    text: {
        color: "#333333",
    },
    list: {
        paddingLeft: "20px",
    },
    listItem: {
        marginBottom: "10px",
    },
    link: {
        color: "#FF9933",
        textDecoration: "none",
    },
};

export default ReturnPolicy;
