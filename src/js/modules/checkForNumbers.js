const checkForNumbers = function(selector){
    const elem = document.querySelectorAll(selector);
    elem.forEach( el => {
        el.addEventListener('input', () =>{
            el.value = el.value.replace(/\D/g, '' );            
        });
  });
};

export default checkForNumbers;