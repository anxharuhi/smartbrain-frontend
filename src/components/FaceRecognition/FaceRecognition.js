import React from 'react';

const FaceRecognition = ({ imageUrl, box }) => {
  let imgClass = '';
  if(imageUrl !== '') {
    imgClass = 'ba bw2 b--black-30 br2 shadow-5';
  }
  return (
    <div className='flex justify-center mv3'>
      <div className='relative w-two-thirds tc'>
        <img key={imageUrl} alt='' src={imageUrl} className={imgClass} id='inputImage' />
        {imgClass !== '' &&
        <div className="absolute flex flex-wrap justify-center ba bw2 br1 b--purple shadow-2 pointer" 
        style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>}
      </div>
    </div>
  )
}


export default FaceRecognition;