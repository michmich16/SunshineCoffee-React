export const CookiePolicy = () => {
    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1 style={styles.headerTitle}>Cookie Policy</h1>
            </header>
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>About Our Cookie Policy</h2>
                <p style={styles.text}>
                    At Sunshine Coffee, we value your privacy and strive to be transparent about our use of cookies. This Cookie Policy explains how and why cookies are used on our website and how you can manage your cookie preferences.
                </p>

                <h2 style={styles.sectionTitle}>What Are Cookies?</h2>
                <p style={styles.text}>
                    Cookies are small text files stored on your device when you visit websites. They help improve your browsing experience by remembering your preferences and providing us with information about how our website is used.
                </p>

                <h2 style={styles.sectionTitle}>Types of Cookies We Use</h2>
                <ul style={styles.list}>
                    <li style={styles.listItem}>
                        <strong>Essential Cookies:</strong> Necessary for the website to function properly, enabling navigation and feature use.
                    </li>
                    <li style={styles.listItem}>
                        <strong>Performance Cookies:</strong> These cookies collect information about how visitors use our website, helping us improve its functionality by tracking popular pages and areas that need improvement.
                    </li>
                    <li style={styles.listItem}>
                        <strong>Functional Cookies:</strong> Remember choices you make (like language preference) to personalize your experience.
                    </li>
                    <li style={styles.listItem}>
                        <strong>Advertising Cookies:</strong> These cookies display relevant ads based on your interests, limit ad frequency, and measure ad effectiveness.
                    </li>
                </ul>

                <h2 style={styles.sectionTitle}>Managing Your Cookie Preferences</h2>
                <p style={styles.text}>
                    You can control and manage cookies through your browser settings. Most browsers allow you to delete cookies or prevent future storage on your device. Note that blocking essential cookies may impact website functionality.
                </p>

                <h2 style={styles.sectionTitle}>Changes to This Cookie Policy</h2>
                <p style={styles.text}>
                    Sunshine Coffee may update this Cookie Policy periodically. We recommend reviewing this policy to stay informed about how we use cookies.
                </p>

                <h2 style={styles.sectionTitle}>Contact Us</h2>
                <p style={styles.text}>
                    If you have any questions about our Cookie Policy, please contact us at{" "}
                    <a href="mailto:privacy@sunshinecoffee.com" style={styles.link}>
                        privacy@sunshinecoffee.com
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