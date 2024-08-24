// changeBGcolor();


const print = console.log;



const photoUrlAPI = "https://flagsapi.com/country_code/flat/64.png"
let allOption = document.querySelector('#all-option').content


const formSelect = document.querySelector('#from')
const toSelect = document.querySelector('#to')
const msg = document.querySelector(".msg")

for (i in countryList) {
    let newOptionForm = document.createElement('option')
    let newOptionTo = document.createElement('option')
    newOptionForm.innerText = i;
    newOptionTo.innerText = i;
    newOptionForm.value = countryList[i];
    newOptionTo.value = countryList[i];
    formSelect.appendChild(newOptionForm)
    toSelect.appendChild(newOptionTo)

    if (i === "USD") {
        newOptionForm.selected = true;
    }
    if (i === "BDT") {
        newOptionTo.selected = true;
    }
}


formSelect.addEventListener('change', () => {
    updateFlagFORM(formSelect)
})
toSelect.addEventListener('change', () => {
    updateFlagTO(toSelect)
})

const updateFlagFORM = (el) => {
    let newSrc = photoUrlAPI.replace("country_code", el.value)
    document.querySelector('.FORMflagImg').src = newSrc
}
const updateFlagTO = (el) => {
    let newSrc = photoUrlAPI.replace("country_code", el.value)
    document.querySelector('.TOflagImg').src = newSrc
}


const submit = document.querySelector("#submit")

submit.addEventListener('click', async (el) => {
    el.preventDefault()
    print(`from ${formSelect.value}, to ${toSelect.value}`)
    let amount = document.querySelector('#amount')


    if (amount.value <= 0) {
        amount.value = '1';
    }
    // print(amount.value)
    let ToselectCurr = toSelect.options[toSelect.selectedIndex].text
    let FormselectCurr = formSelect.options[formSelect.selectedIndex].text
    const api_key = `https://v6.exchangerate-api.com/v6/43ffd659493ec6cc0fd05971/latest/${FormselectCurr}`

    const api = await fetch(api_key)

    // print(api)

    let response = await api.json()

    let conventionRate = response.conversion_rates[ToselectCurr]

    // print(conventionRate)
    let headMsg = `${amount.value} ${FormselectCurr} = ${conventionRate * amount.value} ${ToselectCurr}`
    let msg = `Selected currency: ${FormselectCurr}, Convention Rate: ${conventionRate} ${ToselectCurr}`

    print('Head ->', headMsg)
    print(msg)
    // print(FormselectCurr, ToselectCurr)

    document.querySelector('.notemsg').textContent = msg;
    document.querySelector('.pheader').textContent = headMsg;
})

const swapIcon = document.querySelector('#swap');
swapIcon.addEventListener('click', () => {
    const selectedValueForm = formSelect.value;
    const selectedValueTo = toSelect.value;

    formSelect.value = selectedValueTo;
    toSelect.value = selectedValueForm;

    updateFlagFORM(formSelect);
    updateFlagTO(toSelect);
});
