import { HeaderStyle } from "./style"
import Logoimg from "../../assets/logo.png"
import EmailIcon from "../../assets/email-icon.svg"
import LinkedinIcon from "../../assets/linkedin-icon.svg"
import GithubIcon from "../../assets/github-icon.svg"
import WppIcon from "../../assets/whatsapp-icon.svg"

export function Header() {
    return (
        <HeaderStyle>
            <div className="logo-container">
                <a href="http://localhost:3000/">
                    <img src={Logoimg} alt="logo pokedex" />
                </a>
            </div>
            <div className="menu">
                <nav>
                    <ul>
                        <li>
                            <a
                                href="https://github.com/DevMathi"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src={GithubIcon}
                                    className="github-icon"
                                    alt="Github icon"
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/matheus-de-oliveira-/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src={LinkedinIcon}
                                    className="linkedin-icon"
                                    alt="Linkedin icon"
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="mailto:mathi.oliveira@hotmail.com?subject=subject%20text"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src={EmailIcon}
                                    className="email-icon"
                                    alt="Email icon"
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://api.whatsapp.com/send/?phone=5511988260803&text&app_absent=0"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src={WppIcon}
                                    className="github-icon"
                                    alt="WhatsApp icon"
                                />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </HeaderStyle>
    )
}
