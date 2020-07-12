$(function() {
  // 要素がアクティブになったとき（フォーカスが当たった時）にイベントを拾う
  $('#cont1_1').focus(function() {
    // div要素の中身を文字列として取得するのでtextを使う
    let result1_1 = $('#result1_1').text();
    // div要素の中身に値をセットするのでtextを使う
    // 元々入っていた値は消えてしまうので、連結して入れる
    $('#result1_1').text(result1_1 + 'focusされた');
  });
  // 要素が非アクティブになったとき（フォーカスが外れた時）にイベントを拾う
  $('#cont1_1').blur(function() {
    let result1_1 = $('#result1_1').text();
    $('#result1_1').text(result1_1 + 'blurされた');
  })

  // changeイベントを拾った時の動作
  $('#cont2_1').change(function() {
    // テキストボックスの中身を取得
    let cont2_1 = $('#cont2_1').val();
    // それをdiv要素に入れる
    $('#result2_1').text(cont2_1);
  });

  // inputイベントを拾った時の動作
  // jQuery自体にinputというfunctionはないみたいで、onでイベントを拾う必要があるっぽい
  $('#cont3_1').on('input', function() {
    // テキストボックスの中身を取得
    let cont3_1 = $('#cont3_1').val();
    // それをdiv要素に入れる
    $('#result3_1').text(cont3_1);
  });
});

// JavaScript本来の書き方はこちら
window.onload = function() {
  document.getElementById('cont1_2').onfocus = function() {
    let result1_2 = document.getElementById('result1_2').innerText;
    document.getElementById('result1_2').innerText = result1_2 + 'focusされた';
  };

  document.getElementById('cont1_2').onblur = function() {
    let result1_2 = document.getElementById('result1_2').innerText;
    document.getElementById('result1_2').innerText = result1_2 + 'blurされた';
  };
}
// 先頭に書いたjQueryのサンプルは、以下のように書いてもいい
$(document).ready(function() {
  // 何かしらの処理
});
