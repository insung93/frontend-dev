var imageViewer = {
    init: function () {
        var that = this;
        $(function () {
            // 첫번째 이미지 선택
            that._changeImage();
            $("#btn-change").click(that._changeImage.bind(that));
            $("#btn-slideshow").click(that._slideShow.bind(that));
            $(".image-viewer img").dblclick(that._consoleLog);
        });
    },
	_consoleLog: function(){
		var name = $(this).attr("alt");
		console.log(name);
	},
    _slideShow: function () {
        if (this._intervalId) {
            // 슬라이드쇼가 진행 상태
            clearInterval(this._intervalId);
            this._intervalId = null;
            // 1. 타이머 중지
            $("#btn-slideshow").text("슬라이드쇼 시작");
            // 2. 버튼 텍스트 => 슬라이드쇼 중지 
        } else {
            // 슬라이드쇼가 중지 상태
            var that = this;
            // 1. 타이머 시작
            //that._intervalId = setInterval(function() {
            //    that._changeImage();
            //}, 1000);
            that._intervalId = setInterval(that._changeImage.bind(that), 1000);
            // 2. 버튼 텍스트 => 슬라이드쇼 중지
            $("#btn-slideshow").text("슬라이드쇼 중지");
        }
    },
    _changeImage: function () {
        var result = Math.floor(Math.random() * this._images.length);
        var info = this._images[result];
        $("img").attr({
            src: "images/" + info.file,
            alt: info.name,
            title: info.name
        });
    },
    _intervalId: null,
    _images: [
        { name: "국화", file: "Chrysanthemum.jpg" },
        { name: "사막", file: "Desert.jpg" },
        { name: "수국", file: "Hydrangeas.jpg" },
        { name: "해파리", file: "Jellyfish.jpg" },
        { name: "코알라", file: "Koala.jpg" },
        { name: "등대", file: "Lighthouse.jpg" },
        { name: "펭귄", file: "Penguins.jpg" },
        { name: "툴립", file: "Tulips.jpg" },
    ]
}