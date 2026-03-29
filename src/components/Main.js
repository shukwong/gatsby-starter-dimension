import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import wendyCV from '../images/WendyWongCV.png'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formStatus: null, // null, 'sending', 'success', 'error'
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)

    const name = data.get('name')
    const email = data.get('email')
    const message = data.get('message')

    if (!name || !email || !message) {
      this.setState({ formStatus: 'error-validation' })
      return
    }

    this.setState({ formStatus: 'sending' })

    fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' },
    })
      .then((response) => {
        if (response.ok) {
          this.setState({ formStatus: 'success' })
          form.reset()
        } else {
          this.setState({ formStatus: 'error' })
        }
      })
      .catch(() => {
        this.setState({ formStatus: 'error' })
      })
  }

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
            <img src={pic01} alt="Bioinformatics data analysis" />
          </span>
          <p>
          I am a Senior Biomedical Scientist and Head of the Bioinformatics Virtual Core at the Division of Cancer Epidemiology and Genetics, National Cancer Institute (NCI), a position I have held since May 2022. My work focuses on leveraging computational and statistical methods to advance cancer genomics research.
          </p>
          <p>
          I have deep expertise in bioinformatics analysis with extensive experience in NGS data analysis, experimental design, on-prem and cloud computing infrastructure, and hands-on data analysis and reporting.
          </p>
          <p>I have over 20 years of experience in international interdisciplinary research, with in-depth knowledge of statistics, computer science, and biology. Previously, I was the president and cofounder of <a href="https://coherentlogic.com/">Coherent Logic Limited</a>, a software engineering and data analytics consultancy in McLean, VA. Before that, I served as Chief of the Division of Bioinformatics at the Inova Translational Medicine Institute (2017&ndash;2022), having joined Inova in 2013 as a Senior Bioinformatics Scientist. Earlier in my career, I was a bioinformatics scientist at Illumina Ltd. in Cambridge, UK, a statistician at Winton Capital Management in London, and a computational biologist at the Wellcome Trust Sanger Institute, where I worked on genetic interaction mapping for <i>Caenorhabditis elegans</i>. I have published in numerous high-profile journals including Nature, Nature Genetics, Cell, PNAS, and Molecular Biology and Evolution.
          </p>
          <p>I hold a Ph.D. in Biometry (Biological Statistics) from Cornell University, where I developed statistical models for molecular evolution using sequence data. I also hold M.S. degrees in Biometry and Computer Science from Cornell University, and a B.S. in Genetics, Bacteriology, Mathematics, Computer Sciences, and Statistics from the University of Wisconsin &ndash; Madison. I am an AWS Certified Solutions Architect (Associate) and hold the AWS Machine Learning Specialty certification.
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
            <img src={wendyCV} alt="Wendy Wong's CV" />
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
            <img src={pic03} alt="Scientific publications" />
          </span>
          <p>
            A full list of my publications can be found at <a href="https://scholar.google.com/citations?user=q91I6UYAAAAJ&hl=en">Google Scholar</a>. Here are some of the highlighted ones:
          </p>
          <p>
(2025) Machiela MJ, <b>Wong WSW</b>, Mai JZ, Karyadi DM, Drozdovitch V, Chan I, Vij V, Zhou W, Luo W, Wu D, et al. Risk of clonal hematopoiesis in families exposed to radiation following the Chornobyl accident. Carcinogenesis. 2025;46(3):bgaf056.
          </p>
          <p>
(2023) Garc&iacute;a-Closas M, Ahearn TU, Gaudet MM, Hurson AN, <b>Wong WSW</b>, et al. Moving Toward Findable, Accessible, Interoperable, Reusable Practices in Epidemiologic Research. American Journal of Epidemiology. 2023;192(6):995&ndash;1005.
          </p>
          <p>
(2020) Thomas R, <b>Wong WSW</b>, Saadon R, Vilboux T, Deeken J, Niederhuber J, Bhatt A, Abraham JM. Gut microbial composition difference between pediatric ALL survivors and siblings. Pediatric Hematology and Oncology. 2020;37(6):475&ndash;488.
          </p>
          <p>
(2018) Roessler E, Hu P, Marino J, Hong S, Hart R, Berger S, Martinez A, Abe Y, Kruszka P, Thomas JW, Mullikin JC, Wang Y, <b>Wong WSW</b>, Niederhuber JE, et al. Common genetic causes of holoprosencephaly are limited to a small set of evolutionarily conserved driver genes of midline development coordinated by TGF-&beta;, hedgehog, and FGF signaling. Human Mutation. 2018;39(10):1416&ndash;1427.
          </p>
          <p>
(2018) Goldmann JM, Seplyarskiy VB, <b>Wong WSW*</b>, Vilboux T, Neerincx PB, Bodian DL, Solomon BD, Veltman JA, Deeken JF, Gilissen C, Niederhuber JE. Germline de novo mutation clusters arise during oocyte aging in genomic regions with high double-strand-break incidence. Nature Genetics. 2018;50(4):487&ndash;492.
          </p>
          <p>
(2017) <b>Wong WSW</b>, Clemency N, Klein E, Provenzano M, Iyer R, Niederhuber JE, Bhatt A. Collection of non-meconium stool on fecal occult blood cards is an effective method for fecal microbiota studies in infants. Microbiome. 2017;5(1):114.
          </p>
          <p>
(2017) Cruz GI, Shao X, Quach H, Ho KA, Sterba K, Noble JA, Bhatt A, <b>Wong WSW</b>, et al. Increased risk of rheumatoid arthritis among mothers with children who carry DRB1 risk-associated alleles. Annals of the Rheumatic Diseases. 2017;76(8):1405&ndash;1410.
          </p>
          <p>
(2016) Goldmann JM, <b>Wong WSW*</b>, Pinelli M, Farrah T, Bodian D, Stittrich AB, et al. Parent-of-origin-specific signatures of de novo mutations. Nature Genetics. 2016;48:935&ndash;939.
          </p>
          <p>
(2016) <b>Wong WSW</b>, Solomon BD, Bodian DL, et al. New observations on maternal age effect on germline de novo mutations. Nature Communications. 2016;7:10486.
          </p>
          <p>
(2012) Kong A, Frigge ML, Masson G, Besenbacher S, Sulem P, Magnusson G, Gudjonsson SA, Sigurdsson A, Jonasdottir A, Jonasdottir A, <b>Wong WS</b>, et al. Rate of de novo mutations and the importance of father&rsquo;s age to disease risk. Nature. 2012;488(7412):471&ndash;475.
          </p>
          <p>
(2012) Saunders CT, <b>Wong WS</b>, Swamy S, Becq J, Murray LJ, Cheetham RK. Strelka: accurate somatic small-variant calling from sequenced tumor&ndash;normal sample pairs. Bioinformatics. 2012;28(14):1811&ndash;1817.
          </p>
          <p>
(2012) Murchison EP, Schulz-Trieglaff OB, Ning Z, Alexandrov LB, Bauer MJ, <b>Wong WSW</b>, et al. Genome sequencing and analysis of the Tasmanian devil and its transmissible cancer. Cell. 2012;148(4):780&ndash;791.
          </p>
          <p>
(2008) Lee I, Lehner B, Crombie C, <b>Wong W</b>, Fraser AG, Marcotte EM. A single gene network accurately predicts phenotypic effects of gene perturbation in <i>Caenorhabditis elegans</i>. Nature Genetics. 2008;40(2):181&ndash;188.
          </p>
          <p>
(2007) <b>Wong WSW</b> and Nielsen R. Finding cis-regulatory modules in <i>Drosophila</i> using phylogenetic hidden Markov models. Bioinformatics. 2007;23(16):2031&ndash;2037.
          </p>
          <p>
(2006) <b>Wong WSW</b>, Sainudiin R, Nielsen R. Identification of physicochemical selective pressure on protein encoding nucleotide sequences. BMC Bioinformatics. 2006;7(1):148.
          </p>
          <p>
(2005) Yang Z, <b>Wong WSW</b> and Nielsen R. Bayes empirical Bayes inference of amino acid sites under positive selection. Molecular Biology and Evolution. 2005;22(4):1107&ndash;1118.
          </p>
          <p>
(2004) <b>Wong WSW</b>, Yang Z, Goldman N and Nielsen R. Accuracy and power of statistical methods for detecting adaptive evolution in protein coding sequences and for identifying positively selected sites. Genetics. 2004;168:1041&ndash;1051.
          </p>
          <p>
(2004) <b>Wong WSW</b> and Nielsen R. Detecting selection in noncoding regions of nucleotide sequences. Genetics. 2004;167:949&ndash;958.
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
          <form action="https://formspree.io/xyyeyepq" method="POST" onSubmit={this.handleSubmit}>
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" required />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" required />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4" required></textarea>
            </div>
            <ul className="actions">
              <li>
                <input
                  type="submit"
                  value={this.state.formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                  className="special"
                  disabled={this.state.formStatus === 'sending'}
                />
              </li>
              <li>
                <input type="reset" value="Reset" onClick={() => this.setState({ formStatus: null })} />
              </li>
            </ul>
            {this.state.formStatus === 'success' && (
              <p style={{ color: '#4CAF50' }}>Thank you! Your message has been sent.</p>
            )}
            {this.state.formStatus === 'error' && (
              <p style={{ color: '#f44336' }}>Something went wrong. Please try again.</p>
            )}
            {this.state.formStatus === 'error-validation' && (
              <p style={{ color: '#f44336' }}>Please fill in all fields.</p>
            )}
          </form>
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
