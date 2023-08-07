function subfun() {
    $.ajax({
        url : "https://suggest-test.ntut-exp.eu.org/data",
        crossDomain: true,
        type : "POST",
        data : $('#form').serialize(),
        success : function() {
            let result = document.querySelector("#suggest-result");
            result.innerHTML = result.innerHTML.replace("正在回報...", "回報成功！");

            let img = document.querySelector("#suggest-img");
            img.src = "/img/icons8-checkmark.gif";
        },
        error : function() {
            let result = document.querySelector("#suggest-result");
            result.innerHTML = result.innerHTML.replace("正在回報...", "回報錯誤");

            let img = document.querySelector("#suggest-img");
            img.src = "/img/icons8-error.gif";
        }
    });

    document.querySelector("#suggest-result").innerHTML = `正在回報... <img id="suggest-img" src="/img/icons8-loading.gif" alt="check">`;
    new bootstrap.Modal(document.getElementById("Modal"), {}).show();
    return false;
}

function select_change() {
    let ID = document.querySelector("#ID");
    let ID_input = document.querySelector("#ID_input");
    let name = document.querySelector("#name");
    let name_input = document.querySelector("#name_input");

    if(ID?.style?.display === "none") {
        ID.style.display = "block";
        ID_input.value = "";
        name.style.display = "block";
        name_input.value = "";
    }

    else {
        ID.style.display = "none";
        ID_input.value = "none";
        name.style.display = "none";
        name_input.value = "none";
    }
}