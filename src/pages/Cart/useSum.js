const useSum = () => {
    const data = JSON.parse(localStorage.getItem('total'))
    let nilai = 0 
    data?.map((item, i)=>{
        nilai = nilai + parseFloat(item)
    })

    return {nilai}
}

export default useSum