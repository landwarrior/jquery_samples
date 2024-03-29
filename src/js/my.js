$(function() {
    // 要素がアクティブになったとき（フォーカスが当たった時）にイベントを拾う
    $('#cont1_1').focus(function() {
        // div要素の中身を文字列として取得するのでtextを使う
        const result1_1 = $('#result1_1').text();
        // div要素の中身に値をセットするのでtextを使う
        // 元々入っていた値は消えてしまうので、連結して入れる
        $('#result1_1').text(result1_1 + 'focusされた');
    });
    // 要素が非アクティブになったとき（フォーカスが外れた時）にイベントを拾う
    $('#cont1_1').blur(function() {
        const result1_1 = $('#result1_1').text();
        $('#result1_1').text(result1_1 + 'blurされた');
    });

    // changeイベントを拾った時の動作
    $('#cont2_1').change(function() {
        // テキストボックスの中身を取得
        const cont2_1 = $('#cont2_1').val();
        // それをdiv要素に入れる
        $('#result2_1').text(cont2_1);
    });

    // inputイベントを拾った時の動作
    // jQuery自体にinputというfunctionはないみたいで、onでイベントを拾う必要があるっぽい
    $('#cont3_1').on('input', function() {
        // テキストボックスの中身を取得
        const cont3_1 = $('#cont3_1').val();
        // それをdiv要素に入れる
        $('#result3_1').text(cont3_1);
    });
});

// JavaScript本来の書き方はこちら
window.addEventListener('load', function() {
    document.getElementById('cont1_2').onfocus = function() {
        const result1_2 = document.getElementById('result1_2').innerText;
        document.getElementById('result1_2').innerText = result1_2 + 'focusされた';
    };
    // onfocus だとイベントを上書きしてしまい、他のイベントを登録できないらしい。
    // なので、イベントに対して複数の処理を紐づけたいときは addEventListener を使う
    document.getElementById('cont1_2').addEventListener('focus', function() {
        const result1_2 = document.getElementById('result1_2').innerText;
        document.getElementById('result1_2').innerText = result1_2 + 'focusされた2';
    });
    // こちらを使うと、最初の「focusされた」が上書きされて表示されなくなる（「focusされた2」は追加される
    // document.getElementById('cont1_2').onfocus = function() {
    //     const result1_2 = document.getElementById('result1_2').innerText;
    //     document.getElementById('result1_2').innerText = result1_2 + 'focusされた3';
    // };

    document.getElementById('cont1_2').onblur = function() {
        const result1_2 = document.getElementById('result1_2').innerText;
        document.getElementById('result1_2').innerText = result1_2 + 'blurされた';
    };

    document.getElementById('cont2_2').onchange = function() {
        const cont2_2 = document.getElementById('cont2_2').value;
        document.getElementById('result2_2').innerText = cont2_2;
    };

    document.getElementById('cont3_2').oninput = function() {
        const cont3_2 = document.getElementById('cont3_2').value;
        document.getElementById('result3_2').innerText = cont3_2;
    };

    // ループ処理の試し
    let start = Date.now();
    for (let i = 0; i < 10000; i++) {
        const elements = document.querySelectorAll('#table1 tbody tr');
        for (const elem of elements) {
            const test = elem.querySelector('td:nth-child(3)').innerText;
            // コンソールに出したいわけでもないのでただ変数をそのままおく（意味的には true になるはず）
            test;
        }
    }
    let end = Date.now();
    document.getElementById('result_native').innerText = end - start;
    start = Date.now();
    for (let i = 0; i < 10000; i++) {
        $('#table1 tbody tr').each(function() {
            const test = $(this).find('td:nth-child(3)').text();
            test;
        });
    }
    end = Date.now();
    document.getElementById('result_jquery').innerText = end - start;
});

// 先頭に書いたjQueryのサンプルは、以下のように書いてもいい
$(document).ready(function() {
    // 何かしらの処理
});
