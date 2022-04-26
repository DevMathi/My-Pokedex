import { HeaderStyle } from "./style"
import Logoimg from "../../assets/logo.png"

export function Header() {
    return (
        <HeaderStyle>
            <div className="logo-container">
                <a href="http://localhost:3000/">
                    <img src={Logoimg} alt="logo pokedex" />
                </a>
            </div>
        </HeaderStyle>
    )
}
