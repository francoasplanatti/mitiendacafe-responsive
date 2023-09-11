window.addEventListener("load", function() {

    let form = document.querySelector("form.detailForm");

    var intensity = form.intensity
    var weight = form.weight
    var grinding = form.grinding
    var delivery = form.delivery
    var extra = form.extra
    
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        priceInitial = 2900;
        intensityValue = intensity.value;
        weightValue = weight.value;
        grindingValue = grinding.value;
        deliveryValue = delivery.value;

        //intensity
        switch(intensityValue){
            case "1":
                break;

            case "2":
                priceInitial += 200;
                break;
            
            case "3":
                priceInitial += 250;
                break;
        }

        //weight
        switch(weightValue){
            case "250":
                break;

            case "500":
                priceInitial += 250;
                break;
            
            case "750":
                priceInitial += 450;
                break;

            case "1000":
                priceInitial += 600;
                break;
        }

        //grinding
        switch(grindingValue){
            case "grano":
                priceInitial += 150;
                break;

            case "expreso":
                priceInitial += 100;
                break;
            
            case "filtro de tela":
                break;

            case "italiana":
                priceInitial += 75;
                break;
        }

        //delivery
        switch(deliveryValue){
            case "retiro por el local":
                break;

            case "retiro por punto de retiro":
                priceInitial += 75;
                break;

            case "envio a domicilio":
                priceInitial += 180;
                break;
        }

        if((delivery.value == "") || (weightValue == "750")){
            if(weightValue == "750"){
                alert("No queda stock de este producto, por favor cambiá la presentación.");
            } else{
                alert("Por favor selecioná el método de envío para continuar.");
            }
        } else {
            if(document.querySelector(".price")){
                element = document.querySelector(".price");
                element.textContent = "Precio: $" + priceInitial;
            } else {
                const newElement = document.createElement("div");
                newElement.classList.add("price");
                newElement.textContent = "Precio: $" + priceInitial;
                document.querySelector(".aaa").appendChild(newElement);
            }
    }
})

})