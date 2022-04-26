import { FooterStyled } from "./FooterStyle"
import WppIcon from "../../assets/whatsapp-icon.svg"
import EmailIcon from "../../assets/email-icon.svg"
import LinkedinIcon from "../../assets/linkedin-icon.svg"
import GithubIcon from "../../assets/github-icon.svg"
export function Footer() {
    return (
        <FooterStyled>
            <h1>Meios de contato</h1>
            <div className="icons-container">
                <img
                    src={WppIcon}
                    alt="whatsapp icon"
                    className="whatsapp-icon"
                />
                <h2>(11) 98826-0803</h2>
            </div>
            <div className="icons-container">
                <img src={EmailIcon} alt="email icon" className="email-icon" />
                <h2>mathi.oliveira@hotmail.com</h2>
            </div>
            <div className="icons-container">
                <a
                    href="https://www.linkedin.com/in/matheus-de-oliveira-/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src={LinkedinIcon}
                        alt="linkedin icon"
                        className="email-icon"
                    />
                </a>

                <h2>Linkedin</h2>
            </div>
            <div className="icons-container">
                <a
                    href="https://www.linkedin.com/in/matheus-de-oliveira-/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src={GithubIcon}
                        alt="linkedin icon"
                        className="email-icon"
                    />
                </a>

                <h2>Github</h2>
            </div>
        </FooterStyled>
    )
}
