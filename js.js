var char = ["abcdefghijklmn0pqrstuvxyz", "ABCDEFGHIJKLMN0PQRSTUVXYZ", "0123456789", "!\"#$%&\'\(\)*+,-./"];
var gen = "";

$('.ul li').click(function() {
    $(this).toggleClass('active');
});

$('button').click(function() {
    var ulli = $('.ul li');
    for (let i = 0; i < ulli.length; i++) {
         if($(ulli[i]).hasClass('active'))
         {
             gen += char[i];
         }
    }
    if(!(gen === ""))
    {
        var length = $('input').val();
        var result = "";
        while (length != 0) {
            result += gen.charAt(Math.floor(Math.random() * gen.length));
            length--;
        }
        $('h2 b').text(result);
    }
    gen = "";
});