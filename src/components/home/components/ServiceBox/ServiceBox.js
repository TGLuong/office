import styles from  './ServiceBox.module.scss'
import classnames from 'classnames'



const ServiceBox = (props) => {
  const {
    src,
    info
  } = props
//========================== LOG =====================
  // console.log(src)
  // console.log(info)

// ========================= END LOG =================

  return (
    <>
      <div className={classnames(styles.container)}>
        <img src={src}/>
        <div className={classnames(styles.info)}>
          <h3 className={classnames(styles.content)}><b>{info}</b></h3>
        </div>
      </div>
    </>
  )
}


export default ServiceBox