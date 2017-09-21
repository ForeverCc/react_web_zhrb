/*
    知乎首页内容区域
*/
import React from 'react';
import SingleImgWrap from './zh_singleImgWrap.js';
import Masonry from 'react-masonry-component';
import 'whatwg-fetch';

import '../style/css/zh_content.css';

class ContentBody extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            data: null,
            info: "资源正在加载中，请稍候"
        };
    }
    componentDidMount() {
        fetch('/api/2/news/latest').then(response => response.json()).then(json => {
            console.log(json);
            this.setState({isLoading: false, data: json});
        }).catch(error => {
            this.setState({info: "资源加载失败，请刷新尝试"})
        });
    }
    render() {
        if (this.state.isLoading) {
            return (
                <div>
                    {this.state.info}
                </div>
            );
        }
        //根据data数据，数据存放在 news 和 top_stories两个key值下
        const datas = this.state.data;
        const result = datas.news.map((item) => {
            return (<SingleImgWrap key={item.id} id={item.id} src={item.image} title={item.title}/>);
        });
        //拿到的接口数目有问题，如果数据数目不能被三整除会是布局略丑 ，在这里判断处理一下
        const len = result.length;
        if (len % 3 !== 0) {
            result.splice(0, len % 3); //删除数组中多余的
        }

        return (

            <div>
                <div className="imgs_wrap clearfix">
                    <Masonry className={"masonry"} elementType={'div'} options={{
                        transitionDuration: 0
                    }} disableImagesLoaded={false} updateOnEachImageLoad={false}>
                        {result.sort((a, b) => {
                            return Math.random() - 0.5;
                        })}
                    </Masonry>
                </div>
            </div>
        );
    }
}

export default ContentBody;
