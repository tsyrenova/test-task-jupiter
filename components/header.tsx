import React from 'react';
import styles from './header.module.scss';
import LogoIcon from '@/assets/icons/logo-icon';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.logoWrapper}>
                        <LogoIcon />
                        <span className={styles.logoText}>Agency</span>
                    </div>
                    <nav className={styles.navigation}>
                        <ul className={styles.navigationList}>
                            <li>About</li>
                            <li>Services</li>
                            <li>Pricing</li>
                            <li>Blog</li>
                        </ul>
                    </nav>
                    <button className={styles.contact}>Contact</button>
                </div>
                <h1 className={styles.title}>Portfolio</h1>
                <p className={styles.text}>
                    Agency provides a full service range including technical
                    skills, design, business understanding.
                </p>
            </div>
        </header>
    );
};

export default Header;
