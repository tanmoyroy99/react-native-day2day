import React, {useState, useEffect} from "react";

const useLoading = ()=>{
    const[isLoading, setIsLoading]= useState(false)
    console.log('isLoading',isLoading)
    // const TestLoading = ()=>{
    //     console.log('isLoading==>',isLoading, isLoading?'000':"ppp")
    //     let test= isLoading?'000':"ppp"
    //     return( <div>Test::: {test}</div>)
    // }
    // const showLoading = (action)=>{
    //     console.log('showLoading',action);
    //     setIsLoading(action)
    //     TestLoading()
    // }

    // useEffect(()=>{
    //     console.log('useEffect',isLoading)
    //     showLoading(isLoading)
    // },[isLoading])
    return [
        isLoading? <div>Show loadin</div>:<div>No loading</div>,
        ()=>{console.log('action show'); setIsLoading(true)},
        ()=>{console.log('action hide'); setIsLoading(false)},
    ]
}

export default useLoading