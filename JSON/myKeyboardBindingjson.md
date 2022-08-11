<!-- // Place your key bindings in this file to override the defaultsauto[] -->

# Sumit Bro Video Tasks <!-- [ -->

"React functional component": {
"prefix": "rfc",
"body": [
"import React from 'react';\n",
"const ${1:$TM_FILENAME_BASE} = (${2:props}) => {",
"\treturn (",
"\t\t<div>",
"\t\t$0",
"\t\t</div>",
"\t);",
"};",
"export default $1;"
],
"description": "Make a functional component"
}

<!-- ] -->

# Keyboard Bindings ShortCut Key !

[
{
"key": "ctrl+m",
"command": "editor.action.addSelectionToNextFindMatch",
"when": "editorFocus"
},
{
"key": "ctrl+d",
"command": "-editor.action.addSelectionToNextFindMatch",
"when": "editorFocus"
},
{
"key": "ctrl+d",
"command": "copy-copy-paste.clear"
},
{
"key": "ctrl+shift+q",
"command": "workbench.action.quickOpenNavigateNextInViewPicker",
"when": "inQuickOpen && inViewsPicker"
},
{
"key": "ctrl+q",
"command": "-workbench.action.quickOpenNavigateNextInViewPicker",
"when": "inQuickOpen && inViewsPicker"
},
{
"key": "backspace ctrl+numpad_divide",
"command": "workbench.action.quickOpenView"
},
{
"key": "ctrl+q",
"command": "-workbench.action.quickOpenView"
},
{
"key": "ctrl+q",
"command": "editor.action.addCommentLine",
"when": "editorTextFocus && !editorReadonly"
},
{
"key": "ctrl+k ctrl+c",
"command": "-editor.action.addCommentLine",
"when": "editorTextFocus && !editorReadonly"
},
{
"key": "ctrl+shift+q",
"command": "editor.action.blockComment",
"when": "editorTextFocus && !editorReadonly"
},
{
"key": "shift+alt+a",
"command": "-editor.action.blockComment",
"when": "editorTextFocus && !editorReadonly"
},
{
"key": "shift+backspace backspace",
"command": "moveFileToTrash",
"when": "filesExplorerFocus && !inputFocus"
},
{
"key": "backspace",
"command": "-moveFileToTrash",
"when": "filesExplorerFocus && !inputFocus"
},
{
"key": "backspace",
"command": "deleteLeft",
"when": "textInputFocus"
},
{
"key": "backspace",
"command": "-deleteLeft",
"when": "textInputFocus"
}, //jalani
{
"key": "shift+backspace",
"command": "-deleteLeft",
"when": "textInputFocus"
},
{
"key": "ctrl+shift+1",
"command": "editor.emmet.action.removeTag"
},
{
"key": "alt+backspace",
"command": "deleteWordLeft",
"when": "textInputFocus && !editorReadonly"
},
{
"key": "ctrl+backspace",
"command": "-deleteWordLeft",
"when": "textInputFocus && !editorReadonly"
},
{
"key": "alt+d",
"command": "copy-copy-paste.copy",
"when": "editorTextFocus"
},
{
"key": "backspace",
"command": "-deleteLeft",
"when": "textInputFocus"
},
{
"key": "ctrl+c",
"command": "-copy-copy-paste.copy",
"when": "editorTextFocus"
},
{
"key": "alt+q",
"command": "editor.action.insertSnippet",
"when": "editorTextFocus",
"args": {
"name": "Print to constDoc"
}
},
{
"key": "alt+l",
"command": "editor.action.insertSnippet",
"when": "editorTextFocus",
"args": {
"name": "Print to console"
}
},
{
"key": "shift+alt+a",
"command": "editor.action.insertSnippet",
"when": "editorTextFocus",
"args": {
"name": "Print to addclick"
}
},
{
"key": "shift+alt+e",
"command": "editor.action.insertSnippet",
"when": "editorTextFocus",
"args": {
"name": "Print to forEach"
}
}
]
