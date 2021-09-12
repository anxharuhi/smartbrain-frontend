import React from 'react';

const Rank = ({ user, entries }) => {
  return (
    <div>
      <div className='flex justify-center mv4 f3 tc'>
        {user + ', you have searched a  total of ' + entries + ' images.'}
        {/* user +' your current rank is #1' */}
      </div>
    </div>
  )
}

export default Rank;
