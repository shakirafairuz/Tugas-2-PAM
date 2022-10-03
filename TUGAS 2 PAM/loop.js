function main(){
    console.log('X');
    setTimeout(
      function display(){ console.log('Y'); }
    ,0);
      console.log('Z');
  }
  main();