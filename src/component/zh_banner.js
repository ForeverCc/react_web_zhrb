/*
    知乎首页banner区域
*/
import React from 'react';
import {CSSTransitionGroup} from 'react-transition-group';
import '../style/css/zh_banner.css';
import phoneSample from '../style/images/phone_sample.png';
import qrTop from '../style/images/qr_top2.png';

class Banner extends React.Component {
    constructor() {
        super();
        this.state = {
            display: "none"
        };
    }
    //移入显示
    show(e) {
        this.setState({display: "block"});
        e.stopPropagation();
    }
    //移除隐藏
    hide(e) {
        this.setState({display: "none"});
        e.stopPropagation();
    }
    render() {
        return (
            <div>
                <div id="banner">
                    <div className="bn_wrap clearfix">
                        <CSSTransitionGroup className="left_in fl" component="div" transitionName="b_to_t" transitionAppear={true} transitionAppearTimeout={800} transitionEnter={false} transitionLeave={false}>
                            <div className="bn_left">
                                <img src={phoneSample} alt="phone_sample"/>
                            </div>
                        </CSSTransitionGroup>
                        <CSSTransitionGroup className="right_in fr" component="div" transitionName="r_to_l" transitionAppear={true} transitionAppearTimeout={1200} transitionEnter={false} transitionLeave={false}>
                            <div className="bn_right fr">
                                <h2>每天三次 每次七分钟</h2>
                                <p>在中国，资讯类移动应用的人均阅读时长是 5 分钟，而在知乎日报，这个数字是 21。</p>
                                <div className="qr_code">
                                    <img src={qrTop} alt="qrcode"/>
                                </div>
                                <div className="btn_links">
                                    <ul className="btn_links_wrap">
                                        <li title="前往apple store下载">
                                            <a className="ios" href="javascript:;">iOS 版</a>
                                        </li>
                                        <li onMouseOver={this.show.bind(this)} onMouseOut={this.hide.bind(this)}>
                                            <a className="android" href="javascript:;">Android 版</a>
                                            <ul className="dropdown" style={{
                                                display: this.state.display
                                            }}>
                                                <li>
                                                    <a className="wdj" href="javascript:;">iOS 版</a>
                                                </li>
                                                <li>
                                                    <a className="market91" href="javascript:;">iOS 版</a>
                                                </li>
                                                <li>
                                                    <a className="market360" href="javascript:;">iOS 版</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </CSSTransitionGroup>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;
