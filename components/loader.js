import React, { useState, useEffect, componentDidMount } from 'react';
export default function Loader() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(function(){ setLoading(false); }, 2000);
    }, [])
    if(loading){
        return (
            <div className="loader flex h-screen"><div className="z-0 loader m-auto w-12 h-12 rounded-full">
            <div className="z-20 outer-circle w-5 h-5"></div>
            <div className="z-30 inner-circle w-2.5 h-2.5"></div>
            </div></div>
            )
    }else{
        return <div className="Loaded"></div>
    }
}