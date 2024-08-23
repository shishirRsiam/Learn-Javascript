const print = console.log

const url = "https://cat-fact.herokuapp.com/facts";
const btn = document.querySelector(".btn")
const fact = document.querySelector(".fact")

const getResponse = async () => {
    print('loding data...')
    let response = await fetch(url)
    print(response)

    // Convert response to JSON
    print('loding response...')
    let data = await response.json();
    print('data ->', data);
    let idx = Math.floor(Math.random() * data.length);
    print(data[idx].text);
    fact.textContent = data[idx].text;
    fact.style.fontSize = "30px"
}

btn.addEventListener("click", getResponse)