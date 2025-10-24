async function checkStatus(url) {
try{
const response = await fetch(url)
if (response.status==200){
    return "Success!"
}else{
    return "Failure"
}
}catch(err){
    return "Network error" 
}
  }
