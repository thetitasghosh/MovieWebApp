import React from 'react';
import ContactCard from "../components/ContactCrad";
import styles from "./contact.module.css";
import ContactForm from "../components/ConatactForm";

const Contact = () => {


    return (
        <>
            <div className={styles.container}>
            <h1>Contact Us</h1>
            <ContactCard />

                <section className={styles.contact_section}>
                    <h2>We would love to hear <span> from you </span></h2>

                    <ContactForm />
                </section>
            </div>

            {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2547158278226!2d73.91419611127971!3d18.562551782466336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20-%20Viman%20Nagar!5e0!3m2!1sen!2sin!4v1681696533582!5m2!1sen!2sin"
                width={100} height={450} style={{border: 0}} allowFullScreen="" loading="lazy" className={styles.mapping}
                referrerPolicy="no-referrer-when-downgrade"></iframe> */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1295.5208347837424!2d88.52607742986484!3d23.305370051149684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1690987553678!5m2!1sen!2sin" width={100} height={400}style={{border:0}} allowFullScreen="" loading="lazy" className={styles.mapping} referrerPolicy="no-referrer-when-downgrade"></iframe>

        </>
    );
};

export default Contact;