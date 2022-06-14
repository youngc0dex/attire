import styles from '../../styles/Content.module.css'
import Image from 'next/image'
import logo from '../../public/RETTIRE_PNG.png'
import ContentList from "./ContentList";
import TikTokLogo from "../../public/tiktok.svg"

export default function Content() {
  const dataLink = [{
    socialMediaInfo: 'TikTok',
    socialMediaName: '@Rettire.id',
    backgroundColor:'black',
    link:'https://www.tiktok.com/@rettire.id?lang=id-ID'
  },{
    socialMediaInfo: 'Shopee',
    socialMediaName: '@Rettire.id',
    backgroundColor:'red',
    link:'https://www.shopee.com'
  },{
    socialMediaInfo: 'Whatsapp',
    socialMediaName: '@Rettire.id',
    backgroundColor:'green',
    link:'https://www.whatsapp.com'
  }]

  const renderItems = () =>{
    return dataLink.map((item,index) => {return <ContentList key={index} dataLink={item}/>})
  }

  return (
    <div style={{width:'100%', maxWidth:'680px'}}>
      <div className={styles.content}></div>
      <div className={styles.contentBackground}>
        <div className={styles.contentBackgroundNoise}></div>
      </div>

      <div className={styles.profileWrap}>
        <Image width={'96px'} height={'96px'} className={styles.contentLogo} src={logo}/>

        <div className={styles.headerWrap}>
          <h1 className={styles.headerText}>@rettire</h1>
        </div>
      </div>

      <div>
        {renderItems()}
      </div>
    </div>
  )
}
