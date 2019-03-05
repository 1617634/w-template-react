import * as React from 'react'
import { connect } from 'dva';
import { Carousel } from 'antd-mobile'
import * as styles from './index.less'
import Banner from './subpage/banner'
import { url } from 'inspector';
import { Link } from 'dva/router';
@connect(({ home, loading }) => ({
  home,
  loading: loading.effects['home/fetch'] || false,
}))
export default class Home extends React.Component<any, {}>{

  constructor(props) {
    super(props)

  }
  componentDidMount() {

    this.fetchData()
  }
  fetchData = () => {
    this.props.dispatch({ type: 'home/fetch' });
  }

  click = () => {

  }
  // 渲染
  renderList = list => {
    return (
      <div className={styles.icon_list}>
        {list.map((item, i) => (
          <div key={i} className={styles.icon}>
            <div className={styles.icon_img} style={{ backgroundImage: `url(${item.imgUrl})` }}></div>
            <p className={styles.icon_desc}>{item.text}</p>
          </div>
        ))
        }
      </div>
    )
  }
  renderCarouselItem = list => {
    return (<div className={styles.carousel_right}>
      <Carousel className={styles.my_carousel}
        vertical
        dots={false}
        dragging={false}
        swiping={false}
        autoplay
        infinite
      >
        {
          list.map((item, i) => (
            <div className={styles.v_item}>
              <p><span className={styles.item_type}>{item.type1}</span><span className={styles.item_desc}>{item.desc1}</span></p>
              <p><span className={styles.item_type}>{item.type2}</span><span className={styles.item_desc}>{item.desc2}</span></p>
            </div>
          ))
        }
      </Carousel>
    </div>
    )
  }
  renderGuessContent = list => {
    return (
      <div className={styles.guess_content}>
        {
          list.map((item, i) => (
            <div className={styles.content_item}>
              <Link to={`/detail/${item.id}`}>
                <div className={styles.item_img} style={{ backgroundImage: `url(${item.imgUrl})` }}></div>
                <div className={styles.item_info}>
                  <div>
                    <img src="//img.alicdn.com/tfs/TB1PisDnmzqK1RjSZFjXXblCFXa-93-36.png" alt="" />[为你推荐]{item.text}
                  </div>
                  <div className={styles.item_detail}>
                    <span className={styles.detail_price}>￥<span>{item.price}</span></span>
                    <span className={styles.detail_pay}>{item.payTimes || 0}人付款</span>
                  </div>
                </div>
              </Link>
            </div>
          ))
        }
      </div>)
  }
  render() {
    let { data } = this.props.home;
    return (
      <>
        <header className={styles.home_header}></header>
        <Banner bannerList={data && data.banner || []}></Banner>
        {data && data.iconList && this.renderList(data.iconList)}
        <div className={styles.home_carousel}>
          <div className={styles.carousel_left}>今日头条</div>
          <div className={styles.carousel_right}>
            {data && data.carouselList && this.renderCarouselItem(data.carouselList)}
          </div>
        </div>
        <div className={styles.home_guess}>
          <div className={styles.guess_title}>猜你喜欢</div>
          {data && data.product && this.renderGuessContent(data.product)}
        </div>
      </>
    )
  }

}