import React from 'react'
import logo from "../images/logo.png"
import material from "../images/material.png"
import dropdown from "../images/fe_drop-down.png"
import del from "../images/delete.png"
import water from "../images/mdi_water-outline.png"
import Long from "../images/Longsight 1.png"
import styles from "../styles/nav.module.css";
const Nav = () => {
    return (
        <div className={styles.container}>

            <div className={styles.imageDiv}>
                <div className={styles.childImage}>
                    <img src={logo} alt='logo-img' className={styles.image} />
                </div>
            </div>

            <div className={styles.menu}>

                <div className={styles.hardcode}>
                    <p className={styles.grey}>DATA-IN</p>
                </div>

                {/* 2nd part start from here */}

                <div className={styles.energy}>
                    <img src={material} alt='material' className={styles.materialImg} />

                    <select className={styles.drop} name="Energy">
                        <option value="" className={styles.energyName}>Energy</option>
                        <option value="wind">Wind</option>
                        <option value="hydro">Hydro</option>
                        <option value="geothermal">Geothermal</option>
                        <option value="nuclear">Nuclear</option>
                    </select>

                    <img src={dropdown} className={styles.dropdownImg} />


                </div>

                <div className={styles.water}>
                    <img src={water} alt='water' className={styles.waterImg} />

                    <h2 className={styles.energyName}>Water and Effluents</h2>
                    <img src={dropdown} className={styles.dropdownImage} />

                </div>

            </div>

            {/* 3rd part start from here */}

            <div className={styles.hardcode}>
                <p className={styles.grey}>ANALYZE</p>
            </div>

            <div className={styles.menu}>


                <div className={styles.analyze}>

                    <div className={styles.energy}>
                        <img src={material} alt='material' className={styles.materialImg} />
                        <br />
                        <p className={styles.energyName}>Energy</p>
                    </div>

                    <div className={styles.energy}>
                        <img src={del} alt='material' className={styles.materialImg} />
                        <p className={styles.energyName}>Waste <span className={styles.beta}>(βeta)</span> </p>
                    </div>

                </div>
            </div>

<div className={styles.btnContainer}>
    <button className={styles.btn}>Open Help Centre</button>
        </div>
        
            <div className={styles.powerdBy}>
    <p className={styles.by}>Powered by</p>
<img src={Long} className={styles.longImg}/>
</div>
</div>
    
    )
}

export default Nav
