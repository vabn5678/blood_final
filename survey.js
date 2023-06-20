const firebaseConfig = {
    apiKey: "AIzaSyDCTjpEz8-XGADmXDhyWmN7k8ilH2IBw6M",
    authDomain: "survey-form-a9c88.firebaseapp.com",
    databaseURL: "https://survey-form-a9c88-default-rtdb.firebaseio.com",
    projectId: "survey-form-a9c88",
    storageBucket: "survey-form-a9c88.appspot.com",
    messagingSenderId: "1092702133470",
    appId: "1:1092702133470:web:477f253e97b7619d4ef64f"
};
// initialize firebase
firebase.initializeApp(firebaseConfig);
// reference your database
var surveyformDB = firebase.database().ref('surveyform')
document.getElementById('surveyform').addEventListener('submit', submitForm)
function submitForm(e) {
    e.preventDefault();
    var name1 = getElementVal('name');
    var state1 = getElementVal('state');
    var city1 = getElementVal('city');
    var pincode1 = getElementVal('pincode');
    var mobile_number1 = getElementVal('mobile_number');
    var selecteddisease;
    document.getElementsByName("hi").forEach(function (elm) {
        if (elm.checked) {
            selecteddisease = elm.value;
        }
    })

    var selectedgender;
    document.getElementsByName("gender").forEach(function (elmm) {
        if (elmm.checked) {
            selectedgender = elmm.value;
        }
    })
    var disease_name = getElementVal('diseasename');
    var selectbloodgroup;
    document.getElementsByName("blg").forEach(function (el) {
        if (el.checked) {
            selectbloodgroup = el.value;
        }
    })
    savemessages(name1, state1, city1, pincode1, mobile_number1, selecteddisease, selectedgender, disease_name, selectbloodgroup);
    // enable the alert
    document.querySelector(".alert").style.display = "block";
    // remove the alert
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);
    // reset the form
    document.getElementById('surveyform').reset();

}
const savemessages = (name1, state1, city1, pincode1, mobile_number1, selecteddisease, selectedgender, disease_name, selectbloodgroup) => {

    var newsurveyform = surveyformDB.push();
    newsurveyform.set({
        Name: name1,
        State: state1,
        City: city1,
        Pincode: pincode1,
        MobileNumber: mobile_number1,
        Pastdisease: selecteddisease,
        Gender: selectedgender,
        DiseaseName: disease_name,
        Bloodgroup: selectbloodgroup
    })
}
const getElementVal = (id) => {
    return document.getElementById(id).value;
}