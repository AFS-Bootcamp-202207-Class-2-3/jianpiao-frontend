import React from 'react'
import './FilmDetailPage.css'

export default function FilmDetailPage(props) {


  // const { film } = props;
  // const { title, description, director, producer, release_date, rt_score, people } = film;

  const film = {
    poster: "https://p0.pipi.cn/mmdb/25bfd63302f0fa395b07accde068bfd3c361f.jpg?imageView2/1/w/464/h/644",
    title: '测试电影',
    introduction: '测试电影描述',
    duration: '120分钟',
    director: '测试导演',
    leadingActor: '测试主演',
    release_date: '测试上映日期',
    score: '测试评分'
  }

  




  return (
    <div>
      <div className="banner">
        <div className='wrapper clearfix'>
          <div className='celeInfo-left'>
            <div className='avatar-shadow'>
              <img className='avatar' src={film.poster} alt={film.title} />
            </div>
          </div>
          <div className='celeInfo-right clearfix'>
            <div className='movie-brief-container'>
              <h1 className='name' >{film.title}</h1>
              <ul>
                <li>时长： {film.duration} </li>
                <li>类型：动作 / 冒险 / 喜剧 </li>
                <li>导演： {film.director}</li>
                <li>主演： {film.leadingActor} </li>
                <li>上映时间：{film.release_date}</li>
              </ul>
            </div>
            <div className='action-buyBtn'>
              <button>想看</button>
              <button>购票</button>
            </div>
            <div className='movie-stats-container'>
              <div className='movie-index'>
                <p className='movie-index-title'>口碑</p>
                <div>评分：{film.score}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>剧情简介：{film.introduction}</div>
    </div >
  )
}