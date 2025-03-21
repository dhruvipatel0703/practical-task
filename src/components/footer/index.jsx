import React from 'react';
import Logo from '../../assets/images/logo.png'; // Importing logo
import facebook from '../../assets/images/facebook.png'; // Importing logo
import instagram from '../../assets/images/instagram.png'; // Importing logo
import linkedin from '../../assets/images/linkedin.png'; // Importing logo
import tokens from "../../json/colors.js"; // Importing design tokens (colors, sizes, fonts, etc.)
import nav from "../../json/frame.js"; // Importing navigation structure

const Header = () => {
    // Destructuring tokens for easier access to design values
    const { colors, sizes, fontweights, fontfamilies, lineheights } = tokens;
    const { neutral, brown } = colors;

    // Centralized styles based on tokens
    const styles = {
        fnavstyle: { gridGap: sizes[24], fontWeight: fontweights.regular, justifySelf: 'end', fontFamily: fontfamilies.default, fontSize: sizes[16] },
        flogosec: { gridGap: sizes[24], alignItems: 'center' },
        fsocial: { gridGap: sizes[8] },
        fnavelementcss: { color: neutral?.[5] },
        footer: { backgroundColor: neutral?.[90], padding: sizes[24] },
        copyright: { fontSize: neutral?.[12],color: neutral?.[30]  },
    };

    return (
        <div className="footer" style={styles.footer}>
            <div className="container d-grid">
                <div className="row">
                    <div className="col-md-6">
                        <div className="d-flex main-f" style={styles.flogosec}>
                            <img src={Logo} alt="Logo" />
                            <div className="footer-nav d-flex" style={styles.fnavstyle}>
                                {nav.footerNav.map((item, index) => (
                                    <span key={item.name} className="menu">
                                        <a href={item.url} style={styles.fnavelementcss}>{item.name}</a>
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 align-content-end">
                        <div className="social-icon d-flex" style={styles.fsocial}>
                            <a style={styles.fnavelementcss}><img src={facebook}></img></a>
                            <a style={styles.fnavelementcss}><img src={instagram}></img></a>
                            <a style={styles.fnavelementcss}><img src={linkedin}></img></a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className='copyright text-center' style={styles.copyright}>
                            © 2024 Central Texas Fly Fishing All Rights Reserved.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;