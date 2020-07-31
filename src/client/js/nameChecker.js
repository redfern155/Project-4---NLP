function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    
    // Test if the input is a valid URL
    if (!/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(inputText)) {
        alert('Please submit a valid URL');
        return 0;
    } else {
        return 1;
    }
}

export { checkForName }
