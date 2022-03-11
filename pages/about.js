/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../components/navbar';
import styles from '../styles/About.module.css';
import Head from 'next/head';

const About = () =>{
    return(
      <>
       <Head>
          <title>About | BlogTalk</title>
        </Head>
        <Navbar/>

        <section className={`${styles.section} ${styles.aboutsection} ${styles.graybg}`} id="about">
            <div className={styles.container}>
                <div className="row align-items-center flex-row-reverse">
                    <div className="col-lg-6">
                        <div className={`${styles.abouttext} ${styles.goto}`}>
                            <h3 className={styles.darkcolor}>About Me</h3>
                            <h6 className={` ${styles.themecolor} ${styles.lead}`}>A Lead UX &amp; UI designer based in Canada</h6>
                            <p className={styles.p}>I <mark className={styles.mark}>design and develop</mark> services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions.</p>
                            <div className={`${styles.aboutlist} row`}>
                                <div className="col-md-6">
                                    <div className={styles.media}>
                                        <label className={styles.lebel}>Birthday</label>
                                        <p className={styles.p}>4th april 1998</p>
                                    </div>
                                    <div className={styles.media}>
                                        <label className={styles.lebel}>Age</label>
                                        <p className={styles.p}>22 Yr</p>
                                    </div>
                                    <div className={styles.media}>
                                        <label className={styles.lebel}>Residence</label>
                                        <p className={styles.p}>Canada</p>
                                    </div>
                                    <div className={styles.media}>
                                        <label className={styles.lebel}>Address</label>
                                        <p className={styles.p}>California, USA</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className={styles.media}>
                                        <label className={styles.lebel}>E-mail</label>
                                        <p className={styles.p}>info@domain.com</p>
                                    </div>
                                    <div className={styles.media}>
                                        <label className={styles.lebel}>Phone</label>
                                        <p className={styles.p}>820-885-3321</p>
                                    </div>
                                    <div className={styles.media}>
                                        <label className={styles.lebel}>Skype</label>
                                        <p className={styles.p}>skype.0404</p>
                                    </div>
                                    <div className={styles.media}>
                                        <label className={styles.lebel}>Freelance</label>
                                        <p className={styles.p}>Available</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className={styles.aboutavatar}>
                            <img className='{styles.img}' style={{borderRadius: '200px'}} src="https://source.unsplash.com/400x400/?female" title="" alt="user"/>
                        </div>
                    </div>
                </div>
                <div className={styles.counter}>
                    <div className="row">
                        <div className="col-6 col-lg-3">
                            <div className={`${styles.countdata} text-center`}>
                                <h6 className={`${styles.count} ${styles.h2}` } data-to="500" data-speed="500">500</h6>
                                <p className="m-0px font-w-600">Happy Clients</p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className={styles.countdata} text-center>
                                <h6 className={styles.count} h2 data-to="150" data-speed="150">150</h6>
                                <p className="m-0px font-w-600">Project Completed</p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className={styles.countdata} text-center>
                                <h6 className={`${styles.count} ${styles.h2}`}data-to="850" data-speed="850">850</h6>
                                <p className="m-0px font-w-600">Photo Capture</p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className={styles.countdata} text-center>
                                <h6 className={`${styles.count} ${styles.h2}`}  data-to="190" data-speed="190">190</h6>
                                <p className="m-0px font-w-600">Telephonic Talk</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </>
    );
  };
  
  export default About;