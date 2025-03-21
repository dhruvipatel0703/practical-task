import React from 'react';
import Logo from '../../assets/images/m-logo.png'; // Importing logo
import tokens from "../../json/colors.js"; // Importing design tokens (colors, sizes, fonts, etc.)
import nav from "../../json/frame.js"; // Importing navigation structure

const Header = () => {
    // Destructuring tokens for easier access to design values
    const { colors, sizes, fontweights, fontfamilies, lineheights } = tokens;
    const { neutral, brown } = colors;
    const { loose } = lineheights;

    // Centralized styles based on tokens
    const styles = {
        activestyle: { borderColor: neutral?.[90], fontSize: sizes[16], lineHeight: loose },
        activestylex: { borderColor: neutral?.[90], fontSize: sizes[16], lineHeight: loose, borderBottom: '2px solid #1C1812' },
        navstyle: { gridGap: sizes[40], fontWeight: fontweights.regular, justifySelf: 'end', fontFamily: fontfamilies.default },
        logoname: { fontFamily: fontfamilies.alternate, color: brown?.default, fontSize: sizes[20] },
        logosec: { gridGap: sizes[20], alignItems: 'center' },
        navelementcss: { color: neutral?.[90], paddingTop: sizes[4], paddingBottom: sizes[4] },
        menubtn: { display: 'none' } // Hidden by default for larger screens
    };

    // Function to toggle the mobile menu visibility
    const handleShowMobileMenu = () => {
        const navElement = document.querySelector('.header .nav');
        navElement.classList.toggle('active'); // Toggle visibility for mobile menu
    };

    return (
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="d-flex" style={styles.logosec}>
                            <img src={Logo} alt="Logo" />
                            <span className="sitename" style={styles.logoname}>Central Texas Fly Fishing</span>
                            <i className="bi bi-list menu-open" onClick={handleShowMobileMenu} style={styles.menubtn}></i>
                        </div>
                    </div>
                    <div className="col-md-6 align-content-center">
                        <div className="nav d-flex" style={styles.navstyle}>
                            {nav.mainNav.map((item, index) => (
                                <span key={item.name} className="menu" style={index === 0 ? styles.activestylex : styles.activestyle}>
                                    <a href={item.url} style={styles.navelementcss}>{item.name}</a>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;