import React, {Component} from 'react';
import '../styles/middlebar.css';
import {fetchCategoriesWithItems} from '../action/CategoryAction';
import $ from 'jquery';

class MiddleBar extends Component {


  constructor(props) {
    super(props);
    this.state = {
      categoriesDto: {},
      items: [],
      fetching: true
    };
  }

  async componentDidMount() {
    const categoryDtoData = await fetchCategoriesWithItems('nav', 10, 6);
    this.setState({
      categoriesDto: categoryDtoData,
      fetching: false
    });
    const List = $('#middle-nav-list');
    const Line = $('.column-line');
    const li = $('#site-left-menu-list li');
    const LeftMenu = $('#site-left-menu-list');

    $('#list3>.item-list').hover(function () {
      List.css('display', 'block');
    }, function () {
      List.css('display', 'none');
      List.hover(function () {
        List.css('display', 'block');
      }, function () {
        List.css('display', 'none');
      });
    });

    let width = Math.ceil(li.length / 6) * (li.eq(0).width() + 36);
    if (width <= 992) {
      LeftMenu.css({
        'width': width,
        'box-shadow': '0 0 5px rgba(0, 0, 0, 0.36)'
      });
    } else {
      LeftMenu.css({
        'width': '992px',
        'overflow': 'hidden',
        'box-shadow': ' 0 3px 10px rgba(0, 0, 0, 0.36)'
      });
    }
    if (Line.length > 6) {
      Line.eq(5).css('display', 'none');
    } else {
      Line.eq(Line.length - 1).css('display', 'none');
    }
  }


  handleChange = (index) => (event) => {
    const {categoriesDto} = this.state;
    let items = categoriesDto[index].items;
    this.setState({
      items
    });
  };


  render() {
    const {categoriesDto, items, fetching} = this.state;
    if (fetching) {
      return null;
    }
    return (
      <div>
        <div className="site-middlebar">
          <a href="/"><img className="logo-icon" src="https://s01.mifile.cn/i/logo-footer.png?v2" alt=''/></a>
          <div id="middle-nav">
            <ul id='list3'>
              {
                categoriesDto.map((categoryData, index) => (
                  <li onMouseEnter={this.handleChange(index)} key={index} className="item-list">
                    <a>{categoryData.name}</a></li>
                ))
              }
            </ul>
            <div className="search-box">
              <input type="text" value="" id="search"/>
              <button className="search-icon">
              </button>
            </div>
          </div>
        </div>


        <div id="middle-nav-list">
          <div className="list-container">
            {/*最多6条数据*/}
            <ul className="main-list">

              {
                items.map((item, index) => (
                  <li>
                    <div className="new"> 新品</div>
                    {/*如果不是新品*/}
                    {/*<div className='not-new></div>'*/}
                    <a href="#">
                      <img src={item.image} alt={item.name} width="120"
                           height="120"/>
                    </a>
                    <p className="name">{item.name}</p>
                    <p className="price">{item.price}</p>
                    <div className="column-line"/>
                  </li>
                ))
              }


              <li>
                <div className="new"> 新品</div>
                {/*如果不是新品*/}
                {/*<div className='not-new></div>'*/}
                <a href="#">
                  <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mix3-320.png" alt="小米MIX 3" width="160"
                       height="110"/>
                </a>
                <p className="name">小米MIX3</p>
                <p className="price">3299元起</p>
              </li>
              <div className="column-line"></div>

              <li>
                {/*<div className="new"> 新品</div>*/}
                {/*如果不是新品*/}
                <div className='not-new'></div>
                <a href="#">
                  <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mix3-320.png" alt="小米MIX" width="160"
                       height="110"/>
                </a>
                <p className="name">小米MIX3</p>
                <p className="price">3299元起</p>
              </li>
              <div className="column-line"></div>

              <li>
                {/*<div className="new"> 新品</div>*/}
                {/*如果不是新品*/}
                <div className='not-new'></div>
                <a href="#">
                  <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mix3-320.png" alt="小米MIX" width="160"
                       height="110"/>
                </a>
                <p className="name">小米MIX3</p>
                <p className="price">3299元起</p>
              </li>
              <div className="column-line"></div>

              <li>
                {/*<div className="new"> 新品</div>*/}
                {/*如果不是新品*/}
                <div className='not-new'></div>
                <a href="#">
                  <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mix3-320.png" alt="小米MIX" width="160"
                       height="110"/>
                </a>
                <p className="name">小米MIX3</p>
                <p className="price">3299元起</p>
              </li>
              <div className="column-line"></div>


            </ul>

          </div>
        </div>
      </div>
    );
  }
}

export default MiddleBar;
