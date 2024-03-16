// jQuery exerc 1.9 - Introduction to jQuery

function newItem(){
    let li = $('<li></li>');
    let inputValue = $('input').val();
    li.append(inputValue);

    if ($('#input').val() === ''){
        alert("You must write something");
    } else {
        let list = $('#list');
        list.append(li);
    }

    let crossOutButton = $('<crossOutButton></crossOutButton>');
    $(crossOutButton).append('X');
    li.append(crossOutButton);

    crossOutButton.on('click', function(){
        li.addClass('delete');
    });

    $('#list').sortable();

    $('#list').val('');
}