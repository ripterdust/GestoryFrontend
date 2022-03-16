import React from 'react';
import { Grid } from './Grid';

export const NewArrivals = () => {
    return (
        <div className="arrivals">
            <div className="title">
                New <span>Arrivals</span>
            </div>
            <Grid />
        </div>
    );
};
