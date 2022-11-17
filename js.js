'use strict';
let btn = document.querySelectorAll('button');

//btn[0].onclick = function()
//{
//    alert('Sie haben erste button gerdrückt');
//};
/*btn[0].addEventListener('click', function() {
    alert('sie haben erste Button gedrückt');
});
    btn[2].addEventListener('click', function(event) {
        let target = event.target;
        target.style.display = 'none';
        console.log('sie haben zweite Button gedrückt' + event.type + ' auf Element ' + event.target);

});

btn[1].addEventListener('mouseenter', function()
{
    alert('Sie sind suf erste Button');
}
)*/

btn.forEach(function(item)
{
    item.addEventListener('mouseleave', function()
    {
        console.log("Wir sind raus");
    }
    );
}
);
let incr = 10,
    decr = 10;

    console.log (incr++);
    console.log (incr);
    console.log (++incr);
    console.log (--decr);
    console.log (decr--);
