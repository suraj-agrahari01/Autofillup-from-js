function addressFunction() {
    if (document.getElementById('same').checked) {
        document.getElementById('fname1').value =
            document.getElementById('fname').value;
        document.getElementById('lname1').value =
            document.getElementById('lname').value;
        document.getElementById('secondaryaddress').value =
            document.getElementById('primaryaddress').value;
        document.getElementById('city1').value =
            document.getElementById('city').value;
        document.getElementById('state1').value =
            document.getElementById('state').value;
        document.getElementById('secondaryzip').value =
            document.getElementById('primaryzip').value;
        document.getElementById('phone1').value =
            document.getElementById('phone').value;
    } else {
        document.getElementById('fname1').value = '';
        document.getElementById('lname1').value = '';
        document.getElementById('secondaryaddress').value = '';
        document.getElementById('city1').value = '';
        document.getElementById('state1').value = '';
        document.getElementById('secondaryzip').value = '';
    }
}