document.addEventListener('DOMContentLoaded', function () {

    const apiURL = 'https://dino-1-server.herokuapp.com/';
    const submit = document.querySelector('.job-form')
    const job_posting_container = document.querySelector('#job-listings')

    function apiFetch(url) {
        return fetch(url).then(result => addListing(result.json()));
    }
    apiFetch(apiURL)
    
    function addListing(results) {
        results.then(element => {
            for(let i = 0; i < element.length; i++){
                console.log(element[i]['interested'])
                let add_listing = document.createElement('li')
                let add_title = document.createElement('h4')
                let add_compensation = document.createElement('small')
                let add_description = document.createElement('p')
                let add_interested = document.createElement('small')
                add_title.innerHTML = element[i]['title']
                add_compensation.innerHTML = element[i]['pay']
                add_description.innerHTML = element[i]['description']
                add_interested.innerHTML = (element[i]['interested'].length + ' dinos interested in this position')
                add_listing.append(add_title)
                add_listing.append(add_compensation)
                add_listing.append(add_description)
                add_listing.append(add_interested)
                job_posting_container.appendChild(add_listing)

            }
        })
    }

        submit.addEventListener('submit', function (event) {
            event.preventDefault()
            const data = new FormData(event.target)
            let add_listing = document.createElement('li')
            let add_title = document.createElement('h4')
            let add_compensation = document.createElement('small')
            let add_description = document.createElement('p')
            add_title.innerText = data.get('title')
            add_compensation.innerText = data.get('pay')
            add_description.innerText = data.get('description')
            add_listing.append(add_title)
            add_listing.append(add_compensation)
            add_listing.append(add_description)
            job_posting_container.appendChild(add_listing)
        })
})