
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
// style
import "./search.css"

const Search = ({ style }) => {

    return (
        <div style={style} className="search">
            <input type="text" placeholder="البحث" />

            <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
    )

}

export default Search