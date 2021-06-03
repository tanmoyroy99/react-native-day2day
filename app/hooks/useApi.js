import {useState} from "react";
import useLoading from './useLoading'

const useAPI = (apiFunc)=>{
    const[result, setResult]= useState([])
    const[hasError, setHasError]= useState(false);
    const [isLoading, showLoading, hideLoading] = useLoading()

    //===================================
    function sleep(ms) {
        console.log('sleep', ms)
        return new Promise(resolve => setTimeout(resolve, ms));
      }
    //===================================

    const request = async ()=>{
        showLoading();
        const responce = await apiFunc()
        const sleepTime = await sleep(5000)
        console.log('responce>>',responce)
        hideLoading();

        if(!responce.ok) {
            console.log(responce.problem)
            setHasError(true);
        }
        setResult(responce.data)
        
    }
    return {
        result,
        hasError,
        request,
        isLoading
    }
}

export default useAPI