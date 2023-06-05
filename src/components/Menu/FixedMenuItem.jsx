import React from 'react'
import Supplement from '../Supplement';


const sauces = [
    {"title": "sauce 1",
    "image": "/images/sous-menu/burger5.jpeg"
},
    {"title": "sauce 2",
    "image": "/images/sous-menu/burger5.jpeg"
},
    {"title": "sauce 3",
    "image": "/images/sous-menu/burger5.jpeg"
},
    {"title": "sauce 4",
    "image": "/images/sous-menu/burger5.jpeg"
},
];
const supplements = [
    {"title": "supplement 1",
    "image": "/images/sous-menu/burger5.jpeg"
},
    {"title": "supplement 2",
    "image": "/images/sous-menu/burger5.jpeg"
},
    {"title": "supplement 3",
    "image": "/images/sous-menu/burger5.jpeg"
},
    {"title": "supplement 4",
    "image": "/images/sous-menu/burger5.jpeg"
},
];

function FixedMenuItem() {
  return (
    <div className="mt-5">
    <div>
    <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
    <h5 class="section-title ff-secondary text-center text-primary fw-normal">
      Supplément
    </h5>
  </div>
  <div className="row g-4">
  {supplements?.map((item)=>(<Supplement title={item.title} image={item.image} />))}
      {/* Repeat the above code block for the other team members */}
    </div></div>

<div>
    
    <div className="container-xxl pt-5 pb-3">
    <div className="container">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h5 className="section-title ff-secondary text-center text-primary fw-normal">Sauces</h5>
        <h1 className="mb-5">Notre Sauces</h1>
      </div>
      <div className="row g-4">
    {sauces?.map((item)=>(<Supplement title={item.title} image={item.image} />))}
        {/* Repeat the above code block for the other team members */}
      </div>
    </div>
  </div>
    </div>
    </div>
  )
}

export default FixedMenuItem
