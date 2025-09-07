//https://www.postb.in/1747923448325-7891575968824
const axios= require("axios");

// async function main1(){
//     const response = await fetch("https://httpdump.app/dumps/b139bd31-3c31-4439-97f5-327cafa8ac88",{
//         method:"GET",   //hit diff route
//         body: {
//             username: "Pushkar",
//             password : "123456"
//         },
//         headers: {
//             Autorization : "Pushkar 123"
//         }
//     });
//     // To hit different route  in fetch you have to do like this
//     const textualData = await response.json();
//     console.log(textualData);

// }


async function main(){
    const response = await axios.post(" https://httpdump.app/dumps/430df01e-e800-49b0-b1bb-7969f3adf52e",{
            username: "Pushkar",
            password : "123456",
    },{
        headers: {
            Authorization : "Pushkar 123",
        },
    },);
    // you can use axios.put,.get,.post,.delete to hit different route
    //response.data has content of page
    console.log(response.data)
}

main();

// main1();
