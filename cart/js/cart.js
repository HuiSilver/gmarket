/*1 수량 및 총가격*/
var cartBasketMinishop = document.querySelectorAll(".cartBasketMinishop");
var amount = document.querySelector(".amount");
var plusbtn = document.querySelector(".inc");
var minusbtn = document.querySelector(".dec");
var result = document.getElementsByClassName("result");
var totalResult = document.getElementsByClassName("totalResult");
var checkTitle = document.querySelector(".checkTitle");
var checkItem = document.querySelector(".checkItem");
amount.value = 1;
var msFirst = document.getElementById("MinishopFirst");
var msSecond = document.getElementById("MinishopSecond");
var num = 0;
priceA = 69000;

priceB = 35800;
priceAll = 104800;

for (var i = 0; i < totalResult.length; i++) {
    totalResult[i].innerHTML = priceAll.toLocaleString("ko-KR");
}
for (var i = 0; i < result.length; i++) {
    result[i].innerHTML = priceA.toLocaleString("ko-KR");

}


function inc() {
    amount.value++;
    if (amount.value < 1) {
        alert("주문 가능한 최소 수량은 1개입니다");
        amount.value = 1;
    }
    for (var i = 0; i < terms.length; i++) {
        var tpB = total.value * priceB;

        var tpBapA = total.value * priceB + amount.value * priceA;
    }

    for (var i = 0; i < result.length; i++) {
        if (amount.value > 999) {
            alert("선택하신 상품의 주문 가능한 수량은 999개 입니다. 999개 이하로 주문해 주세요.");
            amount.value = 999;
        }

        var apA = amount.value * priceA;
        result[i].innerHTML = apA.toLocaleString("ko-KR");
        var apAtpB = amount.value * priceA + total.value * priceB;


        if (checkItem.checked == true && checkTitle.checked == true && checkItemSecond.checked == false && checkTitleSecond.checked == false) {

            totalResult[i].innerHTML = apA.toLocaleString("ko-KR");

        } else if (checkItem.checked == true && checkTitle.checked == true && checkItemSecond.checked == true && checkTitleSecond.checked == true) {
            if (msSecond.style.display == "none") {
                totalResult[i].innerHTML = apA.toLocaleString("ko-KR");
            } else {
                totalResult[i].innerHTML = apAtpB.toLocaleString("ko-KR");
            }
        } else if (checkItem.checked == false && checkTitle.checked == false && checkItemSecond.checked == false && checkTitleSecond.checked == false) {
            totalResult[i].innerHTML = "0";

        } else if (checkItem.checked == false && checkTitle.checked == false && checkItemSecond.checked == true && checkTitleSecond.checked == true) {
            if (msSecond.style.display == "none") {
                totalResult[i].innerHTML = "0";
            } else {
                totalResult[i].innerHTML = tpB.toLocaleString("ko-KR");

            }
        }
    }
};

function dec() {
    amount.value--;
    if (amount.value >= 999) {
        alert("선택하신 상품의 주문 가능한 수량은 999개 입니다. 999개 이하로 주문해 주세요.");
        amount.value = 999;
    }

    for (var i = 0; i < terms.length; i++) {
        var tpB = total.value * priceB;

        var tpBapA = total.value * priceB + amount.value * priceA;
    }

    for (var i = 0; i < result.length; i++) {
        if (amount.value < 1) {
            alert("주문 가능한 최소 수량은 1개입니다");
            amount.value = 1;
        }

        var apA = amount.value * priceA;
        result[i].innerHTML = apA.toLocaleString("ko-KR");
        var apAtpB = amount.value * priceA + total.value * priceB;


        if (checkItem.checked == true && checkTitle.checked == true && checkItemSecond.checked == false && checkTitleSecond.checked == false) {

            totalResult[i].innerHTML = apA.toLocaleString("ko-KR");

        } else if (checkItem.checked == true && checkTitle.checked == true && checkItemSecond.checked == true && checkTitleSecond.checked == true) {
            if (msSecond.style.display == "none") {
                totalResult[i].innerHTML = apA.toLocaleString("ko-KR");
            } else {
                totalResult[i].innerHTML = apAtpB.toLocaleString("ko-KR");
            }
        } else if (checkItem.checked == false && checkTitle.checked == false && checkItemSecond.checked == false && checkTitleSecond.checked == false) {
            totalResult[i].innerHTML = "0";

        } else if (checkItem.checked == false && checkTitle.checked == false && checkItemSecond.checked == true && checkTitleSecond.checked == true) {
            if (msSecond.style.display == "none") {
                totalResult[i].innerHTML = "0";
            } else {
                totalResult[i].innerHTML = tpB.toLocaleString("ko-KR");

            }
        }
    }
};



/*2 수량 및 총가격*/
var total = document.querySelector(".total");
var plus = document.querySelector(".plus");
var minus = document.querySelector(".minus");
var terms = document.getElementsByClassName("terms");
var checkTitleSecond = document.querySelector(".checkTitleSecond");
var checkItemSecond = document.querySelector(".checkItemSecond");
total.value = 1;
var num = 0;


for (var i = 0; i < terms.length; i++) {
    terms[i].innerHTML = priceB.toLocaleString("ko-KR");
}


function pluss() {
    total.value++;
    if (total.value < 1) {
        alert("주문 가능한 최소 수량은 1개입니다");
        amount.value = 1;
    }
    for (var i = 0; i < result.length; i++) {
        var apA = amount.value * priceA;

        var apAtpB = amount.value * priceA + total.value * priceB;
    }

    for (var i = 0; i < terms.length; i++) {
        if (total.value > 999) {
            alert("선택하신 상품의 주문 가능한 수량은 999개 입니다. 999개 이하로 주문해 주세요.");
            total.value = 999;
        }
        var tpB = total.value * priceB;
        terms[i].innerHTML = tpB.toLocaleString("ko-KR");
        var tpBapA = total.value * priceB + amount.value * priceA;



        if (checkItem.checked == true && checkTitle.checked == true && checkItemSecond.checked == false && checkTitleSecond.checked == false) {
            totalResult[i].innerHTML = apA.toLocaleString("ko-KR");
            if (msFirst.style.display == "none") {
                totalResult[i].innerHTML = "0";
            } else {
                totalResult[i].innerHTML = apA.toLocaleString("ko-KR");

            }

        } else if (checkItem.checked == true && checkTitle.checked == true && checkItemSecond.checked == true && checkTitleSecond.checked == true) {

            if (msFirst.style.display == "none") {
                totalResult[i].innerHTML = tpB.toLocaleString("ko-KR");
            } else {
                totalResult[i].innerHTML = apAtpB.toLocaleString("ko-KR");
            }
        } else if (checkItem.checked == false && checkTitle.checked == false && checkItemSecond.checked == false && checkTitleSecond.checked == false) {
            totalResult[i].innerHTML = "0";

        } else if (checkItem.checked == false && checkTitle.checked == false && checkItemSecond.checked == true && checkTitleSecond.checked == true) {
            totalResult[i].innerHTML = tpB.toLocaleString("ko-KR");
        }


    }


};


function minuss() {
    total.value--;
    if (total.value >= 999) {
        alert("선택하신 상품의 주문 가능한 수량은 999개 입니다. 999개 이하로 주문해 주세요.");
        total.value = 999;
    }
    for (var i = 0; i < result.length; i++) {
        var apA = amount.value * priceA;

        var apAtpB = amount.value * priceA + total.value * priceB;
    }

    for (var i = 0; i < terms.length; i++) {
        if (total.value < 1) {
            alert("주문 가능한 최소 수량은 1개입니다");
            total.value = 1;
        }

        var tpB = total.value * priceB;
        terms[i].innerHTML = tpB.toLocaleString("ko-KR");
        var tpBapA = total.value * priceB + amount.value * priceA;


        if (checkItem.checked == true && checkTitle.checked == true && checkItemSecond.checked == false && checkTitleSecond.checked == false) {
            totalResult[i].innerHTML = apA.toLocaleString("ko-KR");
            if (msFirst.style.display == "none") {
                totalResult[i].innerHTML = "0";
            } else {
                totalResult[i].innerHTML = apA.toLocaleString("ko-KR");

            }

        } else if (checkItem.checked == true && checkTitle.checked == true && checkItemSecond.checked == true && checkTitleSecond.checked == true) {

            if (msFirst.style.display == "none") {
                totalResult[i].innerHTML = tpB.toLocaleString("ko-KR");
            } else {
                totalResult[i].innerHTML = apAtpB.toLocaleString("ko-KR");
            }
        } else if (checkItem.checked == false && checkTitle.checked == false && checkItemSecond.checked == false && checkTitleSecond.checked == false) {
            totalResult[i].innerHTML = "0";

        } else if (checkItem.checked == false && checkTitle.checked == false && checkItemSecond.checked == true && checkTitleSecond.checked == true) {
            totalResult[i].innerHTML = tpB.toLocaleString("ko-KR");
        }
    }

};





/*전체선택*/
$(function () {


    $(".noneProduct").css("display", "none");


    $("#checkAll").click(function () {
        if ($("#checkAll").is(":checked")) {
            $(".chk").prop("checked", true);
            $(".proCount").text("2");
            for (var i = 0; i < terms.length; i++) {
                var tpB = total.value * priceB;
                var tpBapA = total.value * priceB + amount.value * priceA;

            }
            for (var i = 0; i < result.length; i++) {
                var apA = amount.value * priceA;
                var apAtpB = amount.value * priceA + total.value * priceB;
                totalResult[i].innerHTML = apAtpB.toLocaleString("ko-KR");

                if (checkItem.checked == true && checkTitle.checked == true && checkItemSecond.checked == true && checkTitleSecond.checked == true) {
                    if (msFirst.style.display == "none") {
                        totalResult[i].innerHTML = tpB.toLocaleString("ko-KR");
                        $(".proCount").text("1");
                    } else if (msSecond.style.display == "none") {
                        totalResult[i].innerHTML = apA.toLocaleString("ko-KR");
                        $(".proCount").text("1");
                    } else if (msSecond.style.display == "block" && msFirst.style.display == "block") {
                        totalResult[i].innerHTML = apAtpB.toLocaleString("ko-KR");
                        $(".proCount").text("2");
                    }
                }
            }

        } else {
            $(".chk").prop("checked", false);
            for (var i = 0; i < totalResult.length; i++) {
                totalResult[i].innerHTML = "0";
            }
            $(".proCount").text("0");
        }

    });




    /*
        하위 2개 선택시 전체 선택
        $(".chk").click(function () {
            if ($(".chk").is(":checked") =4) {
                $("#checkAll").prop("checked", false);

            } else {
                $("#checkAll").prop("checked", true);

            }
        });

    */








    $(".checkTitle").click(function () {
        if ($(".checkTitle").is(":checked")) {
            $(".checkItem").prop("checked", true);
            for (var i = 0; i < result.length; i++) {
                var apA = amount.value * priceA;

                var apAtpB = amount.value * priceA + total.value * priceB;
            }

            for (var i = 0; i < terms.length; i++) {
                var tpB = total.value * priceB;
                terms[i].innerHTML = tpB.toLocaleString("ko-KR");
                var tpBapA = total.value * priceB + amount.value * priceA;

                if (checkItem.checked == true && checkTitle.checked == true && checkItemSecond.checked == false && checkTitleSecond.checked == false) {
                    if (msFirst.style.display == "none") {
                        totalResult[i].innerHTML = "0";
                        $(".proCount").text("0");
                    } else {
                        totalResult[i].innerHTML = apA.toLocaleString("ko-KR");
                        $(".proCount").text("1");
                    }

                } else if (checkItem.checked == true && checkTitle.checked == true && checkItemSecond.checked == true && checkTitleSecond.checked == true) {
                    $("#checkAll").prop("checked", true);
                    totalResult[i].innerHTML = tpBapA.toLocaleString("ko-KR");
                    $(".proCount").text("2");

                    if (msFirst.style.display == "none") {
                        totalResult[i].innerHTML = tpB.toLocaleString("ko-KR");
                        $(".proCount").text("1");
                    } else if (msSecond.style.display == "none") {
                        totalResult[i].innerHTML = apA.toLocaleString("ko-KR");
                        $(".proCount").text("1");
                    }


                } else if (checkItem.checked == false && checkTitle.checked == false && checkItemSecond.checked == false && checkTitleSecond.checked == false) {
                    totalResult[i].innerHTML = "0";
                    $(".proCount").text("0");
                } else if (checkItem.checked == false && checkTitle.checked == false && checkItemSecond.checked == true && checkTitleSecond.checked == true) {
                    if (msSecond.style.display == "none") {
                        totalResult[i].innerHTML = "0";
                        $(".proCount").text("0");
                    } else {
                        totalResult[i].innerHTML = tpB.toLocaleString("ko-KR");
                        $(".proCount").text("1");
                    }
                }
            }



        } else {
            $(".checkItem").prop("checked", false);
            $("#checkAll").prop("checked", false);
            for (var i = 0; i < result.length; i++) {
                var apA = amount.value * priceA;

                var apAtpB = amount.value * priceA + total.value * priceB;
            }

            for (var i = 0; i < terms.length; i++) {
                var tpB = total.value * priceB;
                terms[i].innerHTML = tpB.toLocaleString("ko-KR");
                var tpBapA = total.value * priceB + amount.value * priceA;

                if (checkItem.checked == true && checkTitle.checked == true && checkItemSecond.checked == false && checkTitleSecond.checked == false) {
                    if (msFirst.style.display == "none") {
                        totalResult[i].innerHTML = apA.toLocaleString("ko-KR");
                        $(".proCount").text("1");
                    } else {
                        totalResult[i].innerHTML = apAtpB.toLocaleString("ko-KR");
                        $(".proCount").text("2");
                    }
                    $(".proCount").text("0");
                } else if (checkItem.checked == true && checkTitle.checked == true && checkItemSecond.checked == true && checkTitleSecond.checked == true) {
                    $("#checkAll").prop("checked", true);
                    totalResult[i].innerHTML = tpBapA.toLocaleString("ko-KR");
                    $(".proCount").text("2");
                    if (msFirst.style.display == "none") {
                        totalResult[i].innerHTML = tpB.toLocaleString("ko-KR");
                        $(".proCount").text("1");
                    } else if (msSecond.style.display == "none") {
                        totalResult[i].innerHTML = apA.toLocaleString("ko-KR");
                        $(".proCount").text("1");
                    }

                } else if (checkItem.checked == false && checkTitle.checked == false && checkItemSecond.checked == false && checkTitleSecond.checked == false) {
                    totalResult[i].innerHTML = "0";
                    $(".proCount").text("0");
                } else if (checkItem.checked == false && checkTitle.checked == false && checkItemSecond.checked == true && checkTitleSecond.checked == true) {
                    if (msSecond.style.display == "none") {
                        totalResult[i].innerHTML = "0";
                        $(".proCount").text("0");
                    } else {
                        totalResult[i].innerHTML = tpB.toLocaleString("ko-KR");
                        $(".proCount").text("1");

                    }

                }
            }

        }
    });



    $(".checkItem").click(function () {
        if ($(".checkItem").is(":checked")) {
            $(".checkTitle").prop("checked", true);
            for (var i = 0; i < result.length; i++) {
                var apA = amount.value * priceA;

                var apAtpB = amount.value * priceA + total.value * priceB;
            }
            for (var i = 0; i < terms.length; i++) {
                var tpB = total.value * priceB;
                terms[i].innerHTML = tpB.toLocaleString("ko-KR");
                var tpBapA = total.value * priceB + amount.value * priceA;


                if (checkItem.checked == true && checkTitle.checked == true && checkItemSecond.checked == false && checkTitleSecond.checked == false) {
                    if (msFirst.style.display == "none") {
                        totalResult[i].innerHTML = "0";
                    } else {
                        totalResult[i].innerHTML = apA.toLocaleString("ko-KR");
                        $(".proCount").text("1");
                    }

                } else if (checkItem.checked == true && checkTitle.checked == true && checkItemSecond.checked == true && checkTitleSecond.checked == true) {
                    $("#checkAll").prop("checked", true);
                    totalResult[i].innerHTML = tpBapA.toLocaleString("ko-KR");
                    $(".proCount").text("2");
                    if (msFirst.style.display == "none") {
                        totalResult[i].innerHTML = tpB.toLocaleString("ko-KR");
                        $(".proCount").text("1");
                    } else if (msSecond.style.display == "none") {
                        totalResult[i].innerHTML = apA.toLocaleString("ko-KR");
                        $(".proCount").text("1");
                    }
                } else if (checkItem.checked == false && checkTitle.checked == false && checkItemSecond.checked == false && checkTitleSecond.checked == false) {
                    totalResult[i].innerHTML = "0";
                    $(".proCount").text("0");

                } else if (checkItem.checked == false && checkTitle.checked == false && checkItemSecond.checked == true && checkTitleSecond.checked == true) {
                    if (msSecond.style.display == "none") {
                        totalResult[i].innerHTML = "0";
                        $(".proCount").text("0");
                    } else {
                        totalResult[i].innerHTML = tpB.toLocaleString("ko-KR");
                        $(".proCount").text("1");
                    }
                }

            }
        } else {
            $(".checkTitle").prop("checked", false);
            $("#checkAll").prop("checked", false);

            for (var i = 0; i < result.length; i++) {
                var apA = amount.value * priceA;

                var apAtpB = amount.value * priceA + total.value * priceB;
            }
            for (var i = 0; i < terms.length; i++) {
                var tpB = total.value * priceB;
                terms[i].innerHTML = tpB.toLocaleString("ko-KR");
                var tpBapA = total.value * priceB + amount.value * priceA;

                if (checkItem.checked == true && checkTitle.checked == true && checkItemSecond.checked == false && checkTitleSecond.checked == false) {
                    if (msFirst.style.display == "none") {
                        totalResult[i].innerHTML = "0";
                        $(".proCount").text("0");
                    } else {
                        totalResult[i].innerHTML = apA.toLocaleString("ko-KR");
                        $(".proCount").text("1");
                    }

                } else if (checkItem.checked == true && checkTitle.checked == true && checkItemSecond.checked == true && checkTitleSecond.checked == true) {
                    $("#checkAll").prop("checked", true);
                    totalResult[i].innerHTML = tpBapAB.toLocaleString("ko-KR");
                    $(".proCount").text("2");
                    if (msFirst.style.display == "none") {
                        totalResult[i].innerHTML = tpB.toLocaleString("ko-KR");
                        $(".proCount").text("1");
                    } else if (msSecond.style.display == "none") {
                        totalResult[i].innerHTML = apA.toLocaleString("ko-KR");
                        $(".proCount").text("1");
                    }
                } else if (checkItem.checked == false && checkTitle.checked == false && checkItemSecond.checked == false && checkTitleSecond.checked == false) {
                    totalResult[i].innerHTML = "0";
                    $(".proCount").text("0");

                } else if (checkItem.checked == false && checkTitle.checked == false && checkItemSecond.checked == true && checkTitleSecond.checked == true) {
                    if (msSecond.style.display == "none") {
                        totalResult[i].innerHTML = "0";
                        $(".proCount").text("0");
                    } else {
                        totalResult[i].innerHTML = tpB.toLocaleString("ko-KR");
                        $(".proCount").text("1");
                    }
                }
            }
        }
    });







    /*2 선택*/
    $(".checkTitleSecond").click(function () {
        if ($(".checkTitleSecond").is(":checked")) {
            $(".checkItemSecond").prop("checked", true);
            for (var i = 0; i < terms.length; i++) {
                var tpB = total.value * priceB;

                var tpBapA = total.value * priceB + amount.value * priceA;
            }
            for (var i = 0; i < result.length; i++) {
                var apA = amount.value * priceA;
                result[i].innerHTML = apA.toLocaleString("ko-KR");
                var apAtpB = amount.value * priceA + total.value * priceB;

                if (checkItem.checked == true && checkTitle.checked == true && checkItemSecond.checked == false && checkTitleSecond.checked == false) {
                    if (msFirst.style.display == "none") {
                        totalResult[i].innerHTML = "0";
                        $(".proCount").text("0");
                    } else {
                        totalResult[i].innerHTML = apA.toLocaleString("ko-KR");
                        $(".proCount").text("1");

                    }

                } else if (checkItem.checked == true && checkTitle.checked == true && checkItemSecond.checked == true && checkTitleSecond.checked == true) {
                    $("#checkAll").prop("checked", true);
                    totalResult[i].innerHTML = apAtpB.toLocaleString("ko-KR");
                    $(".proCount").text("2");
                    if (msFirst.style.display == "none") {
                        totalResult[i].innerHTML = tpB.toLocaleString("ko-KR");
                        $(".proCount").text("1");
                    } else if (msSecond.style.display == "none") {
                        totalResult[i].innerHTML = apA.toLocaleString("ko-KR");
                        $(".proCount").text("1");
                    }
                } else if (checkItem.checked == false && checkTitle.checked == false && checkItemSecond.checked == false && checkTitleSecond.checked == false) {
                    totalResult[i].innerHTML = "0";
                    $(".proCount").text("0");

                } else if (checkItem.checked == false && checkTitle.checked == false && checkItemSecond.checked == true && checkTitleSecond.checked == true) {
                    totalResult[i].innerHTML = tpB.toLocaleString("ko-KR");
                    $(".proCount").text("1");
                }

            }
        } else {
            $(".checkItemSecond").prop("checked", false);
            $("#checkAll").prop("checked", false);
            for (var i = 0; i < terms.length; i++) {
                var tpB = total.value * priceB;

                var tpBapA = total.value * priceB + amount.value * priceA;
            }
            for (var i = 0; i < result.length; i++) {
                var apA = amount.value * priceA;
                result[i].innerHTML = apA.toLocaleString("ko-KR");
                var apAtpB = amount.value * priceA + total.value * priceB;

                if (checkItem.checked == true && checkTitle.checked == true && checkItemSecond.checked == false && checkTitleSecond.checked == false) {
                    if (msFirst.style.display == "none") {
                        totalResult[i].innerHTML = "0";
                        $(".proCount").text("0");
                    } else {
                        totalResult[i].innerHTML = apA.toLocaleString("ko-KR");
                        $(".proCount").text("1");

                    }

                } else if (checkItem.checked == true && checkTitle.checked == true && checkItemSecond.checked == true && checkTitleSecond.checked == true) {
                    $("#checkAll").prop("checked", true);
                    totalResult[i].innerHTML = apAtpB.toLocaleString("ko-KR");
                    $(".proCount").text("2");
                    if (msFirst.style.display == "none") {
                        totalResult[i].innerHTML = tpB.toLocaleString("ko-KR");
                        $(".proCount").text("1");
                    } else if (msSecond.style.display == "none") {
                        totalResult[i].innerHTML = apA.toLocaleString("ko-KR");
                        $(".proCount").text("1");
                    }
                } else if (checkItem.checked == false && checkTitle.checked == false && checkItemSecond.checked == false && checkTitleSecond.checked == false) {
                    totalResult[i].innerHTML = "0";
                    $(".proCount").text("0");

                } else if (checkItem.checked == false && checkTitle.checked == false && checkItemSecond.checked == true && checkTitleSecond.checked == true) {
                    totalResult[i].innerHTML = tpB.toLocaleString("ko-KR");
                    $(".proCount").text("1");
                }



            }
        }
    });

    $(".checkItemSecond").click(function () {
        if ($(".checkItemSecond").is(":checked")) {
            $(".checkTitleSecond").prop("checked", true);
            for (var i = 0; i < terms.length; i++) {
                var tpB = total.value * priceB;

                var tpBapA = total.value * priceB + amount.value * priceA;
            }
            for (var i = 0; i < result.length; i++) {
                var apA = amount.value * priceA;

                var apAtpB = amount.value * priceA + total.value * priceB;

                if (checkItem.checked == true && checkTitle.checked == true && checkItemSecond.checked == false && checkTitleSecond.checked == false) {
                    if (msFirst.style.display == "none") {
                        totalResult[i].innerHTML = "0";
                        $(".proCount").text("0");
                    } else {
                        totalResult[i].innerHTML = apA.toLocaleString("ko-KR");
                        $(".proCount").text("1");
                    }
                } else if (checkItem.checked == true && checkTitle.checked == true && checkItemSecond.checked == true && checkTitleSecond.checked == true) {
                    $("#checkAll").prop("checked", true);
                    totalResult[i].innerHTML = apAtpB.toLocaleString("ko-KR");
                    $(".proCount").text("2");
                    if (msFirst.style.display == "none") {
                        totalResult[i].innerHTML = tpB.toLocaleString("ko-KR");
                        $(".proCount").text("1");
                    } else if (msSecond.style.display == "none") {
                        totalResult[i].innerHTML = apA.toLocaleString("ko-KR");
                        $(".proCount").text("1");
                    }
                } else if (checkItem.checked == false && checkTitle.checked == false && checkItemSecond.checked == false && checkTitleSecond.checked == false) {
                    totalResult[i].innerHTML = "0";
                    $(".proCount").text("0");

                } else if (checkItem.checked == false && checkTitle.checked == false && checkItemSecond.checked == true && checkTitleSecond.checked == true) {
                    totalResult[i].innerHTML = tpB.toLocaleString("ko-KR");
                    $(".proCount").text("1");
                }

            }
        } else {
            $(".checkTitleSecond").prop("checked", false);
            $("#checkAll").prop("checked", false);
            for (var i = 0; i < terms.length; i++) {
                var tpB = total.value * priceB;

                var tpBapA = total.value * priceB + amount.value * priceA;
            }
            for (var i = 0; i < result.length; i++) {
                var apA = amount.value * priceA;

                var apAtpB = amount.value * priceA + total.value * priceB;

                if (checkItem.checked == true && checkTitle.checked == true && checkItemSecond.checked == false && checkTitleSecond.checked == false) {
                    if (msFirst.style.display == "none") {
                        totalResult[i].innerHTML = "0";
                        $(".proCount").text("0");
                    } else {
                        totalResult[i].innerHTML = apA.toLocaleString("ko-KR");
                        $(".proCount").text("1");
                    }
                } else if (checkItem.checked == true && checkTitle.checked == true && checkItemSecond.checked == true && checkTitleSecond.checked == true) {
                    $("#checkAll").prop("checked", true);
                    totalResult[i].innerHTML = apAtpB.toLocaleString("ko-KR");
                    $(".proCount").text("2");
                    if (msFirst.style.display == "none") {
                        totalResult[i].innerHTML = tpB.toLocaleString("ko-KR");
                        $(".proCount").text("1");
                    } else if (msSecond.style.display == "none") {
                        totalResult[i].innerHTML = apA.toLocaleString("ko-KR");
                        $(".proCount").text("1");
                    }
                } else if (checkItem.checked == false && checkTitle.checked == false && checkItemSecond.checked == false && checkTitleSecond.checked == false) {
                    totalResult[i].innerHTML = "0";
                    $(".proCount").text("0");

                } else if (checkItem.checked == false && checkTitle.checked == false && checkItemSecond.checked == true && checkTitleSecond.checked == true) {
                    totalResult[i].innerHTML = tpB.toLocaleString("ko-KR");
                    $(".proCount").text("1");
                }

            }
        }
    });



    $(".con").css("display", "none");
    $(".menuAll").click(function () {
        $(".con").toggle();

    });


    $(".mobInfo").click(function () {
        $(".mobFooterContent ul").toggle();
        $(".mobInfo .ri-arrow-down-s-line").toggle();
        $(".mobInfo .ri-arrow-up-s-line").toggle();
    });







    $(".close").click(function () {
        var q = confirm("선택하신 상품을 삭제하시겠습니까?");
        if (q) {
            $("#MinishopFirst").css("display", "none");
            $(".numAll").text("1");
            if (($("#MinishopFirst").css("display") == "none") && ($("#MinishopSecond").css("display") == "none")) {

                $(".order").css("display", "none");
                $(".noneProduct").css("display", "block");
                $(".innerCont").css("display", "none");
                $(".numAll").text("0");
                $("totalResult").text("0");
            }
            for (var i = 0; i < result.length; i++) {
                var apA = amount.value * priceA;

                var apAtpB = amount.value * priceA + total.value * priceB;
            }
            for (var i = 0; i < terms.length; i++) {

                var tpB = total.value * priceB;
                terms[i].innerHTML = tpB.toLocaleString("ko-KR");


                var tpBapA = total.value * priceB + amount.value * priceA;

                if (checkItem.checked == true && checkTitle.checked == true && checkItemSecond.checked == false && checkTitleSecond.checked == false) {
                    if (msFirst.style.display == "none") {
                        totalResult[i].innerHTML = "0";
                    } else {
                        totalResult[i].innerHTML = tpB.toLocaleString("ko-KR");
                    }


                } else if (checkItem.checked == true && checkTitle.checked == true && checkItemSecond.checked == true && checkTitleSecond.checked == true) {
                    if (msFirst.style.display == "none" && msSecond.style.display == "block") {
                        totalResult[i].innerHTML = tpB.toLocaleString("ko-KR");
                    } else if (msFirst.style.display == "block") {
                        totalResult[i].innerHTML = apAtpB.toLocaleString("ko-KR");
                    } else if (msSecond.style.display == "none" && msFirst.style.display == "none") {
                        totalResult[i].innerHTML = "0";
                    } else if (msSecond.style.display == "block" || msFirst.style.display == "none") {
                        totalResult[i].innerHTML = tpB.toLocaleString("ko-KR");
                    }
                } else if (checkItem.checked == false && checkTitle.checked == false && checkItemSecond.checked == false && checkTitleSecond.checked == false) {
                    totalResult[i].innerHTML = "0";

                } else if (checkItem.checked == false && checkTitle.checked == false && checkItemSecond.checked == true && checkTitleSecond.checked == true) {
                    totalResult[i].innerHTML = tpB.toLocaleString("ko-KR");
                }

            }

        }
    });


    $(".off").click(function () {
        var q = confirm("선택하신 상품을 삭제하시겠습니까?");
        if (q) {
            $("#MinishopSecond").css("display", "none");
            $(".numAll").text("1");
            $(".numSmile").text("0");
            if (($("#MinishopFirst").css("display") == "none") && ($("#MinishopSecond").css("display") == "none")) {
                $(".order").css("display", "none");
                $(".noneProduct").css("display", "block");
                $(".innerCont").css("display", "none");
                $(".numAll").text("0");
                $("totalResult").text("0");
            }
            for (var i = 0; i < terms.length; i++) {
                var tpB = total.value * priceB;

                var tpBapA = total.value * priceB + amount.value * priceA;
            }

            for (var i = 0; i < result.length; i++) {
                var apA = amount.value * priceA;
                result[i].innerHTML = apA.toLocaleString("ko-KR");
                var apAtpB = amount.value * priceA + total.value * priceB;


                if (checkItem.checked == true && checkTitle.checked == true && checkItemSecond.checked == false && checkTitleSecond.checked == false) {
                    totalResult[i].innerHTML = apA.toLocaleString("ko-KR");

                } else if (checkItem.checked == true && checkTitle.checked == true && checkItemSecond.checked == true && checkTitleSecond.checked == true) {
                    if (msSecond.style.display == "none" && msFirst.style.display == "block") {
                        totalResult[i].innerHTML = apA.toLocaleString("ko-KR");
                    } else if (msSecond.style.display == "block") {
                        totalResult[i].innerHTML = apAtpB.toLocaleString("ko-KR");
                    } else if (msSecond.style.display == "none" && msFirst.style.display == "none") {
                        totalResult[i].innerHTML = "0";
                    } else if (msFirst.style.display == "block" || msSecond.style.display == "none") {
                        totalResult[i].innerHTML = apA.toLocaleString("ko-KR");
                    }
                } else if (checkItem.checked == false && checkTitle.checked == false && checkItemSecond.checked == false && checkTitleSecond.checked == false) {
                    totalResult[i].innerHTML = "0";

                } else if (checkItem.checked == false && checkTitle.checked == false && checkItemSecond.checked == true && checkTitleSecond.checked == true) {
                    if (msSecond.style.display == "none") {
                        totalResult[i].innerHTML = "0";
                    } else {
                        totalResult[i].innerHTML = tpB.toLocaleString("ko-KR");

                    }
                }


            }




        }
    });
});
