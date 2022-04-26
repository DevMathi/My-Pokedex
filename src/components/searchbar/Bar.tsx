import { BarStyle } from "./style"
import SearchIcon from "../../assets/search-icon.svg"

export function Bar() {
    return (
        <BarStyle>
            <div className="container">
                <div className="search-bar-container">
                    <input type="text" />
                    <button type="submit">
                        <img src={SearchIcon} alt="search icon" />
                    </button>
                </div>
            </div>
        </BarStyle>
    )
}
