import React from 'react'
import Download from '../pages/Download'
import SuccessfullMarriges from '../pages/SuccessfullMarriges'
import Services from '../pages/Services'
import VideoLinkButton from '../pages/VideoLinkButton'
import Slider from '../pages/Slider'

export const Home = () => {
  return (
    <div >
<Slider/>
<VideoLinkButton/>
<Services/>
<SuccessfullMarriges/>
<Download/>
    </div>
  )
}
