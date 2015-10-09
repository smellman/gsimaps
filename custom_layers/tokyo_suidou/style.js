{
options:
{
  attribution: 'ベクトルタイル',maxNativeZoom: 2
},
geojsonOptions:
{
   pointToLayer: function (feature, latlng) {
     return L.marker(latlng);
   },
   style: function (feature) {
   },
   onEachFeature: function (feature, layer) {
    var s = '';
    s += "<span style='font-size: 14px;font-weight: bold;color:#000;'>" + feature.properties["id"] + ": " + feature.properties["name"] + "</span>";

    s += "<dl>";
    s += "<dt>種別</dt>";
    s += "<dd>" + feature.properties["type"] + "</dd>"
    s += "<dt>確保水量（立方メートル）</dt>";
    s += "<dd>" + feature.properties["potential"] + "</dd>"
    s += "<dt>所在地</dt>";
    s += "<dd>" + feature.properties["address"] + "</dd>"
    s += "<dt>詳細画像</dt>";
    s += "<dd>" + "<a href='" +feature.properties["photo_url"] + "' target='_blank'>リンク</a>" + "</dd>"
    s += "<dt>情報更新日</dt>";
    s += "<dd>" + feature.properties["update_date"] + "</dd>"
    s += "<dt>備考</dt>";
    s += "<dd>" + feature.properties["remark"] + "</dd>"
    s += "</dl>"

    layer.bindPopup(s);
   }
}
}
