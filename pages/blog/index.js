/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable jsx-a11y/alt-text */
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../../components/navbar';
import Image from 'next/image';
import Head from 'next/head';
import styles from '../../styles/Blog.module.css'


export const getStaticProps = async ()=>{
  const res = await fetch('https://blogtalkbd.herokuapp.com/api/post/');
  const data = await res.json();
  return{
    props:{
      data,
    }
  }
}
const Blog = ({data}) =>{
    return(
      <>
        <Head>
          <title>Blog | BlogTalk</title>
          {/* <meta name="viewport" content="width=device-width, initial-scale=1"/>
	        <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
          <link href="https://netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet"/>
	        <script src="https://netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script> */}
        </Head>
        <Navbar/>
        {data.slice(2,7).map((currElem)=>{
          return <div key={currElem.pid} className="ssr-styles">
            {/* <h3>{currElem.pid}</h3> */}
            <div className={styles.container}>
                  <hr/>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className={`${styles.well} ${styles.blog}`}>
                            <a href="#">
                                <div className={`${styles.date} primary`}>
                                    <span className={styles.blogdate}>{currElem.date}</span>
                                    <span className={styles.blognumber}>8</span>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
                                        <div className={styles.image}>
                                            <img className={styles.img} src="{currElem.thumbnail}" alt="thumbnail"/>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                        <div className={styles.blogdetails}>
                                            <h2>{currElem.title}</h2>
                                            <p className={styles.p}>
                                            {currElem.content.slice}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
              </div>                  
          </div>
          </div>
        })}
      </>
    );
  };
  
  export default Blog;