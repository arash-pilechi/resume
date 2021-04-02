import SVG from '@/svg'
import styles from './index.module.scss'

const Index = ({initialData}) => {
    return(
        <div className={styles.social_media}>
            {
                initialData.map((item,index) =>
                    <div className={`${styles.item} ${item.visibility ? '' : 'hidden'}`} key={index}>
                        <a href={item.link} rel="me" title={item.text} target="_blank">
                            {SVG.dynamic(item.icon)}
                        </a>
                    </div>
                )
            }
        </div>
    )
}
export default Index