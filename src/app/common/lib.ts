export function handleDate(myDate: string){
    var arrTime = myDate.split('T')
    arrTime[1] = arrTime[1].slice(0,-1)
    var arr = arrTime[0].split('-')
    var date = new Date()
    if (arr[1][0] == "0"){
        arr[1] = arr[1][1]
    }
    if (arr[2][0] == "0"){
        arr[1] = arr[2][1]
    }
    if (arr[0] == String(date.getFullYear()) && arr[1] == String(date.getMonth() + 1) && arr[2] == String(date.getDate()))
        return handleTime(arrTime[1])
    else if (arr[0] == String(date.getFullYear()) && arr[1] == String(date.getMonth() + 1)){
        var deltaDays = date.getDate() - parseInt(arr[2]) 
        var result = String(deltaDays)
        if (deltaDays == 1){
            result += " day ago"
        }
        else{
            result += " days ago"
        }
        return result
    }
    else
        return arrTime[0]
}


export function handleTime(time: string){
    var arr = time.split(':')
    if (arr[0][0] == "0"){
        arr[0] = arr[0].slice(1)
    }
    if (arr[1][0] == "0"){
        arr[1] = arr[1].slice(1)
    }

    if (arr[2][0] == "0"){
        arr[2] = arr[2].slice(1)
    }
    var totalSecond = parseInt(arr[0])*60*60 + parseInt(arr[1])*60 + parseInt(arr[2])

    var today = new Date()
    var nowSecond = today.getHours()*60*60 + today.getMinutes()*60 + today.getSeconds()
    
    var deltaSeconds = nowSecond - totalSecond
    var result= ""
    if (deltaSeconds/(60*60)>= 1){
        result += String(Math.round(deltaSeconds/(60*60))) + "h "
        deltaSeconds = deltaSeconds%(60*60)
    }
    if (deltaSeconds/60 >= 1){
        result += String(Math.round(deltaSeconds/60)) + "m "
        deltaSeconds = deltaSeconds%60
    }
    if (deltaSeconds != 0)
        result += String(deltaSeconds) + "s ago"
    return result
}