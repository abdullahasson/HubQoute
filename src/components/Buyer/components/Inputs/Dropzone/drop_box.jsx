// react
import { useCallback , useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
// drop zone
import { useDropzone } from 'react-dropzone'
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons"
// style
import "./drop_box.css"

const DropBox = ({
  name
}) => {

  const { register , unregister , setValue , watch } = useFormContext()
  const files = watch(name)

  const onDrop = useCallback(
      (droppedFiles) => {
        setValue(name, droppedFiles , { shouldValidate: true })
      },
      [setValue, name]
  )

  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    onDrop ,
    // accept: 'image/*',
  })

  useEffect(() => {
      register(name)
      return () => {
          unregister(name)
      }
  }, [register, unregister, name])

  return (
      <div className="drop-zone">
          <div className="drop-box">
              <p>إرفع صورة أو ملف</p>
              <label {...getRootProps()} className="labelFile">
                  <span>
                    <FontAwesomeIcon icon={faCloudArrowUp} />
                  </span>

                  {
                    isDragActive ?
                      <p>Drop the files here ...</p> :
                      <p>إضافة صور للمنتج.  PNG,JPG</p>
                  }
              </label>
              <input {...getInputProps()} className="input_images" id="file" type='file' />
          </div>

          <div className='images-drop'>
            <ul>

                {
                  !!files?.length && (
                      <>
                        {
                          files.map(image => (
                            <li key={image.name}>
                                <img src={URL.createObjectURL(image)} alt="" />
                            </li>
                          ))
                        }
                      </>
                  )
                }

            </ul>
          </div>
      </div>
  );
};

export default DropBox;


