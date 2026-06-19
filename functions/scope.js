let a = 300
if(true){
    let b =10
    const c =20
    // console.log("INNER :", a);
    
}

function one (){
    const userName = "ROhan"

    function two(){
        const website = "Youtube"
        console.log(userName);
        
    }
    //console.log(website);
    
    two()
}

one()