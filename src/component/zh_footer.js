/*
    主页底部
*/
import React from 'react';

import qr2 from '../style/images/qr2.png';
import '../style/css/zh_footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div>
                <div id="footer">
                    <div className="footer_wrap">
                        <div className="ft_info fl">
                            <p>知乎日报是一款拥有千万用户的资讯类客户端，每日提供来自知乎社区的精选问答，还有国内一流媒体的专栏特稿。</p>
                            <p>主题日报包括动漫、设计、大公司、游戏、财经、电影、电子音乐、互联网安全等丰富内容，为业内人和资深爱好<br/>者推荐各领域最精彩文章，满足高质量阅读需求。</p>
                            <p>在知乎日报，告别浮躁，重获阅读的愉悦。</p>
                            <p>© 2017 知乎</p>
                        </div>
                        <div className="ft_qr fr">
                            <div className="qr_img_wrap">
                                <img src={ qr2 } alt="qr2" />
                            </div>
                            <p>扫描下载客户端</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
