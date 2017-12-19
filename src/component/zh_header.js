/*
    主页头部
*/
import React from 'react';
import '../style/css/zh_header.css';


class Header extends React.Component {

    constructor(){
        super();
        this.state = {
            offset: 0
        };
        this.timer = null;//实例下挂载定时器
        this.handleScroll  = this.handleScroll.bind(this);
    }

    componentDidMount(){
        window.addEventListener('scroll',this.handleScroll);
    }
    handleScroll(){
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        this.setState({
            offset: scrollTop
        });
    }
    componentWillUnmount(){
        clearInterval(this.timer);
        window.removeEventListener('scroll', this.handleScroll);
    }

    scrollAn(targetPosition){
        var icur = 0;
        var iSpeed = 0;
        clearInterval(this.timer);
        this.timer = setInterval(() => {
            icur = document.documentElement.scrollTop || document.body.scrollTop;
            iSpeed = ( targetPosition - icur ) / 8;
            iSpeed = iSpeed > 0
                ? Math.ceil(iSpeed)
                : Math.floor(iSpeed);
            if (icur === targetPosition) {
                clearInterval(this.timer);
            } else {
                document.documentElement.scrollTop = document.body.scrollTop = icur + iSpeed;
            }
        }, 16);
    }

    render(){
        return(
            <div>
                <div id="header">
                    <div className="hd_wrap clearfix">
                        <h1 className="zh_logo fl">
                            <a href="javascript:;">知乎LOGO</a>
                        </h1>
                        <div className="btn_wrap fr">
                            <a className={this.state.offset < 470?'active':''} href="javascript:;" onClick = {this.scrollAn.bind(this,0)} >App 下载</a>
                            <a className={this.state.offset >= 470?'active':''} href="javascript:;" onClick = {this.scrollAn.bind(this,470)}>浏览内容</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Header;
