
const getFormvalue =()=>{
    let values = document.querySelectorAll('input[type="text"]');
    
    let names = ''
    for (let i = 0; i < values.length; i++ ){
        names += values[i].value + ` `;
        // document.write(names);
    }
        document.getElementById("inputNames").innerHTML = names;
}

// const values = document.querySelectorAll('input[type="text"]');
//     for (let i = 0; i < values.length; i++ ){
//         console.log(values[i].value);
//     }
//     console.log('a');
    
//     console.log(values);
    

//     console.log('mumu');
//    console.log(document.getElementById('form1'));

//    console.log(document.getElementsByName('lname'));

//    console.log('lumu');
// console.log(document.getElementsByTagName('input'));



   