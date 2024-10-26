// react
import { useState } from "react";
// mui
import { useAutocomplete , InputLabel } from "@mui/material"
// icone
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
// style
import "./autocomplete_box.css"

const AutocompleteBox = ({
  resourceName ,
  Example , 
  title , 
  listOptions ,
  style
}) => {


    const [open , setOpen] = useState(false)

    const {
      getRootProps,
      getInputProps,
      getListboxProps,
      getOptionProps,
      groupedOptions,
    } = useAutocomplete({
      id: 'use-autocomplete-demo',
      options: listOptions,
      open: open ,
      onChange: ()=> setOpen(!open) ,
      getOptionLabel: (option) => option.title,
    });

    return(
        <div className="autocomplete" style={style}>
            <InputLabel id="label">
                <div className="txt">
                    <p>
                        {title}
                    </p>

                    <div {...getRootProps()} onClick={()=> setOpen(!open)}>
                      <input {...getInputProps()} placeholder={Example}/>
                    </div>
                </div>
            </InputLabel>

            <div className={`show-list ${open && "focus"}`} onClick={()=> setOpen(!open)}>
              <FontAwesomeIcon icon={faChevronDown} />
            </div>

            <div>
              {groupedOptions.length > 0 ? (

                  <ul {...getListboxProps()}>

                    {groupedOptions.map(
                      (option, index) => {
                        const { key, ...optionProps } = getOptionProps({ option, index });

                        return (
                          <li key={key} {...optionProps}>
                            {option.title}
                          </li>
                        );
                      })}

                  </ul>

                ) : null}
            </div>
        </div>
    )
}

export default AutocompleteBox