let copy = (textId) => {
    // select the text input field element
    document.getElementById(textId).select();
    // select the copied text to clipboard 
    document.execCommand("copy");
};