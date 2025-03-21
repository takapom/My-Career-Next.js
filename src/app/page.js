"use client"

import { useEffect } from 'react';
import Navbar from './componets/Navbar';
import styles from "./page.module.css"
//コンポーネントのインポート
import Main from './componets/Main';
import Aboutme from './componets/Aboutme';
import Footer from './componets/Footer';
import InternshipCard from './componets/InternshipCard';

//フレームワークのインポート
import { DiReact } from "react-icons/di";
import { FaPython } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import { SiSwift } from "react-icons/si";




export default function Home(){
  useEffect(() => {
    // クライアント側でのみ Bootstrap の JS を動的に読み込む
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <div>
    <Aboutme />
    <Main />
    <div className={styles.boxcontainer}>
    <h2 className="text-3xl font-semibold text-black mb-4 font-bold">Skills</h2>
      <div className={styles.icon}>
       <div className={styles.icons}><DiReact size={55} title="React"/><span>React</span></div>
       <div className={styles.icons}><FaPython size={55} title='Python'/><span>Python</span></div>
       <div  className={styles.icons}><FaGithub size={55} title='GitHub'/><span>GitHub </span></div>
       <div  className={styles.icons}><IoLogoFirebase size={55} title='Firebase'/><span>Firebase</span></div>
       <div  className={styles.icons}><SiNextdotjs  size={55} title='Nextjs'/><span>Next.js</span></div>
       <div className={styles.icons}><SiSwift size={55} title="Swift" /><span>Swift</span></div>
      </div>
    </div>
    <InternshipCard />
    <Footer />
    </div>
  )
}