import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
         <ul className="icons">
            <li>
              <a
                href="https://scholar.google.com/citations?user=q91I6UYAAAAJ&hl=en"
                className="icon fa-graduation-cap"
              >
                <span className="label">Google Scholar</span>
              </a>
            </li>
            <li>
              <a
                href="https://medium.com/@wendy.wong"
                className="icon fa-medium"
              >
                <span className="label">Medium</span>
              </a>
            </li>
            <li>
              <a
                href="https://x.com/wendyWongSW"
                className="icon fa-twitter"
              >
                <span className="label">X (Twitter)</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/wendyswwong/" className="icon fa-linkedin">
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/shukwong"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
        <p className="copyright">&copy; Wendy Wong 2026. Theme designed by <a href="https://html5up.net">HTML5 UP</a>. Built with: <a href="https://www.gatsbyjs.org/">Gatsby.js</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
