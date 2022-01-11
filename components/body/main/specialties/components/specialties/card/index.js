import SVG from '@/svg'
import styles from './index.module.scss'

const Index = ({initialData}) => {
    const val = parseInt(initialData.percent) - 15;
    const r = 90;
    const c = Math.PI * ( r * 2 );
    const pct = ( ( 100 - val ) / 100 ) * c;
    return(
        <div className={styles.speciality}>
            <div id={styles.cont} data-pct={initialData.percent}>
                <svg id={styles.svg} width="200" height="200" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle r="90" cx="100" cy="100" fill="transparent" strokeDasharray="565.48" strokeDashoffset="0"></circle>
                    <circle id={styles.bar} r="90" cx="100" cy="100" fill="transparent" style={{strokeDashoffset: `${pct}px`}} strokeDasharray="565.48" strokeDashoffset="0"></circle>
                </svg>
            </div>
            <div className={styles.holder}>
                <div className={styles.tech}>
                    <div className={`${styles.icon} ${styles[initialData.icon.name]}`}>
                        {SVG.dynamic(initialData.icon.name)}
                    </div>
                    <div className={styles.text}>
                        <h4>{initialData.text}</h4>
                    </div>
                </div>
                <div className={styles.percent}>
                    <span>{initialData.percent} %</span>
                </div>
            </div>
        </div>
    )
}
export default Index