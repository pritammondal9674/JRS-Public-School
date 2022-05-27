$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $('#back-to-top').tooltip('show');

    new WOW().init();
    objectFitImages();
});

$(document).find("#mdb-lightbox-ui").load("./mdb-addons/mdb-lightbox-ui.html");

function closeNotice() {
    document.getElementById("notice-content-section").style.width = "0px";
    document.getElementById("notice-board").style.width = "40px";
    document.getElementById("button-row").style.width = "40px";
    document.getElementById("left-button").style.display = "none";
    document.getElementById("right-button").style.display = "block";
}

function openNotice() {
    document.getElementById("notice-content-section").style.width = "300px";
    document.getElementById("notice-board").style.width = "300px";
    document.getElementById("button-row").style.width = "300px";
    document.getElementById("right-button").style.display = "none";
    document.getElementById("left-button").style.display = "block";
}

function start() {
    new mq('m1');
    mqRotate(mqr); // must come last
}
window.onload = start;

function startstopchange(m, txt) { for (var j = m.length - 1; j > -1; j--) document.getElementById('ss' + m[j].id).value = txt; }
function startstop(m, n) { var ss = document.createElement('form'); var sd = document.createElement('div'); sd.style.display = 'none'; ss.appendChild(sd); var sb = document.createElement('input'); sb.type = 'button'; sd.appendChild(sb); sb.id = 'ss' + n.id; sb.value = 'STOP'; sb.onclick = function () { if (this.value == 'STOP') { clearTimeout(m[0].TO); startstopchange(m, 'START'); } else { mqRotate(m); startstopchange(m, 'STOP'); } }; n.parentNode.insertBefore(ss, n); }
function objHeight(obj) { if (obj.offsetHeight) return obj.offsetHeight; if (obj.clip) return obj.clip.height; return 0; } var mqr = []; function mq(id) { this.mqo = document.getElementById(id); var ht = objHeight(this.mqo.getElementsByTagName('div')[0]) + 5; var fulht = objHeight(this.mqo); var txt = this.mqo.getElementsByTagName('div')[0].innerHTML; this.mqo.innerHTML = ''; var wid = this.mqo.style.width; this.mqo.onmouseout = function () { mqRotate(mqr); startstopchange(mqr, 'STOP'); }; this.mqo.onmouseover = function () { clearTimeout(mqr[0].TO); startstopchange(mqr, 'START'); }; this.mqo.ary = []; var maxw = Math.ceil(fulht / ht) + 1; for (var i = 0; i < maxw; i++) { this.mqo.ary[i] = document.createElement('div'); this.mqo.ary[i].innerHTML = txt; this.mqo.ary[i].style.position = 'absolute'; this.mqo.ary[i].style.top = (ht * i) + 'px'; this.mqo.ary[i].style.height = ht + 'px'; this.mqo.ary[i].style.width = wid; this.mqo.appendChild(this.mqo.ary[i]); } mqr.push(this.mqo); startstop(mqr, this.mqo); } function mqRotate(mqr) { if (!mqr) return; for (var j = mqr.length - 1; j > -1; j--) { maxa = mqr[j].ary.length; for (var i = 0; i < maxa; i++) { var x = mqr[j].ary[i].style; x.top = (parseInt(x.top, 10) - 1) + 'px'; } var y = mqr[j].ary[0].style; if (parseInt(y.top, 10) + parseInt(y.height, 10) < 0) { var z = mqr[j].ary.shift(); z.style.top = (parseInt(z.style.top) + parseInt(z.style.height) * maxa) + 'px'; mqr[j].ary.push(z); } } mqr[0].TO = setTimeout('mqRotate(mqr)', 50); }