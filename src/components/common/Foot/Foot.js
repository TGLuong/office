import styles from './FootStyle.module.scss'
import classenames from 'classnames'

import { 
  Icon,
  Input,
  InputGroup,
  InputRightAddon
} from '@chakra-ui/react'

import {
  BsFacebook,
  BsTwitter,
  BsYoutube,
  BsGoogle
} from 'react-icons/bs'

const Foot = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.connect}>
            <h1>KẾT NỐI VỚI CHÚNG TÔI</h1>
            <Icon as={BsFacebook} w={8} h={8} marginRight='20px' color='white'/>
            <Icon as={BsTwitter} w={8} h={8} color='white' marginRight='20px' />
            <Icon as={BsYoutube} w={8} h={8} color='white' marginRight='20px' />
            <Icon as={BsGoogle} w={8} h={8} color='white' />
          </div>
          <div className={styles.email}>
            <h1>ĐĂNG KÝ NHẬN EMAIL</h1>
            <InputGroup width='300px'>
              <Input type='email' backgroundColor='white' placeholder='Nhập email của bạn'/> 
              <InputRightAddon children='GỬI' backgroundColor='black' color='white'/>
            </InputGroup>
          </div>
        </div>
        <div className={styles.middle}>
          <div className={styles.middle_container}>
            <div className={styles.logo}>
              <div><img src='/images/logo-2.png'/></div>
            </div>
            <div className={styles.info_block}>
              <div className={styles.address}>
                <h1>ĐỊA CHỈ</h1>
                <p>CS1: Tầng 9, Gelex Tower, 52 Lê Đại Hành, Quận Hai Bà Trưng, Hà Nội.</p>
                <p>CS2: Tầng 9, Diamond Flower Tower, 48 Lê Văn Lương, Quận Thanh Xuân, Hà Nội.</p>
                <p>CS3: Tầng 7, Sudico Sông Đà, Quận Nam Từ Liêm, Hà Nội</p>
                <p>Tel: 024.32656969</p>
                <p>Hotline: 0903205522</p>
                <p>Email: belinkoffice@gmail.com</p>
                <p>https://fb.me/belinkoffice</p>
              </div>
              <div className={styles.service}>
                <h1>DỊCH VỤ</h1>
                <p>Văn phòng ảo</p>
                <p>Văn phòng ảo</p>
                <p>Văn phòng chia sẻ</p>
                <p>Văn phòng trọn gói</p>
                <p>Dịch vụ khác</p>
                <p>Phòng họp</p>
              </div>
              <div className={styles.help}>
                <h1>HƯỚNG DẪN</h1>
                <p>Tiện ích</p>
                <p>Điều khoản sử dụng</p>
                <p>Chính sách  bảo mật</p>
                <p>Liên hệ</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>© Copyright 2022 - Mang văng phòng đến với bạn</p>
        </div>
      </div>
    </>
  )
}

export default Foot