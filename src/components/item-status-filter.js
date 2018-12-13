import React from 'react';
////import './item-status-filter.css;



const ItemStatusFilter = ()=> {
        return(
                <div className="btn-group">
                        <button type="button"
                                className="btn btn-info"> ALL</button>
                        <button type="button"
                                className="btn btn-outline-second">Active</button>
                        <button type="button"
                                className="btn btn-outline-second">Done</button>
                        </div>
        );

};


export default ItemStatusFilter;
