/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "../../components/navbar";
import Head from "next/head";
import styles from '../../styles/Post.module.css'
export const pageNo = () => {

    const router = useRouter();
    const postNo = router.query.pageNo;
  return (
    <>
    <Head>
      <title>Post | BlogTalk</title>
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
    </Head>
    <Navbar/>
    <div className={`container ${styles.pb50}`}>
        <div className="row">
            <div className={`col-md-9 ${styles.mb40}`}>
                <article>
                    <img src="https://images.unsplash.com/photo-1455734729978-db1ae4f687fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="" className={`${styles.imgfluid} ${styles.mb30}`}/>
                    <div className={styles.postcontent}>
                        <h3>A smart template that works 24/7 for your company</h3>
                        <ul className={`${styles.postmeta} list-inline`}>
                            <li className={`${styles.li} list-inline-item`}>
                                <i className='fa fa-user-circle-o'></i> <a href="#">John Doe</a>
                            </li>
                            <li className={`${styles.li} list-inline-item`}>
                                <i className='fa fa-calendar-o'></i> <a href="#">29 June 2017</a>
                            </li>
                            {/* <li className={`${styles.li} list-inline-item`}>
                                <i className='fa fa-tags'></i> <a href="#">Bootstrap4</a>
                            </li> */}
                        </ul>
                        <p className={styles.p}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, </p>
                        <p className={`${styles.lead} ${styles.p}`}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, </p>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, </p>
                        <ul className={`${styles.ul} list-inline ${styles.sharebuttons}`}>
                            <li className={`${styles.li} list-inline-item`}>Share Post:</li>
                            <li className={`${styles.li} list-inline-item`}>
                                <a href="#" className={`${styles.a} social-icon-sm si-dark si-colored-facebook si-gray-round`}>
                                    <i className="fa fa-facebook"></i>
                                </a>
                            </li>
                            <li className={`${styles.li} list-inline-item`}>
                                <a href="#" className={`${styles.a} social-icon-sm si-dark si-colored-twitter si-gray-round`}>
                                    <i className="fa fa-twitter"></i>
                                </a>
                            </li>
                            <li className={`${styles.li} list-inline-item`}>
                                <a href="#" className={`${styles.a} social-icon-sm si-dark si-colored-linkedin si-gray-round`}>
                                    <i className="fa fa-linkedin"></i>

                                </a>
                            </li>
                        </ul>
                        <hr className={styles.mb40}/>
                        
                      </div>
                </article>
            </div>
            <div className="col-md-3 mb40">
            <div className="mb40">
            <h4 className={`${styles.mb40} ${styles.h4} text-uppercase font500`}>About Author</h4>
                <div className={`${styles.media} ${styles.mb40}`}>
                    <i className="d-flex mr-3 fa fa-user-circle fa-5x text-primary"></i>
                    <div className={styles.mediabody}>
                        <h5 className='mt-0 font700'>Jane Doe</h5> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
  </>
  )
};

export default pageNo;
