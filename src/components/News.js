import React,{useEffect,useState} from 'react'
import NewsIteam from './NewsIteam'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

const News=(props)=> {
  
  const [articles,setArticles]=useState([])
  const [page,setPage]=useState(1)
  const [loading,setLoading]=useState(false)
  // document.title=`${this.firstCapital(props.category)}-NewsMonkey`;

  const firstCapital=(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
 }
  
  const functionToChangeNews=async ()=>{     //update news previous or next
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=590f50f2a3d244b8b769733d36da0933&page=${page}&pageSize=15`;
    setLoading(true);
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
    setArticles(parseddata.articles)
    setLoading(parseddata.false)
  }
 useEffect(()=>{
functionToChangeNews();
 },[])
   const handlePre=async()=>{
  //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=590f50f2a3d244b8b769733d36da0933&page=${this.state.page-1}&pageSize=15`;
  //  this.setState({
  //   loading:true
  //  })
  //   let data = await fetch(url);
  //   let parseddata = await data.json();
  //   console.log(parseddata);
  //   this.setState({ 
  //     loading:false,
  //     page:this.state.page-1,
  //     articles: parseddata.articles,
  
  //   });
  setPage(page-1)
  functionToChangeNews()
}
const handleNext = async() =>{
    // console.log("efewfefewf")
    // if(this.state.page+1>Math.ceil(this.state.totalResults/20)){}
    // else{
    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=590f50f2a3d244b8b769733d36da0933&page=${this.state.page+1}&pageSize=15`;
    // this.setState({
    //   loading:true
    //  })
    // let data = await fetch(url);
    // let parseddata = await data.json();
    // console.log(parseddata);
    // this.setState({
    //   loading:false,            
    //   articles: parseddata.articles,
    //   page:this.state.page+1,

    //   });
    setPage(page+1)
        functionToChangeNews()
  }
  
 
    return (
      <div className='container my-3'>
        <h1 className='text-center' style={{margin:"4.5rem"}}>New Monkey-Top Headlines On {firstCapital(props.category)}</h1>
  {loading &&<Spinner/>}
        <div className='row'>
          {articles.map((element) => {
            return <div className='col-md-4' key={element.url}>
              <NewsIteam title={element.title} description={element.description} imageurl={element.urlToImage} url={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name}/>
            </div>

})}
        </div>
        <div className='container d-flex justify-content-between'>
          <button type="button" disabled={page<=1} className="btn btn-dark" onClick={handlePre}>&larr; Previous</button>
          <button type="button" className="btn btn-dark" onClick={handleNext}>Next &rarr; </button>
        </div>
      </div>
    )
  }


 News.defaultProps={
 country:'in',
 category:'sports'
}
News.propTypes={
 country:PropTypes.string,
 category:PropTypes.string
}
export default News