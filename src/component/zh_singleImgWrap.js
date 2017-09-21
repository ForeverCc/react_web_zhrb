/*
    每一个图片链接的组件
*/
import React from 'react';
import { Link } from 'react-router';
import '../style/css/imgbox.css';

class SingleImgWrap extends React.Component {
    render() {
        var url = "/news?id=" + this.props.id; //要跳转的地址
        return (
            <div>
                <div className="img_box">
                    <Link to={url} target="_blank">
                        <img src={this.props.src} alt= { this.props.id } />
                        <span className="text_intro">{ this.props.title }</span>
                    </Link>
                </div>
            </div>
        );
    }
}

export default SingleImgWrap;
