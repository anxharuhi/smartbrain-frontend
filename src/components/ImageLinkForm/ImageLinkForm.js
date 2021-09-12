import React from 'react';
import './imagelinkform.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return(
    <div>
      <div className="flex justify-center mv3">
        <div className="flex justify-center form pv3 ph0 mh1 br2 ba bw1 w-100 w-60-ns shadow-5">
          <input
           type='text' placeholder='Image link' 
          className='f4 pa2 w-60 w-70-ns tc mr3 ml3 ml0-ns bg-white-transparent br1 ba bw0' 
          onChange={onInputChange}
          />
          <button
           className='f4 w-30 w-20-ns grow ph1 pv2 mr3 mr0-ns dib bg-white-transparent br1 bw0'
           onClick={onButtonSubmit}
          >Submit</button>
        </div>
      </div>
    </div>
  )
}

export default ImageLinkForm;