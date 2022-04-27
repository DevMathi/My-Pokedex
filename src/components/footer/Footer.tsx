import { FooterStyled } from "./FooterStyle"
import WppIcon from "../../assets/whatsapp-icon.svg"
import EmailIcon from "../../assets/email-icon.svg"
import LinkedinIcon from "../../assets/linkedin-icon.svg"
import GithubIcon from "../../assets/github-icon.svg"
export function Footer() {
    return (
        <FooterStyled>
            <div className="footer-container">
                <div className="icons-container">
                    <h1>Contato:</h1>
                    <div className="contatos-container">
                        <a
                            href="https://api.whatsapp.com/send/?phone=5511988260803&text&app_absent=0"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src={WppIcon}
                                alt="whatsapp icon"
                                className="whatsapp-icon"
                            />
                        </a>
                        <a href="mailto:mathi.oliveira@hotmail.com?subject=subject%20text">
                            <img
                                src={EmailIcon}
                                alt="email icon"
                                className="email-icon"
                            />
                        </a>

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
                    </div>
                </div>
                <div>
                    <h2>Outros Projetos:</h2>
                    <a
                        href="https://github.com/DevMathi"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={GithubIcon}
                            alt="github icon"
                            className="email-icon"
                        />
                    </a>
                </div>
            </div>
        </FooterStyled>
    )
}
