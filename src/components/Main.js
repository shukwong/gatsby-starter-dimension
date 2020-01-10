import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import wendyCV from '../images/WendyWongCV.png'

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
            <img src={wendyCV} alt="" />
          </span>
         
      
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
            A full list of my publications can be found at <a href="https://scholar.google.com/citations?user=q91I6UYAAAAJ&hl=en">Google Scholar</a>. Here are a some of the highlighted ones:
          </p>
          <p>
(2018)	Goldmann JM, Seplyarskiy VB, Wong WSW*, Vilboux T, Neerincx PB, Bodian DL, Solomon BD, Veltman JA, Deeken JF, Gilissen C, Niederhuber JE. Germline de novo mutation clusters arise during oocyte aging in genomic regions with high double-strand-break incidence. Nature Genetics. 2018 Apr;50(4):487-492. 
</p>
<p>
(2016)	Jakob M Goldmann, Wendy SW Wong*, Michele Pinelli, et al. Parent-of-origin-specific signatures of de novo mutations. Nature Genetics. volume 48, pages 935–939.
</p>
<p>
(2016)	Wendy SW Wong, Benjamin D Solomon, Dale L Bodian, et al. New observations on maternal age effect on germline de novo mutations. Nature Communications, 2016 Jan 19;7:10486.
</p>
<p>
(2012)	Kong A, Frigge ML, Masson G, Besenbacher S, Sulem P, Magnusson G, Gudjonsson 
	SA, Sigurdsson A, Jonasdottir A, Jonasdottir A, Wong WS, et al. Rate of de novo mutations and the importance of father's age to disease risk. Nature. Aug 23;488(7412):471-5.
  </p>
  <p>
(2012)  	Saunders CT, Wong WS, Swamy S, Becq J, Murray LJ, Cheetham RK. Strelka:
	accurate somatic small-variant calling from sequenced tumor-normal sample pairs.
	Bioinformatics. Jul 15;28(14):1811-7.
  </p>
  <p>
(2007)	Wendy S.W. Wong and Rasmus Nielsen. Finding Cis-Regulatory Modules in
	Drosophila using Phylogenetic Hidden Markov Models. Bioinformatics. Aug	15:23(16):2031-7.  
  </p>
  <p>
(2004)	Ziheng Yang, Wendy S. W. Wong and Rasmus Nielsen. Bayes Empirical Bayes 
	Inference of Amino Acid Sites under Positive Selection. Molecular Biology and 
	Evolution 22: 1107-1118.
  </p>
  <p>
(2004)	Wendy S. W. Wong, Ziheng Yang, Nick Goldman and Rasmus Nielsen. Accuracy 
	and power of statistical methods for detecting adaptive evolution in protein coding 
	sequences and for identifying positively selected sites. Genetics 168: 1041-1051.
  </p>
  <p>
(2004)	Wendy S. W. Wong and Rasmus Nielsen. Detecting selection in noncoding regions 
	of nucleotide sequences. Genetics 167: 949-958.
  </p>
  <p>
*joint first author  
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
          <form action="https://formspree.io/xyyeyepq" method="POST">
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
