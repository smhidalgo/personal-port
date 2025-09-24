"use client";
import styles from '../Default.module.css';
import Link from 'next/link';

const Default = () => {

return (
    <>
        <div className={styles.tabDefault}></div>
        <Link href="#" className={styles.sobre}>About</Link>
        <div className={styles.tabDefault}>
            <Link href="#" className={styles.sobre}>Projects</Link>
        </div>
        <Link href="#" className={styles.tabDefault}>
            <div className={styles.sobre}>Contacts</div>
        </Link>
    </>);
};

export default Default;