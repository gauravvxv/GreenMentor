import React, { useState } from 'react'
import group from "../images/group.png"
import man from "../images/Ellipse 8.png"
import dropdown from "../images/fe_drop-down.jpg"
import vector from "../images/Vector.png"
import mark from "../images/mark.jpg"
import Chart from './Chart'
import styles from "../styles/top.module.css"
const Top = () => {

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.groupContainer}>
                    <img src={group} className={styles.group} />
                    <p>Category-1</p>
                </div>


                <div className={styles.items}>
                    <img src={man} className={styles.man} />

                    <div>
                        <img src={dropdown} className={styles.drop} />
                    </div>


                    <div className={styles.notifyContainer}>
                        <div className={styles.notify}>
                            <img src={vector} className={styles.bellIcon} />
                            <div className={styles.badge}>1</div>
                        </div>
                    </div>
                </div>
            </div>


            <div className={styles.calender}>
                <div className={styles.child}>
                    <label htmlFor="">Show Tline: </label>
                    <select name="calender">
                        <option value="03-2022">Mar’22 - Apr’22 | </option>
                        <option value="04-2022">Apr’22 - May’22</option>
                        <option value="05-2022">May’22 - Jun’22</option>
                        <option value="06-2022">Jun’22 - Jul’22</option>
                        <option value="07-2022">Jul’22 - Aug’22</option>
                        <option value="08-2022">Aug’22 - Sep’22</option>
                        <option value="09-2022">Sep’22 - Oct’22</option>
                        <option value="10-2022">Oct’22 - Nov’22</option>
                        <option value="11-2022">Nov’22 - Dec’22</option>
                        <option value="12-2022">Dec’22 - Jan’23</option>


                        <option value="01-2023">Jan’23 - Feb’23</option>
                        <option value="02-2023">Feb’23 - Mar’23</option>
                        <option value="03-2023">Mar’23 - Apr’23</option>
                        <option value="04-2023">Apr’23 - May’23</option>
                        <option value="05-2023">May’23 - Jun’23</option>
                        <option value="06-2023">Jun’23 - Jul’23</option>
                        <option value="07-2023">Jul’23 - Aug’23</option>
                        <option value="08-2023">Aug’23 - Sep’23</option>
                        <option value="09-2023">Sep’23 - Oct’23</option>
                        <option value="10-2023">Oct’23 - Nov’23</option>
                        <option value="11-2023">Nov’23 - Dec’23</option>
                        <option value="12-2023">Dec’23 - Jan’24</option>
                    </select>
                    <img src={dropdown} className={styles.calenderDrop} />
                </div>
            </div>

            {/* Boxes part start from here */}

            <div className={styles.parent}>
                <div className={styles.children}>
                    <div className={styles.sibling}>
                        <p className={styles.head}>Purchased goods and Services <img src={mark} className={styles.mark} /> </p>
                        <p className={styles.contri}>contribution to Scope3</p>
                       
                       <div className={styles.inner}>
                        <div>
                        <h4>441510.9 CO<sub>2</sub></h4>
                        </div>
                          <div>
                            <p className={styles.tgs}>25%YOY ↑</p>
                          </div>
                       

                       </div>


                    </div>

                    <div className={styles.sibling}>
                        <p className={styles.head}>Purchased goods and Services to revenue ratio <img src={mark} className={styles.mark} /> </p>

                        <div className={styles.inner2}>
                        <div>
                        <h4>323586.2 CO<sub>2</sub>e</h4>
                        </div>
                          <div>
                            <p className={styles.tgs2}>24%YOY ↓</p>
                          </div>
                       </div>



                    </div>

                    <div className={styles.sibling}>
                        <p className={styles.head}>Category-1 <img src={mark} className={styles.mark} /> </p>
                        {/* <p className={styles.contri}>contribution to Scope3</p> */}

                        <br/>
                          
                        <div className={styles.inner3}>
                        <div>
                        <h4>323586.2 CO<sub>2</sub>e</h4>
                        </div>
                          <div>
                            <p className={styles.tgs3}>24%YOY ↓</p>
                          </div>
                       </div>
                        
                    </div>

                    <div className={styles.sibling}>
                        <p className={styles.head1}>Total number of reached suppliers</p>
                        <p className={styles.contri2}>143</p>
                    </div>
                </div>
            </div>

<div className={styles.chartContainer}>
    <p>Emission/Revenue</p>
<Chart className={styles.chart}/>
</div>

        </div>
    )
}

export default Top
