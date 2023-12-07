AFRAME.registerComponent('play-on-click', {
    init: function () {
      this.onClick = this.onClick.bind(this);
    },
    play: function () {
        let startElmt = document.getElementById('startElmt');
        startElmt.addEventListener('click', this.onClick);
    },
    pause: function () {
        let startElmt = document.getElementById('startElmt');
        startElmt.removeEventListener('click', this.onClick);
    },
    onClick: function (evt) {
        var videoEl = this.el.getAttribute('material').src;
        if (!videoEl) { return; }
        this.el.object3D.visible = true;
        videoEl.play();
        let startElmt = document.getElementById('startElmt');
        startElmt.removeEventListener('click', this.onClick);    }
  });