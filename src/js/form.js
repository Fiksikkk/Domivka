$('form').submit(function () {
    var fname = $.trim($('#name').val());
    var fphonenumber = $.trim($('#phonenumber').val());

    if (fname === '') {
        document.getElementById('nameLabel').innerHTML="Введіть Ваше Ім'я"
        document.getElementById('nameLabel').style.backgroundColor=red;

        // alert('Name is empty.');
        // document.getElementById('name').style.backgroundColor = #ffdddd;
        return false;
    }
    else if (fphonenumber === '') {
        alert('Phonenumber is empty.');
        return false;
    }
    
});