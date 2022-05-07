

window.onload =()=>{
    const price = document.getElementById('price-num-label')
    const input = document.getElementById('input-num')

    function getRealValue()
    {
        let resultValue;
        if(input.value!=="")
        {
            for(let i=0; i<input.value.length; i++)
            {
                let tempValue;
                tempValue=input.value.charAt(i);
                if(tempValue!=='0')
                {
                    resultValue=input.value.substring(i,input.value.length);
                    break;
                }
            }
        }else{
            return -1
        }
        return resultValue;
    }

    input.oninput = ()=>{
        if (getRealValue() === -1){
            price.innerHTML = '请输入金额'
        }else if(getRealValue() > 200 || getRealValue() < 1){
            price.innerHTML = '单词充值限额为：1-200￥'
        }else{
            let minNum = getRealValue() * 0.98.toFixed(2)
            let maxNum = getRealValue() * 0.996.toFixed(2)


            price.innerHTML = minNum + '-' + maxNum
        }
    }
}
