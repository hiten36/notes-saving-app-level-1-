show();
let b1=document.getElementById('addbtn');
b1.addEventListener('click',()=>{
    let notes=localStorage.getItem('notes');
    if(notes==null)
    {
        notesobj={};
    }
    else
    {
        notesobj=JSON.parse(notes);
    }
    let title=document.getElementById('title').value;
    let desc=document.getElementById('desc').value;
    if(title=='' || desc=='')
    {
        alert('You cant add Empty Notes');
    }
    else
    {
        notesobj[title]=desc;
        localStorage.setItem('notes',JSON.stringify(notesobj));
        document.getElementById('title').value='';
        document.getElementById('desc').value='';
    }
    show();
})
function show()
{
    str=''
    let notes=localStorage.getItem('notes');
    if(notes==null || Object.keys(JSON.parse(notes)).length<1)
    {
        str+='<h3>Nothing here! Please add some notes first.</h3>'
    }
    else
    {
        notesobj=JSON.parse(notes);
        for(i in notesobj){
            str+=`<div class="col-md-4 my-2">
                    <div class="card" style="width: 18rem; background-color: aliceblue;">
                        <div class="card-body text-center">
                            <h5 class="card-title">${i}</h5>
                            <p class="card-text">${notesobj[i]}</p>
                            <button onclick="delete1('${i}')" class="btn dltbtn btn-danger">Delete Note</button>
                        </div>
                    </div>
                </div>`;
        }
    }
    document.getElementById('row').innerHTML=str;
}
function delete1(item)
{
    con=confirm('Do you really want to delete this note?');
    if(con)
    {
        let notes=localStorage.getItem('notes');
        notesobj=JSON.parse(notes);
        delete notesobj[item];
        localStorage.setItem('notes',JSON.stringify(notesobj));
    }
    show();
}
let search=document.getElementById('search');
search.addEventListener('input',()=>{
    let query=search.value.toLowerCase();
    let b2=document.querySelectorAll('.card');
    for(b of b2)
    {
        str=b.children[0].children[1].innerHTML;
        str1=b.children[0].children[0].innerHTML;
        if(str.includes(query) || str1.includes(query))
        {
            b.style.display='block';
        }
        else
        {
            b.style.display='none';
        }
    }
})