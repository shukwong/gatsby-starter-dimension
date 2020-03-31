import React from 'react'
import PropTypes from 'prop-types'
import wendy from '../images/wendy.jpg'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
       

        
        <span className="image">
            <img src={wendy} alt="" />
          </span>
        

        <div className="content">
            <div className="inner">
                <h1>Wendy Wong</h1>
                <p>Genomic Data Scientist</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About Me</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>My CV</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('publications')}}>My publications</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
