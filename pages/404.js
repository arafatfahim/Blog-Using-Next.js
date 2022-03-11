/* eslint-disable @next/next/no-html-link-for-pages */
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Navbar from '../components/navbar';
const Errorpage = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(()=>{
            router.push('/')
        },5000);
         
    }, []);
  return (
    <>
    <Navbar/>
    <section className="p-0 bg-img cover-background" style={{backgroundImage: `url(https://bootdey.com/img/Content/bg1.jpg)`}} >
        
        <div className="container-fluid d-flex flex-column">
            <div className="row align-items-center justify-content-center min-vh-100">
                <div className="col-md-9 col-lg-6 my-5">
                    <div className="text-center error-page">
                        <h1 className="mb-0 text-secondary">404</h1>
                        <h2 className="mb-4 text-white">Sorry, something went wrong!</h2>
                        <p className="w-sm-80 mx-auto mb-4 text-white">This page is incidentally inaccessible because of support. We will back very before long much obliged for your understanding</p>
                        <hr></hr>
                        <p>You will be redirect to home soon....</p>

                        <div>
                            
                            <a onClick={() => router.push("/")} className="btn btn-info btn-lg me-sm-2 mb-2 mb-sm-0">Return Home</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
};
export default Errorpage;
