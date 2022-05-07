import React from 'react';

const TopBrand = ({topBrand}) => {
    const {name,  img} = topBrand;
    return (
        <div className='g-5 col-sm-12  col-lg-3'>
             <div className="card " style={{ width: "18rem" }}>
                <img style={{width: '100%', height: 'auto'}} src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-danger"> Name:{name}</h5>
                </div>
            </div>
        </div>
    );
};

export default TopBrand;