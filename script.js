const btn=document.querySelector(".btn")
const firstName=document.querySelector(".name-one")
const lastName=document.querySelector(".name-two")
async function getData(firstName,secondName)
{
    const response=await fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${firstName}&fname=${secondName}`,{
        method:"GET",
        headers: {
	Accept:"application/json",
            'X-RapidAPI-Key': '685155abd9mshcf702cf1a036246p1bcde8jsnfd58b8d5d7d1',
		    'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
        }
    })
    const data=await response.json()
    renderToPage(data)
}
function submitNames()
{
    const nameOne=firstName.value
    const nameTwo=lastName.value
    getData(nameOne,nameTwo)
}
function renderToPage(data)
{
document.querySelector(".percentage").textContent=`Percentage:${data.percentage}%`
document.querySelector(".result").textContent=`Result:${data.result}`
}
btn.addEventListener("click",function()
{
    submitNames()
})
