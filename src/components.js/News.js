import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import NewsUpdate from './NewsUpdate';
//  import { propTypes } from 'prop-types';


export function News(_props) {
  let pagelength = 12;
  let [dataitem, setDataitem] = useState([]);
  let [page, setPage] = useState(1);
  let [total, setTotal] = useState();

  // static defaultprops={
  //   category:'general'
  // }
  // static propTypes={
  //   category:propTypes.string
  // }


  useEffect(() => {
    let result = axios.get(
      `https://newsapi.org/v2/everything?language=en&q=${_props.newsname}&apiKey=${process.env.REACT_APP_apikey}&page=${page}&pageSize=${pagelength}`);
    result.then((res) => {
      setDataitem(res.data.articles);
      console.log(res.data.articles);
      setTotal(Math.ceil((res.data.totalResults) / pagelength));
      console.log((res.data.totalResults));

    }).catch((err) => {
      console.log("catch error")
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  function nextclick() {
    let result = axios.get(`https://newsapi.org/v2/everything?language=en&q=${_props.newsname}&apiKey=${process.env.REACT_APP_apikey}&page=${page + 1}&pageSize=${pagelength}`);
    result.then((res) => {
      setDataitem(res.data.articles);
      setTotal(Math.ceil((res.data.totalResults) / pagelength));
      // console.log(res.data.articles);

      setPage(page + 1);


    });
    console.log("next click function")

  };

  function prevclick() {

    let result = axios.get(`https://newsapi.org/v2/everything?language=en&q=${_props.newsname}&apiKey=${process.env.REACT_APP_apikey}&page=${page + 1}&pageSize=${pagelength}`);
    result.then((res) => {
      setDataitem(res.data.articles);
      // console.log(res.data.articles);
      setPage(page - 1);
      // setTotal((res.data.articles.totalResults) / 12);
    });
    console.log("previous click function")

  };

  return (
    <>{dataitem ? <div className='container'>

      <nav aria-label="Page navigation example" className='d-flex justify-content-center mb-5 mt-3'>
        <button type="button" disabled={page <= 1} className="btn btn-primary btn-lg" onClick={() => prevclick()}>Prev</button>
        <h2 className='ms-3'>{page}</h2>
        <h2>/</h2>
        <h2 className='me-3'>{total}</h2>
        <button type="button" className="btn btn-danger btn-lg" onClick={() => nextclick()}>Next</button>
      </nav>

      <div className="row  align-items-center">
        {dataitem.map((item) => {
          return (
            <div className='   col-md-4  ' key={item.url}>
              <NewsUpdate

                title={item.title}
                urlOfImage={item.urlToImage}
                descr={item.description}
                urlof={item.url} />
            </div>);
        })}
      </div>
      <nav aria-label="Page navigation example" className='d-flex justify-content-center mb-3 mt-5'>
        <button type="button" disabled={page <= 1} className="btn btn-primary btn-lg" onClick={() => prevclick()}>Prev</button>
        <h2 className='ms-3'>{page}</h2>
        <h2>/</h2>
        <h2 className='me-3'>{total}</h2>
        <button type="button" className="btn btn-danger btn-lg" onClick={() => nextclick()}>Next</button>
      </nav>

    </div> : <div><h1>sorry no data are avialable here</h1></div>}</>
  );
}


export default News



