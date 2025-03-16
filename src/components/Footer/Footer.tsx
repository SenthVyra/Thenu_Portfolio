import githubIcon from '../../assets/github.svg'
import instagramIcon from '../../assets/instagram.svg'
import linkedin from '../../assets/linkedin.svg'
import reactIcon from '../../assets/react-icon.svg'
import facebook from '../../assets/facebook.svg'
import whatsapp from '../../assets/whatsapp.svg'
import { Container } from './styles'

export function Footer() {
  return (
    <Container className="footer">
      <a href="https://thenu.online" className="logo">
        <span>thenu.online</span>
      </a>
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
          {/* <span>❤️</span> */}
        </p>
      </div>
      <div className="social-media">
        <a
        href="https://www.linkedin.com/in/thenujan-amirthanathan-52034a1b3/"
        target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/athenu11/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=%2B94776652490&text=Hello+Thenujan%2C+I+found+your+contact+on+your+website+and+I+would+like+to+talk+to+you+about+your+services."
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
        <a
          href="https://www.facebook.com/amir.thenujan"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebook} alt="facebook" />
        </a>
        <a
          href="https://www.instagram.com/athenu11/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </Container>
  )
}
