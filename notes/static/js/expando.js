function submit_handler(e) {
    e.preventDefault();

    add_form = e.srcElement
    note_title = add_form[0].value
    note_content = add_form[1].value
    xhr = new XMLHttpRequest();
    xhr.addEventListener('load', reload)
    
    xhr.open('POST', document.URL+"api/add_note/")
    body = new FormData()
    body.append("title", note_title)
    body.append("content", note_content)
    xhr.send(body)
}

function expand_handler(note_id){
    note_content = document.querySelector("#_"+note_id+".expando>.content")
    note_content.classList.toggle("expanded")
    if(note_content.style.maxHeight){
        note_content.style.maxHeight = 750+"px"
    }else{
        note_content.style.maxHeight = null
    }
}

function reload(e){
    window.location.reload(true)
}

function update_handler(note_id){
    note_content = document.querySelector("#_"+note_id+".expando>.content>textarea").value
    xhr = new XMLHttpRequest();
    xhr.addEventListener('load', reload)
    
    xhr.open('PATCH', document.URL+"api/"+note_id+"/update_note/")
    body = new FormData()
    body.append("content", note_content)
    xhr.send(body)
}

function delete_handler(note_id){
    xhr = new XMLHttpRequest();
    xhr.addEventListener('load', reload)
    xhr.open('DELETE', document.URL+"api/"+note_id+"/delete_note/")
    xhr.send()
}