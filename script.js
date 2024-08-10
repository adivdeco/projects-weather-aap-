let apikey ="8db9e49964ae5b4d8eb36313bc4254be";
let apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
let inp = document.querySelector("input")
let btn = document.querySelector("button")





async function checkWeather(city){
    const response = await fetch (apiurl+ city + `&appid=${apikey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
         document.querySelector(".downprt").style.display="none"
    } else {
        let data = await response.json();

        console.log(data);
        
        document.querySelector(".city").innerHTML= data.name;
        document.querySelector(".temperature").innerHTML= Math.floor(data.main.temp) + "*c";
        document.querySelector(".percentage").innerHTML= data.main.humidity + "%";
        document.querySelector(".speed").innerHTML= data.wind.speed + "km/h";
        document.querySelector(".discription").innerHTML = data.weather[0].description
        // document.querySelector(".weatherimg").innerHTML= data.weather[0].icon;   
        // / above code not work bcz for img innerhtml not provid img..../ 
    
        // Get the weather icon code and construct the image URL
        const iconCode = data.weather[0].icon;
        console.log("Icon Code:", iconCode); // Log icon code for debugging
    
        const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
        console.log("Icon URL:", iconUrl); // Log the full URL for debugging
    
        // Display the weather icon in the .weatherimg element
        const weatherImgElement = document.querySelector(".weatherimg");
        console.log("Weather Image Element:", weatherImgElement); // Log the element for debugging
    
        // Check if the element exists
        if (weatherImgElement) {
            weatherImgElement.src = iconUrl; // Set the src attribute to the icon URL
        } else {
            console.error("Weather image element not found");
        }


        document.querySelector(".downprt").style.display="block"
          document.querySelector(".error").style.display = "none"
    }
   
}
// } try {
    
// } catch (error) {
    
//     console.error(error);
//     alert("Error: " + error.message); // Alert the user if there's an error

// }

    



btn.addEventListener("click",function(){
    checkWeather(inp.value);
})



