const name = document.getElementById('name')
const formm = document.getElementById('formm')
const err = document.getElementById('error')

form.addEventListener('submit',(e) =>
{
	let msg =[]
	
	if (msg.length > 0)
	{
		e.preventDefault()
		err.innerText = msg.join(', ')
	}
})




let namasteBtn = document.querySelector('button')
namasteBtn.addEventListner('click',showMsg)

function showMsg()
    {
        alert("ARE YOU SURE! THEN PRESS OK..")
    }