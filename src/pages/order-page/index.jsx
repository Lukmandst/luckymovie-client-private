import Footer from 'components/Footer'
import Header from 'components/header/Header'
import styles from './Order.module.css'
import Seat from 'components/seat/Seat'
import Loading from 'components/loading/Loading'


const OrderPage = () => {
  return (
    <>
    <Header/>
    <div className={styles.container}>
      <Loading/>
    <Seat/>
    </div>
    <Footer/>
    </>
  )
}

export default OrderPage