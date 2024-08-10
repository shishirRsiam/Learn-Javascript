const print = console.log

let companies = ['Netflix', 'JS It SOlution', 'Services Fast', 'Microsoft', 'Uber', 'Pathao', 'Google']


companies.shift()
companies.splice(4, 1, 'Ola')
companies.push('Amazon')

print(companies)