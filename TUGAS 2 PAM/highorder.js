function pembuka(nama){
    return 'Annyeong ' + nama;
}

function perkenalan(greeting, nama, pesan){
    console.log(`${greeting(nama)} ${pesan}`);
}
 
perkenalan(pembuka,'Shakira','Salam kenal');