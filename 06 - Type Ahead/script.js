document.addEventListener("DOMContentLoaded", function(event) {

    const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
    const list = document.querySelector("ul.suggestions");     
    const search = document.querySelector(".search");
     
    const cities = [];
    
    fetch(endpoint)
        .then(res => res.json())
        .then(data => cities.push(...data));
        // .then(data => console.log(data));
   
        
    function makeSubSpan(parent, parameter, value) {
        let l = value.length;
        let pValue = parameter.toLowerCase();
        let i = pValue.indexOf(value);

        if (pValue.includes(value)) {            
            parent.appendChild(document.createElement('span')).append(parameter.slice(0, i));
            let hl = document.createElement('span');
            hl.className = "hl";
            hl.append(parameter.slice(i, (i + l)));
            parent.appendChild(hl); 
            if (parameter.slice(i + l).toLowerCase().includes(value)) {
                makeSubSpan(parent, parameter.slice(i + l), value);
            } else {
                parent.appendChild(document.createElement('span')).append(parameter.slice(i + l));
            }              
        } else {                        
            parent.appendChild(document.createElement('span')).append(parameter);
        }      
    }
    
    console.log(cities);
    // Borrowed from author
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
  
    function handleKeyDown(cities) {        
        list.innerHTML = null;

        // https://zetcode.com/javascript/jsonurl/
        // https://developer.mozilla.org/en-US/docs/Web/API/Body/json
        for (let item of cities) {
            let city = item.city;
            console.log(city)
            let state = item.state;
            let value = search.value.toLowerCase();
            
            if (city.toLowerCase().includes(value) || state.toLowerCase().includes(value)) {
                let listItem = document.createElement('li');                                   
                let span1 = document.createElement('span');                   
                span1.className = "name";

                makeSubSpan(span1, city, value);
                span1.appendChild(document.createElement('span')).textContent = ", ";
                makeSubSpan(span1, state, value);

                let span2 = document.createElement('span');
                span2.className = "population";
                span2.append(`${numberWithCommas(item.population)}`);

                listItem.appendChild(span1);
                listItem.appendChild(span2);
                list.appendChild(listItem);
            }
        }   
    }

    
    


    /* function handleKeyDown() {        
        list.innerHTML = null;

        // https://zetcode.com/javascript/jsonurl/
        // https://developer.mozilla.org/en-US/docs/Web/API/Body/json
        fetch(endpoint)
        .then(res => res.json())
        .then((out) => {
            for (const item of out) {
                let city = item.city;
                let state = item.state;
                let value = search.value.toLowerCase();
                
                if (city.toLowerCase().includes(value) || state.toLowerCase().includes(value)) {
                    let listItem = document.createElement('li');                                   
                    let span1 = document.createElement('span');                   
                    span1.className = "name";

                    makeSubSpan(span1, city, value);
                    span1.appendChild(document.createElement('span')).textContent = ", ";
                    makeSubSpan(span1, state, value);

                    // if (cityValue.includes(value)) {
                    //     let cityI = cityValue.indexOf(value);
                    //     span1.appendChild(document.createElement('span')).append(city.slice(0, cityI));
                    //     let hl = document.createElement('span');
                    //     hl.classList.add("hl");
                    //     hl.append(city.slice(cityI, (cityI + l)));
                    //     span1.appendChild(hl);
                    //     span1.appendChild(document.createElement('span')).append(city.slice(cityI + l));
                    // } else {                        
                    //     span1.appendChild(document.createElement('span')).append(city);
                    // }                      

                    // span1.appendChild(document.createElement('span')).textContent = ", ";
                    
                    // if (stateValue.includes(value)) {
                    //     let stateI = stateValue.indexOf(value);
                    //     span1.appendChild(document.createElement('span')).append(state.slice(0, stateI));
                    //     let hl = document.createElement('span');
                    //     hl.classList.add("hl");
                    //     hl.append(state.slice(stateI, (stateI + l)));
                    //     span1.appendChild(hl);
                    //     span1.appendChild(document.createElement('span')).append(state.slice(stateI + l));
                    // } else {
                    //     span1.appendChild(document.createElement('span')).append(state);
                    // } 
                    // span1.appendChild(document.createElement('span')).append(`${item.city}, ${item.state}`);

                    let span2 = document.createElement('span');
                    span2.className = "population";
                    span2.append(`${numberWithCommas(item.population)}`);

                    listItem.appendChild(span1);
                    listItem.appendChild(span2);
                    list.appendChild(listItem);
                    }
                }                
        })
        .catch(err => { throw err });
    } */

    search.addEventListener("input", handleKeyDown);
        
});