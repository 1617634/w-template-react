import * as React from 'react'
import WxImageViewer from 'react-wx-images-viewer';
import { connect } from 'dva';
import { Carousel,Toast } from 'antd-mobile';
import * as styles from './index.less';
import { ajaxPost } from '@/common/ajax'
import API from '@/common/API'
@connect(({ detail, loading }) => ({
  detail,
  loading: loading.effects['detail/fetch'] || false,
}))
export default class Detail extends React.Component<any, any> {
  constructor(props) {
    super(props)
    this.state = {
      imags: [
        require('../../assets/image/shop.png'),
        require('../../assets/image/wangwang.png'),
        require('../../assets/image/shoucang.png'),
      ],
      index: 0,
      isOpen: false,
      imgHeight: '2.5rem',
    }
  }
  componentDidMount() {
    this.props.dispatch({ type: 'detail/fetch' });
  }
  addToBuycar = () => {
    ajaxPost(API.addToBuycar,{id:1}).then(res => {
      console.log(res);
      if(res&&res.code === 1) {
        Toast.success('加入购物车成功!!!', 2);
      }
    }).catch(err => {
      console.log(err);
    })
  }
  onClose = () => {
    this.setState({
      isOpen: false
    })
  }

  openViewer(index) {
    this.setState({
      index,
      isOpen: true
    })
  }

  render() {
    const {
      isOpen,
      imags,
      index
    } = this.state;
    const { detail: { data } } = this.props;
    let urls = []
    return (
      <div className={styles.detail_container}>
        {
          data && data.banner && <Carousel
            autoplay={false}
            dots={false}
            infinite
          >
            {data.banner.map((val, index) => (
              <a
                key={index}
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              >
                <img
                  src={val}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onClick={this.openViewer.bind(this, index)}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
              </a>
            ))}
          </Carousel>
        }
        <div className={styles.goods_info}>
          <div className={styles.info_price}><span className={styles.price_type}>￥</span><span className={styles.price_num}>16.8</span>
            <span className={styles.price_fav}>淘金币抵2%</span>
          </div>
          <p className={styles.good_desc}>【天天特价】中国风 女士棉手帕 印花 田园环保手绢 喜鹊登梅折香</p>
          <div className={styles.good_other}>
            <span className={styles.other_kuaidi}>快递:免运费</span>
            <span className={styles.other_yuexiao}>月销64</span>
            <span className={styles.other_dizhi}>广东广州</span>
          </div>
        </div>
        <div className={styles.sale_promotions}>
          <span className={styles.promotion_icon} style={{ backgroundImage: `url('//img.alicdn.com/tfs/TB1WkZAnhTpK1RjSZFGXXcHqFXa-81-81.png_200x200q85s150.jpg_.webp')` }}></span>
          <span className={styles.promotion_desc}>该宝贝正在参加1212，立即加购</span>
        </div>
        <div className={styles.goods_detail}>
          <div className={styles.divide_bar}>
            <span className={styles.bar_line}></span>
            <div className={styles.icon_info}>
              <span>详情</span>
            </div>
            <span className={styles.bar_line}></span>
          </div>
          <div className={styles.detail_content}>
            <p className={styles.desc_text}>不免邮地区：内蒙古、甘肃、宁夏、新疆、西藏、台湾、香港、澳门、海外。</p>
            <img className={styles.desc_img} src="//img.alicdn.com/imgextra/i2/388223/TB2Q5E0bpXXXXXBXpXXXXXXXXXX-388223.gif_640x0q85s150_.webp"></img>
            <p className={styles.desc_text}>帕客运动，低碳生活！从你我做起！</p>
            <p className={styles.desc_text}>“丢手绢，丢手绢，轻轻地放在小朋友的后面，大家不要告诉他……”</p>
            <p className={styles.desc_text}>对生于上世纪七、八十年代的人来说，这首伴随着游戏而唱的儿歌肯定不会陌生。</p>
            <p className={styles.desc_text}>但是歌词中的“手绢”这个小小的游戏道具，却几乎从我们的日常生活中消失了。</p>
            <p className={styles.desc_text}>快捷便利、包装精美、随用随抛的干湿纸巾的普及，一度成为“人们生活水平提高”的象征。</p>
            <p className={styles.desc_text}>直到近年来，随着环保理念的深入人心，手帕才以另一种姿态，重新回到我们的视野里来。</p>
            <img className={styles.desc_img} src="//img.alicdn.com/imgextra/i3/388223/TB2_VUTbpXXXXcGXXXXXXXXXXXX-388223.gif_640x0q85s150_.webp"></img>
            <p className={styles.desc_text}>一剪梅·喜鹊登梅折香记</p>
            <p className={styles.desc_text}> 香溢红尘暖麝熏，落影疏篱，十里芳春。</p>
            <p className={styles.desc_text}> 扶簪三叹傲霜痕，罗钿随风，醉眼销魂。</p>
            <p className={styles.desc_text}> 鹊啭悠悠舞袖裙，青草斜阳，晓月黄昏。</p>
            <p className={styles.desc_text}> 流年得遇旧时人，幸折梅香，且寄温存。</p>
            <p className={styles.desc_text}> ——宝贝手记随笔</p>
            <p className={styles.desc_text}> 尺寸：约52*52cm</p>
            <img className={styles.desc_img} src="//img.alicdn.com/imgextra/i2/388223/T2UfNSXolXXXXXXXXX_!!388223.jpg_640x0q85s150_.webp"></img>
            <img className={styles.desc_img} src="//img.alicdn.com/imgextra/i4/388223/T2eBagXeVXXXXXXXXX_!!388223.jpg_640x0q85s150_.webp"></img>
            <img className={styles.desc_img} src="//img.alicdn.com/imgextra/i3/388223/T2CjSgXeXbXXXXXXXX_!!388223.jpg_640x0q85s150_.webp"></img>
            <img className={styles.desc_img} src="//img.alicdn.com/imgextra/i4/388223/T2IQagXmxaXXXXXXXX_!!388223.jpg_640x0q85s150_.webp"></img>
            <img className={styles.desc_img} src="//img.alicdn.com/imgextra/i4/388223/T2xL4SXdxXXXXXXXXX_!!388223.jpg_640x0q85s150_.webp"></img>
            <img className={styles.desc_img} src="//img.alicdn.com/imgextra/i1/388223/T2Re8SXXRcXXXXXXXX_!!388223.jpg_640x0q85s150_.webp"></img>
            <img className={styles.desc_img} src="//img.alicdn.com/imgextra/i1/388223/T2r2lSXftbXXXXXXXX_!!388223.jpg_640x0q85s150_.webp"></img>
            <p  className={styles.desc_text}>特价期间包装如图(纸袋颜色随机)</p>
            <img className={styles.desc_img} src="//img.alicdn.com/imgextra/i3/388223/TB2L_b9jFXXXXXfXpXXXXXXXXXX_!!388223.jpg_640x0q85s150_.webp"></img>
            <img className={styles.desc_img} src="//img.alicdn.com/imgextra/i3/388223/TB2KZDVjFXXXXb3XpXXXXXXXXXX_!!388223.jpg_640x0q85s150_.webp"></img>
            <img className={styles.desc_img} src="//gw.alicdn.com/tfs/TB1d0h2qVYqK1RjSZLeXXbXppXa-1125-960.png?getAvatar=avatar_640x0q85s150_.webp"></img>
          </div>
        </div>
        <div className={styles.bottom_bar}>
          <span className={styles.btn_shop}>
            <img src={imags[0]} style={{ width: '.32rem', height: '.34rem' }} alt="" />
            <span className={styles.icon_text}>店铺</span>
          </span>
          <span className={styles.btn_wangwang}>
            <img src={imags[1]} style={{ width: '.4rem', height: '.38rem' }} alt="" />
            <span className={styles.icon_text} style={{ color: '#8a8a8a' }}>客服</span>
          </span>
          <span className={styles.btn_fav}>
            <img src={imags[2]} style={{  width: '.4rem', height: '.38rem'}} alt="" />
            <span className={styles.icon_text} style={{ color: '#8a8a8a' }}>收藏</span>
          </span>
          <div onClick={this.addToBuycar} className={styles.btn_cart}>加入购物车</div>
          <div className={styles.btn_buy}>立即购买</div>
        </div>


        {
          isOpen ? <WxImageViewer onClose={this.onClose} urls={data && data.banner} index={index} /> : ""
        }
      </div>
    )
  }

}