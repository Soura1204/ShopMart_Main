const passwordd = document.getElementById('passwordd')
const formm = document.getElementById('formm'
const errelement = document.getElementById('error')

formm.addEventListener('submit',(e) =>
{
	let msgs =[]
	if (msgs.length > 0)
	{
		e.preventDefault()
		errelement.innerText = msgs.join(', ')
	}
	if(passwordd.value.length<=6)
	{
		msgs.push('password must be longer than 6 characters')
	}
	if(passwordd.value.length>=20)
	{
		msgs.push('password must be less than 20 characters')
	}
	if(passwordd.value=== 'password' || passwordd.value=== 'Password')
	{
		msgs.push('oops! this password is not acceptable')
	}
})