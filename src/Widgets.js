import React from 'react'
import './Widgets.css';
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets_article">
            <div className="widgets_articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className='widgets'>
           <div className="widgets_header">
               <h2>LinkedIn News</h2>
               <InfoIcon />
           </div>

           {newsArticle('Learn Web Developer 2021','Top news-9078 readers')}
           {newsArticle('Coronavirus World updates','Top news-886 readers')}
           {newsArticle('Tesla','Cars & auto-378 readers')}
           {newsArticle('Bitcoins Breaks $22k','Crypto-7898 readers')}
           {newsArticle('Is Redux too good?','Code-123 readers')}
           {newsArticle('Free Web Hosting','Top news-6278 readers')}





        </div>
    )
}

export default Widgets
