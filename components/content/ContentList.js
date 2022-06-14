import styles from '../../styles/ContentList.module.css'

export default function ContentList(props) {
  const item = props.dataLink

  return (
    <div className={styles.container}>
      <div className={styles.item} style={{backgroundColor:item.backgroundColor}}>
        <a className={styles.itemDetail} href={item.link}>
        <p className={styles.itemText}>{item.socialMediaInfo} - {item.socialMediaName}</p>
        </a>
      </div>
    </div>
  )
}
