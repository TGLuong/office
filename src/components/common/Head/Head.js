import { Icon } from '@chakra-ui/icons'
import {
  Input,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react'

import {
  AiOutlineClockCircle,
  AiFillPhone,
  AiOutlineSearch
} from 'react-icons/ai'

import styles from './HeadStyle.module.scss'
import classnames from 'classnames'


const TAG = 'home/components/Head.js: '

const Head = () => {

  // ================= FOR LOG ==========================
  // console.log(TAG + 'style.container: ' + styles.container)
  // console.log(TAG + 'style.logo: ' + styles.logo)
  // console.log(TAG + 'style.info: ' + styles.info)


  // ================ END LOG ============================

  return(
    <>
      <div className={classnames(styles.header)}>
        <img src="/images/logo.png" className={classnames(styles.logo)} />
        <div className={classnames(styles.info)}>
          <div className={classnames(styles.icon_div)}>
            <Icon as={AiOutlineClockCircle} boxSize={18} color='#63bc12' />
          </div>
          <div className={classnames(styles.content)}>
            <p><b>Giờ làm việc</b></p>
            <p>Thứ 2 - Thứ 6: 8h - 18h</p>
            <p>Thứ 7: 8h - 12h</p>
          </div>
          <div className={classnames(styles.contact_and_search)}>
            <div className={classnames(styles.top)}>
              <div>
                <Icon as={AiFillPhone} boxSize={18} color={'#63bc12'} />
                <p><b>0383628286</b></p>
              </div>
            </div>
            <div className={classnames(styles.bottom)}>
              <div>
                <InputGroup>
                  <Input placeholder='Nhập từ khoá' size='md' />
                  <InputRightElement children={<Icon as={AiOutlineSearch} boxSize={18} color='63bc12' />} /> 
                </InputGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classnames(styles.nav_bar)}>
        <ul className={classnames(styles.list_nav)}>
          <li><b>TRANG CHỦ</b></li>
          <li><b>GIỚI THIỆU</b></li>
          <li><b>DỊCH VỤ</b></li>
          <li><b>TIỆN ÍCH</b></li>
          <li><b>TIN TỨC</b></li>
          <li><b>THÀNH LẬP DOANH NGHIỆP</b></li>
          <li><b>LIÊN HỆ</b></li>
        </ul>
      </div>
    </>
  )
}


export default Head