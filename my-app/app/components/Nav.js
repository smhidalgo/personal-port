"use client";
import { useCallback } from 'react';
import styles from '../Nav.module.css';

const Nav = () => {
const onDefaultContainerClick = useCallback(() => {
// Add your code here
}, []);

return (
<div className={styles.nav}>
<div className={styles.tabDefault} onClick={onDefaultContainerClick}>
<div className={styles.sobre}>About</div>
</div>
<div className={styles.navTabDefault}>
<div className={styles.sobre}>Projects</div>
</div>
<div className={styles.navTabDefault}>
<div className={styles.sobre}>Contacts</div>
</div>
</div>);
};

export default Nav;