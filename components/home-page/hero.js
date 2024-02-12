import classes from './hero.module.css';
import Image from 'next/image';

function Hero(){
    return(
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src='/images/site/jai.JPG' alt='Jais Image' height={300} width={300}/>
            </div>
            <h1>Hi I am Jai</h1>
            <p>I write about the projects i build on this website.
            Thankyou for visiting</p>
        </section>
    )
}

export default Hero;