$('form').submit(function () {
    var fname = $.trim($('#name').val());
    var fphonenumber = $.trim($('#phonenumber').val());
    var frooms = $.trim($('#rooms').val());

    if (fname === '') {
        alert('Name is empty.');
        // document.getElementById('name').style.backgroundColor = #ffdddd;
        return false;
    }
    else if (fphonenumber === '') {
        alert('Phonenumber is empty.');
        return false;
    }
    else if (frooms === '') {
        alert('Rooms is empty.');
        return false;
    }
});