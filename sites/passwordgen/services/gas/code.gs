function doGet(e) {
    const prmLength = e.parameter.lngth,
    prmAmount = e.parameter.count,
    prmUseNumber = e.parameter.isUseNumber,
    prmUseBig = e.parameter.isUseBigLetter,
    prmUseSmall = e.parameter.isUseSmallLetter,
    prmUseSimbol = e.parameter.isUseSimbol;
    const number = "0123456789",
    smallLetter = "abcdefhijkmnopqrstuvwxyz",
    bigLetter = "ABCDEFGHJKLMNPQRSTUVWXYZ",
    simbol = "`~!@#$%^&*()_+-={}[]¥|:;'<>,.?/";
    let passwordArray = [],
    category = [];
    if(prmUseNumber===1){
        category.push(number);
    }
    if(prmUseSmall===1){
        category.push(smallLetter);
    }
    if(prmUseBig===1){
        category.push(bigLetter);
    }
    if(prmUseSimbol===1){
        category.push(simbol);
    }
    let password = '',
    passwordCharacter;
    for(i = 0; i < prmAmount; i++){
        for(ii = 0; ii < prmLength; ii++){
            passwordCharacter = category[Math.floor(Math.random()*category.length)].charAt(Math.floor(Math.random()*category[Math.floor(Math.random()*category.length)].length));
            password = password.concat(passwordCharacter);
        }
        passwordArray.push(password);
        password = "";
    }
    let returnText = ContentService.createTextOutput();
    returnText.setMimeType(ContentService.MimeType.JSON);
    returnText.setContent(JSON.stringify(passwordArray));
    return returnText;
}