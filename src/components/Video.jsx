import React from 'react'

function Video() {
  return (
    <div>
     
<div className="container-xxl py-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
<div className="row g-0">
    <div className="col-md-12">
        <div className="video">
            <button type="button" className="btn-play" data-bs-toggle="modal" data-bs-target="#videoModal">
                <span></span>
            </button>
        </div>
    </div>
</div>
</div>

<div className="modal fade" id="videoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog">
    <div className="modal-content rounded-0">
        <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Video</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
            <div className="ratio ratio-16x9">
                <iframe title='video' src="https://www.facebook.com/plugins/video.php?height=317&href=https%3A%2F%2Fweb.facebook.com%2FMaison Orientalekebab%2Fvideos%2F803267387485573%2F&show_text=false&width=560&t=0" width="560" height="317"
                 style={{border:"none",overflow:"hidden"}} scrolling="no" frameborder="0" 
                allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
            </div>
        </div>
    </div>
</div>
</div> 
    </div>
  )
}

export default Video
