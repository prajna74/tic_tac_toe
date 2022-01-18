function load() {
    document.getElementById("intro").style.display = "block";
}
var c = 0;
var x = 0,
    o = 0;
var array = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
];
var p1, p2;

function btnclick(name1, name2) {
    p1 = name1;
    p2 = name2;
    document.getElementById("intro").style.display = "none";
    document.getElementById("name1").innerHTML = name1.toUpperCase();
    document.getElementById("name2").innerHTML = name2.toUpperCase();
}

function replyclick() {
    c++;
    var id = event.target.id;
    var ele = document.getElementById(id);
    if (c % 2 == 0) {
        ele.src = "images/o.png";
    } else {
        ele.src = "images/ximg.png";
    }
    work(id, c);

}

function cancel() {
    document.getElementById("result").style.display = "none";
}

function work(id, c) {
    var r = parseInt(id[0]);
    var co = parseInt(id[1]);
    var v;
    if (c % 2 == 0)
        v = 1;
    else
        v = 0;
    array[r - 1].push(v);
    array[co + 2].push(v);
    if (r == co)
        array[6].push(v);
    if ((Math.abs(r - co) == 2) || (r == 2 && co == 2)) {
        array[7].push(v);
    }
    if (r = check() != 0) {
        // alert(v);
        result(v);
    }
    if (c == 9) {
        console.log(array);
        if (o > x)
            document.getElementById("winnername").innerHTML = " " + p2.toUpperCase();
        else if (x > o)
            document.getElementById("winnername").innerHTML = " " + p1.toUpperCase();
        else {
            document.getElementById("congo").innerHTML = "It's a tie!";
            document.getElementById("para").innerHTML = "You both have won!";
        }
        setTimeout(() => {
            document.getElementById("result").style.display = "block";
        }, 500);
    }
}

function check() {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        var flag = 0;
        if (array[i].length == 3) {
            var f = array[i][0];
            for (var j = 1; j < array[i].length; j++) {
                if (array[i][j] != f) {
                    array[i].length = 0;
                    flag = 1;
                    break;
                }
            }
            if (flag == 0) {
                count++;
                array[i].length = 0;
            }
        }
    }
    return count;
}

function result(v) {
    if (v == 1) {
        o++;
        document.getElementById("p2").innerHTML = o;
    }
    if (v == 0) {
        x++;
        document.getElementById("p1").innerHTML = x;
    }
}