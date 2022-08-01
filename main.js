function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    noiseClassifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/_BLt3WzJV/model.json",model_loaded)
}
function model_loaded() {
 noiseClassifier.classify(got_results)   
}
function got_results(error,results) {
    if (error) {
        console.log(error)
    } else {
        console.log(results)
        r=Math.floor(Math.random()*255)+1;
       g=Math.floor(Math.random()*255)+1;
       b=Math.floor(Math.random()*255)+1;
        //rgb(255,255,255)
        document.getElementById("name_of_animal").style.color="rgb("+r+","+g+","+b+")";
        document.getElementById("name_of_animal").innerHTML="animal-: "+results[0].label;
        var img1=document.getElementById("img1");
        if (results[0].label=="Bark") {
            img1.src="https://illustoon.com/photo/dl/350.png"
        }
        else if (results[0].label=="Meow") {
            img1.src="https://openclipart.org/image/800px/331861"
        }
        else if (results[0].label=="Roar") {
            img1.src="https://www.jing.fm/clipimg/full/130-1307544_lion-clip-baby-boy-jungle-animals-baby-minus.png"
        }
        else if (results[0].label=="Moo") {
            img1.src="https://img.freepik.com/premium-vector/cute-cartoon-cow-character-smiling-cheerfully_51194-283.jpg?w=2000"
        }
    }
};