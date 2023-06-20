const firebaseConfig = {
    apiKey: "AIzaSyDCTjpEz8-XGADmXDhyWmN7k8ilH2IBw6M",
    authDomain: "survey-form-a9c88.firebaseapp.com",
    databaseURL: "https://survey-form-a9c88-default-rtdb.firebaseio.com",
    projectId: "survey-form-a9c88",
    storageBucket: "survey-form-a9c88.appspot.com",
    messagingSenderId: "1092702133470",
    appId: "1:1092702133470:web:477f253e97b7619d4ef64f"
};
firebase.initializeApp(firebaseConfig);
database = firebase.database();
const getElementVal = (id) => {
    return document.getElementById(id).value;
}
document.getElementById('formform').addEventListener('submit', submitForm)
function submitForm(e) {
    e.preventDefault();
    var name0 = getElementVal('name');
    var state0 = getElementVal('state');
    var city0 = getElementVal('city');
    var pincode0 = getElementVal('pincode');
    var mobile_number0 = getElementVal('mobile_number');
    var selectedgender0;
    document.getElementsByName("gender").forEach(function (elmm) {
        if (elmm.checked) {
            selectedgender0 = elmm.value;
        }
    })
    var selectbloodgroup0;
    document.getElementsByName("bg").forEach(function (el) {
        if (el.checked) {
            selectbloodgroup0 = el.value;
        }
    });
    var ref = database.ref('surveyform');
    ref.on('value', gotdata);
    function gotdata(data) {
        var peoples = data.val();
        var keys = Object.keys(peoples);
        // console.log(peoples);
        for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            var Name = peoples[k].Name;
            var State = peoples[k].State;
            var City = peoples[k].City;
            var Pincode = peoples[k].Pincode;
            var Gender = peoples[k].Gender;
            var Bloodgroup = peoples[k].Bloodgroup;
            var MobileNumber = peoples[k].MobileNumber;
            if (state0 == State && city0 == City && pincode0 == Pincode && selectbloodgroup0 == Bloodgroup) {
                console.log(Name, City, Bloodgroup, MobileNumber);
            }
        }
    }

    console.log = function (...args) {
        // Create a new <p> element to display the log message
        var p = document.createElement("p");
        p.textContent = args.map(arg => JSON.stringify(arg)).join(" ");

        // Append the <p> element to the output div
        var outputDiv = document.getElementById("console-output");
        outputDiv.appendChild(p);

        // Scroll to the bottom of the output div to show the latest log
        outputDiv.scrollTop = outputDiv.scrollHeight;
    };
    document.getElementById('formform').reset();

}


