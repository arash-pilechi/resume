import {useRouter} from "next/router"
import SVG from '@/svg'
import styles from './index.module.scss'

const Index = ({initialData}) => {
    const router = useRouter();
    return(
        <div className={styles.social_media}>
            {
                initialData.map((item,index) =>
                    <div className={`${styles.item} ${styles[item.id]} ${item.visibility ? '' : 'hidden'}`} key={index}>
                        <a href={item.address[router.locale]} rel="me noreferrer" target="_blank">
                            {SVG.dynamic(item.icon)}
                        </a>
                    </div>
                )
            }
        </div>
    )
}
export default Index
