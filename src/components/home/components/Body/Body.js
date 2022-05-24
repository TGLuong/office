import styles from './BodyStyle.module.scss'
import classnames from 'classnames'
import ServiceBox from '../ServiceBox/ServiceBox'

import {
  Button,
  Icon
} from '@chakra-ui/react'

import {BsArrowRightCircle} from 'react-icons/bs'



const Body = () => {
  return (
    <>
      <div className={classnames(styles.body_container)}>
        <img className={classnames(styles.main_image)} src="/images/office-space.jpg" />

        <div className={classnames(styles.info_model)}>
          <h1>FULL SERVICE</h1>
          <h2>Office with fully facilities, service and saving the business cost</h2>
          <h2>Trang thiết bị văn phòng tiện nghi, hiện đại</h2>
          <h2><b>Tel: 0383628286</b></h2>
        </div>

        <div className={classnames(styles.service)}>
          <h1 className={classnames(styles.title)}>My Office</h1>
          <div className={classnames(styles.service_container)}>
            <div className={classnames(styles.service_frame)}>
              <ServiceBox 
                src="/images/service_box_1.jpg"
                info="VĂN PHÒNG ẢO"
              />
              <ServiceBox 
                src="/images/service_box_2.jpg"
                info="VĂN PHÒNG CHIA SẺ"
              />
              <ServiceBox 
                src="/images/service_box_3.jpg"
                info="VĂN PHÒNG CHỌN GÓI" 
              />
              <ServiceBox 
                src="/images/service_box_4.jpg"
                info="DỊCH VỤ KHÁC"
              />
              <ServiceBox 
                src="/images/service_box_5.jpg"
                info="PHÒNG HỌP"
              />
            </div>
          </div>
        </div>

        <div className={classnames(styles.about)}>
          <div className={classnames(styles.about_background)}>
            <img src='/images/about_background.jpg' />
          </div>
          <div className={styles.about_modal}>
            <h3>VỀ CHÚNG TÔI</h3>
            <h1>OFFICE</h1>
            <div className={styles.line}></div>
            <p>
              Các cá nhân và tổ chức muốn có một văn phòng đại diện với chi phí thấp thường lựa chọn 
              giải pháp này. Thuê văn phòng đại diện sẽ giúp cho doanh nghiệp vừa có một văn phòng hiện đại bậc 
              nhất vừa giảm tối đa chi phí và nhân lực cho những bộ phận ngoài hoạt động cốt lõi của doanh nghiệp. Các giám 
              đốc doanh nghiệp với quy mô nhỏ,
            </p>
            <Button leftIcon={<Icon as={BsArrowRightCircle}/>} style={{backgroundColor: '#63bc12', color: 'white'}}>CHI TIÊT</Button>
          </div>
        </div>
      </div>
    </>
  )
}


export default Body