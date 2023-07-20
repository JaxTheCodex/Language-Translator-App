const addbtn=document.querySelector("#addbtn");
const main=document.querySelector("#main");

addbtn.addEventListener('click',function(){
    addnote()
});

const saveNotes=()=>{
    const notes=document.querySelectorAll(".note textarea");
    const data=[];
    notes.forEach(
        (note)=>{
            data.push(note.value)
        }
    )
    localStorage.setItem("notes",JSON.stringify(data))
}

const addnote=()=>{
    const note=document.createElement("div");
    note.classList.add("note")
    note.innerHTML=`
    <div class="tool">
        <i class="trash fas fa-trash"></i>
        <i class="save fas fa-save"></i>
    </div>
    <textarea ></textarea>`;

    note.querySelector(".trash").addEventListener('click',function(){
        note.remove()
    });
    note.querySelector(".save").addEventListener('click', function(){
        saveNotes()
    });
    main.appendChild(note);
    

}