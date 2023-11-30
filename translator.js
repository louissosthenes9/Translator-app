
 const countries = [
  { 'en': 'English' },
  { 'af': 'Afrikaans' },
  { 'sq': 'Albanian' },
  { 'am': 'Amharic' },
  { 'ar': 'Arabic' },
  { 'hy': 'Armenian' },
  { 'az': 'Azerbaijani' },
  { 'eu': 'Basque' },
  { 'be': 'Belarusian' },
  { 'bn': 'Bengali' },
  { 'bs': 'Bosnian' },
  { 'bg': 'Bulgarian' },
  { 'ca': 'Catalan' },
  { 'zh': 'Chinese' },
  { 'hr': 'Croatian' },
  { 'cs': 'Czech' },
  { 'da': 'Danish' },
  { 'nl': 'Dutch' },
  
  { 'et': 'Estonian' },
  { 'fi': 'Finnish' },
  { 'fr': 'French' },
  { 'gl': 'Galician' },
  { 'ka': 'Georgian' },
  { 'de': 'German' },
  { 'el': 'Greek' },
  { 'gu': 'Gujarati' },
  { 'ht': 'Haitian Creole' },
  { 'ha': 'Hausa' },
  { 'he': 'Hebrew' },
  { 'hi': 'Hindi' },
  { 'hu': 'Hungarian' },
  { 'is': 'Icelandic' },
  { 'id': 'Indonesian' },
  { 'ga': 'Irish' },
  { 'it': 'Italian' },
  { 'ja': 'Japanese' },
  { 'jv': 'Javanese' },
  { 'kn': 'Kannada' },
  { 'kk': 'Kazakh' },
  { 'km': 'Khmer' },
  { 'ko': 'Korean' },
  { 'ku': 'Kurdish' },
  { 'ky': 'Kyrgyz' },
  { 'lo': 'Lao' },
  { 'lv': 'Latvian' },
  { 'lt': 'Lithuanian' },
  { 'mk': 'Macedonian' },
  { 'mg': 'Malagasy' },
  { 'ms': 'Malay' },
  { 'ml': 'Malayalam' },
  { 'mt': 'Maltese' },
  { 'mi': 'Maori' },
  { 'mr': 'Marathi' },
  { 'mn': 'Mongolian' },
  { 'ne': 'Nepali' },
  { 'no': 'Norwegian' },
  { 'fa': 'Persian' },
  { 'pl': 'Polish' },
  { 'pt': 'Portuguese' },
  { 'pa': 'Punjabi' },
  { 'ro': 'Romanian' },
  { 'ru': 'Russian' },
  { 'sm': 'Samoan' },
  { 'gd': 'Scots Gaelic' },
  { 'sr': 'Serbian' },
  { 'st': 'Sesotho' },
  { 'sn': 'Shona' },
  { 'sd': 'Sindhi' },
  { 'si': 'Sinhala' },
  { 'sk': 'Slovak' },
{ 'sw': 'Swahili' },
  { 'es': 'Spanish' }
];

const exchangBtn=document.querySelector(".exchange");
const synth = speechSynthesis;
const toText= document.querySelector(".translation");
const fromText= document.querySelector(".from");
const translateBtn= document.querySelector("button");
const speakerFrom =document.querySelector("#speakerFrom");
const speakerTo =document.querySelector("#speakerTo");
const selectTags = document.querySelectorAll("select");

selectTags.forEach((tag,i) => {
  for (let i = 0; i < countries.length; i++) {
    let country = countries[i];
    for (let country_code in country) {
    let selected;
   if(i===0 && country_code==="en") {
   selected="selected" ;   
  }
      let option = `<option value="${country_code}">${country[country_code]}</option>`;
      tag.insertAdjacentHTML("beforeend", option);
    }
  }
});
 
 translateBtn.addEventListener('click',()=>
     {
         text =fromText.value;
         translateFrom = selectTags[0].value
         translateTo = selectTags[1].value
      let apiUrl =`https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`
fetch(apiUrl).then(

    res=>res.json()).then(data=>{
        console.log(data.responseData.translatedText);
        toText.value = data.responseData.translatedText
    })
        
})
        
exchangBtn.addEventListener('click',function () {
let temp;
temp = selectTags[0].value;
  selectTags[0].value=selectTags[1].value;
  selectTags[1].value=temp
  
  let swap;
  swap =fromText.textContent;
  fromText.textContent= toText.textContent;
  
toText.textContent=fromText.textContent;
    
})

speakerFrom.addEventListener('click',()=>{
  const words = new SpeechSynthesisUtterance(fromText.value)
  synth.speak(words)

})

speakerTo.addEventListener('click',()=>{
  const Trans = new SpeechSynthesisUtterance(toText.value)
  synth.speak(Trans)

})
