import Image from 'next/image';
import styles from "../styles/page.module.css"
import Title from '@/ui-kit/Title';

const  Home = async ()=> {
  return (
    <div className={styles.main}>
      <Title text='helloo im div'/>
    </div>
  )
}
export default Home
