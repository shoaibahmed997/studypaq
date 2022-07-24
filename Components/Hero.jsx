import Image from 'next/image'
import styles from '../styles/Hero.module.css'
import backgroundPic from '../public/study.jpeg'
import { Button, ProgressBar } from 'react-bootstrap'
import { useState } from 'react'
import {AiOutlineDown} from 'react-icons/ai'


const HeroSection = ()=>{
    const [learn,setlearn] = useState(10)
    const [normal,setnormal] = useState(true)
    console.log(learn)
    const StudyPaq = ()=>{
        setnormal(false)
        if(learn<100){
            for(let i=0;i<=90;i++){
                    setlearn(learn++)
            }
        }
    }
    return(
        <div className={styles.container}>
            <Image src={backgroundPic} alt="background pic" layout='fill' priority/>
            <div className={styles.background}></div>
            <div className={styles.content}>
                <div>
                    <h1>{normal ? "Normal Learning" : "StudyPaq Learning"}</h1>
                    <ProgressBar now={learn} variant={normal ? "danger":"success"} label={`${learn}%`} />
                    <Button onClick={StudyPaq}  variant='success'>Learn with StudyPaq</Button>
                    {!normal && <img className={styles.rocket} src="/rocket.svg" alt="rocket" width={50} height={50} /> }
                </div>
            </div>
            <div className={styles.assignment}>
                <h1>Assignment here</h1>
                <AiOutlineDown size={60} />
            </div>
        </div>
    )
}

export default HeroSection