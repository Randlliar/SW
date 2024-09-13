$('#burger').on('click', function () {
    $('#header_navigation').css('display', 'block');
})

document.querySelectorAll('#header_navigation *').forEach((item) => {
    item.onclick = () => {
        $('#header_navigation').css('display', 'none');
    }
})