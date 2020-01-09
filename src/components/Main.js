import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About Me</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
          I love coding and data analysis! I am most familiar with bioinformatics analysis and have 9+ years in NGS data analysis. I can help you with your experimental design, on-prem and cloud computing infrastructure design, all the way to hands-on data analysis and reporting. I can also help you with technical training. 
          </p>
          <p>I have over 15 years of experience in international interdisciplinary research. She has in-depth knowledge of statistics, computer science, and biology. Dr. WongI was previously a computational biologist at the Wellcome Trust Sanger Institute where she worked on a genetic interaction map for Caenorhabditis elegans. As a statistician, I also worked at Winton Capital Management in London on Transaction Cost Analysis. I was a bioinformatics scientist at Illumina Ltd. in Cambridge, UK, working on algorithms on next-generation sequencing data. I joined the Inova Translational Medicine Institute in 2013 as a Senior Bioinformatics Scientist and was promoted to Chief of Division of Bioinformatics in 2017. Since starting my career, I have published in numerous high profile journals including Nature, Nature Genetics, Cell, PNAS, Molecular Biology and Evolution.
          </p>   
          <p>I have a Ph.D. degree in Biometry (Biological Statistics) from Cornell University, where I developed statistical models to model the processes of molecular evolution using sequence data.  I hold M.S. degrees in Biometry and Computer Science from Cornell University. I also have a B.S. degree in Genetics, Bacteriology, Mathematics, Computer Sciences and Statistics from the University of Wisconsin - Madison. Recently I obtained AWS solutions architect associate and Machine Learning Specialty certificates. 
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">My CV</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
            urna nisi, fringila lorem et vehicula lacinia quam. Integer
            sollicitudin mauris nec lorem luctus ultrices.
          </p>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
          </p>
          {close}
        </article>

        <article
          id="publications"
          className={`${this.props.article === 'publications' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">My Publications</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            A full list of my publications can be found at Google Scholar.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/wendyWongSW"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/wendyswwong/" className="icon fa-linkedin">
                <span className="label">Linkedin</span>
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
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
