  <!-- // Place your global snippets here. Each snippet is defined under a snippet name and has a scope, prefix, body and
  // description. Add comma separated ids of the languages where the snippet is applicable in the scope field. If scope
  // is left empty or omitted, the snippet gets applied to all languages. The prefix is what is
  // used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
  // $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders.
  // Placeholders with the same ids are connected.
  // Example: -->

# let started my codings !

{
"Print to console": {
"scope": "javascript,typescript",
"prefix": "clog",
"body": ["console.log($1);", "$2"],
"description": "Log output to console"
},
"Print to consoleStr": {
"scope": "javascript,typescript",
"prefix": "slog",
"body": ["console.log('$1');", "$2"],
"description": "Log output to console"
},
"Print to consoleSelectedtext": {
"scope": "javascript,typescript",
"prefix": "cslog",
"body": ["console.log($TM_SELECTED_TEXT);", "$2"],
"description": "Log output to console"
},
"Print to const": {
"scope": "javascript,typescript",
"prefix": "constdoc",
"body": ["const $1 = document.querySelector('$2');", "$3"],
"description": "Nothing output to console"
},
"Print to let": {
"scope": "javascript,typescript",
"prefix": "letdoc",
"body": ["let $1 = document.querySelector('$2');", "$3"],
"description": "Nothing output to console"
},
"Print to docAll": {
"scope": "javascript,typescript",
"prefix": "constAll",
"body": ["const $1 = document.querySelectorAll('$2');", "$3"],
"description": "Nothing output to console"
},
"Print to constID": {
"scope": "javascript,typescript",
"prefix": "constid",
"body": ["const $1 = document.getElementById('$2');", "$3"],
"description": "Nothing output to console"
},
"Print to forEach": {
"scope": "javascript,typescript",
"prefix": "foreach",
"body": [
"$TM_SELECTED_TEXT.forEach((get$TM_SELECTED_TEXT) => {$1get$TM_SELECTED_TEXT.addEventListener('click', () =>{$2get$TM_SELECTED_TEXT$4});$3});",
"$5"
],
"description": "Nothing output to console"
},
"Print to stylenone": {
"scope": "javascript,typescript",
"prefix": "stylenone",
"body": ["$1.style.display = 'none$2';", "$3"],
"description": "Nothing output to console"
},
"Print to styleblock": {
"scope": "javascript,typescript",
"prefix": "styleblock",
"body": ["$1.style.display = 'block$2';", "$3"],
"description": "Nothing output to console"
},
"Print to addclick": {
"scope": "javascript,typescript",
"prefix": "addclick",
"body": ["$TM_SELECTED_TEXT.addEventListener('click$2', () =>{$3});", "$4"],
"description": "Nothing output to console"
}
}
