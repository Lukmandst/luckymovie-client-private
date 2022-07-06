import Image from 'next/image'
import styles from '../../../styles/Home.module.css'

import Movie from '../../assets/images/hero/movie.png'

export default function nowShowing() {
    return (
        <div className={styles.nowShowing}>
            <Image src={Movie}
                alt='movies'
            />
        </div>

    )
}