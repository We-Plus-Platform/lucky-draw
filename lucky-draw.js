/*修改人数在开始抽签部分*/
/*所有人的姓名在13行datas*/


// var datas;
var num;
var names;
var name;
var index = -1;
var time;
//随机抽取
var datas = [
    "小红1", "小红2", "小红3", "小红4", "小红5", "小红6", "小红7", "小红8", "小红9", "小红10", "小红11", "小红12", "小红13", "小红14", "小红15", "小红16", "小红17", "小红18", "小红19", "小红20", "小红21", "小红22", "小红23", "小红24", "小红25", "小红26", "小红27", "小红28", "小红29", "小红30"
];

function getRandomArrayElements(arr, count) {
    var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}

// window.onload=function () {
//
//     $.ajax({
//         url:"./php/get_classified.php",/*待修改*/
//         type:"POST",
//         dataType:"json",
//         async:false,
//
//         success:function (data) {
//           if(data.status){
//               datas=data.arr;
//               num=data.num;
//           }
//
//         },
//         error:function () {
//             alert('错误')
//         }
//     });
//
//
// }


//删除
function removeByValue(arr, val) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == val) {
            arr.splice(i, 1);
            break;
        }
    }
}

//开始抽签
function begin() {
    document.getElementById("btnBegin").disabled = true;
    if (datas.length < 10) {
        names = getRandomArrayElements(datas, datas.length);
    }//修改抽取人数
    else {
        names = getRandomArrayElements(datas, 10);//修改抽取人数
    }

    chouqian();
}

//抽签
function chouqian() {
    if (names.length > 0) {
        index = Math.floor(Math.random() * 1000 % names.length);
        name = names[index];
        document.getElementById("result").innerHTML = name;

        time = window.setTimeout(chouqian, 2);
    }
    else {
        document.getElementById("result").innerHTML = "结束";
    }
}

//结束抽签
function end() {
    window.clearTimeout(time);
    document.getElementById("btnBegin").disabled = false;
    var delname = document.getElementById("result").innerHTML;

    removeByValue(datas, delname);


}
