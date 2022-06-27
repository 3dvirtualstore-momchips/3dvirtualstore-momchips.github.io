(function(){
    var script = {
 "mouseWheelEnabled": true,
 "borderRadius": 0,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "start": "this.init()",
 "propagateClick": false,
 "backgroundPreloadEnabled": true,
 "width": "100%",
 "overflow": "visible",
 "paddingRight": 0,
 "borderSize": 0,
 "desktopMipmappingEnabled": false,
 "verticalAlign": "top",
 "minHeight": 20,
 "definitions": [{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 2.81,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_84FB841D_9D6F_D551_41CF_0BC2220C5C9A",
 "yaw": 0.91,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_84FB841D_9D6F_D551_41CF_0BC2220C5C9A_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   }
  ]
 },
 "pitch": 3.34,
 "hideDuration": 0,
 "showDuration": 0,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_B27E8D9A_A543_90BF_41C8_1B47222E4529",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "levels": [
  {
   "url": "media/popup_B165C1A1_953A_7CB4_41B4_D54F4FD49A74_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_B165C1A1_953A_7CB4_41B4_D54F4FD49A74_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_B165C1A1_953A_7CB4_41B4_D54F4FD49A74_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_AA57F2F9_A4A0_6C75_41C6_368D9FCD7C3C"
},
{
 "levels": [
  {
   "url": "media/popup_B6C1269B_955E_2494_41E1_CC343C297961_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_B6C1269B_955E_2494_41E1_CC343C297961_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_B6C1269B_955E_2494_41E1_CC343C297961_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_ABBA9309_A4A0_6D92_41E1_53144BC0E018"
},
{
 "levels": [
  {
   "url": "media/popup_8251E853_9B9C_8879_419E_B5427F612429_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_8251E853_9B9C_8879_419E_B5427F612429_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_8251E853_9B9C_8879_419E_B5427F612429_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_AB965357_A4A0_6DBD_41DF_410B28BBC377"
},
{
 "levels": [
  {
   "url": "media/popup_8F292AC3_9BAB_885A_41C1_70D0F93FA726_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_8F292AC3_9BAB_885A_41C1_70D0F93FA726_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_8F292AC3_9BAB_885A_41C1_70D0F93FA726_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_8F292AC3_9BAB_885A_41C1_70D0F93FA726_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_82EA06B7_9A6D_783A_41E1_0FD870A82706"
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_8251E853_9B9C_8879_419E_B5427F612429",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_8251E853_9B9C_8879_419E_B5427F612429_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_8251E853_9B9C_8879_419E_B5427F612429_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": -1.61,
 "rotationY": 0,
 "yaw": -1.65,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 4.51
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_82553F4D_9B9C_8869_41D0_1EA648CB0974",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_82553F4D_9B9C_8869_41D0_1EA648CB0974_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_82553F4D_9B9C_8869_41D0_1EA648CB0974_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": -1.57,
 "rotationY": 0,
 "yaw": 8.08,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 5.03
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98369766_97AC_B85B_4199_2CB4BEE25956_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 38,
      "colCount": 38,
      "width": 19456,
      "tags": "ondemand",
      "height": 19456
     },
     {
      "url": "media/panorama_98369766_97AC_B85B_4199_2CB4BEE25956_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 19,
      "colCount": 19,
      "width": 9728,
      "tags": "ondemand",
      "height": 9728
     },
     {
      "url": "media/panorama_98369766_97AC_B85B_4199_2CB4BEE25956_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "height": 5120
     },
     {
      "url": "media/panorama_98369766_97AC_B85B_4199_2CB4BEE25956_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_98369766_97AC_B85B_4199_2CB4BEE25956_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_98369766_97AC_B85B_4199_2CB4BEE25956_0/f/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_98369766_97AC_B85B_4199_2CB4BEE25956_0/f/6/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_98369766_97AC_B85B_4199_2CB4BEE25956_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "kursi kiri",
 "id": "panorama_98369766_97AC_B85B_4199_2CB4BEE25956",
 "hfov": 30,
 "overlays": [
  "this.overlay_9836C766_97AC_B85B_41BE_33E69B974832",
  "this.overlay_9836D766_97AC_B85B_41CC_195CC4A59E61",
  "this.overlay_98363766_97AC_B85B_41D4_92171E111286",
  "this.overlay_98360766_97AC_B85B_41E0_B43F4BCA9633"
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_99BA27DF_97A4_F86A_41BE_8455B88BC42D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_81DF1DA0_9BE7_88D7_41E1_8D48B5A1F9A6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_99669057_97EC_B87A_41CC_1D337A9D2B46"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9846488E_97A4_88EA_41BF_CD3C5F04F01D"
  }
 ],
 "vfov": 15.38,
 "hfovMax": 30,
 "partial": true,
 "thumbnailUrl": "media/panorama_98369766_97AC_B85B_4199_2CB4BEE25956_t.jpg"
},
{
 "class": "ImageResource",
 "id": "ImageResource_84A462DE_9D1C_52D3_41CB_3688AC19D83C"
},
{
 "levels": [
  {
   "url": "media/popup_82553F4D_9B9C_8869_41D0_1EA648CB0974_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_82553F4D_9B9C_8869_41D0_1EA648CB0974_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_82553F4D_9B9C_8869_41D0_1EA648CB0974_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_82553F4D_9B9C_8869_41D0_1EA648CB0974_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_82D5970B_9A6D_79E9_41C5_6B9A52024C52"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9FE32371_952A_1D97_4187_224C5F74D5B6_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "height": 5120
     },
     {
      "url": "media/panorama_9FE32371_952A_1D97_4187_224C5F74D5B6_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_9FE32371_952A_1D97_4187_224C5F74D5B6_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_9FE32371_952A_1D97_4187_224C5F74D5B6_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9FE32371_952A_1D97_4187_224C5F74D5B6_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_9FE32371_952A_1D97_4187_224C5F74D5B6_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "photo1656054531",
 "id": "panorama_9FE32371_952A_1D97_4187_224C5F74D5B6",
 "hfov": 30,
 "overlays": [
  "this.overlay_983670FC_952E_1C8C_41DE_EBBAB23F8FF4",
  "this.overlay_BD3A1128_A5C1_919B_41DE_9BAC8BF729AB",
  "this.popup_B3B51FA8_A5C3_909A_41C5_0016C8254821"
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_99BA27DF_97A4_F86A_41BE_8455B88BC42D"
  }
 ],
 "vfov": 17.13,
 "hfovMax": 30,
 "partial": true,
 "thumbnailUrl": "media/panorama_9FE32371_952A_1D97_4187_224C5F74D5B6_t.jpg"
},
{
 "levels": [
  {
   "url": "media/popup_81E6D04A_9B9B_B86B_41DE_21F4536E4676_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_81E6D04A_9B9B_B86B_41DE_21F4536E4676_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_81E6D04A_9B9B_B86B_41DE_21F4536E4676_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_AB9D9347_A4A0_6D9D_41E3_49C6C4612E62"
},
{
 "items": [
  {
   "media": "this.video_B083248E_A5C6_7097_41D2_7A8B6878D97E",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.playList_BF7677AE_A543_9097_41B5_FDF66FAF106E, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_BF7677AE_A543_9097_41B5_FDF66FAF106E, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_BF7677AE_A543_9097_41B5_FDF66FAF106E",
 "class": "PlayList"
},
{
 "class": "ImageResource",
 "id": "ImageResource_84A282D2_9D1C_52D3_41D7_5131D79B9F5E"
},
{
 "class": "ImageResource",
 "id": "ImageResource_82EA26B7_9A6D_783A_4191_44B847084D9E"
},
{
 "class": "ImageResource",
 "id": "ImageResource_8D6EE5E4_9B9C_985F_41CE_F8D5E669EA06"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_9FE32371_952A_1D97_4187_224C5F74D5B6_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "levels": [
  {
   "url": "media/popup_8251E853_9B9C_8879_419E_B5427F612429_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_8251E853_9B9C_8879_419E_B5427F612429_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_8251E853_9B9C_8879_419E_B5427F612429_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_8251E853_9B9C_8879_419E_B5427F612429_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_82D40714_9A6D_79FF_41C5_20056C193C17"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_B35BDB56_A543_91B7_41DD_889590E03541",
 "initialPosition": {
  "yaw": 0.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A094D79_97A7_8836_41BC_AF57757A41C8_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 45,
      "colCount": 45,
      "width": 23040,
      "tags": "ondemand",
      "height": 23040
     },
     {
      "url": "media/panorama_9A094D79_97A7_8836_41BC_AF57757A41C8_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 23,
      "colCount": 23,
      "width": 11776,
      "tags": "ondemand",
      "height": 11776
     },
     {
      "url": "media/panorama_9A094D79_97A7_8836_41BC_AF57757A41C8_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 12,
      "colCount": 12,
      "width": 6144,
      "tags": "ondemand",
      "height": 6144
     },
     {
      "url": "media/panorama_9A094D79_97A7_8836_41BC_AF57757A41C8_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_9A094D79_97A7_8836_41BC_AF57757A41C8_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_9A094D79_97A7_8836_41BC_AF57757A41C8_0/f/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9A094D79_97A7_8836_41BC_AF57757A41C8_0/f/6/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_9A094D79_97A7_8836_41BC_AF57757A41C8_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "vegetable chips kanan",
 "id": "panorama_9A094D79_97A7_8836_41BC_AF57757A41C8",
 "hfov": 30,
 "overlays": [
  "this.overlay_81619516_9BBB_99FA_41D4_9D2237A74294",
  "this.overlay_814574F8_9BBB_7836_41D2_575DDE8F783C",
  "this.overlay_8338D67D_9BA7_7829_4195_D9A64DEE4FD7",
  "this.overlay_816DA260_9BA7_B856_41DE_261ED1B8EE47",
  "this.overlay_80633405_9BA7_BFD9_41AF_D583094FD2AF",
  "this.overlay_83CAF5D2_9BA7_B87A_41D6_5DAE492B3A8A",
  "this.overlay_850C186B_9BA7_8829_41DA_D12F68F56D65",
  "this.overlay_811CFA7E_9BA7_882B_41E2_B2BEECC7C800",
  "this.overlay_80578C1B_9BA7_8FE8_41E0_E9B452D99C16",
  "this.overlay_839E8E0E_9BA7_8BEA_41C7_46D64958C554",
  "this.overlay_847100E6_9BA7_985B_41D1_9C9CF1AA1727",
  "this.overlay_813DF302_9BA7_99DA_41E0_A21D28EDDC08",
  "this.overlay_83C3D568_9BA7_9857_41E0_59BDEE400011",
  "this.overlay_82D307D0_9BA7_9876_41D1_470749A430CD",
  "this.popup_83B2119A_9BA5_B8EB_41DD_CC95ADC227E2",
  "this.popup_81207DF7_9BA4_8839_41E2_267A7AA9C942",
  "this.popup_82205929_9BAB_89D6_41CB_E817F9EE19BD",
  "this.popup_8293CDF3_9BAC_8839_41BD_163D579207DA",
  "this.popup_83BEADBB_9BAD_8829_418E_674811CF112F",
  "this.popup_821740A4_9BAF_98DE_41D5_38C6FC24568F",
  "this.popup_85230C70_9BAC_8837_41D9_1917A6A062A3",
  "this.popup_818913A7_9BAD_78DA_41DE_AC45239115BF",
  "this.popup_81243F57_9BAC_887A_41AB_BA2A79F098F6",
  "this.popup_82C67A90_9BAB_88F6_41CD_77CA73255A7D",
  "this.popup_854680B2_9BA4_983B_41C0_C926FD9ED5F1",
  "this.popup_80E4AB09_9BA5_89E9_41C9_C436C62A2C61"
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_99A1F443_97A5_B859_41E0_6D42E4DF0706"
  }
 ],
 "vfov": 15.39,
 "hfovMax": 30,
 "partial": true,
 "thumbnailUrl": "media/panorama_9A094D79_97A7_8836_41BC_AF57757A41C8_t.jpg"
},
{
 "levels": [
  {
   "url": "media/popup_8293CDF3_9BAC_8839_41BD_163D579207DA_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_8293CDF3_9BAC_8839_41BD_163D579207DA_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_8293CDF3_9BAC_8839_41BD_163D579207DA_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_AB980347_A4A0_6D9D_41E2_3B950F9B8686"
},
{
 "levels": [
  {
   "url": "media/popup_8AC1B058_9BEC_B876_41D8_FC7C1A313139_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_8AC1B058_9BEC_B876_41D8_FC7C1A313139_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_8AC1B058_9BEC_B876_41D8_FC7C1A313139_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_AA5C12EA_A4A0_6C96_41C5_C3826DE7BD65"
},
{
 "class": "ImageResource",
 "id": "ImageResource_8D6F95E4_9B9C_985F_41DF_56867AFFC19F"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A033A7C_97A4_882E_41B5_1A5A5BB15FA1_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 38,
      "colCount": 38,
      "width": 19456,
      "tags": "ondemand",
      "height": 19456
     },
     {
      "url": "media/panorama_9A033A7C_97A4_882E_41B5_1A5A5BB15FA1_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 19,
      "colCount": 19,
      "width": 9728,
      "tags": "ondemand",
      "height": 9728
     },
     {
      "url": "media/panorama_9A033A7C_97A4_882E_41B5_1A5A5BB15FA1_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "height": 5120
     },
     {
      "url": "media/panorama_9A033A7C_97A4_882E_41B5_1A5A5BB15FA1_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_9A033A7C_97A4_882E_41B5_1A5A5BB15FA1_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_9A033A7C_97A4_882E_41B5_1A5A5BB15FA1_0/f/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9A033A7C_97A4_882E_41B5_1A5A5BB15FA1_0/f/6/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_9A033A7C_97A4_882E_41B5_1A5A5BB15FA1_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "rak semua1 hd",
 "id": "panorama_9A033A7C_97A4_882E_41B5_1A5A5BB15FA1",
 "hfov": 30,
 "overlays": [
  "this.overlay_9A035A7C_97A4_882E_41C9_5B253078C548",
  "this.overlay_9A037A7C_97A4_882E_41B2_8FD7749FD094",
  "this.overlay_9A3C9A7C_97A4_882E_41CD_EDDDC31E8901",
  "this.overlay_9A3C8A7C_97A4_882E_41A9_57C5396E41DD"
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_877B0AA0_97AD_88D6_41C2_271020302E1E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_86394A4B_97AF_886A_41D6_5E279BC46D2D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_99A1F443_97A5_B859_41E0_6D42E4DF0706"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_99BA27DF_97A4_F86A_41BE_8455B88BC42D"
  }
 ],
 "vfov": 15.38,
 "hfovMax": 30,
 "partial": true,
 "thumbnailUrl": "media/panorama_9A033A7C_97A4_882E_41B5_1A5A5BB15FA1_t.jpg"
},
{
 "levels": [
  {
   "url": "media/popup_82F95727_9BA4_99D9_41AA_6222D3D7C1A9_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_82F95727_9BA4_99D9_41AA_6222D3D7C1A9_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_82F95727_9BA4_99D9_41AA_6222D3D7C1A9_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_AB954357_A4A0_6DBD_41E1_2C61773FBAA2"
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_B6C1269B_955E_2494_41E1_CC343C297961",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_B6C1269B_955E_2494_41E1_CC343C297961_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_B6C1269B_955E_2494_41E1_CC343C297961_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": 1.36,
 "rotationY": 0,
 "yaw": 5.79,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 5.02
},
{
 "class": "ImageResource",
 "id": "ImageResource_84A7F2EB_9D1C_52F1_41D4_ED638F581C61"
},
{
 "levels": [
  {
   "url": "media/popup_854680B2_9BA4_983B_41C0_C926FD9ED5F1_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_854680B2_9BA4_983B_41C0_C926FD9ED5F1_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_854680B2_9BA4_983B_41C0_C926FD9ED5F1_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_854680B2_9BA4_983B_41C0_C926FD9ED5F1_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_82E6D6E4_9A6D_785F_41C2_2EC03886B6F0"
},
{
 "levels": [
  {
   "url": "media/popup_B132FC29_9536_6BB7_41E1_E1C5D1D02D95_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_B132FC29_9536_6BB7_41E1_E1C5D1D02D95_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_B132FC29_9536_6BB7_41E1_E1C5D1D02D95_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_B132FC29_9536_6BB7_41E1_E1C5D1D02D95_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_8D72A5F4_9B9C_983E_41E2_0B31E1904FED"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_8E2CC0D3_9BBC_987A_41E2_80C3508F512D_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9B8656D4_97A4_987E_41B7_89C105C3D02A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 38,
      "colCount": 38,
      "width": 19456,
      "tags": "ondemand",
      "height": 19456
     },
     {
      "url": "media/panorama_9B8656D4_97A4_987E_41B7_89C105C3D02A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 19,
      "colCount": 19,
      "width": 9728,
      "tags": "ondemand",
      "height": 9728
     },
     {
      "url": "media/panorama_9B8656D4_97A4_987E_41B7_89C105C3D02A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "height": 5120
     },
     {
      "url": "media/panorama_9B8656D4_97A4_987E_41B7_89C105C3D02A_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_9B8656D4_97A4_987E_41B7_89C105C3D02A_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_9B8656D4_97A4_987E_41B7_89C105C3D02A_0/f/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9B8656D4_97A4_987E_41B7_89C105C3D02A_0/f/6/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_9B8656D4_97A4_987E_41B7_89C105C3D02A_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "kursi belakang kanan",
 "id": "panorama_9B8656D4_97A4_987E_41B7_89C105C3D02A",
 "hfov": 30,
 "overlays": [
  "this.overlay_9B8646D4_97A4_987E_41C3_1A4A0F23BE1E",
  "this.overlay_9B8676D4_97A4_987E_41D6_BCE506427D52"
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98839B56_97AB_887B_41E2_BD3508A278E6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9BC8FA92_979B_88FA_41C0_251C0CA2A10E"
  }
 ],
 "vfov": 15.38,
 "hfovMax": 30,
 "partial": true,
 "thumbnailUrl": "media/panorama_9B8656D4_97A4_987E_41B7_89C105C3D02A_t.jpg"
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_83B2119A_9BA5_B8EB_41DD_CC95ADC227E2",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_83B2119A_9BA5_B8EB_41DD_CC95ADC227E2_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_83B2119A_9BA5_B8EB_41DD_CC95ADC227E2_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": 1.03,
 "rotationY": 0,
 "yaw": -7.87,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 4.77
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_83BEADBB_9BAD_8829_418E_674811CF112F",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_83BEADBB_9BAD_8829_418E_674811CF112F_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_83BEADBB_9BAD_8829_418E_674811CF112F_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": -2.05,
 "rotationY": 0,
 "yaw": 6.49,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 4.83
},
{
 "levels": [
  {
   "url": "media/popup_B6B1CD59_9556_2594_41CC_00A5966BE61E_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_B6B1CD59_9556_2594_41CC_00A5966BE61E_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_B6B1CD59_9556_2594_41CC_00A5966BE61E_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_ABA2F309_A4A0_6D92_41CD_C051F17BD6DA"
},
{
 "class": "ImageResource",
 "id": "ImageResource_82DC86F1_9A6D_7839_41D1_84A34AA61A57"
},
{
 "levels": [
  {
   "url": "media/popup_B6950949_952A_2DF4_41DA_3D22E90D006A_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_B6950949_952A_2DF4_41DA_3D22E90D006A_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_B6950949_952A_2DF4_41DA_3D22E90D006A_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_AA5402F9_A4A0_6C75_41CB_6019A1C13714"
},
{
 "class": "ImageResource",
 "id": "ImageResource_84A0F2C4_9D1C_6D37_41CF_4CBCCD16D586"
},
{
 "levels": [
  {
   "url": "media/popup_8AED04E5_9BE5_7859_41CA_371C003858E4_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_8AED04E5_9BE5_7859_41CA_371C003858E4_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_8AED04E5_9BE5_7859_41CA_371C003858E4_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_8AED04E5_9BE5_7859_41CA_371C003858E4_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_8D6C45D5_9B9C_987E_41E1_8D4B300F639D"
},
{
 "levels": [
  {
   "url": "media/popup_82CCCEF7_9B9C_8839_41B0_D0F022AE1F09_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_82CCCEF7_9B9C_8839_41B0_D0F022AE1F09_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_82CCCEF7_9B9C_8839_41B0_D0F022AE1F09_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_AB9CA347_A4A0_6D9D_41D3_1B5D7E488ED8"
},
{
 "levels": [
  {
   "url": "media/popup_B43729B6_956A_2C9C_41DA_95E60486315D_0_0.jpg",
   "width": 2000,
   "class": "ImageResourceLevel",
   "height": 2000
  },
  {
   "url": "media/popup_B43729B6_956A_2C9C_41DA_95E60486315D_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_B43729B6_956A_2C9C_41DA_95E60486315D_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_8D77C613_9B9C_9BF9_41E2_BB2F15FF3615"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B6221754_A4A0_F5B2_41C7_D1851B02258C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 42,
      "colCount": 42,
      "width": 21504,
      "tags": "ondemand",
      "height": 21504
     },
     {
      "url": "media/panorama_B6221754_A4A0_F5B2_41C7_D1851B02258C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 21,
      "colCount": 21,
      "width": 10752,
      "tags": "ondemand",
      "height": 10752
     },
     {
      "url": "media/panorama_B6221754_A4A0_F5B2_41C7_D1851B02258C_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 11,
      "colCount": 11,
      "width": 5632,
      "tags": "ondemand",
      "height": 5632
     },
     {
      "url": "media/panorama_B6221754_A4A0_F5B2_41C7_D1851B02258C_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_B6221754_A4A0_F5B2_41C7_D1851B02258C_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_B6221754_A4A0_F5B2_41C7_D1851B02258C_0/f/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B6221754_A4A0_F5B2_41C7_D1851B02258C_0/f/6/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_B6221754_A4A0_F5B2_41C7_D1851B02258C_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "photo1655453330",
 "id": "panorama_B6221754_A4A0_F5B2_41C7_D1851B02258C",
 "hfov": 30,
 "overlays": [
  "this.overlay_B7B74C06_A4A0_DB9F_4198_DF70B3CECA22",
  "this.overlay_B7FAC560_A546_718B_41DF_1318FDA8AC13",
  "this.overlay_B67B88CB_A541_909D_41D1_B77897100138",
  "this.overlay_B16A917C_A542_707B_41A6_A4C5D0D3E000",
  "this.overlay_B3518F34_A5DE_F18B_41DD_77D74AB26421",
  "this.overlay_B2388EB6_A5DF_90F7_41D1_BA75F6699D81"
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_99BA27DF_97A4_F86A_41BE_8455B88BC42D"
  }
 ],
 "vfov": 15.39,
 "hfovMax": 30,
 "partial": true,
 "thumbnailUrl": "media/panorama_B6221754_A4A0_F5B2_41C7_D1851B02258C_t.jpg"
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_82CCCEF7_9B9C_8839_41B0_D0F022AE1F09",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_82CCCEF7_9B9C_8839_41B0_D0F022AE1F09_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_82CCCEF7_9B9C_8839_41B0_D0F022AE1F09_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": -5.01,
 "rotationY": 0,
 "yaw": 7.96,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 4.91
},
{
 "class": "ImageResource",
 "id": "ImageResource_84A4F2DC_9D1C_52D7_41D7_4ACADAFB5529"
},
{
 "levels": [
  {
   "url": "media/popup_B1DB0871_953A_2B94_41B5_798594686B6A_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_B1DB0871_953A_2B94_41B5_798594686B6A_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_B1DB0871_953A_2B94_41B5_798594686B6A_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_AA5622F9_A4A0_6C75_41C6_533B872A7C81"
},
{
 "levels": [
  {
   "url": "media/popup_8F9E7737_9BED_783A_41CF_8056FA5AE36C_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_8F9E7737_9BED_783A_41CF_8056FA5AE36C_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_8F9E7737_9BED_783A_41CF_8056FA5AE36C_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_8F9E7737_9BED_783A_41CF_8056FA5AE36C_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_8D6EF5E4_9B9C_985F_41E2_2E1FD8821143"
},
{
 "class": "ImageResource",
 "id": "ImageResource_82DE5701_9A6D_79D9_41C4_EB18288FCD57"
},
{
 "levels": [
  {
   "url": "media/popup_80692759_9BA5_F869_41D1_F463262B0F6E_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_80692759_9BA5_F869_41D1_F463262B0F6E_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_80692759_9BA5_F869_41D1_F463262B0F6E_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_80692759_9BA5_F869_41D1_F463262B0F6E_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_82DD66F8_9A6D_7837_41D0_450B94FFDA73"
},
{
 "levels": [
  {
   "url": "media/popup_B165C1A1_953A_7CB4_41B4_D54F4FD49A74_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_B165C1A1_953A_7CB4_41B4_D54F4FD49A74_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_B165C1A1_953A_7CB4_41B4_D54F4FD49A74_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_B165C1A1_953A_7CB4_41B4_D54F4FD49A74_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_8D71B5E4_9B9C_985F_41C2_4C98BBC4F6C7"
},
{
 "levels": [
  {
   "url": "media/popup_8FF2EFDC_9BEF_886E_41D7_E63240A711BF_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_8FF2EFDC_9BEF_886E_41D7_E63240A711BF_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_8FF2EFDC_9BEF_886E_41D7_E63240A711BF_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_8FF2EFDC_9BEF_886E_41D7_E63240A711BF_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_8D6D65D5_9B9C_987E_41BA_603E1011946D"
},
{
 "levels": [
  {
   "url": "media/popup_81EB9E2E_9B9F_882B_41BD_ADF9553F5931_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_81EB9E2E_9B9F_882B_41BD_ADF9553F5931_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_81EB9E2E_9B9F_882B_41BD_ADF9553F5931_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_81EB9E2E_9B9F_882B_41BD_ADF9553F5931_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_82D5970D_9A6D_79E9_419C_E6B3D3CD4C74"
},
{
 "levels": [
  {
   "url": "media/popup_B40B3D2B_9556_258B_41E2_11BC55A51551_0_0.jpg",
   "width": 2000,
   "class": "ImageResourceLevel",
   "height": 2000
  },
  {
   "url": "media/popup_B40B3D2B_9556_258B_41E2_11BC55A51551_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_B40B3D2B_9556_258B_41E2_11BC55A51551_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_8D774623_9B9C_9BDA_41E1_9B341516D913"
},
{
 "levels": [
  {
   "url": "media/popup_8EF69DE1_9BED_8859_41D5_0DE04A35E3CF_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_8EF69DE1_9BED_8859_41D5_0DE04A35E3CF_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_8EF69DE1_9BED_8859_41D5_0DE04A35E3CF_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_8EF69DE1_9BED_8859_41D5_0DE04A35E3CF_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_8D70A5E4_9B9C_985F_41A5_C7CB0487401B"
},
{
 "levels": [
  {
   "url": "media/popup_B6F1F702_952E_2574_41D9_D5BF0BA145AB_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_B6F1F702_952E_2574_41D9_D5BF0BA145AB_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_B6F1F702_952E_2574_41D9_D5BF0BA145AB_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_ABAB02F9_A4A0_6C75_41DE_6212DED22CED"
},
{
 "levels": [
  {
   "url": "media/popup_826B46F1_9A64_9839_41CA_558668E27F3A_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_826B46F1_9A64_9839_41CA_558668E27F3A_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_826B46F1_9A64_9839_41CA_558668E27F3A_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_826B46F1_9A64_9839_41CA_558668E27F3A_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_82D0A703_9A6D_79D9_41E3_23414C91A2E5"
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_B6BFA5A9_952A_64B7_41C0_0FAF731A2651",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_B6BFA5A9_952A_64B7_41C0_0FAF731A2651_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_B6BFA5A9_952A_64B7_41C0_0FAF731A2651_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": 1.4,
 "rotationY": 0,
 "yaw": 0.03,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 4.38
},
{
 "levels": [
  {
   "url": "media/popup_B19C77C4_952E_24FC_4175_E880517EA612_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_B19C77C4_952E_24FC_4175_E880517EA612_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_B19C77C4_952E_24FC_4175_E880517EA612_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_ABA872F9_A4A0_6C75_41D5_1B6EACF08F85"
},
{
 "levels": [
  {
   "url": "media/popup_8AED04E5_9BE5_7859_41CA_371C003858E4_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_8AED04E5_9BE5_7859_41CA_371C003858E4_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_8AED04E5_9BE5_7859_41CA_371C003858E4_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_AA4642DA_A4A0_6CB7_41D3_B1FB8F72FBA8"
},
{
 "levels": [
  {
   "url": "media/popup_8431CFBC_9B9D_882F_41D6_7C0578300B58_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_8431CFBC_9B9D_882F_41D6_7C0578300B58_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_8431CFBC_9B9D_882F_41D6_7C0578300B58_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_AB963357_A4A0_6DBD_41DA_7B5ACD1C182C"
},
{
 "class": "ImageResource",
 "id": "ImageResource_84A672E9_9D1C_52F1_41C7_E2891EB38E12"
},
{
 "levels": [
  {
   "url": "media/popup_82DE88F9_9B9C_8829_41E3_18BA9A6E2717_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_82DE88F9_9B9C_8829_41E3_18BA9A6E2717_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_82DE88F9_9B9C_8829_41E3_18BA9A6E2717_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_82DE88F9_9B9C_8829_41E3_18BA9A6E2717_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_82C9D718_9A6D_79F7_41BD_3B3D35614813"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_87132137_979C_983A_41B1_3C79C12E949B_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 38,
      "colCount": 38,
      "width": 19456,
      "tags": "ondemand",
      "height": 19456
     },
     {
      "url": "media/panorama_87132137_979C_983A_41B1_3C79C12E949B_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 19,
      "colCount": 19,
      "width": 9728,
      "tags": "ondemand",
      "height": 9728
     },
     {
      "url": "media/panorama_87132137_979C_983A_41B1_3C79C12E949B_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "height": 5120
     },
     {
      "url": "media/panorama_87132137_979C_983A_41B1_3C79C12E949B_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_87132137_979C_983A_41B1_3C79C12E949B_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_87132137_979C_983A_41B1_3C79C12E949B_0/f/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_87132137_979C_983A_41B1_3C79C12E949B_0/f/6/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_87132137_979C_983A_41B1_3C79C12E949B_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "zoom kursi kanan1",
 "id": "panorama_87132137_979C_983A_41B1_3C79C12E949B",
 "hfov": 30,
 "overlays": [
  "this.overlay_8714D137_979C_983A_41D2_98D58F061494",
  "this.overlay_8714F137_979C_983A_41E2_A07E9ACE9C81",
  "this.overlay_87149137_979C_983A_41D7_DAD3A31B7A71",
  "this.popup_839A6568_9D6D_B7FF_41D6_4B5F91213305"
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98839B56_97AB_887B_41E2_BD3508A278E6"
  }
 ],
 "vfov": 15.38,
 "hfovMax": 30,
 "partial": true,
 "thumbnailUrl": "media/panorama_87132137_979C_983A_41B1_3C79C12E949B_t.jpg"
},
{
 "class": "ImageResource",
 "id": "ImageResource_82DF06FA_9A6D_782B_41C9_873B0D9EC750"
},
{
 "levels": [
  {
   "url": "media/popup_8CE2E386_9BA5_98DB_41CF_25BCF2DEB1BE_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_8CE2E386_9BA5_98DB_41CF_25BCF2DEB1BE_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_8CE2E386_9BA5_98DB_41CF_25BCF2DEB1BE_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_8CE2E386_9BA5_98DB_41CF_25BCF2DEB1BE_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_82EFB6BF_9A6D_7829_41C1_36BA08C32155"
},
{
 "levels": [
  {
   "url": "media/popup_B57C8955_956A_2D9C_41D9_F2D73ECF6F4C_0_0.jpg",
   "width": 2000,
   "class": "ImageResourceLevel",
   "height": 2000
  },
  {
   "url": "media/popup_B57C8955_956A_2D9C_41D9_F2D73ECF6F4C_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_B57C8955_956A_2D9C_41D9_F2D73ECF6F4C_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_8D78B613_9B9C_9BF9_41BF_545DCC25C070"
},
{
 "levels": [
  {
   "url": "media/popup_8F292AC3_9BAB_885A_41C1_70D0F93FA726_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_8F292AC3_9BAB_885A_41C1_70D0F93FA726_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_8F292AC3_9BAB_885A_41C1_70D0F93FA726_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_AB8FE328_A4A0_6D93_41E0_39AE9C4B2ABD"
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_81207DF7_9BA4_8839_41E2_267A7AA9C942",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_81207DF7_9BA4_8839_41E2_267A7AA9C942_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_81207DF7_9BA4_8839_41E2_267A7AA9C942_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": 0.98,
 "rotationY": 0,
 "yaw": -3.06,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 4.55
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 4.18,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_B4EB9441_9556_1BF4_41E1_F1310C5B14B6",
 "yaw": 6.85,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_B4EB9441_9556_1BF4_41E1_F1310C5B14B6_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 1.23,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%"
},
{
 "levels": [
  {
   "url": "media/popup_8AC1B058_9BEC_B876_41D8_FC7C1A313139_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_8AC1B058_9BEC_B876_41D8_FC7C1A313139_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_8AC1B058_9BEC_B876_41D8_FC7C1A313139_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_8AC1B058_9BEC_B876_41D8_FC7C1A313139_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_8D6E65E4_9B9C_985F_41E1_CDD921E9DDDA"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_86394A4B_97AF_886A_41D6_5E279BC46D2D_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 53,
      "colCount": 53,
      "width": 27136,
      "tags": "ondemand",
      "height": 27136
     },
     {
      "url": "media/panorama_86394A4B_97AF_886A_41D6_5E279BC46D2D_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 27,
      "colCount": 27,
      "width": 13824,
      "tags": "ondemand",
      "height": 13824
     },
     {
      "url": "media/panorama_86394A4B_97AF_886A_41D6_5E279BC46D2D_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "tags": "ondemand",
      "height": 7168
     },
     {
      "url": "media/panorama_86394A4B_97AF_886A_41D6_5E279BC46D2D_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_86394A4B_97AF_886A_41D6_5E279BC46D2D_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_86394A4B_97AF_886A_41D6_5E279BC46D2D_0/f/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_86394A4B_97AF_886A_41D6_5E279BC46D2D_0/f/6/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_86394A4B_97AF_886A_41D6_5E279BC46D2D_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "rak fruit",
 "id": "panorama_86394A4B_97AF_886A_41D6_5E279BC46D2D",
 "hfov": 30,
 "overlays": [
  "this.overlay_86393A4B_97AF_886A_41C4_75C880E512D1",
  "this.overlay_86391A4B_97AF_886A_41E0_3648EB18042E",
  "this.overlay_8639FA4B_97AF_886A_41DE_56D81A01B4B8"
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9A033A7C_97A4_882E_41B5_1A5A5BB15FA1"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98F4D827_97A4_97DA_41DF_006AE3C9C012"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_998866A4_97A7_78DF_41E2_CAB386A0B055"
  }
 ],
 "vfov": 15.39,
 "hfovMax": 30,
 "partial": true,
 "thumbnailUrl": "media/panorama_86394A4B_97AF_886A_41D6_5E279BC46D2D_t.jpg"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_B3762A9B_A543_90BD_41E2_74B6602AE396",
 "initialPosition": {
  "yaw": 0.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_BEF748B8_A543_90FB_41A6_F5574241E784",
 "initialPosition": {
  "yaw": -0.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0.82
 }
},
{
 "levels": [
  {
   "url": "media/popup_B7CC5594_956A_249C_41D3_5D0C9336A6EB_0_0.jpg",
   "width": 2000,
   "class": "ImageResourceLevel",
   "height": 2000
  },
  {
   "url": "media/popup_B7CC5594_956A_249C_41D3_5D0C9336A6EB_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_B7CC5594_956A_249C_41D3_5D0C9336A6EB_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_8D772613_9B9C_9BF9_41D2_549FC85B50AD"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9BF4BFC0_97E4_8857_41D7_6F9E7EEF0251_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 38,
      "colCount": 38,
      "width": 19456,
      "tags": "ondemand",
      "height": 19456
     },
     {
      "url": "media/panorama_9BF4BFC0_97E4_8857_41D7_6F9E7EEF0251_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 19,
      "colCount": 19,
      "width": 9728,
      "tags": "ondemand",
      "height": 9728
     },
     {
      "url": "media/panorama_9BF4BFC0_97E4_8857_41D7_6F9E7EEF0251_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "height": 5120
     },
     {
      "url": "media/panorama_9BF4BFC0_97E4_8857_41D7_6F9E7EEF0251_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_9BF4BFC0_97E4_8857_41D7_6F9E7EEF0251_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_9BF4BFC0_97E4_8857_41D7_6F9E7EEF0251_0/f/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9BF4BFC0_97E4_8857_41D7_6F9E7EEF0251_0/f/6/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_9BF4BFC0_97E4_8857_41D7_6F9E7EEF0251_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "zoom kursi kanan2",
 "id": "panorama_9BF4BFC0_97E4_8857_41D7_6F9E7EEF0251",
 "hfov": 30,
 "overlays": [
  "this.overlay_9BF4AFC0_97E4_8857_41CD_2DD5F9D1E4EC",
  "this.overlay_9BF4DFC0_97E4_8857_41D5_E32A78C0194A",
  "this.overlay_9BF4CFC0_97E4_8857_41C7_320DD1CE5BF8",
  "this.popup_857F7D04_9D6C_D737_41DA_A6A6E5306D48"
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98839B56_97AB_887B_41E2_BD3508A278E6"
  }
 ],
 "vfov": 15.38,
 "hfovMax": 30,
 "partial": true,
 "thumbnailUrl": "media/panorama_9BF4BFC0_97E4_8857_41D7_6F9E7EEF0251_t.jpg"
},
{
 "class": "ImageResource",
 "id": "ImageResource_82D6A716_9A6D_79FB_41E1_9947A660FABC"
},
{
 "levels": [
  {
   "url": "media/popup_B1FC2E3E_955A_678D_41DB_154EB98C15C0_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_B1FC2E3E_955A_678D_41DB_154EB98C15C0_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_B1FC2E3E_955A_678D_41DB_154EB98C15C0_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_B1FC2E3E_955A_678D_41DB_154EB98C15C0_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_8D745604_9B9C_9BDE_41C2_6AF9ACE4D0C1"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_86394A4B_97AF_886A_41D6_5E279BC46D2D_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_995D51C3_97A5_9859_41C0_5015379F0B1E_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "levels": [
  {
   "url": "media/popup_804096B3_9D6C_5551_41E2_FB8B7A622D62_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_804096B3_9D6C_5551_41E2_FB8B7A622D62_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_804096B3_9D6C_5551_41E2_FB8B7A622D62_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_804096B3_9D6C_5551_41E2_FB8B7A622D62_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_8548B338_9D1C_535E_41E3_2F0D0AC15A0A"
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_826B46F1_9A64_9839_41CA_558668E27F3A",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_826B46F1_9A64_9839_41CA_558668E27F3A_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_826B46F1_9A64_9839_41CA_558668E27F3A_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": -4.99,
 "rotationY": 0,
 "yaw": -1.63,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 4.41
},
{
 "class": "ImageResource",
 "id": "ImageResource_82DA26EF_9A6D_7829_41D6_9C2F4E386DB1"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8160CF81_9BA5_88D9_41BA_DE875EF69FF5_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 38,
      "colCount": 38,
      "width": 19456,
      "tags": "ondemand",
      "height": 19456
     },
     {
      "url": "media/panorama_8160CF81_9BA5_88D9_41BA_DE875EF69FF5_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 19,
      "colCount": 19,
      "width": 9728,
      "tags": "ondemand",
      "height": 9728
     },
     {
      "url": "media/panorama_8160CF81_9BA5_88D9_41BA_DE875EF69FF5_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "height": 5120
     },
     {
      "url": "media/panorama_8160CF81_9BA5_88D9_41BA_DE875EF69FF5_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_8160CF81_9BA5_88D9_41BA_DE875EF69FF5_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8160CF81_9BA5_88D9_41BA_DE875EF69FF5_0/f/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8160CF81_9BA5_88D9_41BA_DE875EF69FF5_0/f/6/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_8160CF81_9BA5_88D9_41BA_DE875EF69FF5_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "zoom kursi belakang kiri",
 "id": "panorama_8160CF81_9BA5_88D9_41BA_DE875EF69FF5",
 "hfov": 30,
 "overlays": [
  "this.overlay_8160DF81_9BA5_88D9_41E0_38318FBF5BE1",
  "this.overlay_817F3F81_9BA5_88D9_41E1_A21C471A0CA4",
  "this.overlay_817F0F81_9BA5_88D9_41A0_BE7677ADA16D",
  "this.popup_804096B3_9D6C_5551_41E2_FB8B7A622D62"
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9846488E_97A4_88EA_41BF_CD3C5F04F01D"
  }
 ],
 "vfov": 16.45,
 "hfovMax": 30,
 "partial": true,
 "thumbnailUrl": "media/panorama_8160CF81_9BA5_88D9_41BA_DE875EF69FF5_t.jpg"
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_82161BF0_9B9B_8836_41AF_E7B034F99A73",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_82161BF0_9B9B_8836_41AF_E7B034F99A73_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_82161BF0_9B9B_8836_41AF_E7B034F99A73_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": 1.58,
 "rotationY": 0,
 "yaw": 3.28,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 4.34
},
{
 "levels": [
  {
   "url": "media/popup_B6F1F702_952E_2574_41D9_D5BF0BA145AB_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_B6F1F702_952E_2574_41D9_D5BF0BA145AB_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_B6F1F702_952E_2574_41D9_D5BF0BA145AB_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_B6F1F702_952E_2574_41D9_D5BF0BA145AB_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_8D71B5F4_9B9C_983E_41DD_A6C6C780656D"
},
{
 "levels": [
  {
   "url": "media/popup_B71C9C09_9556_2B74_41DA_630AC87ECBD2_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_B71C9C09_9556_2B74_41DA_630AC87ECBD2_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_B71C9C09_9556_2B74_41DA_630AC87ECBD2_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_B71C9C09_9556_2B74_41DA_630AC87ECBD2_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_8D730604_9B9C_9BDE_41DC_0B4FFDBC4009"
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_8AC8E9A0_9BEC_88D7_41CD_D490DBA78416",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_8AC8E9A0_9BEC_88D7_41CD_D490DBA78416_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_8AC8E9A0_9BEC_88D7_41CD_D490DBA78416_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": -0.54,
 "rotationY": 0,
 "yaw": 7.99,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 4.37
},
{
 "levels": [
  {
   "url": "media/popup_81EB9E2E_9B9F_882B_41BD_ADF9553F5931_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_81EB9E2E_9B9F_882B_41BD_ADF9553F5931_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_81EB9E2E_9B9F_882B_41BD_ADF9553F5931_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_AB916357_A4A0_6DBD_41C7_7EA0356F5056"
},
{
 "levels": [
  {
   "url": "media/popup_85230C70_9BAC_8837_41D9_1917A6A062A3_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_85230C70_9BAC_8837_41D9_1917A6A062A3_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_85230C70_9BAC_8837_41D9_1917A6A062A3_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_85230C70_9BAC_8837_41D9_1917A6A062A3_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_82E3B6D0_9A6D_7877_41D0_AE9195ED24AD"
},
{
 "levels": [
  {
   "url": "media/popup_8AC03A74_9BEC_883E_41D1_32F981924177_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_8AC03A74_9BEC_883E_41D1_32F981924177_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_8AC03A74_9BEC_883E_41D1_32F981924177_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_8AC03A74_9BEC_883E_41D1_32F981924177_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_8D6F85E4_9B9C_985F_41D0_5E5700ED9965"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_BD872EA5_A543_9095_41D7_BAC7C05F6AA2",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_877B0AA0_97AD_88D6_41C2_271020302E1E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 53,
      "colCount": 53,
      "width": 27136,
      "tags": "ondemand",
      "height": 27136
     },
     {
      "url": "media/panorama_877B0AA0_97AD_88D6_41C2_271020302E1E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 27,
      "colCount": 27,
      "width": 13824,
      "tags": "ondemand",
      "height": 13824
     },
     {
      "url": "media/panorama_877B0AA0_97AD_88D6_41C2_271020302E1E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "tags": "ondemand",
      "height": 7168
     },
     {
      "url": "media/panorama_877B0AA0_97AD_88D6_41C2_271020302E1E_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_877B0AA0_97AD_88D6_41C2_271020302E1E_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_877B0AA0_97AD_88D6_41C2_271020302E1E_0/f/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_877B0AA0_97AD_88D6_41C2_271020302E1E_0/f/6/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_877B0AA0_97AD_88D6_41C2_271020302E1E_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "rak depan",
 "id": "panorama_877B0AA0_97AD_88D6_41C2_271020302E1E",
 "hfov": 30,
 "overlays": [
  "this.overlay_877B1AA0_97AD_88D6_41C1_9751E53E2FB4",
  "this.overlay_877B3AA0_97AD_88D6_41E1_24F4D651D94A",
  "this.overlay_877B4AA0_97AD_88D6_41CB_10DEA2451947",
  "this.overlay_877B5AA0_97AD_88D6_41D9_FFC757CEC055"
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9A033A7C_97A4_882E_41B5_1A5A5BB15FA1"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98430603_97A5_9BDA_41A6_BCADCF045178"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_995D51C3_97A5_9859_41C0_5015379F0B1E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9A9D6B86_97A5_88DA_41DD_3ED78C68959B"
  }
 ],
 "vfov": 15.39,
 "hfovMax": 30,
 "partial": true,
 "thumbnailUrl": "media/panorama_877B0AA0_97AD_88D6_41C2_271020302E1E_t.jpg"
},
{
 "class": "ImageResource",
 "id": "ImageResource_82C8671F_9A6D_79E9_41DD_4599AD9E2D3E"
},
{
 "levels": [
  {
   "url": "media/popup_B6A82354_955A_7D9C_41E1_F58CA8B7CEDF_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_B6A82354_955A_7D9C_41E1_F58CA8B7CEDF_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_B6A82354_955A_7D9C_41E1_F58CA8B7CEDF_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_B6A82354_955A_7D9C_41E1_F58CA8B7CEDF_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_8D757613_9B9C_9BF9_41C7_BF1A917E8DB3"
},
{
 "levels": [
  {
   "url": "media/popup_B6C1269B_955E_2494_41E1_CC343C297961_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_B6C1269B_955E_2494_41E1_CC343C297961_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_B6C1269B_955E_2494_41E1_CC343C297961_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_B6C1269B_955E_2494_41E1_CC343C297961_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_8D75E613_9B9C_9BF9_41BA_BEE5E0F58BBA"
},
{
 "levels": [
  {
   "url": "media/popup_B146CB5E_953B_ED8C_41D5_9CD505D45E0E_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_B146CB5E_953B_ED8C_41D5_9CD505D45E0E_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_B146CB5E_953B_ED8C_41D5_9CD505D45E0E_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_AA56F2F9_A4A0_6C75_41D6_BB87B41C466B"
},
{
 "class": "ImageResource",
 "id": "ImageResource_82D41714_9A6D_79FF_41D7_122C93090448"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 3.62,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_B7CC5594_956A_249C_41D3_5D0C9336A6EB",
 "yaw": 1.97,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_B7CC5594_956A_249C_41D3_5D0C9336A6EB_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": -5.11,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_99BA27DF_97A4_F86A_41BE_8455B88BC42D_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 38,
      "colCount": 38,
      "width": 19456,
      "tags": "ondemand",
      "height": 19456
     },
     {
      "url": "media/panorama_99BA27DF_97A4_F86A_41BE_8455B88BC42D_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 19,
      "colCount": 19,
      "width": 9728,
      "tags": "ondemand",
      "height": 9728
     },
     {
      "url": "media/panorama_99BA27DF_97A4_F86A_41BE_8455B88BC42D_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "height": 5120
     },
     {
      "url": "media/panorama_99BA27DF_97A4_F86A_41BE_8455B88BC42D_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_99BA27DF_97A4_F86A_41BE_8455B88BC42D_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_99BA27DF_97A4_F86A_41BE_8455B88BC42D_0/f/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_99BA27DF_97A4_F86A_41BE_8455B88BC42D_0/f/6/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_99BA27DF_97A4_F86A_41BE_8455B88BC42D_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "tampilan semua",
 "id": "panorama_99BA27DF_97A4_F86A_41BE_8455B88BC42D",
 "hfov": 30,
 "overlays": [
  "this.overlay_99BA37DF_97A4_F86A_41D6_FBFFBDE98669",
  "this.overlay_99B5D7DF_97A4_F86A_41D4_DF05E299EC6F",
  "this.overlay_99B5E7DF_97A4_F86A_41CD_0A4E0ED0247B",
  "this.overlay_99B5F7DF_97A4_F86A_41CE_E41613738C14",
  "this.overlay_99B587DF_97A4_F86A_4185_06ABDB608168",
  "this.overlay_99B5A7DF_97A4_F86A_41CA_D7A172B9D502"
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98839B56_97AB_887B_41E2_BD3508A278E6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98369766_97AC_B85B_4199_2CB4BEE25956"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9FE32371_952A_1D97_4187_224C5F74D5B6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9A033A7C_97A4_882E_41B5_1A5A5BB15FA1"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9A033A7C_97A4_882E_41B5_1A5A5BB15FA1"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B6221754_A4A0_F5B2_41C7_D1851B02258C"
  }
 ],
 "vfov": 15.38,
 "hfovMax": 30,
 "partial": true,
 "thumbnailUrl": "media/panorama_99BA27DF_97A4_F86A_41BE_8455B88BC42D_t.jpg"
},
{
 "viewerArea": "this.MainViewer",
 "class": "VideoPlayer",
 "id": "MainViewerVideoPlayer",
 "displayPlaybackBar": true
},
{
 "levels": [
  {
   "url": "media/popup_82F95727_9BA4_99D9_41AA_6222D3D7C1A9_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_82F95727_9BA4_99D9_41AA_6222D3D7C1A9_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_82F95727_9BA4_99D9_41AA_6222D3D7C1A9_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_82F95727_9BA4_99D9_41AA_6222D3D7C1A9_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_82C8F722_9A6D_79DA_41BC_CE18B4824605"
},
{
 "levels": [
  {
   "url": "media/popup_B4CA2484_9556_3B7C_41E1_39E73296032F_0_0.jpg",
   "width": 2000,
   "class": "ImageResourceLevel",
   "height": 2000
  },
  {
   "url": "media/popup_B4CA2484_9556_3B7C_41E1_39E73296032F_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_B4CA2484_9556_3B7C_41E1_39E73296032F_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_8D7A9623_9B9C_9BDA_41D1_8D22C81532AF"
},
{
 "class": "ImageResource",
 "id": "ImageResource_82E566D9_9A6D_7869_41DF_49DF4FCA7DDB"
},
{
 "levels": [
  {
   "url": "media/popup_8F9E7737_9BED_783A_41CF_8056FA5AE36C_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_8F9E7737_9BED_783A_41CF_8056FA5AE36C_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_8F9E7737_9BED_783A_41CF_8056FA5AE36C_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_AA5F12EA_A4A0_6C96_41D9_B3ED25C38320"
},
{
 "levels": [
  {
   "url": "media/popup_839A6568_9D6D_B7FF_41D6_4B5F91213305_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_839A6568_9D6D_B7FF_41D6_4B5F91213305_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_839A6568_9D6D_B7FF_41D6_4B5F91213305_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_839A6568_9D6D_B7FF_41D6_4B5F91213305_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_8557C33A_9D1C_5352_41DC_673AF6705180"
},
{
 "class": "ImageResource",
 "id": "ImageResource_82E466E2_9A6D_785B_41D6_178F28B75A72"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 4.18,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_B7C65FBF_9559_E48C_41DC_3E12E81B0D43",
 "yaw": -8.02,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_B7C65FBF_9559_E48C_41DC_3E12E81B0D43_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 1.23,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%"
},
{
 "class": "ImageResource",
 "id": "ImageResource_82EEE6C7_9A6D_7859_41D3_F4ECCC17A2DB"
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_82DE88F9_9B9C_8829_41E3_18BA9A6E2717",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_82DE88F9_9B9C_8829_41E3_18BA9A6E2717_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_82DE88F9_9B9C_8829_41E3_18BA9A6E2717_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": 1.6,
 "rotationY": 0,
 "yaw": 8.21,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 5.11
},
{
 "class": "ImageResource",
 "id": "ImageResource_82E7B6DB_9A6D_7869_41B6_7330D8358D08"
},
{
 "class": "ImageResource",
 "id": "ImageResource_84A182C9_9D1C_6D31_41C1_0CB5D921037F"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98430603_97A5_9BDA_41A6_BCADCF045178_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 45,
      "colCount": 45,
      "width": 23040,
      "tags": "ondemand",
      "height": 23040
     },
     {
      "url": "media/panorama_98430603_97A5_9BDA_41A6_BCADCF045178_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 23,
      "colCount": 23,
      "width": 11776,
      "tags": "ondemand",
      "height": 11776
     },
     {
      "url": "media/panorama_98430603_97A5_9BDA_41A6_BCADCF045178_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 12,
      "colCount": 12,
      "width": 6144,
      "tags": "ondemand",
      "height": 6144
     },
     {
      "url": "media/panorama_98430603_97A5_9BDA_41A6_BCADCF045178_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_98430603_97A5_9BDA_41A6_BCADCF045178_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_98430603_97A5_9BDA_41A6_BCADCF045178_0/f/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_98430603_97A5_9BDA_41A6_BCADCF045178_0/f/6/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_98430603_97A5_9BDA_41A6_BCADCF045178_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "hampers",
 "id": "panorama_98430603_97A5_9BDA_41A6_BCADCF045178",
 "hfov": 30,
 "overlays": [
  "this.overlay_98433603_97A5_9BDA_41C8_40646E263DDB",
  "this.overlay_98432603_97A5_9BDA_41D3_30D919E49CC5",
  "this.overlay_98435603_97A5_9BDA_41CA_5B372EA47A5F",
  "this.overlay_98437603_97A5_9BDA_41E1_9EBDD135F66B",
  "this.overlay_98438603_97A5_9BDA_41CC_2A8CFB7AF614",
  "this.overlay_9843B603_97A5_9BDA_41DF_E02DE7D28E51",
  "this.overlay_9843A603_97A5_9BDA_41D1_9AD307EDEFA5",
  "this.overlay_9843D603_97A5_9BDA_41CD_0CD9C10214FA",
  "this.overlay_9843F603_97A5_9BDA_41DA_81799F4A3C76",
  "this.overlay_9843E603_97A5_9BDA_41D1_30B88EFCDF3E",
  "this.overlay_98420603_97A5_9BDA_41AD_F12825F1F5BE",
  "this.overlay_98422603_97A5_9BDA_41C9_73BEFF5B01FB",
  "this.overlay_98425603_97A5_9BDA_41D7_2823F0A1D585",
  "this.overlay_98424603_97A5_9BDA_41D4_08B939FE0763",
  "this.popup_B7C65FBF_9559_E48C_41DC_3E12E81B0D43",
  "this.popup_B43729B6_956A_2C9C_41DA_95E60486315D",
  "this.popup_B7CC5594_956A_249C_41D3_5D0C9336A6EB",
  "this.popup_B57C8955_956A_2D9C_41D9_F2D73ECF6F4C",
  "this.popup_B4E57643_956A_67F4_41E0_810E19CE9D39",
  "this.popup_B4BB5D63_956A_65B4_41CB_9CE455617346",
  "this.popup_B40B3D2B_9556_258B_41E2_11BC55A51551",
  "this.popup_B4D43009_9556_7B74_41E0_D2959B20FBDC",
  "this.popup_B462A90A_9556_2D75_41DC_D4B30DD5CA64",
  "this.popup_B4EB9441_9556_1BF4_41E1_F1310C5B14B6",
  "this.popup_B7883688_9556_2774_41CB_46A338073B88",
  "this.popup_B4CA2484_9556_3B7C_41E1_39E73296032F"
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_877B0AA0_97AD_88D6_41C2_271020302E1E"
  }
 ],
 "vfov": 15.39,
 "hfovMax": 30,
 "partial": true,
 "thumbnailUrl": "media/panorama_98430603_97A5_9BDA_41A6_BCADCF045178_t.jpg"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_B29FAC00_A543_978B_41D9_CD5455DD0B10",
 "initialPosition": {
  "yaw": 0.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0.08
 }
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_8D216551_9BA4_9876_41B4_58100748FB81",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_8D216551_9BA4_9876_41B4_58100748FB81_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_8D216551_9BA4_9876_41B4_58100748FB81_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": -1.33,
 "rotationY": 0,
 "yaw": -1.28,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 5.43
},
{
 "levels": [
  {
   "url": "media/popup_B1EA68CE_955A_2C8C_41DB_E56A60D84CAC_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_B1EA68CE_955A_2C8C_41DB_E56A60D84CAC_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_B1EA68CE_955A_2C8C_41DB_E56A60D84CAC_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_B1EA68CE_955A_2C8C_41DB_E56A60D84CAC_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_8D76C613_9B9C_9BF9_41DD_96AC5B58A87A"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_9A033A7C_97A4_882E_41B5_1A5A5BB15FA1_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "levels": [
  {
   "url": "media/popup_826B46F1_9A64_9839_41CA_558668E27F3A_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_826B46F1_9A64_9839_41CA_558668E27F3A_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_826B46F1_9A64_9839_41CA_558668E27F3A_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_AB928347_A4A0_6D9D_41C9_4E52818C3AF7"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 3.74,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_B4CA2484_9556_3B7C_41E1_39E73296032F",
 "yaw": -3.16,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_B4CA2484_9556_3B7C_41E1_39E73296032F_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 1.21,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%"
},
{
 "levels": [
  {
   "url": "media/popup_B1EA68CE_955A_2C8C_41DB_E56A60D84CAC_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_B1EA68CE_955A_2C8C_41DB_E56A60D84CAC_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_B1EA68CE_955A_2C8C_41DB_E56A60D84CAC_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_ABBA4318_A4A0_6DB3_41C9_9BA5D54CE19A"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_9BF4BFC0_97E4_8857_41D7_6F9E7EEF0251_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "levels": [
  {
   "url": "media/popup_81FE74FB_9D74_76D1_4191_7846E948F99A_0_0.jpeg",
   "width": 2560,
   "class": "ImageResourceLevel",
   "height": 1810
  },
  {
   "url": "media/popup_81FE74FB_9D74_76D1_4191_7846E948F99A_0_1.jpeg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1448
  },
  {
   "url": "media/popup_81FE74FB_9D74_76D1_4191_7846E948F99A_0_2.jpeg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 724
  },
  {
   "url": "media/popup_81FE74FB_9D74_76D1_4191_7846E948F99A_0_3.jpeg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 362
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_85575336_9D1C_5352_41DC_B910DB7CD658"
},
{
 "levels": [
  {
   "url": "media/popup_821740A4_9BAF_98DE_41D5_38C6FC24568F_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_821740A4_9BAF_98DE_41D5_38C6FC24568F_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_821740A4_9BAF_98DE_41D5_38C6FC24568F_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_821740A4_9BAF_98DE_41D5_38C6FC24568F_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_82E156CE_9A6D_786B_41D2_12B6EDA41DDC"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 3.62,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_B7883688_9556_2774_41CB_46A338073B88",
 "yaw": 2.1,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_B7883688_9556_2774_41CB_46A338073B88_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 1.21,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%"
},
{
 "class": "ImageResource",
 "id": "ImageResource_84A312D7_9D1C_52D1_41E1_A557D8D900F0"
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_8431CFBC_9B9D_882F_41D6_7C0578300B58",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_8431CFBC_9B9D_882F_41D6_7C0578300B58_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_8431CFBC_9B9D_882F_41D6_7C0578300B58_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": -1.52,
 "rotationY": 0,
 "yaw": -6.36,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 4.63
},
{
 "class": "ImageResource",
 "id": "ImageResource_82E3C6D0_9A6D_7877_41D2_9821AC5D3490"
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_8F9E7737_9BED_783A_41CF_8056FA5AE36C",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_8F9E7737_9BED_783A_41CF_8056FA5AE36C_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_8F9E7737_9BED_783A_41CF_8056FA5AE36C_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": -0.62,
 "rotationY": 0,
 "yaw": -1.62,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 4.15
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9846488E_97A4_88EA_41BF_CD3C5F04F01D_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 38,
      "colCount": 38,
      "width": 19456,
      "tags": "ondemand",
      "height": 19456
     },
     {
      "url": "media/panorama_9846488E_97A4_88EA_41BF_CD3C5F04F01D_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 19,
      "colCount": 19,
      "width": 9728,
      "tags": "ondemand",
      "height": 9728
     },
     {
      "url": "media/panorama_9846488E_97A4_88EA_41BF_CD3C5F04F01D_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "height": 5120
     },
     {
      "url": "media/panorama_9846488E_97A4_88EA_41BF_CD3C5F04F01D_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_9846488E_97A4_88EA_41BF_CD3C5F04F01D_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_9846488E_97A4_88EA_41BF_CD3C5F04F01D_0/f/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9846488E_97A4_88EA_41BF_CD3C5F04F01D_0/f/6/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_9846488E_97A4_88EA_41BF_CD3C5F04F01D_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "kursi belakang kiri",
 "id": "panorama_9846488E_97A4_88EA_41BF_CD3C5F04F01D",
 "hfov": 30,
 "overlays": [
  "this.overlay_9846588E_97A4_88EA_41C5_C3E8338E68C6",
  "this.overlay_9846288E_97A4_88E7_41D9_56FF60A1AEF3"
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98369766_97AC_B85B_4199_2CB4BEE25956"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8160CF81_9BA5_88D9_41BA_DE875EF69FF5"
  }
 ],
 "vfov": 15.38,
 "hfovMax": 30,
 "partial": true,
 "thumbnailUrl": "media/panorama_9846488E_97A4_88EA_41BF_CD3C5F04F01D_t.jpg"
},
{
 "levels": [
  {
   "url": "media/popup_80D1BB81_9A65_88D6_41E0_16B519A5AFE9_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_80D1BB81_9A65_88D6_41E0_16B519A5AFE9_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_80D1BB81_9A65_88D6_41E0_16B519A5AFE9_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_80D1BB81_9A65_88D6_41E0_16B519A5AFE9_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_82D33705_9A6D_79D9_4183_FB84A0BE8B5E"
},
{
 "levels": [
  {
   "url": "media/popup_84FB841D_9D6F_D551_41CF_0BC2220C5C9A_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_84FB841D_9D6F_D551_41CF_0BC2220C5C9A_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_84FB841D_9D6F_D551_41CF_0BC2220C5C9A_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_84FB841D_9D6F_D551_41CF_0BC2220C5C9A_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_8549F340_9D1C_532E_41E1_D39F1ADA4423"
},
{
 "levels": [
  {
   "url": "media/popup_B688882F_955A_EB8B_41DD_BEC2FDC6E4C0_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_B688882F_955A_EB8B_41DD_BEC2FDC6E4C0_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_B688882F_955A_EB8B_41DD_BEC2FDC6E4C0_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_B688882F_955A_EB8B_41DD_BEC2FDC6E4C0_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_8D75A604_9B9C_9BDE_41B1_2DF201EA3A15"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_98F4D827_97A4_97DA_41DF_006AE3C9C012_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_B37E2AB6_A543_90F7_41BB_BE64E8501D54",
 "initialPosition": {
  "yaw": 0.7,
  "class": "PanoramaCameraPosition",
  "pitch": -0.93
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_84A192CF_9D1C_6D31_41D3_01AA59BA86BF"
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_B132FC29_9536_6BB7_41E1_E1C5D1D02D95",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_B132FC29_9536_6BB7_41E1_E1C5D1D02D95_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_B132FC29_9536_6BB7_41E1_E1C5D1D02D95_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": -1.78,
 "rotationY": 0,
 "yaw": 5.03,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 4.52
},
{
 "class": "ImageResource",
 "id": "ImageResource_84A6E2E7_9D1C_52F1_41D4_18CFD51650E9"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 3.26,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_81FE74FB_9D74_76D1_4191_7846E948F99A",
 "yaw": -0.68,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_81FE74FB_9D74_76D1_4191_7846E948F99A_0_2.jpeg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 724
   }
  ]
 },
 "pitch": 2.64,
 "hideDuration": 0,
 "showDuration": 0,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%"
},
{
 "levels": [
  {
   "url": "media/popup_B7883688_9556_2774_41CB_46A338073B88_0_0.jpg",
   "width": 2000,
   "class": "ImageResourceLevel",
   "height": 2000
  },
  {
   "url": "media/popup_B7883688_9556_2774_41CB_46A338073B88_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_B7883688_9556_2774_41CB_46A338073B88_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_8D793623_9B9C_9BDA_41E1_4E57C67A8DDE"
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_8AED04E5_9BE5_7859_41CA_371C003858E4",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_8AED04E5_9BE5_7859_41CA_371C003858E4_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_8AED04E5_9BE5_7859_41CA_371C003858E4_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": 2.28,
 "rotationY": 0,
 "yaw": -6.26,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 4.56
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_8EF69DE1_9BED_8859_41D5_0DE04A35E3CF",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_8EF69DE1_9BED_8859_41D5_0DE04A35E3CF_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_8EF69DE1_9BED_8859_41D5_0DE04A35E3CF_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": 2.28,
 "rotationY": 0,
 "yaw": 8.18,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 4.89
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_B31ABA4A_A543_939F_41D4_C8392FA53C6E",
 "initialPosition": {
  "yaw": 0.8,
  "class": "PanoramaCameraPosition",
  "pitch": -1.56
 }
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_8CE2E386_9BA5_98DB_41CF_25BCF2DEB1BE",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_8CE2E386_9BA5_98DB_41CF_25BCF2DEB1BE_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_8CE2E386_9BA5_98DB_41CF_25BCF2DEB1BE_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": 1.84,
 "rotationY": 0,
 "yaw": 5.85,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 5.88
},
{
 "levels": [
  {
   "url": "media/popup_8293CDF3_9BAC_8839_41BD_163D579207DA_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_8293CDF3_9BAC_8839_41BD_163D579207DA_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_8293CDF3_9BAC_8839_41BD_163D579207DA_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_8293CDF3_9BAC_8839_41BD_163D579207DA_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_82DB96ED_9A6D_7829_41A9_80A36C228EFD"
},
{
 "levels": [
  {
   "url": "media/popup_B78EC293_957A_1C94_417D_6AC4688F9C1F_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_B78EC293_957A_1C94_417D_6AC4688F9C1F_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_B78EC293_957A_1C94_417D_6AC4688F9C1F_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_AB8E9328_A4A0_6D93_41D6_939D2E1826CC"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_B32B99F5_A543_9075_41B7_FE4562C5C428",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "levels": [
  {
   "url": "media/popup_B1FC2E3E_955A_678D_41DB_154EB98C15C0_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_B1FC2E3E_955A_678D_41DB_154EB98C15C0_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_B1FC2E3E_955A_678D_41DB_154EB98C15C0_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_ABA02309_A4A0_6D92_41D7_5228982CC2E1"
},
{
 "class": "ImageResource",
 "id": "ImageResource_84A5F2DF_9D1C_52D1_41B0_F20FFFF677DD"
},
{
 "class": "ImageResource",
 "id": "ImageResource_84A372D5_9D1C_52D1_41D6_E02074431EA5"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_B305EA65_A543_9395_41DE_F4DFAA586FED",
 "initialPosition": {
  "yaw": -0.08,
  "class": "PanoramaCameraPosition",
  "pitch": -0.54
 }
},
{
 "levels": [
  {
   "url": "media/popup_83BEADBB_9BAD_8829_418E_674811CF112F_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_83BEADBB_9BAD_8829_418E_674811CF112F_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_83BEADBB_9BAD_8829_418E_674811CF112F_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_83BEADBB_9BAD_8829_418E_674811CF112F_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_82E796DB_9A6D_7869_41CB_6618FBF4B37C"
},
{
 "levels": [
  {
   "url": "media/popup_818913A7_9BAD_78DA_41DE_AC45239115BF_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_818913A7_9BAD_78DA_41DE_AC45239115BF_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_818913A7_9BAD_78DA_41DE_AC45239115BF_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_818913A7_9BAD_78DA_41DE_AC45239115BF_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_82E2F6D2_9A6D_787B_41D3_4552F4BD66BD"
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_B1DB0871_953A_2B94_41B5_798594686B6A",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_B1DB0871_953A_2B94_41B5_798594686B6A_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_B1DB0871_953A_2B94_41B5_798594686B6A_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": -5.02,
 "rotationY": 0,
 "yaw": 9.8,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 4.91
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_B32EB9D7_A543_90B5_41C5_D93FD97D14D0",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 3.67,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_B4D43009_9556_7B74_41E0_D2959B20FBDC",
 "yaw": -3.23,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_B4D43009_9556_7B74_41E0_D2959B20FBDC_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": -1.92,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%"
},
{
 "class": "ImageResource",
 "id": "ImageResource_82EBC6B0_9A6D_7836_41D5_3F43F10DD8BF"
},
{
 "levels": [
  {
   "url": "media/popup_81207DF7_9BA4_8839_41E2_267A7AA9C942_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_81207DF7_9BA4_8839_41E2_267A7AA9C942_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_81207DF7_9BA4_8839_41E2_267A7AA9C942_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_81207DF7_9BA4_8839_41E2_267A7AA9C942_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_82DD56F1_9A6D_7839_41CE_654C593ECDBD"
},
{
 "class": "ImageResource",
 "id": "ImageResource_82C81723_9A6D_79DA_41C4_6D87FC796539"
},
{
 "class": "ImageResource",
 "id": "ImageResource_82D0B703_9A6D_79D9_41DB_38521E45341B"
},
{
 "levels": [
  {
   "url": "media/popup_B63B15CA_952A_24F4_41DD_AB8F524C7690_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_B63B15CA_952A_24F4_41DD_AB8F524C7690_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_B63B15CA_952A_24F4_41DD_AB8F524C7690_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_AA5512F9_A4A0_6C75_41D8_7AEA350BFF3D"
},
{
 "class": "ImageResource",
 "id": "ImageResource_82DD76F8_9A6D_7837_41C4_853641DE03B5"
},
{
 "levels": [
  {
   "url": "media/popup_82161BF0_9B9B_8836_41AF_E7B034F99A73_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_82161BF0_9B9B_8836_41AF_E7B034F99A73_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_82161BF0_9B9B_8836_41AF_E7B034F99A73_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_AB947357_A4A0_6DBD_41C3_F3D4C77E47E6"
},
{
 "levels": [
  {
   "url": "media/popup_854680B2_9BA4_983B_41C0_C926FD9ED5F1_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_854680B2_9BA4_983B_41C0_C926FD9ED5F1_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_854680B2_9BA4_983B_41C0_C926FD9ED5F1_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_AB9AC347_A4A0_6D9D_41E0_57B89748169A"
},
{
 "levels": [
  {
   "url": "media/popup_8CE2E386_9BA5_98DB_41CF_25BCF2DEB1BE_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_8CE2E386_9BA5_98DB_41CF_25BCF2DEB1BE_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_8CE2E386_9BA5_98DB_41CF_25BCF2DEB1BE_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_AB8F5338_A4A0_6DF2_41A6_60C66A81CD48"
},
{
 "levels": [
  {
   "url": "media/popup_B6B1CD59_9556_2594_41CC_00A5966BE61E_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_B6B1CD59_9556_2594_41CC_00A5966BE61E_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_B6B1CD59_9556_2594_41CC_00A5966BE61E_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_B6B1CD59_9556_2594_41CC_00A5966BE61E_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_8D749604_9B9C_9BDE_41D1_992F96F73E6A"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_B2E28C75_A543_9074_41D9_1A6ACB18D58C",
 "initialPosition": {
  "yaw": 0.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_B78EC293_957A_1C94_417D_6AC4688F9C1F",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_B78EC293_957A_1C94_417D_6AC4688F9C1F_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_B78EC293_957A_1C94_417D_6AC4688F9C1F_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": 1.8,
 "rotationY": 0,
 "yaw": -1.38,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 5.36
},
{
 "levels": [
  {
   "url": "media/popup_82C67A90_9BAB_88F6_41CD_77CA73255A7D_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_82C67A90_9BAB_88F6_41CD_77CA73255A7D_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_82C67A90_9BAB_88F6_41CD_77CA73255A7D_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_AB85C338_A4A0_6DF2_41E0_9885D7C28E0E"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 3.75,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_B4E57643_956A_67F4_41E0_810E19CE9D39",
 "yaw": -7.41,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_B4E57643_956A_67F4_41E0_810E19CE9D39_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": -5.23,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_B20D5D7F_A543_9075_41DF_C130B4310078",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_82F95727_9BA4_99D9_41AA_6222D3D7C1A9",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_82F95727_9BA4_99D9_41AA_6222D3D7C1A9_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_82F95727_9BA4_99D9_41AA_6222D3D7C1A9_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": 1.54,
 "rotationY": 0,
 "yaw": -1.65,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 4.59
},
{
 "class": "ImageResource",
 "id": "ImageResource_8D6E95D5_9B9C_987E_41DB_10557D558EC2"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_99A1F443_97A5_B859_41E0_6D42E4DF0706_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_B3178A14_A543_938B_41DF_B67E90867ED9",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "levels": [
  {
   "url": "media/popup_80D1BB81_9A65_88D6_41E0_16B519A5AFE9_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_80D1BB81_9A65_88D6_41E0_16B519A5AFE9_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_80D1BB81_9A65_88D6_41E0_16B519A5AFE9_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_AB93D347_A4A0_6D9D_41DA_8687B088A3BE"
},
{
 "minWidth": 20,
 "borderRadius": 5,
 "closeButtonPaddingBottom": 5,
 "id": "window_B2400440_A5C2_778B_41D4_BC4BB8770EB4",
 "contentOpaque": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "footerHeight": 5,
 "titlePaddingLeft": 5,
 "backgroundColorRatios": [],
 "shadowHorizontalLength": 3,
 "closeButtonPaddingLeft": 5,
 "closeButtonBorderRadius": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "bodyPaddingLeft": 0,
 "closeButtonPressedIconColor": "#888888",
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "headerBackgroundOpacity": 0,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "verticalAlign": "middle",
 "closeButtonPressedIconLineWidth": 5,
 "modal": true,
 "closeButtonPressedBorderSize": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonBackgroundOpacity": 0.3,
 "headerVerticalAlign": "middle",
 "closeButtonBorderSize": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarColor": "#000000",
 "closeButtonIconWidth": 20,
 "layout": "vertical",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 0,
 "backgroundColor": [],
 "bodyPaddingBottom": 0,
 "closeButtonPaddingTop": 5,
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "closeButtonIconHeight": 20,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 0,
 "titlePaddingTop": 5,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "headerPaddingBottom": 5,
 "veilOpacity": 0.4,
 "titlePaddingRight": 5,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "shadowSpread": 1,
 "titleFontSize": "1.29vmin",
 "closeButtonBorderColor": "#000000",
 "veilColorRatios": [
  0,
  1
 ],
 "backgroundOpacity": 1,
 "footerBackgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "closeButtonBackgroundColorDirection": "vertical",
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "closeButtonRollOverBorderColor": "#000000",
 "children": [
  "this.viewer_uidBF2C9777_A543_9076_41C0_6920E0D2C72A"
 ],
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "propagateClick": false,
 "closeButtonPressedBorderColor": "#000000",
 "closeButtonRollOverIconLineWidth": 5,
 "headerPaddingLeft": 10,
 "closeButtonIconLineWidth": 5,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#666666",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "minHeight": 20,
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingRight": 0,
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "backgroundColorDirection": "vertical",
 "closeButtonRollOverBorderSize": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "class": "Window",
 "titleFontFamily": "Arial",
 "closeButtonIconColor": "#000000",
 "closeButtonPressedBackgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "closeButtonPaddingRight": 5,
 "bodyPaddingRight": 0,
 "data": {
  "name": "Window21326"
 },
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "shadowOpacity": 0.5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadow": true
},
{
 "class": "ImageResource",
 "id": "ImageResource_84A022C8_9D1C_6D3F_41C1_684B43AE2583"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 3.25,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_804096B3_9D6C_5551_41E2_FB8B7A622D62",
 "yaw": 0.18,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_804096B3_9D6C_5551_41E2_FB8B7A622D62_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   }
  ]
 },
 "pitch": 3.76,
 "hideDuration": 0,
 "showDuration": 0,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%"
},
{
 "levels": [
  {
   "url": "media/popup_B132FC29_9536_6BB7_41E1_E1C5D1D02D95_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_B132FC29_9536_6BB7_41E1_E1C5D1D02D95_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_B132FC29_9536_6BB7_41E1_E1C5D1D02D95_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_ABAA72F9_A4A0_6C75_41E1_1AA410B7A6B3"
},
{
 "class": "ImageResource",
 "id": "ImageResource_84A202D9_9D1C_52D1_41DF_A09D2A70C1CE"
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_8FF2EFDC_9BEF_886E_41D7_E63240A711BF",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_8FF2EFDC_9BEF_886E_41D7_E63240A711BF_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_8FF2EFDC_9BEF_886E_41D7_E63240A711BF_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": -0.57,
 "rotationY": 0,
 "yaw": 3.3,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 4.34
},
{
 "levels": [
  {
   "url": "media/popup_B0DE2642_952A_67F5_41E1_E1C78A496C51_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_B0DE2642_952A_67F5_41E1_E1C78A496C51_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_B0DE2642_952A_67F5_41E1_E1C78A496C51_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_B0DE2642_952A_67F5_41E1_E1C78A496C51_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_8D72C604_9B9C_9BDE_41D3_1D2EF37273B1"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_9B8656D4_97A4_987E_41B7_89C105C3D02A_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "levels": [
  {
   "url": "media/popup_B6FB7333_9556_7D94_41DA_F7EE251D45C9_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_B6FB7333_9556_7D94_41DA_F7EE251D45C9_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_B6FB7333_9556_7D94_41DA_F7EE251D45C9_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_ABAD3309_A4A0_6D92_41E1_C6A568A83F0B"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_B3106A2E_A543_9397_41D9_B90914118158",
 "initialPosition": {
  "yaw": 0.16,
  "class": "PanoramaCameraPosition",
  "pitch": 2.06
 }
},
{
 "levels": [
  {
   "url": "media/popup_B0DE2642_952A_67F5_41E1_E1C78A496C51_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_B0DE2642_952A_67F5_41E1_E1C78A496C51_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_B0DE2642_952A_67F5_41E1_E1C78A496C51_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_ABAF92F9_A4A0_6C75_41E2_3E9A46013CC3"
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_B6F1F702_952E_2574_41D9_D5BF0BA145AB",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_B6F1F702_952E_2574_41D9_D5BF0BA145AB_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_B6F1F702_952E_2574_41D9_D5BF0BA145AB_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": -1.72,
 "rotationY": 0,
 "yaw": 0.06,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 4.58
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_B16D0D45_955E_E5FF_41E1_4C662FE2F0F0",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_B16D0D45_955E_E5FF_41E1_4C662FE2F0F0_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_B16D0D45_955E_E5FF_41E1_4C662FE2F0F0_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": -1.71,
 "rotationY": 0,
 "yaw": -4.19,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 4.58
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_BEFAF8E3_A543_908D_41DC_2E4FCDAFE0AD",
 "initialPosition": {
  "yaw": -1.05,
  "class": "PanoramaCameraPosition",
  "pitch": -0.99
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_99A1F443_97A5_B859_41E0_6D42E4DF0706_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 53,
      "colCount": 53,
      "width": 27136,
      "tags": "ondemand",
      "height": 27136
     },
     {
      "url": "media/panorama_99A1F443_97A5_B859_41E0_6D42E4DF0706_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 27,
      "colCount": 27,
      "width": 13824,
      "tags": "ondemand",
      "height": 13824
     },
     {
      "url": "media/panorama_99A1F443_97A5_B859_41E0_6D42E4DF0706_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 14,
      "colCount": 14,
      "width": 7168,
      "tags": "ondemand",
      "height": 7168
     },
     {
      "url": "media/panorama_99A1F443_97A5_B859_41E0_6D42E4DF0706_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_99A1F443_97A5_B859_41E0_6D42E4DF0706_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_99A1F443_97A5_B859_41E0_6D42E4DF0706_0/f/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_99A1F443_97A5_B859_41E0_6D42E4DF0706_0/f/6/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_99A1F443_97A5_B859_41E0_6D42E4DF0706_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "rak vegetable",
 "id": "panorama_99A1F443_97A5_B859_41E0_6D42E4DF0706",
 "hfov": 30,
 "overlays": [
  "this.overlay_99A1C444_97A5_B85E_41D6_B16296C975D2",
  "this.overlay_8E63056A_9BA7_782A_41C8_B4564CD26441",
  "this.overlay_816D499F_9BA4_88E9_41C8_38AA200854F4"
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9A033A7C_97A4_882E_41B5_1A5A5BB15FA1"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9A094D79_97A7_8836_41BC_AF57757A41C8"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8E2CC0D3_9BBC_987A_41E2_80C3508F512D"
  }
 ],
 "vfov": 15.39,
 "hfovMax": 30,
 "partial": true,
 "thumbnailUrl": "media/panorama_99A1F443_97A5_B859_41E0_6D42E4DF0706_t.jpg"
},
{
 "levels": [
  {
   "url": "media/popup_8D216551_9BA4_9876_41B4_58100748FB81_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_8D216551_9BA4_9876_41B4_58100748FB81_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_8D216551_9BA4_9876_41B4_58100748FB81_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_8D216551_9BA4_9876_41B4_58100748FB81_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_82EC96B9_9A6D_7836_41BE_4DADB7FE5C09"
},
{
 "levels": [
  {
   "url": "media/popup_82C67A90_9BAB_88F6_41CD_77CA73255A7D_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_82C67A90_9BAB_88F6_41CD_77CA73255A7D_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_82C67A90_9BAB_88F6_41CD_77CA73255A7D_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_82C67A90_9BAB_88F6_41CD_77CA73255A7D_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_82E456E2_9A6D_785B_41BF_F5D179EB9E18"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_B2B6DB93_A543_908D_41D3_7C00B4BB054A",
 "initialPosition": {
  "yaw": 0.8,
  "class": "PanoramaCameraPosition",
  "pitch": -0.58
 }
},
{
 "levels": [
  {
   "url": "media/popup_83B2119A_9BA5_B8EB_41DD_CC95ADC227E2_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_83B2119A_9BA5_B8EB_41DD_CC95ADC227E2_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_83B2119A_9BA5_B8EB_41DD_CC95ADC227E2_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_83B2119A_9BA5_B8EB_41DD_CC95ADC227E2_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_82EED6C6_9A6D_785B_41DF_514E00AF6024"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 3.87,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_B40B3D2B_9556_258B_41E2_11BC55A51551",
 "yaw": 2.07,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_B40B3D2B_9556_258B_41E2_11BC55A51551_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": -1.88,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%"
},
{
 "levels": [
  {
   "url": "media/popup_B1724FE4_952A_24BD_41C7_A96D2DEB56D5_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_B1724FE4_952A_24BD_41C7_A96D2DEB56D5_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_B1724FE4_952A_24BD_41C7_A96D2DEB56D5_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_ABAEA2F9_A4A0_6C75_4173_FD2F095DEA33"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_B3687B13_A543_918D_41E4_26C2880C4D70",
 "initialPosition": {
  "yaw": -0.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0.82
 }
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_B62B82DA_955A_1C94_41C9_A4E78AAA7076",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_B62B82DA_955A_1C94_41C9_A4E78AAA7076_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_B62B82DA_955A_1C94_41C9_A4E78AAA7076_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": -5.06,
 "rotationY": 0,
 "yaw": -4.11,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 4.43
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 3.95,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_B43729B6_956A_2C9C_41DA_95E60486315D",
 "yaw": 6.97,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_B43729B6_956A_2C9C_41DA_95E60486315D_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": -5.18,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_9BC8FA92_979B_88FA_41C0_251C0CA2A10E_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "levels": [
  {
   "url": "media/popup_857F7D04_9D6C_D737_41DA_A6A6E5306D48_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_857F7D04_9D6C_D737_41DA_A6A6E5306D48_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_857F7D04_9D6C_D737_41DA_A6A6E5306D48_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_857F7D04_9D6C_D737_41DA_A6A6E5306D48_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_8557233C_9D1C_5356_41C4_4599F4C48327"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9BC8FA92_979B_88FA_41C0_251C0CA2A10E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 38,
      "colCount": 38,
      "width": 19456,
      "tags": "ondemand",
      "height": 19456
     },
     {
      "url": "media/panorama_9BC8FA92_979B_88FA_41C0_251C0CA2A10E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 19,
      "colCount": 19,
      "width": 9728,
      "tags": "ondemand",
      "height": 9728
     },
     {
      "url": "media/panorama_9BC8FA92_979B_88FA_41C0_251C0CA2A10E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "height": 5120
     },
     {
      "url": "media/panorama_9BC8FA92_979B_88FA_41C0_251C0CA2A10E_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_9BC8FA92_979B_88FA_41C0_251C0CA2A10E_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_9BC8FA92_979B_88FA_41C0_251C0CA2A10E_0/f/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9BC8FA92_979B_88FA_41C0_251C0CA2A10E_0/f/6/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_9BC8FA92_979B_88FA_41C0_251C0CA2A10E_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "zoom kursi belakang kanan",
 "id": "panorama_9BC8FA92_979B_88FA_41C0_251C0CA2A10E",
 "hfov": 30,
 "overlays": [
  "this.overlay_9BC89A92_979B_88FA_41D3_AAAA825C0FA8",
  "this.overlay_9BC8BA92_979B_88FA_41A3_B672AD48E7E8",
  "this.overlay_855C3CCF_9D75_B531_41E1_374429603023",
  "this.popup_81FE74FB_9D74_76D1_4191_7846E948F99A"
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9B8656D4_97A4_987E_41B7_89C105C3D02A"
  }
 ],
 "vfov": 15.38,
 "hfovMax": 30,
 "partial": true,
 "thumbnailUrl": "media/panorama_9BC8FA92_979B_88FA_41C0_251C0CA2A10E_t.jpg"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_81DF1DA0_9BE7_88D7_41E1_8D48B5A1F9A6_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_995D51C3_97A5_9859_41C0_5015379F0B1E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 45,
      "colCount": 45,
      "width": 23040,
      "tags": "ondemand",
      "height": 23040
     },
     {
      "url": "media/panorama_995D51C3_97A5_9859_41C0_5015379F0B1E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 23,
      "colCount": 23,
      "width": 11776,
      "tags": "ondemand",
      "height": 11776
     },
     {
      "url": "media/panorama_995D51C3_97A5_9859_41C0_5015379F0B1E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 12,
      "colCount": 12,
      "width": 6144,
      "tags": "ondemand",
      "height": 6144
     },
     {
      "url": "media/panorama_995D51C3_97A5_9859_41C0_5015379F0B1E_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_995D51C3_97A5_9859_41C0_5015379F0B1E_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_995D51C3_97A5_9859_41C0_5015379F0B1E_0/f/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_995D51C3_97A5_9859_41C0_5015379F0B1E_0/f/6/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_995D51C3_97A5_9859_41C0_5015379F0B1E_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "roots",
 "id": "panorama_995D51C3_97A5_9859_41C0_5015379F0B1E",
 "hfov": 30,
 "overlays": [
  "this.overlay_995D41C3_97A5_9859_41BE_C1572B6F01EB",
  "this.overlay_995D31C3_97A5_9859_41DE_0817664A74B3",
  "this.overlay_995D21C3_97A5_9859_41AB_DB1A60BF0D78",
  "this.overlay_995D01C3_97A5_9859_41B4_1E842E5971C3",
  "this.overlay_995DF1C3_97A5_9859_41E0_40532D7F49FA",
  "this.overlay_995DE1C3_97A5_9859_41A4_03A6EBDB2515",
  "this.overlay_995DD1C3_97A5_9859_41B3_EF44DD577B43",
  "this.overlay_995DC1C3_97A5_9859_41DD_CC23DB9EE266",
  "this.popup_B78EC293_957A_1C94_417D_6AC4688F9C1F",
  "this.popup_8CE2E386_9BA5_98DB_41CF_25BCF2DEB1BE",
  "this.popup_8D216551_9BA4_9876_41B4_58100748FB81",
  "this.popup_8F292AC3_9BAB_885A_41C1_70D0F93FA726"
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_877B0AA0_97AD_88D6_41C2_271020302E1E"
  }
 ],
 "vfov": 15.39,
 "hfovMax": 30,
 "partial": true,
 "thumbnailUrl": "media/panorama_995D51C3_97A5_9859_41C0_5015379F0B1E_t.jpg"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_B2C37CC6_A543_9097_41D4_9D5350C84CFB",
 "initialPosition": {
  "yaw": 0.32,
  "class": "PanoramaCameraPosition",
  "pitch": -0.82
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_82D34705_9A6D_79D9_4195_58071F647A1C"
},
{
 "levels": [
  {
   "url": "media/popup_8AC03A74_9BEC_883E_41D1_32F981924177_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_8AC03A74_9BEC_883E_41D1_32F981924177_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_8AC03A74_9BEC_883E_41D1_32F981924177_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_AA53A2EA_A4A0_6C96_41DB_B6CBD115C378"
},
{
 "levels": [
  {
   "url": "media/popup_B1DB0871_953A_2B94_41B5_798594686B6A_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_B1DB0871_953A_2B94_41B5_798594686B6A_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_B1DB0871_953A_2B94_41B5_798594686B6A_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_B1DB0871_953A_2B94_41B5_798594686B6A_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_8D70C5E4_9B9C_985F_41A9_99DB8C1B79C9"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_B2BF5BAE_A543_9097_41D2_11CD9E15280A",
 "initialPosition": {
  "yaw": 0.24,
  "class": "PanoramaCameraPosition",
  "pitch": -0.25
 }
},
{
 "levels": [
  {
   "url": "media/popup_85230C70_9BAC_8837_41D9_1917A6A062A3_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_85230C70_9BAC_8837_41D9_1917A6A062A3_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_85230C70_9BAC_8837_41D9_1917A6A062A3_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_AB802338_A4A0_6DF2_41E1_DBF4F681F368"
},
{
 "levels": [
  {
   "url": "media/popup_B6BFA5A9_952A_64B7_41C0_0FAF731A2651_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_B6BFA5A9_952A_64B7_41C0_0FAF731A2651_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_B6BFA5A9_952A_64B7_41C0_0FAF731A2651_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_B6BFA5A9_952A_64B7_41C0_0FAF731A2651_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_8D725604_9B9C_9BDE_41D9_ADA6216D049E"
},
{
 "class": "ImageResource",
 "id": "ImageResource_84A372DA_9D1C_52D3_4194_BAAAC6F077A4"
},
{
 "levels": [
  {
   "url": "media/popup_B1724FE4_952A_24BD_41C7_A96D2DEB56D5_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_B1724FE4_952A_24BD_41C7_A96D2DEB56D5_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_B1724FE4_952A_24BD_41C7_A96D2DEB56D5_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_B1724FE4_952A_24BD_41C7_A96D2DEB56D5_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_8D716604_9B9C_9BDE_41D3_A1A28283C376"
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_8293CDF3_9BAC_8839_41BD_163D579207DA",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_8293CDF3_9BAC_8839_41BD_163D579207DA_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_8293CDF3_9BAC_8839_41BD_163D579207DA_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": 1.03,
 "rotationY": 0,
 "yaw": 6.53,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 4.74
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_98430603_97A5_9BDA_41A6_BCADCF045178_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_B23D4D0C_A543_919B_41E2_3E286F504474",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_82D946E6_9A6D_785B_41D7_32B6CB45384C"
},
{
 "levels": [
  {
   "url": "media/popup_81243F57_9BAC_887A_41AB_BA2A79F098F6_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_81243F57_9BAC_887A_41AB_BA2A79F098F6_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_81243F57_9BAC_887A_41AB_BA2A79F098F6_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_81243F57_9BAC_887A_41AB_BA2A79F098F6_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_82E546D9_9A6D_7869_41B5_F774FD28940A"
},
{
 "levels": [
  {
   "url": "media/popup_B63B15CA_952A_24F4_41DD_AB8F524C7690_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_B63B15CA_952A_24F4_41DD_AB8F524C7690_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_B63B15CA_952A_24F4_41DD_AB8F524C7690_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_B63B15CA_952A_24F4_41DD_AB8F524C7690_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_8D7175F4_9B9C_983E_41A7_DD314DAA0C85"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_B28B6C3F_A543_97F5_41B4_B2F7EE6D1E82",
 "initialPosition": {
  "yaw": 0.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0.82
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_84A202D3_9D1C_52D1_41C4_55E202C93B66"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 2.71,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_857F7D04_9D6C_D737_41DA_A6A6E5306D48",
 "yaw": 0.93,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_857F7D04_9D6C_D737_41DA_A6A6E5306D48_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   }
  ]
 },
 "pitch": 2.7,
 "hideDuration": 0,
 "showDuration": 0,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%"
},
{
 "thumbnailUrl": "media/video_B083248E_A5C6_7097_41D2_7A8B6878D97E_t.jpg",
 "scaleMode": "fit_outside",
 "width": 1280,
 "label": "video6183641634991769994",
 "loop": false,
 "id": "video_B083248E_A5C6_7097_41D2_7A8B6878D97E",
 "class": "Video",
 "height": 656,
 "video": {
  "width": 1280,
  "class": "VideoResource",
  "height": 656,
  "mp4Url": "media/video_B083248E_A5C6_7097_41D2_7A8B6878D97E.mp4"
 }
},
{
 "levels": [
  {
   "url": "media/popup_81207DF7_9BA4_8839_41E2_267A7AA9C942_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_81207DF7_9BA4_8839_41E2_267A7AA9C942_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_81207DF7_9BA4_8839_41E2_267A7AA9C942_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_AB991347_A4A0_6D9D_41E2_48628963138A"
},
{
 "levels": [
  {
   "url": "media/popup_B7C65FBF_9559_E48C_41DC_3E12E81B0D43_0_0.jpg",
   "width": 2000,
   "class": "ImageResourceLevel",
   "height": 2000
  },
  {
   "url": "media/popup_B7C65FBF_9559_E48C_41DC_3E12E81B0D43_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_B7C65FBF_9559_E48C_41DC_3E12E81B0D43_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_8D764613_9B9C_9BF9_41E0_BC2736098C50"
},
{
 "levels": [
  {
   "url": "media/popup_8AC8E9A0_9BEC_88D7_41CD_D490DBA78416_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_8AC8E9A0_9BEC_88D7_41CD_D490DBA78416_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_8AC8E9A0_9BEC_88D7_41CD_D490DBA78416_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_8AC8E9A0_9BEC_88D7_41CD_D490DBA78416_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_8D6D15D5_9B9C_987E_41BE_05627B5F1F5C"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_B3607AF7_A543_9075_41DB_F49C6C859EF1",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 3.26,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_819147E9_9D6C_72F1_41CB_EDADAF60B6D2",
 "yaw": -2.45,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_819147E9_9D6C_72F1_41CB_EDADAF60B6D2_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   }
  ]
 },
 "pitch": 3.08,
 "hideDuration": 0,
 "showDuration": 0,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%"
},
{
 "levels": [
  {
   "url": "media/popup_B6DA1F34_955E_259D_41DB_93BE218293BC_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_B6DA1F34_955E_259D_41DB_93BE218293BC_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_B6DA1F34_955E_259D_41DB_93BE218293BC_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_B6DA1F34_955E_259D_41DB_93BE218293BC_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_8D759613_9B9C_9BF9_41AC_90497FB401B1"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_9A9D6B86_97A5_88DA_41DD_3ED78C68959B_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 2.71,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_839A6568_9D6D_B7FF_41D6_4B5F91213305",
 "yaw": -0.1,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_839A6568_9D6D_B7FF_41D6_4B5F91213305_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   }
  ]
 },
 "pitch": 3.56,
 "hideDuration": 0,
 "showDuration": 0,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%"
},
{
 "levels": [
  {
   "url": "media/popup_83BEADBB_9BAD_8829_418E_674811CF112F_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_83BEADBB_9BAD_8829_418E_674811CF112F_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_83BEADBB_9BAD_8829_418E_674811CF112F_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_AB848338_A4A0_6DF2_41E4_188233F8AA89"
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_8AC1B058_9BEC_B876_41D8_FC7C1A313139",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_8AC1B058_9BEC_B876_41D8_FC7C1A313139_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_8AC1B058_9BEC_B876_41D8_FC7C1A313139_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": -0.6,
 "rotationY": 0,
 "yaw": -6.18,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 3.92
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_998866A4_97A7_78DF_41E2_CAB386A0B055_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 45,
      "colCount": 45,
      "width": 23040,
      "tags": "ondemand",
      "height": 23040
     },
     {
      "url": "media/panorama_998866A4_97A7_78DF_41E2_CAB386A0B055_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 23,
      "colCount": 23,
      "width": 11776,
      "tags": "ondemand",
      "height": 11776
     },
     {
      "url": "media/panorama_998866A4_97A7_78DF_41E2_CAB386A0B055_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 12,
      "colCount": 12,
      "width": 6144,
      "tags": "ondemand",
      "height": 6144
     },
     {
      "url": "media/panorama_998866A4_97A7_78DF_41E2_CAB386A0B055_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_998866A4_97A7_78DF_41E2_CAB386A0B055_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_998866A4_97A7_78DF_41E2_CAB386A0B055_0/f/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_998866A4_97A7_78DF_41E2_CAB386A0B055_0/f/6/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_998866A4_97A7_78DF_41E2_CAB386A0B055_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "fruit chips kanan",
 "id": "panorama_998866A4_97A7_78DF_41E2_CAB386A0B055",
 "hfov": 30,
 "overlays": [
  "this.overlay_998876A4_97A7_78DF_41A0_51E63A5032CC",
  "this.overlay_998896A4_97A7_78DF_41A7_BBEC2A1290B3",
  "this.overlay_9988B6A4_97A7_78DF_41DB_B6D621DE1FCE",
  "this.overlay_9988E6A4_97A7_78DF_41C8_A4F80B7F9BBC",
  "this.overlay_9988F6A4_97A7_78DF_41D4_F3F723D85AE9",
  "this.overlay_998B86A5_97A7_78D9_41D0_6EC4AB81B101",
  "this.overlay_998B96A5_97A7_78D9_41CF_1E8E17EF8A80",
  "this.overlay_998BA6A5_97A7_78D9_41E0_478FFDAC4933",
  "this.overlay_998BB6A5_97A7_78D9_41DF_38A29BE61DF4",
  "this.overlay_998BD6A5_97A7_78D9_41CD_825CF1C6F228",
  "this.overlay_998BF6A5_97A7_78D9_41C4_6E484EAA7F55",
  "this.overlay_998806A5_97A7_78D9_41E0_1C948E230BAD",
  "this.overlay_998816A5_97A7_78D9_41D3_4060A63E0358",
  "this.overlay_998836A5_97A7_78D9_41CD_1DC14C48DC95",
  "this.popup_B6B76A4D_952A_6F8F_41D5_856C2B4B8061",
  "this.popup_B1DB0871_953A_2B94_41B5_798594686B6A",
  "this.popup_B146CB5E_953B_ED8C_41D5_9CD505D45E0E",
  "this.popup_B165C1A1_953A_7CB4_41B4_D54F4FD49A74",
  "this.popup_B6950949_952A_2DF4_41DA_3D22E90D006A",
  "this.popup_B63B15CA_952A_24F4_41DD_AB8F524C7690",
  "this.popup_B132FC29_9536_6BB7_41E1_E1C5D1D02D95",
  "this.popup_B6F1F702_952E_2574_41D9_D5BF0BA145AB",
  "this.popup_B19C77C4_952E_24FC_4175_E880517EA612",
  "this.popup_B1724FE4_952A_24BD_41C7_A96D2DEB56D5",
  "this.popup_B0DE2642_952A_67F5_41E1_E1C78A496C51",
  "this.popup_B6BFA5A9_952A_64B7_41C0_0FAF731A2651"
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_86394A4B_97AF_886A_41D6_5E279BC46D2D"
  }
 ],
 "vfov": 15.39,
 "hfovMax": 30,
 "partial": true,
 "thumbnailUrl": "media/panorama_998866A4_97A7_78DF_41E2_CAB386A0B055_t.jpg"
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_8F292AC3_9BAB_885A_41C1_70D0F93FA726",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_8F292AC3_9BAB_885A_41C1_70D0F93FA726_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_8F292AC3_9BAB_885A_41C1_70D0F93FA726_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": -1.37,
 "rotationY": 0,
 "yaw": 5.63,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 5.83
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_B6DA1F34_955E_259D_41DB_93BE218293BC",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_B6DA1F34_955E_259D_41DB_93BE218293BC_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_B6DA1F34_955E_259D_41DB_93BE218293BC_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": -1.76,
 "rotationY": 0,
 "yaw": -8.92,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 4.63
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_99BA27DF_97A4_F86A_41BE_8455B88BC42D_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_B2597DF0_A543_908A_41AE_734A1DBFEBC3",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_82E166CE_9A6D_786B_41E1_BFFC49B0ECFC"
},
{
 "class": "ImageResource",
 "id": "ImageResource_84A122CB_9D1C_6D31_41D0_96BCADEC220F"
},
{
 "levels": [
  {
   "url": "media/popup_8EF69DE1_9BED_8859_41D5_0DE04A35E3CF_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_8EF69DE1_9BED_8859_41D5_0DE04A35E3CF_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_8EF69DE1_9BED_8859_41D5_0DE04A35E3CF_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_AA5D42EA_A4A0_6C96_41D0_8635C7C57696"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_B343CB78_A543_907B_41AE_E4E494C08577",
 "initialPosition": {
  "yaw": -1.04,
  "class": "PanoramaCameraPosition",
  "pitch": -0.08
 }
},
{
 "levels": [
  {
   "url": "media/popup_819147E9_9D6C_72F1_41CB_EDADAF60B6D2_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_819147E9_9D6C_72F1_41CB_EDADAF60B6D2_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_819147E9_9D6C_72F1_41CB_EDADAF60B6D2_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_819147E9_9D6C_72F1_41CB_EDADAF60B6D2_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_8548B33E_9D1C_5352_41D4_D8C79437CED8"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A9D6B86_97A5_88DA_41DD_3ED78C68959B_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 45,
      "colCount": 45,
      "width": 23040,
      "tags": "ondemand",
      "height": 23040
     },
     {
      "url": "media/panorama_9A9D6B86_97A5_88DA_41DD_3ED78C68959B_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 23,
      "colCount": 23,
      "width": 11776,
      "tags": "ondemand",
      "height": 11776
     },
     {
      "url": "media/panorama_9A9D6B86_97A5_88DA_41DD_3ED78C68959B_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 12,
      "colCount": 12,
      "width": 6144,
      "tags": "ondemand",
      "height": 6144
     },
     {
      "url": "media/panorama_9A9D6B86_97A5_88DA_41DD_3ED78C68959B_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_9A9D6B86_97A5_88DA_41DD_3ED78C68959B_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_9A9D6B86_97A5_88DA_41DD_3ED78C68959B_0/f/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9A9D6B86_97A5_88DA_41DD_3ED78C68959B_0/f/6/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_9A9D6B86_97A5_88DA_41DD_3ED78C68959B_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "best seller",
 "id": "panorama_9A9D6B86_97A5_88DA_41DD_3ED78C68959B",
 "hfov": 30,
 "overlays": [
  "this.overlay_9A9D4B86_97A5_88DA_41D0_851A6FA67AA8",
  "this.overlay_9A9D9B86_97A5_88DA_41E0_32BD60CC5965",
  "this.overlay_8E657019_9BE7_97E9_41CC_6826FFFAAD98",
  "this.overlay_8A8CF8EB_9BE4_8829_41D7_59EFBBE15A47",
  "this.overlay_8C2A5AD6_9BE4_887A_41CA_F89A096764BC",
  "this.overlay_8FE5CCB9_9BE4_8836_41B0_3BC0E0DA8C68",
  "this.overlay_8156BF57_9BE4_887A_41D3_8E52552E71EF",
  "this.overlay_8A9DE19D_9BE4_B8EE_41D7_F454AF21ADC4",
  "this.overlay_8C216345_9BE4_B859_41E0_70ABF55F3028",
  "this.overlay_8FDC352B_9BE4_B829_41E0_B4C3FD5BCC8D",
  "this.overlay_81386799_9BE4_B8E9_41E2_71BB43046666",
  "this.overlay_8A8D09FB_9BE4_882A_41D3_AB26E0D64642",
  "this.overlay_8DCE0B78_9BE4_8837_41D3_CF1C1DD5F7BE",
  "this.overlay_8F73CD88_9BE4_88D7_41D1_E5F8AC3CBB47",
  "this.popup_8AED04E5_9BE5_7859_41CA_371C003858E4",
  "this.popup_8ACA71C0_9BEB_9856_41DA_A92154BA5EBA",
  "this.popup_8AC03A74_9BEC_883E_41D1_32F981924177",
  "this.popup_8EF69DE1_9BED_8859_41D5_0DE04A35E3CF",
  "this.popup_8AC8E9A0_9BEC_88D7_41CD_D490DBA78416",
  "this.popup_8FF2EFDC_9BEF_886E_41D7_E63240A711BF",
  "this.popup_8F9E7737_9BED_783A_41CF_8056FA5AE36C",
  "this.popup_8AC1B058_9BEC_B876_41D8_FC7C1A313139"
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_877B0AA0_97AD_88D6_41C2_271020302E1E"
  }
 ],
 "vfov": 15.39,
 "hfovMax": 30,
 "partial": true,
 "thumbnailUrl": "media/panorama_9A9D6B86_97A5_88DA_41DD_3ED78C68959B_t.jpg"
},
{
 "items": [
  {
   "camera": "this.panorama_9FE32371_952A_1D97_4187_224C5F74D5B6_camera",
   "media": "this.panorama_9FE32371_952A_1D97_4187_224C5F74D5B6",
   "start": "this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 0)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_9A9D6B86_97A5_88DA_41DD_3ED78C68959B_camera",
   "media": "this.panorama_9A9D6B86_97A5_88DA_41DD_3ED78C68959B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_998866A4_97A7_78DF_41E2_CAB386A0B055_camera",
   "media": "this.panorama_998866A4_97A7_78DF_41E2_CAB386A0B055",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_98F4D827_97A4_97DA_41DF_006AE3C9C012_camera",
   "media": "this.panorama_98F4D827_97A4_97DA_41DF_006AE3C9C012",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_98430603_97A5_9BDA_41A6_BCADCF045178_camera",
   "media": "this.panorama_98430603_97A5_9BDA_41A6_BCADCF045178",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_9B8656D4_97A4_987E_41B7_89C105C3D02A_camera",
   "media": "this.panorama_9B8656D4_97A4_987E_41B7_89C105C3D02A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_9846488E_97A4_88EA_41BF_CD3C5F04F01D_camera",
   "media": "this.panorama_9846488E_97A4_88EA_41BF_CD3C5F04F01D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_98839B56_97AB_887B_41E2_BD3508A278E6_camera",
   "media": "this.panorama_98839B56_97AB_887B_41E2_BD3508A278E6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_98369766_97AC_B85B_4199_2CB4BEE25956_camera",
   "media": "this.panorama_98369766_97AC_B85B_4199_2CB4BEE25956",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_877B0AA0_97AD_88D6_41C2_271020302E1E_camera",
   "media": "this.panorama_877B0AA0_97AD_88D6_41C2_271020302E1E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_86394A4B_97AF_886A_41D6_5E279BC46D2D_camera",
   "media": "this.panorama_86394A4B_97AF_886A_41D6_5E279BC46D2D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_9A033A7C_97A4_882E_41B5_1A5A5BB15FA1_camera",
   "media": "this.panorama_9A033A7C_97A4_882E_41B5_1A5A5BB15FA1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_99A1F443_97A5_B859_41E0_6D42E4DF0706_camera",
   "media": "this.panorama_99A1F443_97A5_B859_41E0_6D42E4DF0706",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_995D51C3_97A5_9859_41C0_5015379F0B1E_camera",
   "media": "this.panorama_995D51C3_97A5_9859_41C0_5015379F0B1E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_9A094D79_97A7_8836_41BC_AF57757A41C8_camera",
   "media": "this.panorama_9A094D79_97A7_8836_41BC_AF57757A41C8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_8E2CC0D3_9BBC_987A_41E2_80C3508F512D_camera",
   "media": "this.panorama_8E2CC0D3_9BBC_987A_41E2_80C3508F512D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_9BC8FA92_979B_88FA_41C0_251C0CA2A10E_camera",
   "media": "this.panorama_9BC8FA92_979B_88FA_41C0_251C0CA2A10E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_8160CF81_9BA5_88D9_41BA_DE875EF69FF5_camera",
   "media": "this.panorama_8160CF81_9BA5_88D9_41BA_DE875EF69FF5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_87132137_979C_983A_41B1_3C79C12E949B_camera",
   "media": "this.panorama_87132137_979C_983A_41B1_3C79C12E949B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_9BF4BFC0_97E4_8857_41D7_6F9E7EEF0251_camera",
   "media": "this.panorama_9BF4BFC0_97E4_8857_41D7_6F9E7EEF0251",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_81DF1DA0_9BE7_88D7_41E1_8D48B5A1F9A6_camera",
   "media": "this.panorama_81DF1DA0_9BE7_88D7_41E1_8D48B5A1F9A6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_99669057_97EC_B87A_41CC_1D337A9D2B46_camera",
   "media": "this.panorama_99669057_97EC_B87A_41CC_1D337A9D2B46",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_B6221754_A4A0_F5B2_41C7_D1851B02258C_camera",
   "media": "this.panorama_B6221754_A4A0_F5B2_41C7_D1851B02258C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_99BA27DF_97A4_F86A_41BE_8455B88BC42D_camera",
   "media": "this.panorama_99BA27DF_97A4_F86A_41BE_8455B88BC42D",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 0)",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_B2213D2B_A543_919D_41A9_6E4AB4E4C45B",
 "initialPosition": {
  "yaw": 0.32,
  "class": "PanoramaCameraPosition",
  "pitch": -0.41
 }
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_B6B1CD59_9556_2594_41CC_00A5966BE61E",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_B6B1CD59_9556_2594_41CC_00A5966BE61E_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_B6B1CD59_9556_2594_41CC_00A5966BE61E_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": -5.16,
 "rotationY": 0,
 "yaw": 0.79,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 4.15
},
{
 "class": "ImageResource",
 "id": "ImageResource_84A022CD_9D1C_6D31_4175_0131E5F5FBF6"
},
{
 "levels": [
  {
   "url": "media/popup_B6B76A4D_952A_6F8F_41D5_856C2B4B8061_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_B6B76A4D_952A_6F8F_41D5_856C2B4B8061_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_B6B76A4D_952A_6F8F_41D5_856C2B4B8061_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_AA51E2EA_A4A0_6C96_41D7_93DDCAA9FD18"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_B2609DB5_A543_908A_41DF_8E71A466F58F",
 "initialPosition": {
  "yaw": 0.54,
  "class": "PanoramaCameraPosition",
  "pitch": -1.01
 }
},
{
 "levels": [
  {
   "url": "media/popup_B19C77C4_952E_24FC_4175_E880517EA612_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_B19C77C4_952E_24FC_4175_E880517EA612_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_B19C77C4_952E_24FC_4175_E880517EA612_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_B19C77C4_952E_24FC_4175_E880517EA612_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_8D71E604_9B9C_9BDE_41C1_48FC9FA1636E"
},
{
 "levels": [
  {
   "url": "media/popup_B6DA1F34_955E_259D_41DB_93BE218293BC_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_B6DA1F34_955E_259D_41DB_93BE218293BC_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_B6DA1F34_955E_259D_41DB_93BE218293BC_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_ABA44309_A4A0_6D92_41D0_B25111E6AB5B"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_81DF1DA0_9BE7_88D7_41E1_8D48B5A1F9A6_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 38,
      "colCount": 38,
      "width": 19456,
      "tags": "ondemand",
      "height": 19456
     },
     {
      "url": "media/panorama_81DF1DA0_9BE7_88D7_41E1_8D48B5A1F9A6_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 19,
      "colCount": 19,
      "width": 9728,
      "tags": "ondemand",
      "height": 9728
     },
     {
      "url": "media/panorama_81DF1DA0_9BE7_88D7_41E1_8D48B5A1F9A6_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "height": 5120
     },
     {
      "url": "media/panorama_81DF1DA0_9BE7_88D7_41E1_8D48B5A1F9A6_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_81DF1DA0_9BE7_88D7_41E1_8D48B5A1F9A6_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_81DF1DA0_9BE7_88D7_41E1_8D48B5A1F9A6_0/f/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_81DF1DA0_9BE7_88D7_41E1_8D48B5A1F9A6_0/f/6/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_81DF1DA0_9BE7_88D7_41E1_8D48B5A1F9A6_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "zoom kursi kiri1",
 "id": "panorama_81DF1DA0_9BE7_88D7_41E1_8D48B5A1F9A6",
 "hfov": 30,
 "overlays": [
  "this.overlay_81DF6DA0_9BE7_88D7_41DC_FE960C08AA36",
  "this.overlay_81DF5DA0_9BE7_88D7_41D9_1C70128504E4",
  "this.overlay_81DF0DA0_9BE7_88D7_41E0_EB98B86B8D60",
  "this.popup_819147E9_9D6C_72F1_41CB_EDADAF60B6D2"
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98369766_97AC_B85B_4199_2CB4BEE25956"
  }
 ],
 "vfov": 16.45,
 "hfovMax": 30,
 "partial": true,
 "thumbnailUrl": "media/panorama_81DF1DA0_9BE7_88D7_41E1_8D48B5A1F9A6_t.jpg"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_B30C6A80_A543_908B_41D5_4AFD697C3855",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "levels": [
  {
   "url": "media/popup_82205929_9BAB_89D6_41CB_E817F9EE19BD_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_82205929_9BAB_89D6_41CB_E817F9EE19BD_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_82205929_9BAB_89D6_41CB_E817F9EE19BD_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_AB98F347_A4A0_6D9D_41B4_44BC5AF658E7"
},
{
 "levels": [
  {
   "url": "media/popup_B6FB7333_9556_7D94_41DA_F7EE251D45C9_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_B6FB7333_9556_7D94_41DA_F7EE251D45C9_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_B6FB7333_9556_7D94_41DA_F7EE251D45C9_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_B6FB7333_9556_7D94_41DA_F7EE251D45C9_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_8D73D604_9B9C_9BDE_41E0_7C99F94E98E6"
},
{
 "levels": [
  {
   "url": "media/popup_8FF2EFDC_9BEF_886E_41D7_E63240A711BF_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_8FF2EFDC_9BEF_886E_41D7_E63240A711BF_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_8FF2EFDC_9BEF_886E_41D7_E63240A711BF_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_AA5EC2EA_A4A0_6C96_41D8_94A12BF02B28"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_B2828C1F_A543_97B5_41C4_1E83668DE046",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_B1EA68CE_955A_2C8C_41DB_E56A60D84CAC",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_B1EA68CE_955A_2C8C_41DB_E56A60D84CAC_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_B1EA68CE_955A_2C8C_41DB_E56A60D84CAC_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": 1.29,
 "rotationY": 0,
 "yaw": -4.29,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 4.63
},
{
 "levels": [
  {
   "url": "media/popup_B462A90A_9556_2D75_41DC_D4B30DD5CA64_0_0.jpg",
   "width": 2000,
   "class": "ImageResourceLevel",
   "height": 2000
  },
  {
   "url": "media/popup_B462A90A_9556_2D75_41DC_D4B30DD5CA64_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_B462A90A_9556_2D75_41DC_D4B30DD5CA64_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_8D785623_9B9C_9BDA_41DA_2B38626C53A3"
},
{
 "class": "ImageResource",
 "id": "ImageResource_8D6FB5E4_9B9C_985F_41DE_CB4E1A1FCAA9"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_B2A90BE5_A543_9095_41C1_B54C6F1D7A9A",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "levels": [
  {
   "url": "media/popup_B16D0D45_955E_E5FF_41E1_4C662FE2F0F0_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_B16D0D45_955E_E5FF_41E1_4C662FE2F0F0_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_B16D0D45_955E_E5FF_41E1_4C662FE2F0F0_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_ABA76309_A4A0_6D92_41C0_B82F3C1D02B0"
},
{
 "class": "ImageResource",
 "id": "ImageResource_82E6F6E4_9A6D_785F_41C0_C12F22198DD6"
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_B146CB5E_953B_ED8C_41D5_9CD505D45E0E",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_B146CB5E_953B_ED8C_41D5_9CD505D45E0E_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_B146CB5E_953B_ED8C_41D5_9CD505D45E0E_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": -5.06,
 "rotationY": 0,
 "yaw": 4.9,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 4.15
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_B353EB34_A543_918B_41E0_2D7027161402",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_80E4AB09_9BA5_89E9_41C9_C436C62A2C61",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_80E4AB09_9BA5_89E9_41C9_C436C62A2C61_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_80E4AB09_9BA5_89E9_41C9_C436C62A2C61_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": -2.04,
 "rotationY": 0,
 "yaw": -7.71,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 4.64
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_81243F57_9BAC_887A_41AB_BA2A79F098F6",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_81243F57_9BAC_887A_41AB_BA2A79F098F6_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_81243F57_9BAC_887A_41AB_BA2A79F098F6_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": -5.42,
 "rotationY": 0,
 "yaw": -7.61,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 4.56
},
{
 "levels": [
  {
   "url": "media/popup_8ACA71C0_9BEB_9856_41DA_A92154BA5EBA_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_8ACA71C0_9BEB_9856_41DA_A92154BA5EBA_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_8ACA71C0_9BEB_9856_41DA_A92154BA5EBA_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_AA50A2EA_A4A0_6C96_41E2_8C0C96E0F3FF"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_B3799AD6_A543_90B4_419C_07DD0F2AC4F9",
 "initialPosition": {
  "yaw": -0.54,
  "class": "PanoramaCameraPosition",
  "pitch": -0.31
 }
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_81E6D04A_9B9B_B86B_41DE_21F4536E4676",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_81E6D04A_9B9B_B86B_41DE_21F4536E4676_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_81E6D04A_9B9B_B86B_41DE_21F4536E4676_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": -4.96,
 "rotationY": 0,
 "yaw": 3.18,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 4.18
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_B1FC2E3E_955A_678D_41DB_154EB98C15C0",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_B1FC2E3E_955A_678D_41DB_154EB98C15C0_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_B1FC2E3E_955A_678D_41DB_154EB98C15C0_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": -5.05,
 "rotationY": 0,
 "yaw": -8.88,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 4.71
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_98839B56_97AB_887B_41E2_BD3508A278E6_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_B2DDCCAC_A543_909B_4199_EF0CCBAD8BB4",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "levels": [
  {
   "url": "media/popup_82DE88F9_9B9C_8829_41E3_18BA9A6E2717_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_82DE88F9_9B9C_8829_41E3_18BA9A6E2717_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_82DE88F9_9B9C_8829_41E3_18BA9A6E2717_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_AB977357_A4A0_6DBD_41C6_097D00AD565B"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_877B0AA0_97AD_88D6_41C2_271020302E1E_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_B6221754_A4A0_F5B2_41C7_D1851B02258C_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_84A582E1_9D1C_52F1_41E2_74CCB5CACDC2"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_99669057_97EC_B87A_41CC_1D337A9D2B46_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 38,
      "colCount": 38,
      "width": 19456,
      "tags": "ondemand",
      "height": 19456
     },
     {
      "url": "media/panorama_99669057_97EC_B87A_41CC_1D337A9D2B46_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 19,
      "colCount": 19,
      "width": 9728,
      "tags": "ondemand",
      "height": 9728
     },
     {
      "url": "media/panorama_99669057_97EC_B87A_41CC_1D337A9D2B46_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "height": 5120
     },
     {
      "url": "media/panorama_99669057_97EC_B87A_41CC_1D337A9D2B46_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_99669057_97EC_B87A_41CC_1D337A9D2B46_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_99669057_97EC_B87A_41CC_1D337A9D2B46_0/f/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_99669057_97EC_B87A_41CC_1D337A9D2B46_0/f/6/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_99669057_97EC_B87A_41CC_1D337A9D2B46_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "zoom kursi kiri2",
 "id": "panorama_99669057_97EC_B87A_41CC_1D337A9D2B46",
 "hfov": 30,
 "overlays": [
  "this.overlay_9966E057_97EC_B87A_41AC_DB9D1E837B53",
  "this.overlay_9966F057_97EC_B87A_41B9_6C34FA249A5B",
  "this.overlay_9966C057_97EC_B87A_41DC_9827388C5844",
  "this.popup_84FB841D_9D6F_D551_41CF_0BC2220C5C9A"
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98369766_97AC_B85B_4199_2CB4BEE25956"
  }
 ],
 "vfov": 15.38,
 "hfovMax": 30,
 "partial": true,
 "thumbnailUrl": "media/panorama_99669057_97EC_B87A_41CC_1D337A9D2B46_t.jpg"
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_B63B15CA_952A_24F4_41DD_AB8F524C7690",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_B63B15CA_952A_24F4_41DD_AB8F524C7690_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_B63B15CA_952A_24F4_41DD_AB8F524C7690_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": -1.71,
 "rotationY": 0,
 "yaw": 9.94,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 4.79
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_BE8FA89A_A543_90BF_41CF_28B585292C95",
 "initialPosition": {
  "yaw": 1.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0.74
 }
},
{
 "levels": [
  {
   "url": "media/popup_8AC8E9A0_9BEC_88D7_41CD_D490DBA78416_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_8AC8E9A0_9BEC_88D7_41CD_D490DBA78416_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_8AC8E9A0_9BEC_88D7_41CD_D490DBA78416_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_AA59E2EA_A4A0_6C96_41D8_72F576ED1D36"
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_B6FB7333_9556_7D94_41DA_F7EE251D45C9",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_B6FB7333_9556_7D94_41DA_F7EE251D45C9_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_B6FB7333_9556_7D94_41DA_F7EE251D45C9_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": 1.26,
 "rotationY": 0,
 "yaw": -9.18,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 4.98
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E2CC0D3_9BBC_987A_41E2_80C3508F512D_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 45,
      "colCount": 45,
      "width": 23040,
      "tags": "ondemand",
      "height": 23040
     },
     {
      "url": "media/panorama_8E2CC0D3_9BBC_987A_41E2_80C3508F512D_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 23,
      "colCount": 23,
      "width": 11776,
      "tags": "ondemand",
      "height": 11776
     },
     {
      "url": "media/panorama_8E2CC0D3_9BBC_987A_41E2_80C3508F512D_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 12,
      "colCount": 12,
      "width": 6144,
      "tags": "ondemand",
      "height": 6144
     },
     {
      "url": "media/panorama_8E2CC0D3_9BBC_987A_41E2_80C3508F512D_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8E2CC0D3_9BBC_987A_41E2_80C3508F512D_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8E2CC0D3_9BBC_987A_41E2_80C3508F512D_0/f/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8E2CC0D3_9BBC_987A_41E2_80C3508F512D_0/f/6/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_8E2CC0D3_9BBC_987A_41E2_80C3508F512D_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "vegetable chips kiri",
 "id": "panorama_8E2CC0D3_9BBC_987A_41E2_80C3508F512D",
 "hfov": 30,
 "overlays": [
  "this.overlay_83439661_9BA4_9856_41D4_20A6B88FB3F0",
  "this.overlay_814A6885_9BA5_88D9_41D0_89AAB60228F5",
  "this.overlay_845E3693_9BA7_F8F9_41E1_568BF33B0104",
  "this.overlay_821915B3_9BA7_B83A_41D4_25B00472D2DA",
  "this.overlay_85ACD7CA_9BA7_B86A_41D9_DB838B7DFE6D",
  "this.overlay_813019F6_9BA7_883B_41A9_34E99118D1AE",
  "this.overlay_821ECCF4_9BA7_883E_41D1_22C6EAEEEE68",
  "this.overlay_85387F17_9BA7_89F9_41C3_641A7C09DA11",
  "this.overlay_813B7198_9BA7_98F7_41CC_1CFF61033B35",
  "this.overlay_8036F36E_9BA7_982A_41D4_7A332EA7BEB7",
  "this.overlay_823FD656_9BA7_987A_41CE_3CDA1D42E6CF",
  "this.overlay_85D60852_9BA7_887A_419B_48754041D4E7",
  "this.overlay_813DCA8C_9BA7_88EE_41E1_319D1076B1A5",
  "this.overlay_81F54DE4_9BA7_885E_41C3_3DCF2801BDA7",
  "this.popup_80692759_9BA5_F869_41D1_F463262B0F6E",
  "this.popup_82F95727_9BA4_99D9_41AA_6222D3D7C1A9",
  "this.popup_82161BF0_9B9B_8836_41AF_E7B034F99A73",
  "this.popup_82DE88F9_9B9C_8829_41E3_18BA9A6E2717",
  "this.popup_8431CFBC_9B9D_882F_41D6_7C0578300B58",
  "this.popup_8251E853_9B9C_8879_419E_B5427F612429",
  "this.popup_81EB9E2E_9B9F_882B_41BD_ADF9553F5931",
  "this.popup_82553F4D_9B9C_8869_41D0_1EA648CB0974",
  "this.popup_82CCCEF7_9B9C_8839_41B0_D0F022AE1F09",
  "this.popup_81E6D04A_9B9B_B86B_41DE_21F4536E4676",
  "this.popup_826B46F1_9A64_9839_41CA_558668E27F3A",
  "this.popup_80D1BB81_9A65_88D6_41E0_16B519A5AFE9"
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_99A1F443_97A5_B859_41E0_6D42E4DF0706"
  }
 ],
 "vfov": 15.39,
 "hfovMax": 30,
 "partial": true,
 "thumbnailUrl": "media/panorama_8E2CC0D3_9BBC_987A_41E2_80C3508F512D_t.jpg"
},
{
 "class": "ImageResource",
 "id": "ImageResource_84A412E4_9D1C_52F7_41BE_22D25D4766D7"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 3.9,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_B462A90A_9556_2D75_41DC_D4B30DD5CA64",
 "yaw": -7.9,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_B462A90A_9556_2D75_41DC_D4B30DD5CA64_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": -1.96,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%"
},
{
 "class": "ImageResource",
 "id": "ImageResource_8D6C75D5_9B9C_987E_41DA_CB5E49F121DC"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_BDBF6E27_A543_9395_41C7_914F0AD7EADC",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "levels": [
  {
   "url": "media/popup_B62B82DA_955A_1C94_41C9_A4E78AAA7076_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_B62B82DA_955A_1C94_41C9_A4E78AAA7076_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_B62B82DA_955A_1C94_41C9_A4E78AAA7076_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_ABA3E309_A4A0_6D92_41E2_C38EB48C268F"
},
{
 "levels": [
  {
   "url": "media/popup_B4EB9441_9556_1BF4_41E1_F1310C5B14B6_0_0.jpg",
   "width": 2000,
   "class": "ImageResourceLevel",
   "height": 2000
  },
  {
   "url": "media/popup_B4EB9441_9556_1BF4_41E1_F1310C5B14B6_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_B4EB9441_9556_1BF4_41E1_F1310C5B14B6_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_8D79B623_9B9C_9BDA_41B4_41BCAE4C05CA"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 3.58,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_B57C8955_956A_2D9C_41D9_F2D73ECF6F4C",
 "yaw": -2.95,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_B57C8955_956A_2D9C_41D9_F2D73ECF6F4C_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": -5.22,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_B2A21BCA_A543_909F_41DF_731E013A83BD",
 "initialPosition": {
  "yaw": 0.48,
  "class": "PanoramaCameraPosition",
  "pitch": -1.4
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_84A572E6_9D1C_52F3_41CD_39BAADF90AED"
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_821740A4_9BAF_98DE_41D5_38C6FC24568F",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_821740A4_9BAF_98DE_41D5_38C6FC24568F_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_821740A4_9BAF_98DE_41D5_38C6FC24568F_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": -5.39,
 "rotationY": 0,
 "yaw": 6.42,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 4.66
},
{
 "class": "ImageResource",
 "id": "ImageResource_8D6F35E4_9B9C_985F_41D5_B0645C9E609F"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_BD956E68_A543_939B_41DD_9F0FF0091ED3",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "levels": [
  {
   "url": "media/popup_818913A7_9BAD_78DA_41DE_AC45239115BF_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_818913A7_9BAD_78DA_41DE_AC45239115BF_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_818913A7_9BAD_78DA_41DE_AC45239115BF_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_AB810338_A4A0_6DF2_41DD_8718A10EE710"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 4.21,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_B4BB5D63_956A_65B4_41CB_9CE455617346",
 "yaw": 7.32,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_B4BB5D63_956A_65B4_41CB_9CE455617346_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": -1.87,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%"
},
{
 "rotationY": 0,
 "yaw": -8.93,
 "hfov": 1.15,
 "showDuration": 0,
 "rotationZ": 0,
 "rotationX": 0,
 "showEasing": "cubic_in",
 "id": "popup_B3B51FA8_A5C3_909A_41C5_0016C8254821",
 "autoplay": true,
 "popupDistance": 100,
 "loop": false,
 "class": "PopupPanoramaOverlay",
 "pitch": -3,
 "hideDuration": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "video": {
  "width": 1280,
  "class": "VideoResource",
  "height": 720,
  "mp4Url": "media/video_B1DB4696_A542_70B7_41E4_9263BE07ABE3.mp4"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_BD88BEDB_A543_90BD_41D7_5CB59E912273",
 "initialPosition": {
  "yaw": 0.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0.08
 }
},
{
 "levels": [
  {
   "url": "media/popup_83B2119A_9BA5_B8EB_41DD_CC95ADC227E2_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_83B2119A_9BA5_B8EB_41DD_CC95ADC227E2_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_83B2119A_9BA5_B8EB_41DD_CC95ADC227E2_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_AB82C338_A4A0_6DF2_41B8_EA3579105F61"
},
{
 "levels": [
  {
   "url": "media/popup_8D216551_9BA4_9876_41B4_58100748FB81_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_8D216551_9BA4_9876_41B4_58100748FB81_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_8D216551_9BA4_9876_41B4_58100748FB81_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_AB8CF338_A4A0_6DF2_41DF_DDAE8956C083"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_8160CF81_9BA5_88D9_41BA_DE875EF69FF5_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_B2E92C91_A543_908D_41E1_4A865312A41C",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_82EFC6C0_9A6D_7857_41D3_E6A7EBF88B37"
},
{
 "levels": [
  {
   "url": "media/popup_B4D43009_9556_7B74_41E0_D2959B20FBDC_0_0.jpg",
   "width": 2000,
   "class": "ImageResourceLevel",
   "height": 2000
  },
  {
   "url": "media/popup_B4D43009_9556_7B74_41E0_D2959B20FBDC_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_B4D43009_9556_7B74_41E0_D2959B20FBDC_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_8D78C623_9B9C_9BDA_41D4_3B9E58128769"
},
{
 "thumbnailUrl": "media/video_B1DB4696_A542_70B7_41E4_9263BE07ABE3_t.jpg",
 "scaleMode": "fit_outside",
 "width": 1280,
 "label": "video6174462868973422065",
 "loop": false,
 "id": "video_B1DB4696_A542_70B7_41E4_9263BE07ABE3",
 "class": "Video",
 "height": 720,
 "video": {
  "width": 1280,
  "class": "VideoResource",
  "height": 720,
  "mp4Url": "media/video_B1DB4696_A542_70B7_41E4_9263BE07ABE3.mp4"
 }
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_818913A7_9BAD_78DA_41DE_AC45239115BF",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_818913A7_9BAD_78DA_41DE_AC45239115BF_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_818913A7_9BAD_78DA_41DE_AC45239115BF_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": -5.46,
 "rotationY": 0,
 "yaw": -3,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 4.41
},
{
 "items": [
  {
   "media": "this.video_B1DB4696_A542_70B7_41E4_9263BE07ABE3",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.playList_BF75F7B2_A543_908F_41D1_575028F5EE39, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_BF75F7B2_A543_908F_41D1_575028F5EE39, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_BF75F7B2_A543_908F_41D1_575028F5EE39",
 "class": "PlayList"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_998866A4_97A7_78DF_41E2_CAB386A0B055_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_B254ADD3_A543_908E_41DB_5618FD61AFE7",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": -0.7
 }
},
{
 "levels": [
  {
   "url": "media/popup_82205929_9BAB_89D6_41CB_E817F9EE19BD_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_82205929_9BAB_89D6_41CB_E817F9EE19BD_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_82205929_9BAB_89D6_41CB_E817F9EE19BD_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_82205929_9BAB_89D6_41CB_E817F9EE19BD_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_82DA16EF_9A6D_7829_41B0_4CB2A9BD1F2A"
},
{
 "class": "ImageResource",
 "id": "ImageResource_84A092C6_9D1C_6D33_41E2_604BE83A7F87"
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_B6B76A4D_952A_6F8F_41D5_856C2B4B8061",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_B6B76A4D_952A_6F8F_41D5_856C2B4B8061_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_B6B76A4D_952A_6F8F_41D5_856C2B4B8061_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": 1.38,
 "rotationY": 0,
 "yaw": -4.91,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 4.72
},
{
 "levels": [
  {
   "url": "media/popup_B6BFA5A9_952A_64B7_41C0_0FAF731A2651_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_B6BFA5A9_952A_64B7_41C0_0FAF731A2651_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_B6BFA5A9_952A_64B7_41C0_0FAF731A2651_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_ABACF2F9_A4A0_6C75_41CB_85DDB2A2E24A"
},
{
 "levels": [
  {
   "url": "media/popup_B688882F_955A_EB8B_41DD_BEC2FDC6E4C0_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_B688882F_955A_EB8B_41DD_BEC2FDC6E4C0_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_B688882F_955A_EB8B_41DD_BEC2FDC6E4C0_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_ABA10309_A4A0_6D92_41D3_DCA8F196A8A1"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_9A094D79_97A7_8836_41BC_AF57757A41C8_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_82C67A90_9BAB_88F6_41CD_77CA73255A7D",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_82C67A90_9BAB_88F6_41CD_77CA73255A7D_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_82C67A90_9BAB_88F6_41CD_77CA73255A7D_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": -2.04,
 "rotationY": 0,
 "yaw": 1.78,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 4.12
},
{
 "levels": [
  {
   "url": "media/popup_821740A4_9BAF_98DE_41D5_38C6FC24568F_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_821740A4_9BAF_98DE_41D5_38C6FC24568F_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_821740A4_9BAF_98DE_41D5_38C6FC24568F_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_AB833338_A4A0_6DF2_41B2_917B8CFAC41D"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_99669057_97EC_B87A_41CC_1D337A9D2B46_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_B24B0E0B_A543_939E_41BF_125B136E3C7C",
 "initialPosition": {
  "yaw": 0.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_854680B2_9BA4_983B_41C0_C926FD9ED5F1",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_854680B2_9BA4_983B_41C0_C926FD9ED5F1_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_854680B2_9BA4_983B_41C0_C926FD9ED5F1_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": -2.11,
 "rotationY": 0,
 "yaw": -3.03,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 4.51
},
{
 "levels": [
  {
   "url": "media/popup_B6B76A4D_952A_6F8F_41D5_856C2B4B8061_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_B6B76A4D_952A_6F8F_41D5_856C2B4B8061_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_B6B76A4D_952A_6F8F_41D5_856C2B4B8061_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_B6B76A4D_952A_6F8F_41D5_856C2B4B8061_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_8D7085E4_9B9C_985F_41D4_D6566F052E13"
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_B19C77C4_952E_24FC_4175_E880517EA612",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_B19C77C4_952E_24FC_4175_E880517EA612_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_B19C77C4_952E_24FC_4175_E880517EA612_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": -1.72,
 "rotationY": 0,
 "yaw": -4.83,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 4.65
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_B2188D63_A543_918D_415A_7839202CC378",
 "initialPosition": {
  "yaw": 0.08,
  "class": "PanoramaCameraPosition",
  "pitch": -0.93
 }
},
{
 "levels": [
  {
   "url": "media/popup_80692759_9BA5_F869_41D1_F463262B0F6E_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_80692759_9BA5_F869_41D1_F463262B0F6E_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_80692759_9BA5_F869_41D1_F463262B0F6E_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_AB9FB347_A4A0_6D9D_41BE_89516BF38959"
},
{
 "class": "ImageResource",
 "id": "ImageResource_84A122D0_9D1C_6D2F_41BC_8F01A481C092"
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_82205929_9BAB_89D6_41CB_E817F9EE19BD",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_82205929_9BAB_89D6_41CB_E817F9EE19BD_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_82205929_9BAB_89D6_41CB_E817F9EE19BD_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": 1.03,
 "rotationY": 0,
 "yaw": 1.79,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 4.17
},
{
 "class": "ImageResource",
 "id": "ImageResource_82C9F718_9A6D_79F7_41E2_46F2F4B360B5"
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_85230C70_9BAC_8837_41D9_1917A6A062A3",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_85230C70_9BAC_8837_41D9_1917A6A062A3_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_85230C70_9BAC_8837_41D9_1917A6A062A3_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": -5.39,
 "rotationY": 0,
 "yaw": 1.73,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 4
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_98369766_97AC_B85B_4199_2CB4BEE25956_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_B0DE2642_952A_67F5_41E1_E1C78A496C51",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_B0DE2642_952A_67F5_41E1_E1C78A496C51_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_B0DE2642_952A_67F5_41E1_E1C78A496C51_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": 1.42,
 "rotationY": 0,
 "yaw": 5.17,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 4.32
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_80692759_9BA5_F869_41D1_F463262B0F6E",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_80692759_9BA5_F869_41D1_F463262B0F6E_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_80692759_9BA5_F869_41D1_F463262B0F6E_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": 1.6,
 "rotationY": 0,
 "yaw": -6.47,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 4.64
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98839B56_97AB_887B_41E2_BD3508A278E6_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 38,
      "colCount": 38,
      "width": 19456,
      "tags": "ondemand",
      "height": 19456
     },
     {
      "url": "media/panorama_98839B56_97AB_887B_41E2_BD3508A278E6_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 19,
      "colCount": 19,
      "width": 9728,
      "tags": "ondemand",
      "height": 9728
     },
     {
      "url": "media/panorama_98839B56_97AB_887B_41E2_BD3508A278E6_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "height": 5120
     },
     {
      "url": "media/panorama_98839B56_97AB_887B_41E2_BD3508A278E6_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_98839B56_97AB_887B_41E2_BD3508A278E6_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_98839B56_97AB_887B_41E2_BD3508A278E6_0/f/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_98839B56_97AB_887B_41E2_BD3508A278E6_0/f/6/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_98839B56_97AB_887B_41E2_BD3508A278E6_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "kursi kanan",
 "id": "panorama_98839B56_97AB_887B_41E2_BD3508A278E6",
 "hfov": 30,
 "overlays": [
  "this.overlay_9883FB57_97AB_8879_41DE_9F2F9989B47E",
  "this.overlay_9883EB58_97AB_8876_41C5_84D39312C658",
  "this.overlay_9883DB58_97AB_8876_41C9_ED7BE0689A15",
  "this.overlay_98843B58_97AB_8876_41A4_9005964C1E8A"
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_87132137_979C_983A_41B1_3C79C12E949B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9BF4BFC0_97E4_8857_41D7_6F9E7EEF0251"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9B8656D4_97A4_987E_41B7_89C105C3D02A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_99BA27DF_97A4_F86A_41BE_8455B88BC42D"
  }
 ],
 "vfov": 15.38,
 "hfovMax": 30,
 "partial": true,
 "thumbnailUrl": "media/panorama_98839B56_97AB_887B_41E2_BD3508A278E6_t.jpg"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_B2FF2C5A_A543_97BF_41A1_A2047A72B6EC",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "levels": [
  {
   "url": "media/popup_80E4AB09_9BA5_89E9_41C9_C436C62A2C61_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_80E4AB09_9BA5_89E9_41C9_C436C62A2C61_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_80E4AB09_9BA5_89E9_41C9_C436C62A2C61_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_80E4AB09_9BA5_89E9_41C9_C436C62A2C61_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_82D916E6_9A6D_785B_41D8_0974EC68FB98"
},
{
 "levels": [
  {
   "url": "media/popup_81243F57_9BAC_887A_41AB_BA2A79F098F6_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_81243F57_9BAC_887A_41AB_BA2A79F098F6_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_81243F57_9BAC_887A_41AB_BA2A79F098F6_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_AB866338_A4A0_6DF2_41C6_E5F6D4889F62"
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_B6A82354_955A_7D9C_41E1_F58CA8B7CEDF",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_B6A82354_955A_7D9C_41E1_F58CA8B7CEDF_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_B6A82354_955A_7D9C_41E1_F58CA8B7CEDF_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": 1.31,
 "rotationY": 0,
 "yaw": 0.84,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 4.35
},
{
 "class": "ImageResource",
 "id": "ImageResource_82D5B70D_9A6D_79E9_41C4_A06438A21CF8"
},
{
 "levels": [
  {
   "url": "media/popup_B146CB5E_953B_ED8C_41D5_9CD505D45E0E_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_B146CB5E_953B_ED8C_41D5_9CD505D45E0E_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_B146CB5E_953B_ED8C_41D5_9CD505D45E0E_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_B146CB5E_953B_ED8C_41D5_9CD505D45E0E_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_8D7055E4_9B9C_985F_41D5_585F4958B36F"
},
{
 "mouseControlMode": "drag_acceleration",
 "class": "PanoramaPlayer",
 "id": "MainViewerPanoramaPlayer",
 "viewerArea": "this.MainViewer",
 "touchControlMode": "drag_rotation",
 "displayPlaybackBar": true,
 "gyroscopeVerticalDraggingEnabled": true
},
{
 "levels": [
  {
   "url": "media/popup_81E6D04A_9B9B_B86B_41DE_21F4536E4676_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_81E6D04A_9B9B_B86B_41DE_21F4536E4676_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_81E6D04A_9B9B_B86B_41DE_21F4536E4676_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_81E6D04A_9B9B_B86B_41DE_21F4536E4676_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_82DE4701_9A6D_79D9_41E0_F52297310425"
},
{
 "levels": [
  {
   "url": "media/popup_B78EC293_957A_1C94_417D_6AC4688F9C1F_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_B78EC293_957A_1C94_417D_6AC4688F9C1F_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_B78EC293_957A_1C94_417D_6AC4688F9C1F_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_B78EC293_957A_1C94_417D_6AC4688F9C1F_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_8D7CE636_9B9C_983A_41C2_FAA4C2640912"
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_B1724FE4_952A_24BD_41C7_A96D2DEB56D5",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_B1724FE4_952A_24BD_41C7_A96D2DEB56D5_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_B1724FE4_952A_24BD_41C7_A96D2DEB56D5_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": 1.42,
 "rotationY": 0,
 "yaw": 10.15,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 4.92
},
{
 "levels": [
  {
   "url": "media/popup_B66304F3_9559_E494_41E1_AF17A0E3BAE1_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_B66304F3_9559_E494_41E1_AF17A0E3BAE1_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_B66304F3_9559_E494_41E1_AF17A0E3BAE1_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_ABA67309_A4A0_6D92_41DC_8DDFA3B1EFAA"
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_B66304F3_9559_E494_41E1_AF17A0E3BAE1",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_B66304F3_9559_E494_41E1_AF17A0E3BAE1_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_B66304F3_9559_E494_41E1_AF17A0E3BAE1_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": -1.78,
 "rotationY": 0,
 "yaw": 0.89,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 4.29
},
{
 "levels": [
  {
   "url": "media/popup_B16D0D45_955E_E5FF_41E1_4C662FE2F0F0_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_B16D0D45_955E_E5FF_41E1_4C662FE2F0F0_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_B16D0D45_955E_E5FF_41E1_4C662FE2F0F0_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_B16D0D45_955E_E5FF_41E1_4C662FE2F0F0_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_8D743613_9B9C_9BF9_4195_2208AB3BDD50"
},
{
 "class": "ImageResource",
 "id": "ImageResource_82D3370C_9A6D_79EF_41A1_D4344D4E8936"
},
{
 "class": "ImageResource",
 "id": "ImageResource_82DBC6ED_9A6D_7829_41E1_7B8657A0EBF9"
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_8ACA71C0_9BEB_9856_41DA_A92154BA5EBA",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_8ACA71C0_9BEB_9856_41DA_A92154BA5EBA_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_8ACA71C0_9BEB_9856_41DA_A92154BA5EBA_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": 2.23,
 "rotationY": 0,
 "yaw": -1.48,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 4.48
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_B2370CF1_A543_908D_4187_F7DF48EDC846",
 "initialPosition": {
  "yaw": 0.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0.16
 }
},
{
 "levels": [
  {
   "url": "media/popup_B4BB5D63_956A_65B4_41CB_9CE455617346_0_0.jpg",
   "width": 2000,
   "class": "ImageResourceLevel",
   "height": 2000
  },
  {
   "url": "media/popup_B4BB5D63_956A_65B4_41CB_9CE455617346_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_B4BB5D63_956A_65B4_41CB_9CE455617346_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_8D771623_9B9C_9BDA_41DD_B4D5EEEB506B"
},
{
 "levels": [
  {
   "url": "media/popup_B6A82354_955A_7D9C_41E1_F58CA8B7CEDF_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_B6A82354_955A_7D9C_41E1_F58CA8B7CEDF_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_B6A82354_955A_7D9C_41E1_F58CA8B7CEDF_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_ABBB9318_A4A0_6DB3_41E2_6845B050F0F9"
},
{
 "levels": [
  {
   "url": "media/popup_B71C9C09_9556_2B74_41DA_630AC87ECBD2_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_B71C9C09_9556_2B74_41DA_630AC87ECBD2_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_B71C9C09_9556_2B74_41DA_630AC87ECBD2_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_ABADA309_A4A0_6D92_4197_6479485C0B3C"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_BDFADF11_A543_918D_41D2_11E737E1D4DE",
 "initialPosition": {
  "yaw": -0.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0.86
 }
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_81EB9E2E_9B9F_882B_41BD_ADF9553F5931",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_81EB9E2E_9B9F_882B_41BD_ADF9553F5931_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_81EB9E2E_9B9F_882B_41BD_ADF9553F5931_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": -1.55,
 "rotationY": 0,
 "yaw": 3.24,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 4.27
},
{
 "levels": [
  {
   "url": "media/popup_82553F4D_9B9C_8869_41D0_1EA648CB0974_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_82553F4D_9B9C_8869_41D0_1EA648CB0974_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_82553F4D_9B9C_8869_41D0_1EA648CB0974_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_AB901357_A4A0_6DBD_41E3_A04C9FF0F458"
},
{
 "class": "ImageResource",
 "id": "ImageResource_8D6D05D5_9B9C_987E_41E2_8175D066512D"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_BDA13E47_A543_9396_41E0_6DB80ED12E8D",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_82E216D2_9A6D_787B_41E1_78427A2E4346"
},
{
 "levels": [
  {
   "url": "media/popup_80E4AB09_9BA5_89E9_41C9_C436C62A2C61_1_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_80E4AB09_9BA5_89E9_41C9_C436C62A2C61_1_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 758
  },
  {
   "url": "media/popup_80E4AB09_9BA5_89E9_41C9_C436C62A2C61_1_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 379
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_AB9B3347_A4A0_6D9D_41DD_D0A100F38144"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_9846488E_97A4_88EA_41BF_CD3C5F04F01D_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "levels": [
  {
   "url": "media/popup_8431CFBC_9B9D_882F_41D6_7C0578300B58_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_8431CFBC_9B9D_882F_41D6_7C0578300B58_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_8431CFBC_9B9D_882F_41D6_7C0578300B58_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_8431CFBC_9B9D_882F_41D6_7C0578300B58_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_82D68716_9A6D_79FB_41DC_B094EA52B69F"
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_8AC03A74_9BEC_883E_41D1_32F981924177",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_8AC03A74_9BEC_883E_41D1_32F981924177_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_8AC03A74_9BEC_883E_41D1_32F981924177_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": 2.25,
 "rotationY": 0,
 "yaw": 3.37,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 4.24
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_B6950949_952A_2DF4_41DA_3D22E90D006A",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_B6950949_952A_2DF4_41DA_3D22E90D006A_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_B6950949_952A_2DF4_41DA_3D22E90D006A_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": -5.11,
 "rotationY": 0,
 "yaw": -4.65,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 4.5
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_80D1BB81_9A65_88D6_41E0_16B519A5AFE9",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_80D1BB81_9A65_88D6_41E0_16B519A5AFE9_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_80D1BB81_9A65_88D6_41E0_16B519A5AFE9_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": -4.92,
 "rotationY": 0,
 "yaw": -6.27,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 4.54
},
{
 "items": [
  {
   "media": "this.video_B1DB4696_A542_70B7_41E4_9263BE07ABE3",
   "start": "this.viewer_uidBF2C9777_A543_9076_41C0_6920E0D2C72AVideoPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.PlayList_BD99642D_A5C6_7795_41E1_F8E0F83DFF7A, 0, '#000000')",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uidBF2C9777_A543_9076_41C0_6920E0D2C72AVideoPlayer)",
   "player": "this.viewer_uidBF2C9777_A543_9076_41C0_6920E0D2C72AVideoPlayer"
  }
 ],
 "id": "PlayList_BD99642D_A5C6_7795_41E1_F8E0F83DFF7A",
 "class": "PlayList"
},
{
 "levels": [
  {
   "url": "media/popup_B66304F3_9559_E494_41E1_AF17A0E3BAE1_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_B66304F3_9559_E494_41E1_AF17A0E3BAE1_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_B66304F3_9559_E494_41E1_AF17A0E3BAE1_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_B66304F3_9559_E494_41E1_AF17A0E3BAE1_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_8D74D613_9B9C_9BF9_41BB_9CF99FAB53B8"
},
{
 "levels": [
  {
   "url": "media/popup_82CCCEF7_9B9C_8839_41B0_D0F022AE1F09_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_82CCCEF7_9B9C_8839_41B0_D0F022AE1F09_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_82CCCEF7_9B9C_8839_41B0_D0F022AE1F09_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_82CCCEF7_9B9C_8839_41B0_D0F022AE1F09_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_82DFC6FA_9A6D_782B_41D5_6A3AD9158ABC"
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_B71C9C09_9556_2B74_41DA_630AC87ECBD2",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_B71C9C09_9556_2B74_41DA_630AC87ECBD2_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_B71C9C09_9556_2B74_41DA_630AC87ECBD2_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": -5.12,
 "rotationY": 0,
 "yaw": 5.6,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 4.97
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_B165C1A1_953A_7CB4_41B4_D54F4FD49A74",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_B165C1A1_953A_7CB4_41B4_D54F4FD49A74_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_B165C1A1_953A_7CB4_41B4_D54F4FD49A74_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": -5.04,
 "rotationY": 0,
 "yaw": -0.01,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 4.33
},
{
 "levels": [
  {
   "url": "media/popup_82161BF0_9B9B_8836_41AF_E7B034F99A73_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_82161BF0_9B9B_8836_41AF_E7B034F99A73_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_82161BF0_9B9B_8836_41AF_E7B034F99A73_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_82161BF0_9B9B_8836_41AF_E7B034F99A73_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_82C8471F_9A6D_79E9_41C4_DD2155194586"
},
{
 "class": "ImageResource",
 "id": "ImageResource_84A6F2E2_9D1C_52F3_41DD_BF971AC033B8"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_87132137_979C_983A_41B1_3C79C12E949B_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_B2153D48_A543_919B_41DA_1CA3FF267129",
 "initialPosition": {
  "yaw": -0.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0.08
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_82ECA6B9_9A6D_7836_41C1_8D6158EF1C57"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98F4D827_97A4_97DA_41DF_006AE3C9C012_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 45,
      "colCount": 45,
      "width": 23040,
      "tags": "ondemand",
      "height": 23040
     },
     {
      "url": "media/panorama_98F4D827_97A4_97DA_41DF_006AE3C9C012_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 23,
      "colCount": 23,
      "width": 11776,
      "tags": "ondemand",
      "height": 11776
     },
     {
      "url": "media/panorama_98F4D827_97A4_97DA_41DF_006AE3C9C012_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 12,
      "colCount": 12,
      "width": 6144,
      "tags": "ondemand",
      "height": 6144
     },
     {
      "url": "media/panorama_98F4D827_97A4_97DA_41DF_006AE3C9C012_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_98F4D827_97A4_97DA_41DF_006AE3C9C012_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_98F4D827_97A4_97DA_41DF_006AE3C9C012_0/f/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_98F4D827_97A4_97DA_41DF_006AE3C9C012_0/f/6/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_98F4D827_97A4_97DA_41DF_006AE3C9C012_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "fruit chips kiri",
 "id": "panorama_98F4D827_97A4_97DA_41DF_006AE3C9C012",
 "hfov": 30,
 "overlays": [
  "this.overlay_98F4C827_97A4_97DA_41DA_22D8F806AFB8",
  "this.overlay_98F4F827_97A4_97DA_41D6_8FA1320E4383",
  "this.overlay_98F41827_97A4_97DA_41A9_825F38170B26",
  "this.overlay_98F43827_97A4_97DA_419E_C2F91FDD6D0E",
  "this.overlay_98F45827_97A4_97DA_41D7_6EF4D9087587",
  "this.overlay_98F44827_97A4_97DA_41E1_27D71E478E08",
  "this.overlay_98F46827_97A4_97DA_41D2_4B7F1F9C305D",
  "this.overlay_98F59827_97A4_97DA_41DB_6BA467134242",
  "this.overlay_98F5B827_97A4_97DA_41B2_9A06C06CC729",
  "this.overlay_98F5A827_97A4_97DA_41B1_981E523FCDC4",
  "this.overlay_98F5F827_97A4_97DA_4158_B21387BDF67A",
  "this.overlay_98F5E827_97A4_97DA_417F_043E8F613AF7",
  "this.overlay_98F51827_97A4_97DA_41D6_B871BED2E692",
  "this.overlay_98F50827_97A4_97DA_41E0_2B006AD727A0",
  "this.popup_B6FB7333_9556_7D94_41DA_F7EE251D45C9",
  "this.popup_B71C9C09_9556_2B74_41DA_630AC87ECBD2",
  "this.popup_B6B1CD59_9556_2594_41CC_00A5966BE61E",
  "this.popup_B62B82DA_955A_1C94_41C9_A4E78AAA7076",
  "this.popup_B1FC2E3E_955A_678D_41DB_154EB98C15C0",
  "this.popup_B688882F_955A_EB8B_41DD_BEC2FDC6E4C0",
  "this.popup_B66304F3_9559_E494_41E1_AF17A0E3BAE1",
  "this.popup_B16D0D45_955E_E5FF_41E1_4C662FE2F0F0",
  "this.popup_B6DA1F34_955E_259D_41DB_93BE218293BC",
  "this.popup_B6C1269B_955E_2494_41E1_CC343C297961",
  "this.popup_B6A82354_955A_7D9C_41E1_F58CA8B7CEDF",
  "this.popup_B1EA68CE_955A_2C8C_41DB_E56A60D84CAC"
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_86394A4B_97AF_886A_41D6_5E279BC46D2D"
  }
 ],
 "vfov": 15.39,
 "hfovMax": 30,
 "partial": true,
 "thumbnailUrl": "media/panorama_98F4D827_97A4_97DA_41DF_006AE3C9C012_t.jpg"
},
{
 "popupMaxWidth": "95%",
 "showEasing": "cubic_in",
 "id": "popup_B688882F_955A_EB8B_41DD_BEC2FDC6E4C0",
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_B688882F_955A_EB8B_41DD_BEC2FDC6E4C0_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   },
   {
    "url": "media/popup_B688882F_955A_EB8B_41DD_BEC2FDC6E4C0_1_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 758
   }
  ]
 },
 "hideDuration": 0,
 "showDuration": 0,
 "rotationX": 0,
 "pitch": -1.81,
 "rotationY": 0,
 "yaw": 5.63,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 4.78
},
{
 "levels": [
  {
   "url": "media/popup_8ACA71C0_9BEB_9856_41DA_A92154BA5EBA_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_8ACA71C0_9BEB_9856_41DA_A92154BA5EBA_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_8ACA71C0_9BEB_9856_41DA_A92154BA5EBA_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_8ACA71C0_9BEB_9856_41DA_A92154BA5EBA_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_8D6F05E4_9B9C_985F_41DD_98FC29B57CCC"
},
{
 "levels": [
  {
   "url": "media/popup_B4E57643_956A_67F4_41E0_810E19CE9D39_0_0.jpg",
   "width": 2000,
   "class": "ImageResourceLevel",
   "height": 2000
  },
  {
   "url": "media/popup_B4E57643_956A_67F4_41E0_810E19CE9D39_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_B4E57643_956A_67F4_41E0_810E19CE9D39_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_8D778623_9B9C_9BDA_41DD_4763CBE4C708"
},
{
 "levels": [
  {
   "url": "media/popup_B62B82DA_955A_1C94_41C9_A4E78AAA7076_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_B62B82DA_955A_1C94_41C9_A4E78AAA7076_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_B62B82DA_955A_1C94_41C9_A4E78AAA7076_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_B62B82DA_955A_1C94_41C9_A4E78AAA7076_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_8D74E604_9B9C_9BDE_41D9_D41CCADBD84F"
},
{
 "class": "ImageResource",
 "id": "ImageResource_8D70D5E4_9B9C_985F_41D3_630E49A1F5DF"
},
{
 "levels": [
  {
   "url": "media/popup_B6950949_952A_2DF4_41DA_3D22E90D006A_0_0.png",
   "width": 3508,
   "class": "ImageResourceLevel",
   "height": 2480
  },
  {
   "url": "media/popup_B6950949_952A_2DF4_41DA_3D22E90D006A_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1447
  },
  {
   "url": "media/popup_B6950949_952A_2DF4_41DA_3D22E90D006A_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_B6950949_952A_2DF4_41DA_3D22E90D006A_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_8D71E5E4_9B9C_985F_41DC_3188CFE32004"
},
{
 "toolTipDisplayTime": 600,
 "borderRadius": 0,
 "toolTipPaddingLeft": 6,
 "id": "MainViewer",
 "playbackBarLeft": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "width": "100%",
 "toolTipBorderRadius": 3,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "playbackBarHeadHeight": 15,
 "paddingRight": 0,
 "borderSize": 0,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "1.11vmin",
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "height": "100%",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "transitionDuration": 500,
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "paddingLeft": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "minHeight": 50,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarOpacity": 1,
 "class": "ViewerArea",
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 },
 "toolTipBorderSize": 1,
 "minWidth": 100,
 "toolTipPaddingTop": 4,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "shadow": false
},
{
 "borderRadius": 0,
 "id": "veilPopupPanorama",
 "left": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "right": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 0,
 "showEffect": {
  "duration": 350,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "top": 0,
 "backgroundColorDirection": "vertical",
 "bottom": 0,
 "backgroundColor": [
  "#000000"
 ],
 "class": "UIComponent",
 "paddingTop": 0,
 "data": {
  "name": "UIComponent24552"
 },
 "minWidth": 0,
 "visible": false,
 "backgroundOpacity": 0.55,
 "shadow": false
},
{
 "borderRadius": 0,
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "right": 0,
 "propagateClick": false,
 "backgroundColorRatios": [],
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 0,
 "top": 0,
 "backgroundColorDirection": "vertical",
 "bottom": 0,
 "backgroundColor": [],
 "class": "ZoomImage",
 "paddingTop": 0,
 "data": {
  "name": "ZoomImage24553"
 },
 "minWidth": 0,
 "scaleMode": "custom",
 "visible": false,
 "backgroundOpacity": 1,
 "shadow": false
},
{
 "backgroundOpacity": 0.3,
 "shadowSpread": 1,
 "borderRadius": 0,
 "pressedIconColor": "#888888",
 "id": "closeButtonPopupPanorama",
 "iconHeight": 20,
 "paddingBottom": 5,
 "paddingLeft": 5,
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "right": 10,
 "propagateClick": false,
 "iconWidth": 20,
 "iconBeforeLabel": true,
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "paddingRight": 5,
 "borderSize": 0,
 "rollOverIconColor": "#666666",
 "iconColor": "#000000",
 "verticalAlign": "middle",
 "minHeight": 0,
 "showEffect": {
  "duration": 350,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "top": 10,
 "borderColor": "#000000",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "mode": "push",
 "fontSize": "1.29vmin",
 "label": "",
 "horizontalAlign": "center",
 "fontColor": "#FFFFFF",
 "class": "CloseButton",
 "gap": 5,
 "fontStyle": "normal",
 "shadowBlurRadius": 6,
 "paddingTop": 5,
 "data": {
  "name": "CloseButton24554"
 },
 "textDecoration": "none",
 "minWidth": 0,
 "iconLineWidth": 5,
 "fontWeight": "normal",
 "visible": false,
 "cursor": "hand",
 "shadow": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9846488E_97A4_88EA_41BF_CD3C5F04F01D, this.camera_B31ABA4A_A543_939F_41D4_C8392FA53C6E); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8D9FF235_9BFD_9839_41E3_1F1E3F53EE28",
   "yaw": 3.49,
   "pitch": -0.43,
   "distance": 100,
   "hfov": 2.59
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.59,
   "yaw": 3.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98369766_97AC_B85B_4199_2CB4BEE25956_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.43
  }
 ],
 "id": "overlay_9836C766_97AC_B85B_41BE_33E69B974832",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_81DF1DA0_9BE7_88D7_41E1_8D48B5A1F9A6, this.camera_B3178A14_A543_938B_41DF_B67E90867ED9); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 1.02,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98369766_97AC_B85B_4199_2CB4BEE25956_1_HS_1_0.png",
      "width": 169,
      "class": "ImageResourceLevel",
      "height": 156
     }
    ]
   },
   "pitch": -1.03,
   "yaw": -3.06,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.02,
   "yaw": -3.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98369766_97AC_B85B_4199_2CB4BEE25956_1_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.03
  }
 ],
 "id": "overlay_9836D766_97AC_B85B_41CC_195CC4A59E61",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_99669057_97EC_B87A_41CC_1D337A9D2B46, this.camera_B3106A2E_A543_9397_41D9_B90914118158); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 0.71,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98369766_97AC_B85B_4199_2CB4BEE25956_1_HS_2_0.png",
      "width": 118,
      "class": "ImageResourceLevel",
      "height": 112
     }
    ]
   },
   "pitch": 3.27,
   "yaw": -1.6,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 0.71,
   "yaw": -1.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98369766_97AC_B85B_4199_2CB4BEE25956_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.27
  }
 ],
 "id": "overlay_98363766_97AC_B85B_41D4_92171E111286",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_99BA27DF_97A4_F86A_41BE_8455B88BC42D, this.camera_B32B99F5_A543_9075_41B7_FE4562C5C428); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 2.59,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98369766_97AC_B85B_4199_2CB4BEE25956_1_HS_3_0.png",
      "width": 432,
      "class": "ImageResourceLevel",
      "height": 203
     }
    ]
   },
   "pitch": -4.79,
   "yaw": 3.74,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.59,
   "yaw": 3.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98369766_97AC_B85B_4199_2CB4BEE25956_1_HS_3_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.79
  }
 ],
 "id": "overlay_98360766_97AC_B85B_41E0_B43F4BCA9633",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_99BA27DF_97A4_F86A_41BE_8455B88BC42D, this.camera_B2153D48_A543_919B_41DA_1CA3FF267129); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8D914225_9BFD_9BD9_41D5_05AE04A8CF40",
   "yaw": -8.8,
   "pitch": -6.1,
   "distance": 100,
   "hfov": 3.04
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.04,
   "yaw": -8.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9FE32371_952A_1D97_4187_224C5F74D5B6_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.1
  }
 ],
 "id": "overlay_983670FC_952E_1C8C_41DE_EBBAB23F8FF4",
 "data": {
  "label": "Arrow 01b"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_B3B51FA8_A5C3_909A_41C5_0016C8254821, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, true) } else { this.showPopupMedia(this.window_B2400440_A5C2_778B_41D4_BC4BB8770EB4, this.video_B1DB4696_A542_70B7_41E4_9263BE07ABE3, this.PlayList_BD99642D_A5C6_7795_41E1_F8E0F83DFF7A, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 1.15,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9FE32371_952A_1D97_4187_224C5F74D5B6_0_HS_3_0.png",
      "width": 49,
      "class": "ImageResourceLevel",
      "height": 54
     }
    ]
   },
   "pitch": -3,
   "yaw": -8.93,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.15,
   "yaw": -8.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9FE32371_952A_1D97_4187_224C5F74D5B6_0_HS_3_0_0_map.gif",
      "width": 15,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ]
   },
   "pitch": -3
  }
 ],
 "id": "overlay_BD3A1128_A5C1_919B_41DE_9BAC8BF729AB",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_99A1F443_97A5_B859_41E0_6D42E4DF0706, this.camera_B2188D63_A543_918D_415A_7839202CC378); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 1.17,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A094D79_97A7_8836_41BC_AF57757A41C8_0_HS_0_0.png",
      "width": 234,
      "class": "ImageResourceLevel",
      "height": 256
     }
    ]
   },
   "pitch": -2.16,
   "yaw": 10.52,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.17,
   "yaw": 10.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A094D79_97A7_8836_41BC_AF57757A41C8_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ]
   },
   "pitch": -2.16
  }
 ],
 "id": "overlay_81619516_9BBB_99FA_41D4_9D2237A74294",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 1.45,
   "yaw": 10.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A094D79_97A7_8836_41BC_AF57757A41C8_0_HS_1_0_map.gif",
      "width": 25,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A094D79_97A7_8836_41BC_AF57757A41C8_0_HS_1_0.png",
      "width": 290,
      "class": "ImageResourceLevel",
      "height": 180
     }
    ]
   },
   "yaw": 10.5,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -3,
   "distance": 50,
   "hfov": 1.45
  }
 ],
 "id": "overlay_814574F8_9BBB_7836_41D2_575DDE8F783C",
 "data": {
  "label": "BACK"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_83B2119A_9BA5_B8EB_41DD_CC95ADC227E2, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_82EED6C6_9A6D_785B_41DF_514E00AF6024, this.ImageResource_82EEE6C7_9A6D_7859_41D3_F4ECCC17A2DB, this.ImageResource_AB82C338_A4A0_6DF2_41B8_EA3579105F61, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.77,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A094D79_97A7_8836_41BC_AF57757A41C8_1_HS_2_0.png",
      "width": 953,
      "class": "ImageResourceLevel",
      "height": 412
     }
    ]
   },
   "pitch": 1.03,
   "yaw": -7.87,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.77,
   "yaw": -7.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A094D79_97A7_8836_41BC_AF57757A41C8_1_HS_2_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "pitch": 1.03
  }
 ],
 "id": "overlay_8338D67D_9BA7_7829_4195_D9A64DEE4FD7",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_821740A4_9BAF_98DE_41D5_38C6FC24568F, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_82E156CE_9A6D_786B_41D2_12B6EDA41DDC, this.ImageResource_82E166CE_9A6D_786B_41E1_BFFC49B0ECFC, this.ImageResource_AB833338_A4A0_6DF2_41B2_917B8CFAC41D, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.66,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A094D79_97A7_8836_41BC_AF57757A41C8_1_HS_3_0.png",
      "width": 936,
      "class": "ImageResourceLevel",
      "height": 423
     }
    ]
   },
   "pitch": -5.39,
   "yaw": 6.42,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.66,
   "yaw": 6.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A094D79_97A7_8836_41BC_AF57757A41C8_1_HS_3_0_0_map.gif",
      "width": 35,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.39
  }
 ],
 "id": "overlay_816DA260_9BA7_B856_41DE_261ED1B8EE47",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_85230C70_9BAC_8837_41D9_1917A6A062A3, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_82E3B6D0_9A6D_7877_41D0_AE9195ED24AD, this.ImageResource_82E3C6D0_9A6D_7877_41D2_9821AC5D3490, this.ImageResource_AB802338_A4A0_6DF2_41E1_DBF4F681F368, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A094D79_97A7_8836_41BC_AF57757A41C8_1_HS_4_0.png",
      "width": 803,
      "class": "ImageResourceLevel",
      "height": 454
     }
    ]
   },
   "pitch": -5.39,
   "yaw": 1.73,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4,
   "yaw": 1.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A094D79_97A7_8836_41BC_AF57757A41C8_1_HS_4_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.39
  }
 ],
 "id": "overlay_80633405_9BA7_BFD9_41AF_D583094FD2AF",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_818913A7_9BAD_78DA_41DE_AC45239115BF, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_82E2F6D2_9A6D_787B_41D3_4552F4BD66BD, this.ImageResource_82E216D2_9A6D_787B_41E1_78427A2E4346, this.ImageResource_AB810338_A4A0_6DF2_41DD_8718A10EE710, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.41,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A094D79_97A7_8836_41BC_AF57757A41C8_1_HS_5_0.png",
      "width": 886,
      "class": "ImageResourceLevel",
      "height": 403
     }
    ]
   },
   "pitch": -5.46,
   "yaw": -3,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.41,
   "yaw": -3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A094D79_97A7_8836_41BC_AF57757A41C8_1_HS_5_0_0_map.gif",
      "width": 35,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.46
  }
 ],
 "id": "overlay_83CAF5D2_9BA7_B87A_41D6_5DAE492B3A8A",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_81243F57_9BAC_887A_41AB_BA2A79F098F6, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_82E546D9_9A6D_7869_41B5_F774FD28940A, this.ImageResource_82E566D9_9A6D_7869_41DF_49DF4FCA7DDB, this.ImageResource_AB866338_A4A0_6DF2_41C6_E5F6D4889F62, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.56,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A094D79_97A7_8836_41BC_AF57757A41C8_1_HS_6_0.png",
      "width": 915,
      "class": "ImageResourceLevel",
      "height": 409
     }
    ]
   },
   "pitch": -5.42,
   "yaw": -7.61,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.56,
   "yaw": -7.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A094D79_97A7_8836_41BC_AF57757A41C8_1_HS_6_0_0_map.gif",
      "width": 35,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.42
  }
 ],
 "id": "overlay_850C186B_9BA7_8829_41DA_D12F68F56D65",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_83BEADBB_9BAD_8829_418E_674811CF112F, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_82E796DB_9A6D_7869_41CB_6618FBF4B37C, this.ImageResource_82E7B6DB_9A6D_7869_41B6_7330D8358D08, this.ImageResource_AB848338_A4A0_6DF2_41E4_188233F8AA89, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.83,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A094D79_97A7_8836_41BC_AF57757A41C8_1_HS_7_0.png",
      "width": 966,
      "class": "ImageResourceLevel",
      "height": 395
     }
    ]
   },
   "pitch": -2.05,
   "yaw": 6.49,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.83,
   "yaw": 6.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A094D79_97A7_8836_41BC_AF57757A41C8_1_HS_7_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.05
  }
 ],
 "id": "overlay_811CFA7E_9BA7_882B_41E2_B2BEECC7C800",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_82C67A90_9BAB_88F6_41CD_77CA73255A7D, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_82E456E2_9A6D_785B_41BF_F5D179EB9E18, this.ImageResource_82E466E2_9A6D_785B_41D6_178F28B75A72, this.ImageResource_AB85C338_A4A0_6DF2_41E0_9885D7C28E0E, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.12,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A094D79_97A7_8836_41BC_AF57757A41C8_1_HS_8_0.png",
      "width": 823,
      "class": "ImageResourceLevel",
      "height": 407
     }
    ]
   },
   "pitch": -2.04,
   "yaw": 1.78,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.12,
   "yaw": 1.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A094D79_97A7_8836_41BC_AF57757A41C8_1_HS_8_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.04
  }
 ],
 "id": "overlay_80578C1B_9BA7_8FE8_41E0_E9B452D99C16",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_854680B2_9BA4_983B_41C0_C926FD9ED5F1, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_82E6D6E4_9A6D_785F_41C2_2EC03886B6F0, this.ImageResource_82E6F6E4_9A6D_785F_41C0_C12F22198DD6, this.ImageResource_AB9AC347_A4A0_6D9D_41E0_57B89748169A, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.51,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A094D79_97A7_8836_41BC_AF57757A41C8_1_HS_9_0.png",
      "width": 902,
      "class": "ImageResourceLevel",
      "height": 380
     }
    ]
   },
   "pitch": -2.11,
   "yaw": -3.03,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.51,
   "yaw": -3.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A094D79_97A7_8836_41BC_AF57757A41C8_1_HS_9_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.11
  }
 ],
 "id": "overlay_839E8E0E_9BA7_8BEA_41C7_46D64958C554",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_80E4AB09_9BA5_89E9_41C9_C436C62A2C61, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_82D916E6_9A6D_785B_41D8_0974EC68FB98, this.ImageResource_82D946E6_9A6D_785B_41D7_32B6CB45384C, this.ImageResource_AB9B3347_A4A0_6D9D_41DD_D0A100F38144, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.64,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A094D79_97A7_8836_41BC_AF57757A41C8_1_HS_10_0.png",
      "width": 928,
      "class": "ImageResourceLevel",
      "height": 382
     }
    ]
   },
   "pitch": -2.04,
   "yaw": -7.71,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.64,
   "yaw": -7.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A094D79_97A7_8836_41BC_AF57757A41C8_1_HS_10_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.04
  }
 ],
 "id": "overlay_847100E6_9BA7_985B_41D1_9C9CF1AA1727",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_8293CDF3_9BAC_8839_41BD_163D579207DA, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_82DB96ED_9A6D_7829_41A9_80A36C228EFD, this.ImageResource_82DBC6ED_9A6D_7829_41E1_7B8657A0EBF9, this.ImageResource_AB980347_A4A0_6D9D_41E2_3B950F9B8686, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.74,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A094D79_97A7_8836_41BC_AF57757A41C8_1_HS_11_0.png",
      "width": 948,
      "class": "ImageResourceLevel",
      "height": 408
     }
    ]
   },
   "pitch": 1.03,
   "yaw": 6.53,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.74,
   "yaw": 6.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A094D79_97A7_8836_41BC_AF57757A41C8_1_HS_11_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.03
  }
 ],
 "id": "overlay_813DF302_9BA7_99DA_41E0_A21D28EDDC08",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_82205929_9BAB_89D6_41CB_E817F9EE19BD, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_82DA16EF_9A6D_7829_41B0_4CB2A9BD1F2A, this.ImageResource_82DA26EF_9A6D_7829_41D6_9C2F4E386DB1, this.ImageResource_AB98F347_A4A0_6D9D_41B4_44BC5AF658E7, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.17,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A094D79_97A7_8836_41BC_AF57757A41C8_1_HS_12_0.png",
      "width": 834,
      "class": "ImageResourceLevel",
      "height": 413
     }
    ]
   },
   "pitch": 1.03,
   "yaw": 1.79,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.17,
   "yaw": 1.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A094D79_97A7_8836_41BC_AF57757A41C8_1_HS_12_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.03
  }
 ],
 "id": "overlay_83C3D568_9BA7_9857_41E0_59BDEE400011",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_81207DF7_9BA4_8839_41E2_267A7AA9C942, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_82DD56F1_9A6D_7839_41CE_654C593ECDBD, this.ImageResource_82DC86F1_9A6D_7839_41D1_84A34AA61A57, this.ImageResource_AB991347_A4A0_6D9D_41E2_48628963138A, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.55,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A094D79_97A7_8836_41BC_AF57757A41C8_1_HS_13_0.png",
      "width": 910,
      "class": "ImageResourceLevel",
      "height": 393
     }
    ]
   },
   "pitch": 0.98,
   "yaw": -3.06,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.55,
   "yaw": -3.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A094D79_97A7_8836_41BC_AF57757A41C8_1_HS_13_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.98
  }
 ],
 "id": "overlay_82D307D0_9BA7_9876_41D1_470749A430CD",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_99A1F443_97A5_B859_41E0_6D42E4DF0706, this.camera_B254ADD3_A543_908E_41DB_5618FD61AFE7); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8D80D235_9BFD_9839_41D2_E903B9E5FC1E",
   "yaw": -6.02,
   "pitch": -3.88,
   "distance": 50,
   "hfov": 2.07
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.07,
   "yaw": -6.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A033A7C_97A4_882E_41B5_1A5A5BB15FA1_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.88
  }
 ],
 "id": "overlay_9A035A7C_97A4_882E_41C9_5B253078C548",
 "data": {
  "label": "Arrow 02a Left"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_877B0AA0_97AD_88D6_41C2_271020302E1E, this.camera_B27E8D9A_A543_90BF_41C8_1B47222E4529); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8D831235_9BFD_9839_41E0_5F5FF31E0343",
   "yaw": 1.03,
   "pitch": -3.1,
   "distance": 100,
   "hfov": 2.08
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.08,
   "yaw": 1.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A033A7C_97A4_882E_41B5_1A5A5BB15FA1_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.1
  }
 ],
 "id": "overlay_9A037A7C_97A4_882E_41B2_8FD7749FD094",
 "data": {
  "label": "Arrow 01b"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_86394A4B_97AF_886A_41D6_5E279BC46D2D, this.camera_B2609DB5_A543_908A_41DF_8E71A466F58F); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8D837235_9BFD_9839_41B5_7FC36AE73152",
   "yaw": 7.78,
   "pitch": -3.88,
   "distance": 50,
   "hfov": 2.07
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.07,
   "yaw": 7.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A033A7C_97A4_882E_41B5_1A5A5BB15FA1_1_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.88
  }
 ],
 "id": "overlay_9A3C9A7C_97A4_882E_41CD_EDDDC31E8901",
 "data": {
  "label": "Arrow 02b Right"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_99BA27DF_97A4_F86A_41BE_8455B88BC42D, this.camera_B2597DF0_A543_908A_41AE_734A1DBFEBC3); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 2.07,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A033A7C_97A4_882E_41B5_1A5A5BB15FA1_1_HS_3_0.png",
      "width": 346,
      "class": "ImageResourceLevel",
      "height": 217
     }
    ]
   },
   "pitch": -5.83,
   "yaw": 1.06,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.07,
   "yaw": 1.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A033A7C_97A4_882E_41B5_1A5A5BB15FA1_1_HS_3_0_0_map.gif",
      "width": 25,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.83
  }
 ],
 "id": "overlay_9A3C8A7C_97A4_882E_41A9_57C5396E41DD",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9BC8FA92_979B_88FA_41C0_251C0CA2A10E, this.camera_B3687B13_A543_918D_41E4_26C2880C4D70); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 0.97,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9B8656D4_97A4_987E_41B7_89C105C3D02A_1_HS_0_0.png",
      "width": 161,
      "class": "ImageResourceLevel",
      "height": 146
     }
    ]
   },
   "pitch": -3.7,
   "yaw": 2.72,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 0.97,
   "yaw": 2.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9B8656D4_97A4_987E_41B7_89C105C3D02A_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.7
  }
 ],
 "id": "overlay_9B8646D4_97A4_987E_41C3_1A4A0F23BE1E",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_98839B56_97AB_887B_41E2_BD3508A278E6, this.camera_B3607AF7_A543_9075_41DB_F49C6C859EF1); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8D9D7235_9BFD_9839_41A4_0A380E846397",
   "yaw": -8.69,
   "pitch": -6.14,
   "distance": 50,
   "hfov": 2.23
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.23,
   "yaw": -8.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9B8656D4_97A4_987E_41B7_89C105C3D02A_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.14
  }
 ],
 "id": "overlay_9B8676D4_97A4_987E_41D6_BCE506427D52",
 "data": {
  "label": "Arrow 01 Left"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.openLink('https://aci-agro.id/partnerships/', '_blank')",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 7.43,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B6221754_A4A0_F5B2_41C7_D1851B02258C_1_HS_3_0.png",
      "width": 1364,
      "class": "ImageResourceLevel",
      "height": 813
     }
    ]
   },
   "pitch": -3.09,
   "yaw": 1.01,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.43,
   "yaw": 1.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B6221754_A4A0_F5B2_41C7_D1851B02258C_1_HS_3_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.09
  }
 ],
 "id": "overlay_B7B74C06_A4A0_DB9F_4198_DF70B3CECA22",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 1.81,
   "yaw": -5.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B6221754_A4A0_F5B2_41C7_D1851B02258C_1_HS_4_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.11
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B6221754_A4A0_F5B2_41C7_D1851B02258C_1_HS_4_0.png",
      "width": 332,
      "class": "ImageResourceLevel",
      "height": 238
     }
    ]
   },
   "yaw": -5.39,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -3.11,
   "distance": 50,
   "hfov": 1.81
  }
 ],
 "id": "overlay_B7FAC560_A546_718B_41DF_1318FDA8AC13",
 "data": {
  "label": "BACK"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_99BA27DF_97A4_F86A_41BE_8455B88BC42D, this.camera_B23D4D0C_A543_919B_41E2_3E286F504474); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 1.02,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B6221754_A4A0_F5B2_41C7_D1851B02258C_1_HS_5_0.png",
      "width": 187,
      "class": "ImageResourceLevel",
      "height": 187
     }
    ]
   },
   "pitch": -2.17,
   "yaw": -5.48,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.02,
   "yaw": -5.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B6221754_A4A0_F5B2_41C7_D1851B02258C_1_HS_5_0_0_map.gif",
      "width": 15,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "pitch": -2.17
  }
 ],
 "id": "overlay_B67B88CB_A541_909D_41D1_B77897100138",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "if(this.MainViewerVideoPlayer.get('state') == 'playing' && this.playList_BF7677AE_A543_9097_41B5_FDF66FAF106E.get('selectedIndex') == 0) { this.MainViewerVideoPlayer.stop(); } else { this.setMediaBehaviour(this.playList_BF7677AE_A543_9097_41B5_FDF66FAF106E, 0, this.panorama_B6221754_A4A0_F5B2_41C7_D1851B02258C);this.MainViewerVideoPlayer.play(); }",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 1.3,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B6221754_A4A0_F5B2_41C7_D1851B02258C_0_HS_6_0.png",
      "width": 237,
      "class": "ImageResourceLevel",
      "height": 218
     }
    ]
   },
   "pitch": 1.02,
   "yaw": 1.41,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.3,
   "yaw": 1.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B6221754_A4A0_F5B2_41C7_D1851B02258C_0_HS_6_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.02
  }
 ],
 "id": "overlay_B16A917C_A542_707B_41A6_A4C5D0D3E000",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.openLink('https://shopee.co.id/momchipsofficial?is_from_signup=true', '_blank')",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 1.29,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B6221754_A4A0_F5B2_41C7_D1851B02258C_0_HS_7_0.png",
      "width": 237,
      "class": "ImageResourceLevel",
      "height": 218
     }
    ]
   },
   "pitch": 1.02,
   "yaw": -2.03,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.29,
   "yaw": -2.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B6221754_A4A0_F5B2_41C7_D1851B02258C_0_HS_7_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.02
  }
 ],
 "id": "overlay_B3518F34_A5DE_F18B_41DD_77D74AB26421",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.openLink('https://www.tokopedia.com/officialmomchips', '_blank')",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 1.19,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B6221754_A4A0_F5B2_41C7_D1851B02258C_0_HS_8_0.png",
      "width": 218,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 1.03,
   "yaw": 4.23,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.19,
   "yaw": 4.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B6221754_A4A0_F5B2_41C7_D1851B02258C_0_HS_8_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.03
  }
 ],
 "id": "overlay_B2388EB6_A5DF_90F7_41D1_BA75F6699D81",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_98839B56_97AB_887B_41E2_BD3508A278E6, this.camera_B353EB34_A543_918B_41E0_2D7027161402); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 1.29,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_87132137_979C_983A_41B1_3C79C12E949B_1_HS_0_0.png",
      "width": 216,
      "class": "ImageResourceLevel",
      "height": 189
     }
    ]
   },
   "pitch": 3.75,
   "yaw": -6.37,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.29,
   "yaw": -6.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_87132137_979C_983A_41B1_3C79C12E949B_1_HS_0_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.75
  }
 ],
 "id": "overlay_8714D137_979C_983A_41D2_98D58F061494",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 1.8,
   "yaw": -6.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_87132137_979C_983A_41B1_3C79C12E949B_1_HS_1_0_map.gif",
      "width": 25,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.8
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_87132137_979C_983A_41B1_3C79C12E949B_1_HS_1_0.png",
      "width": 300,
      "class": "ImageResourceLevel",
      "height": 188
     }
    ]
   },
   "yaw": -6.18,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 2.8,
   "distance": 50,
   "hfov": 1.8
  }
 ],
 "id": "overlay_8714F137_979C_983A_41E2_A07E9ACE9C81",
 "data": {
  "label": "BACK"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_839A6568_9D6D_B7FF_41D6_4B5F91213305, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_8557C33A_9D1C_5352_41DC_673AF6705180, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 2.71,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_87132137_979C_983A_41B1_3C79C12E949B_1_HS_2_0.png",
      "width": 452,
      "class": "ImageResourceLevel",
      "height": 800
     }
    ]
   },
   "pitch": 3.56,
   "yaw": -0.1,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.71,
   "yaw": -0.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_87132137_979C_983A_41B1_3C79C12E949B_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 28
     }
    ]
   },
   "pitch": 3.56
  }
 ],
 "id": "overlay_87149137_979C_983A_41D7_DAD3A31B7A71",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9A033A7C_97A4_882E_41B5_1A5A5BB15FA1, this.camera_B2E28C75_A543_9074_41D9_1A6ACB18D58C); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 2.18,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_86394A4B_97AF_886A_41D6_5E279BC46D2D_1_HS_0_0.png",
      "width": 512,
      "class": "ImageResourceLevel",
      "height": 266
     }
    ]
   },
   "pitch": -6.26,
   "yaw": 0.71,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.18,
   "yaw": 0.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_86394A4B_97AF_886A_41D6_5E279BC46D2D_1_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.26
  }
 ],
 "id": "overlay_86393A4B_97AF_886A_41C4_75C880E512D1",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_98F4D827_97A4_97DA_41DF_006AE3C9C012, this.camera_B2E92C91_A543_908D_41E1_4A865312A41C); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 0.75,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_86394A4B_97AF_886A_41D6_5E279BC46D2D_1_HS_1_0.png",
      "width": 174,
      "class": "ImageResourceLevel",
      "height": 152
     }
    ]
   },
   "pitch": -1.59,
   "yaw": -5.5,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 0.75,
   "yaw": -5.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_86394A4B_97AF_886A_41D6_5E279BC46D2D_1_HS_1_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.59
  }
 ],
 "id": "overlay_86391A4B_97AF_886A_41E0_3648EB18042E",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_998866A4_97A7_78DF_41E2_CAB386A0B055, this.camera_B2DDCCAC_A543_909B_4199_EF0CCBAD8BB4); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 0.75,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_86394A4B_97AF_886A_41D6_5E279BC46D2D_1_HS_2_0.png",
      "width": 174,
      "class": "ImageResourceLevel",
      "height": 152
     }
    ]
   },
   "pitch": -1.52,
   "yaw": 6.87,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 0.75,
   "yaw": 6.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_86394A4B_97AF_886A_41D6_5E279BC46D2D_1_HS_2_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.52
  }
 ],
 "id": "overlay_8639FA4B_97AF_886A_41DE_56D81A01B4B8",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_98839B56_97AB_887B_41E2_BD3508A278E6, this.camera_B2FF2C5A_A543_97BF_41A1_A2047A72B6EC); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 1.3,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9BF4BFC0_97E4_8857_41D7_6F9E7EEF0251_1_HS_0_0.png",
      "width": 216,
      "class": "ImageResourceLevel",
      "height": 189
     }
    ]
   },
   "pitch": 2.77,
   "yaw": -6.37,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.3,
   "yaw": -6.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9BF4BFC0_97E4_8857_41D7_6F9E7EEF0251_1_HS_0_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.77
  }
 ],
 "id": "overlay_9BF4AFC0_97E4_8857_41CD_2DD5F9D1E4EC",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 1.81,
   "yaw": -6.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9BF4BFC0_97E4_8857_41D7_6F9E7EEF0251_1_HS_1_0_map.gif",
      "width": 25,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.84
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9BF4BFC0_97E4_8857_41D7_6F9E7EEF0251_1_HS_1_0.png",
      "width": 302,
      "class": "ImageResourceLevel",
      "height": 189
     }
    ]
   },
   "yaw": -6.18,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 1.84,
   "distance": 50,
   "hfov": 1.81
  }
 ],
 "id": "overlay_9BF4DFC0_97E4_8857_41D5_E32A78C0194A",
 "data": {
  "label": "BACK"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_857F7D04_9D6C_D737_41DA_A6A6E5306D48, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_8557233C_9D1C_5356_41C4_4599F4C48327, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 2.71,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9BF4BFC0_97E4_8857_41D7_6F9E7EEF0251_1_HS_2_0.png",
      "width": 452,
      "class": "ImageResourceLevel",
      "height": 584
     }
    ]
   },
   "pitch": 2.7,
   "yaw": 0.93,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.71,
   "yaw": 0.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9BF4BFC0_97E4_8857_41D7_6F9E7EEF0251_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ]
   },
   "pitch": 2.7
  }
 ],
 "id": "overlay_9BF4CFC0_97E4_8857_41C7_320DD1CE5BF8",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9846488E_97A4_88EA_41BF_CD3C5F04F01D, this.camera_B2A21BCA_A543_909F_41DF_731E013A83BD); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 1.29,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8160CF81_9BA5_88D9_41BA_DE875EF69FF5_1_HS_0_0.png",
      "width": 216,
      "class": "ImageResourceLevel",
      "height": 216
     }
    ]
   },
   "pitch": 3.86,
   "yaw": -8.18,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.29,
   "yaw": -8.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8160CF81_9BA5_88D9_41BA_DE875EF69FF5_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.86
  }
 ],
 "id": "overlay_8160DF81_9BA5_88D9_41E0_38318FBF5BE1",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 1.81,
   "yaw": -8.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8160CF81_9BA5_88D9_41BA_DE875EF69FF5_1_HS_1_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.8
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8160CF81_9BA5_88D9_41BA_DE875EF69FF5_1_HS_1_0.png",
      "width": 301,
      "class": "ImageResourceLevel",
      "height": 216
     }
    ]
   },
   "yaw": -8.02,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 2.8,
   "distance": 50,
   "hfov": 1.81
  }
 ],
 "id": "overlay_817F3F81_9BA5_88D9_41E1_A21C471A0CA4",
 "data": {
  "label": "BACK"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_804096B3_9D6C_5551_41E2_FB8B7A622D62, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_8548B338_9D1C_535E_41E3_2F0D0AC15A0A, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 3.25,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8160CF81_9BA5_88D9_41BA_DE875EF69FF5_1_HS_2_0.png",
      "width": 543,
      "class": "ImageResourceLevel",
      "height": 827
     }
    ]
   },
   "pitch": 3.76,
   "yaw": 0.18,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.25,
   "yaw": 0.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8160CF81_9BA5_88D9_41BA_DE875EF69FF5_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 24
     }
    ]
   },
   "pitch": 3.76
  }
 ],
 "id": "overlay_817F0F81_9BA5_88D9_41A0_BE7677ADA16D",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9A033A7C_97A4_882E_41B5_1A5A5BB15FA1, this.camera_B35BDB56_A543_91B7_41DD_889590E03541); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 2.52,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_877B0AA0_97AD_88D6_41C2_271020302E1E_1_HS_0_0.png",
      "width": 591,
      "class": "ImageResourceLevel",
      "height": 346
     }
    ]
   },
   "pitch": -6.22,
   "yaw": 1.87,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.52,
   "yaw": 1.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_877B0AA0_97AD_88D6_41C2_271020302E1E_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.22
  }
 ],
 "id": "overlay_877B1AA0_97AD_88D6_41C1_9751E53E2FB4",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9A9D6B86_97A5_88DA_41DD_3ED78C68959B, this.camera_B2BF5BAE_A543_9097_41D2_11CD9E15280A); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 0.75,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_877B0AA0_97AD_88D6_41C2_271020302E1E_1_HS_1_0.png",
      "width": 174,
      "class": "ImageResourceLevel",
      "height": 152
     }
    ]
   },
   "pitch": -1.54,
   "yaw": 1.83,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 0.75,
   "yaw": 1.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_877B0AA0_97AD_88D6_41C2_271020302E1E_1_HS_1_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.54
  }
 ],
 "id": "overlay_877B3AA0_97AD_88D6_41E1_24F4D651D94A",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_98430603_97A5_9BDA_41A6_BCADCF045178, this.camera_B343CB78_A543_907B_41AE_E4E494C08577); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 0.75,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_877B0AA0_97AD_88D6_41C2_271020302E1E_1_HS_2_0.png",
      "width": 174,
      "class": "ImageResourceLevel",
      "height": 152
     }
    ]
   },
   "pitch": -1.55,
   "yaw": -8.74,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 0.75,
   "yaw": -8.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_877B0AA0_97AD_88D6_41C2_271020302E1E_1_HS_2_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.55
  }
 ],
 "id": "overlay_877B4AA0_97AD_88D6_41CB_10DEA2451947",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_995D51C3_97A5_9859_41C0_5015379F0B1E, this.camera_B2B6DB93_A543_908D_41D3_7C00B4BB054A); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 0.75,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_877B0AA0_97AD_88D6_41C2_271020302E1E_1_HS_3_0.png",
      "width": 174,
      "class": "ImageResourceLevel",
      "height": 152
     }
    ]
   },
   "pitch": -1.54,
   "yaw": 10.24,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 0.75,
   "yaw": 10.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_877B0AA0_97AD_88D6_41C2_271020302E1E_1_HS_3_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.54
  }
 ],
 "id": "overlay_877B5AA0_97AD_88D6_41D9_FFC757CEC055",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B6221754_A4A0_F5B2_41C7_D1851B02258C, this.camera_BDFADF11_A543_918D_41D2_11E737E1D4DE); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8D843235_9BFD_9839_41DB_09DC858A686C",
   "yaw": 1.18,
   "pitch": -4.52,
   "distance": 100,
   "hfov": 2.25
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.25,
   "yaw": 1.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_99BA27DF_97A4_F86A_41BE_8455B88BC42D_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.52
  }
 ],
 "id": "overlay_99BA37DF_97A4_F86A_41D6_FBFFBDE98669",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_98839B56_97AB_887B_41E2_BD3508A278E6, this.camera_BDBF6E27_A543_9395_41C7_914F0AD7EADC); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8D84B235_9BFD_9839_41D1_7C9ABD8B67A3",
   "yaw": 12.78,
   "pitch": -3.8,
   "distance": 100,
   "hfov": 2.25
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.25,
   "yaw": 12.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_99BA27DF_97A4_F86A_41BE_8455B88BC42D_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.8
  }
 ],
 "id": "overlay_99B5D7DF_97A4_F86A_41D4_DF05E299EC6F",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9A033A7C_97A4_882E_41B5_1A5A5BB15FA1, this.camera_BD872EA5_A543_9095_41D7_BAC7C05F6AA2); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8D84F235_9BFD_9839_41CF_969CFFAD3619",
   "yaw": -5.45,
   "pitch": -3.8,
   "distance": 100,
   "hfov": 2.25
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.25,
   "yaw": -5.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_99BA27DF_97A4_F86A_41BE_8455B88BC42D_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.8
  }
 ],
 "id": "overlay_99B5E7DF_97A4_F86A_41CD_0A4E0ED0247B",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9A033A7C_97A4_882E_41B5_1A5A5BB15FA1, this.camera_BD88BEDB_A543_90BD_41D7_5CB59E912273); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8D875245_9BFD_985E_41B8_720F453A3CB4",
   "yaw": 6.16,
   "pitch": -3.8,
   "distance": 100,
   "hfov": 2.25
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.25,
   "yaw": 6.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_99BA27DF_97A4_F86A_41BE_8455B88BC42D_1_HS_3_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.8
  }
 ],
 "id": "overlay_99B5F7DF_97A4_F86A_41CE_E41613738C14",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_98369766_97AC_B85B_4199_2CB4BEE25956, this.camera_BDA13E47_A543_9396_41E0_6DB80ED12E8D); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8D87B245_9BFD_985E_41DD_E6A82AFAA0F8",
   "yaw": -13.36,
   "pitch": -3.8,
   "distance": 100,
   "hfov": 2.25
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.25,
   "yaw": -13.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_99BA27DF_97A4_F86A_41BE_8455B88BC42D_1_HS_4_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.8
  }
 ],
 "id": "overlay_99B587DF_97A4_F86A_4185_06ABDB608168",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9FE32371_952A_1D97_4187_224C5F74D5B6, this.camera_BD956E68_A543_939B_41DD_9F0FF0091ED3); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 2.24,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_99BA27DF_97A4_F86A_41BE_8455B88BC42D_1_HS_5_0.png",
      "width": 374,
      "class": "ImageResourceLevel",
      "height": 174
     }
    ]
   },
   "pitch": -6.5,
   "yaw": 1.14,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.24,
   "yaw": 1.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_99BA27DF_97A4_F86A_41BE_8455B88BC42D_1_HS_5_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.5
  }
 ],
 "id": "overlay_99B5A7DF_97A4_F86A_41CA_D7A172B9D502",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_877B0AA0_97AD_88D6_41C2_271020302E1E, this.camera_B24B0E0B_A543_939E_41BF_125B136E3C7C); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 1.48,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98430603_97A5_9BDA_41A6_BCADCF045178_0_HS_0_0.png",
      "width": 296,
      "class": "ImageResourceLevel",
      "height": 243
     }
    ]
   },
   "pitch": -2.27,
   "yaw": -12.29,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.48,
   "yaw": -12.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98430603_97A5_9BDA_41A6_BCADCF045178_0_HS_0_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.27
  }
 ],
 "id": "overlay_98433603_97A5_9BDA_41C8_40646E263DDB",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 1.45,
   "yaw": -12.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98430603_97A5_9BDA_41A6_BCADCF045178_0_HS_1_0_map.gif",
      "width": 25,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.13
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98430603_97A5_9BDA_41A6_BCADCF045178_0_HS_1_0.png",
      "width": 290,
      "class": "ImageResourceLevel",
      "height": 180
     }
    ]
   },
   "yaw": -12.28,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -3.13,
   "distance": 50,
   "hfov": 1.45
  }
 ],
 "id": "overlay_98432603_97A5_9BDA_41D3_30D919E49CC5",
 "data": {
  "label": "BACK"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_B7C65FBF_9559_E48C_41DC_3E12E81B0D43, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_8D764613_9B9C_9BF9_41E0_BC2736098C50, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.18,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98430603_97A5_9BDA_41A6_BCADCF045178_1_HS_2_0.png",
      "width": 835,
      "class": "ImageResourceLevel",
      "height": 349
     }
    ]
   },
   "pitch": 1.23,
   "yaw": -8.02,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.18,
   "yaw": -8.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98430603_97A5_9BDA_41A6_BCADCF045178_1_HS_2_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.23
  }
 ],
 "id": "overlay_98435603_97A5_9BDA_41CA_5B372EA47A5F",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_B43729B6_956A_2C9C_41DA_95E60486315D, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_8D77C613_9B9C_9BF9_41E2_BB2F15FF3615, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 3.95,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98430603_97A5_9BDA_41A6_BCADCF045178_1_HS_3_0.png",
      "width": 793,
      "class": "ImageResourceLevel",
      "height": 390
     }
    ]
   },
   "pitch": -5.18,
   "yaw": 6.97,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.95,
   "yaw": 6.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98430603_97A5_9BDA_41A6_BCADCF045178_1_HS_3_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.18
  }
 ],
 "id": "overlay_98437603_97A5_9BDA_41E1_9EBDD135F66B",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_B7CC5594_956A_249C_41D3_5D0C9336A6EB, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_8D772613_9B9C_9BF9_41D2_549FC85B50AD, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 3.62,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98430603_97A5_9BDA_41A6_BCADCF045178_1_HS_4_0.png",
      "width": 727,
      "class": "ImageResourceLevel",
      "height": 396
     }
    ]
   },
   "pitch": -5.11,
   "yaw": 1.97,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.62,
   "yaw": 1.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98430603_97A5_9BDA_41A6_BCADCF045178_1_HS_4_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.11
  }
 ],
 "id": "overlay_98438603_97A5_9BDA_41CC_2A8CFB7AF614",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_B57C8955_956A_2D9C_41D9_F2D73ECF6F4C, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_8D78B613_9B9C_9BF9_41BF_545DCC25C070, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 3.58,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98430603_97A5_9BDA_41A6_BCADCF045178_1_HS_5_0.png",
      "width": 719,
      "class": "ImageResourceLevel",
      "height": 363
     }
    ]
   },
   "pitch": -5.22,
   "yaw": -2.95,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.58,
   "yaw": -2.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98430603_97A5_9BDA_41A6_BCADCF045178_1_HS_5_0_0_map.gif",
      "width": 31,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.22
  }
 ],
 "id": "overlay_9843B603_97A5_9BDA_41DF_E02DE7D28E51",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_B4E57643_956A_67F4_41E0_810E19CE9D39, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_8D778623_9B9C_9BDA_41DD_4763CBE4C708, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 3.75,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98430603_97A5_9BDA_41A6_BCADCF045178_1_HS_6_0.png",
      "width": 753,
      "class": "ImageResourceLevel",
      "height": 356
     }
    ]
   },
   "pitch": -5.23,
   "yaw": -7.41,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.75,
   "yaw": -7.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98430603_97A5_9BDA_41A6_BCADCF045178_1_HS_6_0_0_map.gif",
      "width": 33,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.23
  }
 ],
 "id": "overlay_9843A603_97A5_9BDA_41D1_9AD307EDEFA5",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_B4BB5D63_956A_65B4_41CB_9CE455617346, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_8D771623_9B9C_9BDA_41DD_B4D5EEEB506B, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.21,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98430603_97A5_9BDA_41A6_BCADCF045178_1_HS_7_0.png",
      "width": 842,
      "class": "ImageResourceLevel",
      "height": 327
     }
    ]
   },
   "pitch": -1.87,
   "yaw": 7.32,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.21,
   "yaw": 7.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98430603_97A5_9BDA_41A6_BCADCF045178_1_HS_7_0_0_map.gif",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.87
  }
 ],
 "id": "overlay_9843D603_97A5_9BDA_41CD_0CD9C10214FA",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_B40B3D2B_9556_258B_41E2_11BC55A51551, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_8D774623_9B9C_9BDA_41E1_9B341516D913, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 3.87,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98430603_97A5_9BDA_41A6_BCADCF045178_1_HS_8_0.png",
      "width": 775,
      "class": "ImageResourceLevel",
      "height": 362
     }
    ]
   },
   "pitch": -1.88,
   "yaw": 2.07,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.87,
   "yaw": 2.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98430603_97A5_9BDA_41A6_BCADCF045178_1_HS_8_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.88
  }
 ],
 "id": "overlay_9843F603_97A5_9BDA_41DA_81799F4A3C76",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_B4D43009_9556_7B74_41E0_D2959B20FBDC, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_8D78C623_9B9C_9BDA_41D4_3B9E58128769, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 3.67,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98430603_97A5_9BDA_41A6_BCADCF045178_1_HS_9_0.png",
      "width": 733,
      "class": "ImageResourceLevel",
      "height": 344
     }
    ]
   },
   "pitch": -1.92,
   "yaw": -3.23,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.67,
   "yaw": -3.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98430603_97A5_9BDA_41A6_BCADCF045178_1_HS_9_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.92
  }
 ],
 "id": "overlay_9843E603_97A5_9BDA_41D1_30B88EFCDF3E",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_B462A90A_9556_2D75_41DC_D4B30DD5CA64, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_8D785623_9B9C_9BDA_41DA_2B38626C53A3, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 3.9,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98430603_97A5_9BDA_41A6_BCADCF045178_1_HS_10_0.png",
      "width": 780,
      "class": "ImageResourceLevel",
      "height": 329
     }
    ]
   },
   "pitch": -1.96,
   "yaw": -7.9,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.9,
   "yaw": -7.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98430603_97A5_9BDA_41A6_BCADCF045178_1_HS_10_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.96
  }
 ],
 "id": "overlay_98420603_97A5_9BDA_41AD_F12825F1F5BE",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_B4EB9441_9556_1BF4_41E1_F1310C5B14B6, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_8D79B623_9B9C_9BDA_41B4_41BCAE4C05CA, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.18,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98430603_97A5_9BDA_41A6_BCADCF045178_1_HS_11_0.png",
      "width": 835,
      "class": "ImageResourceLevel",
      "height": 333
     }
    ]
   },
   "pitch": 1.23,
   "yaw": 6.85,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.18,
   "yaw": 6.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98430603_97A5_9BDA_41A6_BCADCF045178_1_HS_11_0_0_map.gif",
      "width": 40,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.23
  }
 ],
 "id": "overlay_98422603_97A5_9BDA_41C9_73BEFF5B01FB",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_B7883688_9556_2774_41CB_46A338073B88, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_8D793623_9B9C_9BDA_41E1_4E57C67A8DDE, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 3.62,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98430603_97A5_9BDA_41A6_BCADCF045178_1_HS_12_0.png",
      "width": 724,
      "class": "ImageResourceLevel",
      "height": 334
     }
    ]
   },
   "pitch": 1.21,
   "yaw": 2.1,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.62,
   "yaw": 2.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98430603_97A5_9BDA_41A6_BCADCF045178_1_HS_12_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.21
  }
 ],
 "id": "overlay_98425603_97A5_9BDA_41D7_2823F0A1D585",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_B4CA2484_9556_3B7C_41E1_39E73296032F, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_8D7A9623_9B9C_9BDA_41D1_8D22C81532AF, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 3.74,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98430603_97A5_9BDA_41A6_BCADCF045178_1_HS_13_0.png",
      "width": 747,
      "class": "ImageResourceLevel",
      "height": 335
     }
    ]
   },
   "pitch": 1.21,
   "yaw": -3.16,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.74,
   "yaw": -3.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98430603_97A5_9BDA_41A6_BCADCF045178_1_HS_13_0_0_map.gif",
      "width": 35,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.21
  }
 ],
 "id": "overlay_98424603_97A5_9BDA_41D4_08B939FE0763",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8160CF81_9BA5_88D9_41BA_DE875EF69FF5, this.camera_B28B6C3F_A543_97F5_41B4_B2F7EE6D1E82); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 0.91,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9846488E_97A4_88EA_41BF_CD3C5F04F01D_1_HS_0_0.png",
      "width": 151,
      "class": "ImageResourceLevel",
      "height": 142
     }
    ]
   },
   "pitch": -3.8,
   "yaw": -0.13,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 0.91,
   "yaw": -0.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9846488E_97A4_88EA_41BF_CD3C5F04F01D_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.8
  }
 ],
 "id": "overlay_9846588E_97A4_88EA_41C5_C3E8338E68C6",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_98369766_97AC_B85B_4199_2CB4BEE25956, this.camera_B2828C1F_A543_97B5_41C4_1E83668DE046); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8D9C6235_9BFD_9839_41C6_676DB2A17442",
   "yaw": 8.56,
   "pitch": -5.54,
   "distance": 50,
   "hfov": 2.14
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.14,
   "yaw": 8.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9846488E_97A4_88EA_41BF_CD3C5F04F01D_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.54
  }
 ],
 "id": "overlay_9846288E_97A4_88E7_41D9_56FF60A1AEF3",
 "data": {
  "label": "Arrow 01 Right"
 }
},
{
 "toolTipDisplayTime": 600,
 "borderRadius": 0,
 "toolTipPaddingLeft": 6,
 "id": "viewer_uidBF2C9777_A543_9076_41C0_6920E0D2C72A",
 "playbackBarLeft": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "width": "100%",
 "toolTipBorderRadius": 3,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "playbackBarHeadHeight": 15,
 "paddingRight": 0,
 "borderSize": 0,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "1.11vmin",
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "height": "100%",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "transitionDuration": 500,
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "paddingLeft": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "minHeight": 50,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarOpacity": 1,
 "class": "ViewerArea",
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "ViewerArea24551"
 },
 "toolTipBorderSize": 1,
 "minWidth": 100,
 "toolTipPaddingTop": 4,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "shadow": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9A033A7C_97A4_882E_41B5_1A5A5BB15FA1, this.camera_B3762A9B_A543_90BD_41E2_74B6602AE396); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 2.49,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_99A1F443_97A5_B859_41E0_6D42E4DF0706_1_HS_0_0.png",
      "width": 583,
      "class": "ImageResourceLevel",
      "height": 306
     }
    ]
   },
   "pitch": -6.24,
   "yaw": 0.01,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.49,
   "yaw": 0.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_99A1F443_97A5_B859_41E0_6D42E4DF0706_1_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.24
  }
 ],
 "id": "overlay_99A1C444_97A5_B85E_41D6_B16296C975D2",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9A094D79_97A7_8836_41BC_AF57757A41C8, this.camera_B37E2AB6_A543_90F7_41BB_BE64E8501D54); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 0.75,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_99A1F443_97A5_B859_41E0_6D42E4DF0706_0_HS_1_0.png",
      "width": 174,
      "class": "ImageResourceLevel",
      "height": 152
     }
    ]
   },
   "pitch": -1.45,
   "yaw": -6.75,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 0.75,
   "yaw": -6.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_99A1F443_97A5_B859_41E0_6D42E4DF0706_0_HS_1_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.45
  }
 ],
 "id": "overlay_8E63056A_9BA7_782A_41C8_B4564CD26441",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8E2CC0D3_9BBC_987A_41E2_80C3508F512D, this.camera_B3799AD6_A543_90B4_419C_07DD0F2AC4F9); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 0.75,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_99A1F443_97A5_B859_41E0_6D42E4DF0706_0_HS_2_0.png",
      "width": 174,
      "class": "ImageResourceLevel",
      "height": 152
     }
    ]
   },
   "pitch": -1.47,
   "yaw": 6.78,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 0.75,
   "yaw": 6.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_99A1F443_97A5_B859_41E0_6D42E4DF0706_0_HS_2_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.47
  }
 ],
 "id": "overlay_816D499F_9BA4_88E9_41C8_38AA200854F4",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9B8656D4_97A4_987E_41B7_89C105C3D02A, this.camera_B2A90BE5_A543_9095_41C1_B54C6F1D7A9A); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 1.29,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9BC8FA92_979B_88FA_41C0_251C0CA2A10E_0_HS_0_0.png",
      "width": 216,
      "class": "ImageResourceLevel",
      "height": 189
     }
    ]
   },
   "pitch": 3.27,
   "yaw": -6.91,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.29,
   "yaw": -6.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9BC8FA92_979B_88FA_41C0_251C0CA2A10E_0_HS_0_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.27
  }
 ],
 "id": "overlay_9BC89A92_979B_88FA_41D3_AAAA825C0FA8",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 1.8,
   "yaw": -6.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9BC8FA92_979B_88FA_41C0_251C0CA2A10E_0_HS_1_0_map.gif",
      "width": 25,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "pitch": 2.39
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9BC8FA92_979B_88FA_41C0_251C0CA2A10E_0_HS_1_0.png",
      "width": 299,
      "class": "ImageResourceLevel",
      "height": 187
     }
    ]
   },
   "yaw": -6.7,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 2.39,
   "distance": 50,
   "hfov": 1.8
  }
 ],
 "id": "overlay_9BC8BA92_979B_88FA_41A3_B672AD48E7E8",
 "data": {
  "label": "BACK"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_81FE74FB_9D74_76D1_4191_7846E948F99A, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_85575336_9D1C_5352_41DC_B910DB7CD658, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 3.26,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9BC8FA92_979B_88FA_41C0_251C0CA2A10E_1_HS_2_0.png",
      "width": 543,
      "class": "ImageResourceLevel",
      "height": 827
     }
    ]
   },
   "pitch": 2.64,
   "yaw": -0.68,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.26,
   "yaw": -0.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9BC8FA92_979B_88FA_41C0_251C0CA2A10E_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 24
     }
    ]
   },
   "pitch": 2.64
  }
 ],
 "id": "overlay_855C3CCF_9D75_B531_41E1_374429603023",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_877B0AA0_97AD_88D6_41C2_271020302E1E, this.camera_B29FAC00_A543_978B_41D9_CD5455DD0B10); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 1.17,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_995D51C3_97A5_9859_41C0_5015379F0B1E_0_HS_0_0.png",
      "width": 234,
      "class": "ImageResourceLevel",
      "height": 256
     }
    ]
   },
   "pitch": -2.23,
   "yaw": 11.27,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.17,
   "yaw": 11.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_995D51C3_97A5_9859_41C0_5015379F0B1E_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ]
   },
   "pitch": -2.23
  }
 ],
 "id": "overlay_995D41C3_97A5_9859_41BE_C1572B6F01EB",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 1.45,
   "yaw": 11.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_995D51C3_97A5_9859_41C0_5015379F0B1E_0_HS_1_0_map.gif",
      "width": 25,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.14
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_995D51C3_97A5_9859_41C0_5015379F0B1E_0_HS_1_0.png",
      "width": 290,
      "class": "ImageResourceLevel",
      "height": 180
     }
    ]
   },
   "yaw": 11.29,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -3.14,
   "distance": 50,
   "hfov": 1.45
  }
 ],
 "id": "overlay_995D31C3_97A5_9859_41DE_0817664A74B3",
 "data": {
  "label": "BACK"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_B78EC293_957A_1C94_417D_6AC4688F9C1F, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_8D7CE636_9B9C_983A_41C2_FAA4C2640912, this.ImageResource_82EBC6B0_9A6D_7836_41D5_3F43F10DD8BF, this.ImageResource_AB8E9328_A4A0_6D93_41D6_939D2E1826CC, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.36,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_995D51C3_97A5_9859_41C0_5015379F0B1E_1_HS_2_0.png",
      "width": 1073,
      "class": "ImageResourceLevel",
      "height": 431
     }
    ]
   },
   "pitch": 1.8,
   "yaw": -1.38,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.36,
   "yaw": -1.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_995D51C3_97A5_9859_41C0_5015379F0B1E_1_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.8
  }
 ],
 "id": "overlay_995D21C3_97A5_9859_41AB_DB1A60BF0D78",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 3.71,
   "yaw": 4.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_995D51C3_97A5_9859_41C0_5015379F0B1E_1_HS_3_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.71,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_995D51C3_97A5_9859_41C0_5015379F0B1E_1_HS_3_0.png",
      "width": 745,
      "class": "ImageResourceLevel",
      "height": 397
     }
    ]
   },
   "pitch": -5.36,
   "yaw": 4.72,
   "distance": 50
  }
 ],
 "id": "overlay_995D01C3_97A5_9859_41B4_1E842E5971C3",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 3.85,
   "yaw": -0.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_995D51C3_97A5_9859_41C0_5015379F0B1E_1_HS_4_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.35
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.85,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_995D51C3_97A5_9859_41C0_5015379F0B1E_1_HS_4_0.png",
      "width": 773,
      "class": "ImageResourceLevel",
      "height": 418
     }
    ]
   },
   "pitch": -5.35,
   "yaw": -0.56,
   "distance": 50
  }
 ],
 "id": "overlay_995DF1C3_97A5_9859_41E0_40532D7F49FA",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_8F292AC3_9BAB_885A_41C1_70D0F93FA726, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_82EA06B7_9A6D_783A_41E1_0FD870A82706, this.ImageResource_82EA26B7_9A6D_783A_4191_44B847084D9E, this.ImageResource_AB8FE328_A4A0_6D93_41E0_39AE9C4B2ABD, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.83,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_995D51C3_97A5_9859_41C0_5015379F0B1E_1_HS_5_0.png",
      "width": 1166,
      "class": "ImageResourceLevel",
      "height": 476
     }
    ]
   },
   "pitch": -1.37,
   "yaw": 5.63,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.83,
   "yaw": 5.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_995D51C3_97A5_9859_41C0_5015379F0B1E_1_HS_5_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.37
  }
 ],
 "id": "overlay_995DE1C3_97A5_9859_41A4_03A6EBDB2515",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_8D216551_9BA4_9876_41B4_58100748FB81, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_82EC96B9_9A6D_7836_41BE_4DADB7FE5C09, this.ImageResource_82ECA6B9_9A6D_7836_41C1_8D6158EF1C57, this.ImageResource_AB8CF338_A4A0_6DF2_41DF_DDAE8956C083, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.43,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_995D51C3_97A5_9859_41C0_5015379F0B1E_1_HS_6_0.png",
      "width": 1087,
      "class": "ImageResourceLevel",
      "height": 507
     }
    ]
   },
   "pitch": -1.33,
   "yaw": -1.28,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.43,
   "yaw": -1.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_995D51C3_97A5_9859_41C0_5015379F0B1E_1_HS_6_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.33
  }
 ],
 "id": "overlay_995DD1C3_97A5_9859_41B3_EF44DD577B43",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_8CE2E386_9BA5_98DB_41CF_25BCF2DEB1BE, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_82EFB6BF_9A6D_7829_41C1_36BA08C32155, this.ImageResource_82EFC6C0_9A6D_7857_41D3_E6A7EBF88B37, this.ImageResource_AB8F5338_A4A0_6DF2_41A6_60C66A81CD48, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.88,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_995D51C3_97A5_9859_41C0_5015379F0B1E_1_HS_7_0.png",
      "width": 1176,
      "class": "ImageResourceLevel",
      "height": 425
     }
    ]
   },
   "pitch": 1.84,
   "yaw": 5.85,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.88,
   "yaw": 5.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_995D51C3_97A5_9859_41C0_5015379F0B1E_1_HS_7_0_0_map.gif",
      "width": 44,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "pitch": 1.84
  }
 ],
 "id": "overlay_995DC1C3_97A5_9859_41DD_CC23DB9EE266",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_86394A4B_97AF_886A_41D6_5E279BC46D2D, this.camera_B2213D2B_A543_919D_41A9_6E4AB4E4C45B); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 1.41,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_998866A4_97A7_78DF_41E2_CAB386A0B055_1_HS_0_0.png",
      "width": 282,
      "class": "ImageResourceLevel",
      "height": 243
     }
    ]
   },
   "pitch": -2.1,
   "yaw": -9.29,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.41,
   "yaw": -9.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_998866A4_97A7_78DF_41E2_CAB386A0B055_1_HS_0_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.1
  }
 ],
 "id": "overlay_998876A4_97A7_78DF_41A0_51E63A5032CC",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 1.81,
   "yaw": -9.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_998866A4_97A7_78DF_41E2_CAB386A0B055_1_HS_1_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.99
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_998866A4_97A7_78DF_41E2_CAB386A0B055_1_HS_1_0.png",
      "width": 290,
      "class": "ImageResourceLevel",
      "height": 178
     }
    ]
   },
   "yaw": -9.25,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -2.99,
   "distance": 50,
   "hfov": 1.81
  }
 ],
 "id": "overlay_998896A4_97A7_78DF_41A7_BBEC2A1290B3",
 "data": {
  "label": "BACK"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_B6B76A4D_952A_6F8F_41D5_856C2B4B8061, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_8D7085E4_9B9C_985F_41D4_D6566F052E13, this.ImageResource_84A0F2C4_9D1C_6D37_41CF_4CBCCD16D586, this.ImageResource_AA51E2EA_A4A0_6C96_41D7_93DDCAA9FD18, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.72,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_998866A4_97A7_78DF_41E2_CAB386A0B055_1_HS_2_0.png",
      "width": 944,
      "class": "ImageResourceLevel",
      "height": 506
     }
    ]
   },
   "pitch": 1.38,
   "yaw": -4.91,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.72,
   "yaw": -4.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_998866A4_97A7_78DF_41E2_CAB386A0B055_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "pitch": 1.38
  }
 ],
 "id": "overlay_9988B6A4_97A7_78DF_41DB_B6D621DE1FCE",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_B1DB0871_953A_2B94_41B5_798594686B6A, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_8D70C5E4_9B9C_985F_41A9_99DB8C1B79C9, this.ImageResource_84A092C6_9D1C_6D33_41E2_604BE83A7F87, this.ImageResource_AA5622F9_A4A0_6C75_41C6_533B872A7C81, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.91,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_998866A4_97A7_78DF_41E2_CAB386A0B055_1_HS_3_0.png",
      "width": 985,
      "class": "ImageResourceLevel",
      "height": 542
     }
    ]
   },
   "pitch": -5.02,
   "yaw": 9.8,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.91,
   "yaw": 9.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_998866A4_97A7_78DF_41E2_CAB386A0B055_1_HS_3_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.02
  }
 ],
 "id": "overlay_9988E6A4_97A7_78DF_41C8_A4F80B7F9BBC",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_B146CB5E_953B_ED8C_41D5_9CD505D45E0E, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_8D7055E4_9B9C_985F_41D5_585F4958B36F, this.ImageResource_84A022C8_9D1C_6D3F_41C1_684B43AE2583, this.ImageResource_AA56F2F9_A4A0_6C75_41D6_BB87B41C466B, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.15,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_998866A4_97A7_78DF_41E2_CAB386A0B055_1_HS_4_0.png",
      "width": 833,
      "class": "ImageResourceLevel",
      "height": 527
     }
    ]
   },
   "pitch": -5.06,
   "yaw": 4.9,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.15,
   "yaw": 4.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_998866A4_97A7_78DF_41E2_CAB386A0B055_1_HS_4_0_0_map.gif",
      "width": 25,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.06
  }
 ],
 "id": "overlay_9988F6A4_97A7_78DF_41D4_F3F723D85AE9",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_B165C1A1_953A_7CB4_41B4_D54F4FD49A74, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_8D71B5E4_9B9C_985F_41C2_4C98BBC4F6C7, this.ImageResource_84A182C9_9D1C_6D31_41C1_0CB5D921037F, this.ImageResource_AA57F2F9_A4A0_6C75_41C6_368D9FCD7C3C, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.33,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_998866A4_97A7_78DF_41E2_CAB386A0B055_1_HS_5_0.png",
      "width": 869,
      "class": "ImageResourceLevel",
      "height": 504
     }
    ]
   },
   "pitch": -5.04,
   "yaw": -0.01,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.33,
   "yaw": -0.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_998866A4_97A7_78DF_41E2_CAB386A0B055_1_HS_5_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.04
  }
 ],
 "id": "overlay_998B86A5_97A7_78D9_41D0_6EC4AB81B101",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_B6950949_952A_2DF4_41DA_3D22E90D006A, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_8D71E5E4_9B9C_985F_41DC_3188CFE32004, this.ImageResource_84A122CB_9D1C_6D31_41D0_96BCADEC220F, this.ImageResource_AA5402F9_A4A0_6C75_41CB_6019A1C13714, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.5,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_998866A4_97A7_78DF_41E2_CAB386A0B055_1_HS_6_0.png",
      "width": 904,
      "class": "ImageResourceLevel",
      "height": 505
     }
    ]
   },
   "pitch": -5.11,
   "yaw": -4.65,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.5,
   "yaw": -4.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_998866A4_97A7_78DF_41E2_CAB386A0B055_1_HS_6_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.11
  }
 ],
 "id": "overlay_998B96A5_97A7_78D9_41CF_1E8E17EF8A80",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_B63B15CA_952A_24F4_41DD_AB8F524C7690, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_8D7175F4_9B9C_983E_41A7_DD314DAA0C85, this.ImageResource_84A022CD_9D1C_6D31_4175_0131E5F5FBF6, this.ImageResource_AA5512F9_A4A0_6C75_41D8_7AEA350BFF3D, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.79,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_998866A4_97A7_78DF_41E2_CAB386A0B055_1_HS_7_0.png",
      "width": 958,
      "class": "ImageResourceLevel",
      "height": 521
     }
    ]
   },
   "pitch": -1.71,
   "yaw": 9.94,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.79,
   "yaw": 9.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_998866A4_97A7_78DF_41E2_CAB386A0B055_1_HS_7_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.71
  }
 ],
 "id": "overlay_998BA6A5_97A7_78D9_41E0_478FFDAC4933",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_B132FC29_9536_6BB7_41E1_E1C5D1D02D95, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_8D72A5F4_9B9C_983E_41E2_0B31E1904FED, this.ImageResource_84A192CF_9D1C_6D31_41D3_01AA59BA86BF, this.ImageResource_ABAA72F9_A4A0_6C75_41E1_1AA410B7A6B3, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.52,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_998866A4_97A7_78DF_41E2_CAB386A0B055_1_HS_8_0.png",
      "width": 905,
      "class": "ImageResourceLevel",
      "height": 480
     }
    ]
   },
   "pitch": -1.78,
   "yaw": 5.03,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.52,
   "yaw": 5.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_998866A4_97A7_78DF_41E2_CAB386A0B055_1_HS_8_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.78
  }
 ],
 "id": "overlay_998BB6A5_97A7_78D9_41DF_38A29BE61DF4",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_B6F1F702_952E_2574_41D9_D5BF0BA145AB, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_8D71B5F4_9B9C_983E_41DD_A6C6C780656D, this.ImageResource_84A122D0_9D1C_6D2F_41BC_8F01A481C092, this.ImageResource_ABAB02F9_A4A0_6C75_41DE_6212DED22CED, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.58,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_998866A4_97A7_78DF_41E2_CAB386A0B055_1_HS_9_0.png",
      "width": 916,
      "class": "ImageResourceLevel",
      "height": 498
     }
    ]
   },
   "pitch": -1.72,
   "yaw": 0.06,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.58,
   "yaw": 0.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_998866A4_97A7_78DF_41E2_CAB386A0B055_1_HS_9_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "pitch": -1.72
  }
 ],
 "id": "overlay_998BD6A5_97A7_78D9_41CD_825CF1C6F228",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_B19C77C4_952E_24FC_4175_E880517EA612, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_8D71E604_9B9C_9BDE_41C1_48FC9FA1636E, this.ImageResource_84A282D2_9D1C_52D3_41D7_5131D79B9F5E, this.ImageResource_ABA872F9_A4A0_6C75_41D5_1B6EACF08F85, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.65,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_998866A4_97A7_78DF_41E2_CAB386A0B055_1_HS_10_0.png",
      "width": 930,
      "class": "ImageResourceLevel",
      "height": 503
     }
    ]
   },
   "pitch": -1.72,
   "yaw": -4.83,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.65,
   "yaw": -4.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_998866A4_97A7_78DF_41E2_CAB386A0B055_1_HS_10_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "pitch": -1.72
  }
 ],
 "id": "overlay_998BF6A5_97A7_78D9_41C4_6E484EAA7F55",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_B1724FE4_952A_24BD_41C7_A96D2DEB56D5, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_8D716604_9B9C_9BDE_41D3_A1A28283C376, this.ImageResource_84A202D3_9D1C_52D1_41C4_55E202C93B66, this.ImageResource_ABAEA2F9_A4A0_6C75_4173_FD2F095DEA33, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.92,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_998866A4_97A7_78DF_41E2_CAB386A0B055_1_HS_11_0.png",
      "width": 984,
      "class": "ImageResourceLevel",
      "height": 523
     }
    ]
   },
   "pitch": 1.42,
   "yaw": 10.15,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.92,
   "yaw": 10.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_998866A4_97A7_78DF_41E2_CAB386A0B055_1_HS_11_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.42
  }
 ],
 "id": "overlay_998806A5_97A7_78D9_41E0_1C948E230BAD",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_B0DE2642_952A_67F5_41E1_E1C78A496C51, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_8D72C604_9B9C_9BDE_41D3_1D2EF37273B1, this.ImageResource_84A372D5_9D1C_52D1_41D6_E02074431EA5, this.ImageResource_ABAF92F9_A4A0_6C75_41E2_3E9A46013CC3, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.32,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_998866A4_97A7_78DF_41E2_CAB386A0B055_1_HS_12_0.png",
      "width": 864,
      "class": "ImageResourceLevel",
      "height": 482
     }
    ]
   },
   "pitch": 1.42,
   "yaw": 5.17,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.32,
   "yaw": 5.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_998866A4_97A7_78DF_41E2_CAB386A0B055_1_HS_12_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.42
  }
 ],
 "id": "overlay_998816A5_97A7_78D9_41D3_4060A63E0358",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_B6BFA5A9_952A_64B7_41C0_0FAF731A2651, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_8D725604_9B9C_9BDE_41D9_ADA6216D049E, this.ImageResource_84A312D7_9D1C_52D1_41E1_A557D8D900F0, this.ImageResource_ABACF2F9_A4A0_6C75_41CB_85DDB2A2E24A, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.38,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_998866A4_97A7_78DF_41E2_CAB386A0B055_1_HS_13_0.png",
      "width": 875,
      "class": "ImageResourceLevel",
      "height": 493
     }
    ]
   },
   "pitch": 1.4,
   "yaw": 0.03,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.38,
   "yaw": 0.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_998866A4_97A7_78DF_41E2_CAB386A0B055_1_HS_13_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.4
  }
 ],
 "id": "overlay_998836A5_97A7_78D9_41CD_1DC14C48DC95",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_877B0AA0_97AD_88D6_41C2_271020302E1E, this.camera_B2370CF1_A543_908D_4187_F7DF48EDC846); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 1.57,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A9D6B86_97A5_88DA_41DD_3ED78C68959B_0_HS_0_0.png",
      "width": 316,
      "class": "ImageResourceLevel",
      "height": 249
     }
    ]
   },
   "pitch": -6.21,
   "yaw": 0.83,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.57,
   "yaw": 0.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A9D6B86_97A5_88DA_41DD_3ED78C68959B_0_HS_0_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "pitch": -6.21
  }
 ],
 "id": "overlay_9A9D4B86_97A5_88DA_41D0_851A6FA67AA8",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 1.44,
   "yaw": 0.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A9D6B86_97A5_88DA_41DD_3ED78C68959B_1_HS_1_0_map.gif",
      "width": 25,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.09
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A9D6B86_97A5_88DA_41DD_3ED78C68959B_1_HS_1_0.png",
      "width": 290,
      "class": "ImageResourceLevel",
      "height": 180
     }
    ]
   },
   "yaw": 0.81,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -7.09,
   "distance": 50,
   "hfov": 1.44
  }
 ],
 "id": "overlay_9A9D9B86_97A5_88DA_41E0_32BD60CC5965",
 "data": {
  "label": "BACK"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_8AED04E5_9BE5_7859_41CA_371C003858E4, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_8D6C45D5_9B9C_987E_41E1_8D4B300F639D, this.ImageResource_8D6C75D5_9B9C_987E_41DA_CB5E49F121DC, this.ImageResource_AA4642DA_A4A0_6CB7_41D3_B1FB8F72FBA8, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.56,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A9D6B86_97A5_88DA_41DD_3ED78C68959B_1_HS_14_0.png",
      "width": 912,
      "class": "ImageResourceLevel",
      "height": 419
     }
    ]
   },
   "pitch": 2.28,
   "yaw": -6.26,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.56,
   "yaw": -6.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A9D6B86_97A5_88DA_41DD_3ED78C68959B_1_HS_14_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.28
  }
 ],
 "id": "overlay_8E657019_9BE7_97E9_41CC_6826FFFAAD98",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 3.98,
   "yaw": 7.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A9D6B86_97A5_88DA_41DD_3ED78C68959B_1_HS_15_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.3
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.98,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A9D6B86_97A5_88DA_41DD_3ED78C68959B_1_HS_15_0.png",
      "width": 799,
      "class": "ImageResourceLevel",
      "height": 350
     }
    ]
   },
   "pitch": -4.3,
   "yaw": 7.49,
   "distance": 50
  }
 ],
 "id": "overlay_8A8CF8EB_9BE4_8829_41D7_59EFBBE15A47",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 3.81,
   "yaw": 3.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A9D6B86_97A5_88DA_41DD_3ED78C68959B_1_HS_16_0_0_map.gif",
      "width": 35,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.81,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A9D6B86_97A5_88DA_41DD_3ED78C68959B_1_HS_16_0.png",
      "width": 764,
      "class": "ImageResourceLevel",
      "height": 348
     }
    ]
   },
   "pitch": -4.32,
   "yaw": 3.13,
   "distance": 50
  }
 ],
 "id": "overlay_8C2A5AD6_9BE4_887A_41CA_F89A096764BC",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 3.62,
   "yaw": -1.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A9D6B86_97A5_88DA_41DD_3ED78C68959B_1_HS_17_0_0_map.gif",
      "width": 33,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.62,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A9D6B86_97A5_88DA_41DD_3ED78C68959B_1_HS_17_0.png",
      "width": 725,
      "class": "ImageResourceLevel",
      "height": 348
     }
    ]
   },
   "pitch": -4.32,
   "yaw": -1.5,
   "distance": 50
  }
 ],
 "id": "overlay_8FE5CCB9_9BE4_8836_41B0_3BC0E0DA8C68",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 3.98,
   "yaw": -5.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A9D6B86_97A5_88DA_41DD_3ED78C68959B_1_HS_18_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.3
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.98,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A9D6B86_97A5_88DA_41DD_3ED78C68959B_1_HS_18_0.png",
      "width": 799,
      "class": "ImageResourceLevel",
      "height": 340
     }
    ]
   },
   "pitch": -4.3,
   "yaw": -5.76,
   "distance": 50
  }
 ],
 "id": "overlay_8156BF57_9BE4_887A_41D3_8E52552E71EF",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_8AC8E9A0_9BEC_88D7_41CD_D490DBA78416, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_8D6D15D5_9B9C_987E_41BE_05627B5F1F5C, this.ImageResource_8D6D05D5_9B9C_987E_41E2_8175D066512D, this.ImageResource_AA59E2EA_A4A0_6C96_41D8_72F576ED1D36, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.37,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A9D6B86_97A5_88DA_41DD_3ED78C68959B_1_HS_19_0.png",
      "width": 873,
      "class": "ImageResourceLevel",
      "height": 483
     }
    ]
   },
   "pitch": -0.54,
   "yaw": 7.99,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.37,
   "yaw": 7.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A9D6B86_97A5_88DA_41DD_3ED78C68959B_1_HS_19_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.54
  }
 ],
 "id": "overlay_8A9DE19D_9BE4_B8EE_41D7_F454AF21ADC4",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_8FF2EFDC_9BEF_886E_41D7_E63240A711BF, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_8D6D65D5_9B9C_987E_41BA_603E1011946D, this.ImageResource_8D6E95D5_9B9C_987E_41DB_10557D558EC2, this.ImageResource_AA5EC2EA_A4A0_6C96_41D8_94A12BF02B28, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.34,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A9D6B86_97A5_88DA_41DD_3ED78C68959B_1_HS_20_0.png",
      "width": 868,
      "class": "ImageResourceLevel",
      "height": 460
     }
    ]
   },
   "pitch": -0.57,
   "yaw": 3.3,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.34,
   "yaw": 3.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A9D6B86_97A5_88DA_41DD_3ED78C68959B_1_HS_20_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.57
  }
 ],
 "id": "overlay_8C216345_9BE4_B859_41E0_70ABF55F3028",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_8F9E7737_9BED_783A_41CF_8056FA5AE36C, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_8D6EF5E4_9B9C_985F_41E2_2E1FD8821143, this.ImageResource_8D6EE5E4_9B9C_985F_41CE_F8D5E669EA06, this.ImageResource_AA5F12EA_A4A0_6C96_41D9_B3ED25C38320, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.15,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A9D6B86_97A5_88DA_41DD_3ED78C68959B_1_HS_21_0.png",
      "width": 829,
      "class": "ImageResourceLevel",
      "height": 463
     }
    ]
   },
   "pitch": -0.62,
   "yaw": -1.62,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.15,
   "yaw": -1.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A9D6B86_97A5_88DA_41DD_3ED78C68959B_1_HS_21_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.62
  }
 ],
 "id": "overlay_8FDC352B_9BE4_B829_41E0_B4C3FD5BCC8D",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_8AC1B058_9BEC_B876_41D8_FC7C1A313139, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_8D6E65E4_9B9C_985F_41E1_CDD921E9DDDA, this.ImageResource_8D6F95E4_9B9C_985F_41DF_56867AFFC19F, this.ImageResource_AA5C12EA_A4A0_6C96_41C5_C3826DE7BD65, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 3.92,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A9D6B86_97A5_88DA_41DD_3ED78C68959B_1_HS_22_0.png",
      "width": 784,
      "class": "ImageResourceLevel",
      "height": 469
     }
    ]
   },
   "pitch": -0.6,
   "yaw": -6.18,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.92,
   "yaw": -6.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A9D6B86_97A5_88DA_41DD_3ED78C68959B_1_HS_22_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.6
  }
 ],
 "id": "overlay_81386799_9BE4_B8E9_41E2_71BB43046666",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_8EF69DE1_9BED_8859_41D5_0DE04A35E3CF, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_8D70A5E4_9B9C_985F_41A5_C7CB0487401B, this.ImageResource_8D70D5E4_9B9C_985F_41D3_630E49A1F5DF, this.ImageResource_AA5D42EA_A4A0_6C96_41D0_8635C7C57696, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.89,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A9D6B86_97A5_88DA_41DD_3ED78C68959B_1_HS_23_0.png",
      "width": 979,
      "class": "ImageResourceLevel",
      "height": 419
     }
    ]
   },
   "pitch": 2.28,
   "yaw": 8.18,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.89,
   "yaw": 8.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A9D6B86_97A5_88DA_41DD_3ED78C68959B_1_HS_23_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.28
  }
 ],
 "id": "overlay_8A8D09FB_9BE4_882A_41D3_AB26E0D64642",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_8AC03A74_9BEC_883E_41D1_32F981924177, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_8D6F85E4_9B9C_985F_41D0_5E5700ED9965, this.ImageResource_8D6FB5E4_9B9C_985F_41DE_CB4E1A1FCAA9, this.ImageResource_AA53A2EA_A4A0_6C96_41DB_B6CBD115C378, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.24,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A9D6B86_97A5_88DA_41DD_3ED78C68959B_1_HS_24_0.png",
      "width": 849,
      "class": "ImageResourceLevel",
      "height": 417
     }
    ]
   },
   "pitch": 2.25,
   "yaw": 3.37,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.24,
   "yaw": 3.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A9D6B86_97A5_88DA_41DD_3ED78C68959B_1_HS_24_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "pitch": 2.25
  }
 ],
 "id": "overlay_8DCE0B78_9BE4_8837_41D3_CF1C1DD5F7BE",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_8ACA71C0_9BEB_9856_41DA_A92154BA5EBA, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_8D6F05E4_9B9C_985F_41DD_98FC29B57CCC, this.ImageResource_8D6F35E4_9B9C_985F_41D5_B0645C9E609F, this.ImageResource_AA50A2EA_A4A0_6C96_41E2_8C0C96E0F3FF, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.48,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A9D6B86_97A5_88DA_41DD_3ED78C68959B_1_HS_25_0.png",
      "width": 897,
      "class": "ImageResourceLevel",
      "height": 397
     }
    ]
   },
   "pitch": 2.23,
   "yaw": -1.48,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.48,
   "yaw": -1.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9A9D6B86_97A5_88DA_41DD_3ED78C68959B_1_HS_25_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.23
  }
 ],
 "id": "overlay_8F73CD88_9BE4_88D7_41D1_E5F8AC3CBB47",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_98369766_97AC_B85B_4199_2CB4BEE25956, this.camera_B20D5D7F_A543_9075_41DF_C130B4310078); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 1.29,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_81DF1DA0_9BE7_88D7_41E1_8D48B5A1F9A6_1_HS_1_0.png",
      "width": 216,
      "class": "ImageResourceLevel",
      "height": 216
     }
    ]
   },
   "pitch": 3.24,
   "yaw": -7.94,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.29,
   "yaw": -7.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_81DF1DA0_9BE7_88D7_41E1_8D48B5A1F9A6_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.24
  }
 ],
 "id": "overlay_81DF6DA0_9BE7_88D7_41DC_FE960C08AA36",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 1.82,
   "yaw": -7.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_81DF1DA0_9BE7_88D7_41E1_8D48B5A1F9A6_1_HS_2_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.18
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_81DF1DA0_9BE7_88D7_41E1_8D48B5A1F9A6_1_HS_2_0.png",
      "width": 302,
      "class": "ImageResourceLevel",
      "height": 217
     }
    ]
   },
   "yaw": -7.78,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 2.18,
   "distance": 50,
   "hfov": 1.82
  }
 ],
 "id": "overlay_81DF5DA0_9BE7_88D7_41D9_1C70128504E4",
 "data": {
  "label": "BACK"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_819147E9_9D6C_72F1_41CB_EDADAF60B6D2, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_8548B33E_9D1C_5352_41D4_D8C79437CED8, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 3.26,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_81DF1DA0_9BE7_88D7_41E1_8D48B5A1F9A6_1_HS_0_0.png",
      "width": 543,
      "class": "ImageResourceLevel",
      "height": 816
     }
    ]
   },
   "pitch": 3.08,
   "yaw": -2.45,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.26,
   "yaw": -2.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_81DF1DA0_9BE7_88D7_41E1_8D48B5A1F9A6_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 24
     }
    ]
   },
   "pitch": 3.08
  }
 ],
 "id": "overlay_81DF0DA0_9BE7_88D7_41E0_EB98B86B8D60",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_98369766_97AC_B85B_4199_2CB4BEE25956, this.camera_B30C6A80_A543_908B_41D5_4AFD697C3855); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 1.29,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_99669057_97EC_B87A_41CC_1D337A9D2B46_1_HS_0_0.png",
      "width": 216,
      "class": "ImageResourceLevel",
      "height": 189
     }
    ]
   },
   "pitch": 3.79,
   "yaw": -6.03,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.29,
   "yaw": -6.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_99669057_97EC_B87A_41CC_1D337A9D2B46_1_HS_0_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.79
  }
 ],
 "id": "overlay_9966E057_97EC_B87A_41AC_DB9D1E837B53",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 1.8,
   "yaw": -5.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_99669057_97EC_B87A_41CC_1D337A9D2B46_1_HS_1_0_map.gif",
      "width": 25,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.9
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_99669057_97EC_B87A_41CC_1D337A9D2B46_1_HS_1_0.png",
      "width": 300,
      "class": "ImageResourceLevel",
      "height": 188
     }
    ]
   },
   "yaw": -5.87,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 2.9,
   "distance": 50,
   "hfov": 1.8
  }
 ],
 "id": "overlay_9966F057_97EC_B87A_41B9_6C34FA249A5B",
 "data": {
  "label": "BACK"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_84FB841D_9D6F_D551_41CF_0BC2220C5C9A, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_8549F340_9D1C_532E_41E1_D39F1ADA4423, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 2.81,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_99669057_97EC_B87A_41CC_1D337A9D2B46_1_HS_2_0.png",
      "width": 469,
      "class": "ImageResourceLevel",
      "height": 599
     }
    ]
   },
   "pitch": 3.34,
   "yaw": 0.91,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.81,
   "yaw": 0.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_99669057_97EC_B87A_41CC_1D337A9D2B46_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ]
   },
   "pitch": 3.34
  }
 ],
 "id": "overlay_9966C057_97EC_B87A_41DC_9827388C5844",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_99A1F443_97A5_B859_41E0_6D42E4DF0706, this.camera_B305EA65_A543_9395_41DE_F4DFAA586FED); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 1.17,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E2CC0D3_9BBC_987A_41E2_80C3508F512D_1_HS_0_0.png",
      "width": 234,
      "class": "ImageResourceLevel",
      "height": 256
     }
    ]
   },
   "pitch": -1.65,
   "yaw": -10.44,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.17,
   "yaw": -10.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E2CC0D3_9BBC_987A_41E2_80C3508F512D_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ]
   },
   "pitch": -1.65
  }
 ],
 "id": "overlay_83439661_9BA4_9856_41D4_20A6B88FB3F0",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 1.45,
   "yaw": -10.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E2CC0D3_9BBC_987A_41E2_80C3508F512D_1_HS_1_0_map.gif",
      "width": 25,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.45
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E2CC0D3_9BBC_987A_41E2_80C3508F512D_1_HS_1_0.png",
      "width": 289,
      "class": "ImageResourceLevel",
      "height": 180
     }
    ]
   },
   "yaw": -10.46,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -2.45,
   "distance": 50,
   "hfov": 1.45
  }
 ],
 "id": "overlay_814A6885_9BA5_88D9_41D0_89AAB60228F5",
 "data": {
  "label": "BACK"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_80692759_9BA5_F869_41D1_F463262B0F6E, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_82DD66F8_9A6D_7837_41D0_450B94FFDA73, this.ImageResource_82DD76F8_9A6D_7837_41C4_853641DE03B5, this.ImageResource_AB9FB347_A4A0_6D9D_41BE_89516BF38959, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.64,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E2CC0D3_9BBC_987A_41E2_80C3508F512D_1_HS_2_0.png",
      "width": 927,
      "class": "ImageResourceLevel",
      "height": 415
     }
    ]
   },
   "pitch": 1.6,
   "yaw": -6.47,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.64,
   "yaw": -6.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E2CC0D3_9BBC_987A_41E2_80C3508F512D_1_HS_2_0_0_map.gif",
      "width": 35,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.6
  }
 ],
 "id": "overlay_845E3693_9BA7_F8F9_41E1_568BF33B0104",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_82CCCEF7_9B9C_8839_41B0_D0F022AE1F09, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_82DFC6FA_9A6D_782B_41D5_6A3AD9158ABC, this.ImageResource_82DF06FA_9A6D_782B_41C9_873B0D9EC750, this.ImageResource_AB9CA347_A4A0_6D9D_41D3_1B5D7E488ED8, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.91,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E2CC0D3_9BBC_987A_41E2_80C3508F512D_1_HS_3_0.png",
      "width": 985,
      "class": "ImageResourceLevel",
      "height": 425
     }
    ]
   },
   "pitch": -5.01,
   "yaw": 7.96,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.91,
   "yaw": 7.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E2CC0D3_9BBC_987A_41E2_80C3508F512D_1_HS_3_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "pitch": -5.01
  }
 ],
 "id": "overlay_821915B3_9BA7_B83A_41D4_25B00472D2DA",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_81E6D04A_9B9B_B86B_41DE_21F4536E4676, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_82DE4701_9A6D_79D9_41E0_F52297310425, this.ImageResource_82DE5701_9A6D_79D9_41C4_EB18288FCD57, this.ImageResource_AB9D9347_A4A0_6D9D_41E3_49C6C4612E62, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.18,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E2CC0D3_9BBC_987A_41E2_80C3508F512D_1_HS_4_0.png",
      "width": 838,
      "class": "ImageResourceLevel",
      "height": 456
     }
    ]
   },
   "pitch": -4.96,
   "yaw": 3.18,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.18,
   "yaw": 3.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E2CC0D3_9BBC_987A_41E2_80C3508F512D_1_HS_4_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.96
  }
 ],
 "id": "overlay_85ACD7CA_9BA7_B86A_41D9_DB838B7DFE6D",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_826B46F1_9A64_9839_41CA_558668E27F3A, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_82D0A703_9A6D_79D9_41E3_23414C91A2E5, this.ImageResource_82D0B703_9A6D_79D9_41DB_38521E45341B, this.ImageResource_AB928347_A4A0_6D9D_41C9_4E52818C3AF7, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.41,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E2CC0D3_9BBC_987A_41E2_80C3508F512D_1_HS_5_0.png",
      "width": 885,
      "class": "ImageResourceLevel",
      "height": 402
     }
    ]
   },
   "pitch": -4.99,
   "yaw": -1.63,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.41,
   "yaw": -1.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E2CC0D3_9BBC_987A_41E2_80C3508F512D_1_HS_5_0_0_map.gif",
      "width": 35,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.99
  }
 ],
 "id": "overlay_813019F6_9BA7_883B_41A9_34E99118D1AE",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_80D1BB81_9A65_88D6_41E0_16B519A5AFE9, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_82D33705_9A6D_79D9_4183_FB84A0BE8B5E, this.ImageResource_82D34705_9A6D_79D9_4195_58071F647A1C, this.ImageResource_AB93D347_A4A0_6D9D_41DA_8687B088A3BE, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.54,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E2CC0D3_9BBC_987A_41E2_80C3508F512D_1_HS_6_0.png",
      "width": 910,
      "class": "ImageResourceLevel",
      "height": 399
     }
    ]
   },
   "pitch": -4.92,
   "yaw": -6.27,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.54,
   "yaw": -6.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E2CC0D3_9BBC_987A_41E2_80C3508F512D_1_HS_6_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.92
  }
 ],
 "id": "overlay_821ECCF4_9BA7_883E_41D1_22C6EAEEEE68",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_82553F4D_9B9C_8869_41D0_1EA648CB0974, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_82D5970B_9A6D_79E9_41C5_6B9A52024C52, this.ImageResource_82D3370C_9A6D_79EF_41A1_D4344D4E8936, this.ImageResource_AB901357_A4A0_6DBD_41E3_A04C9FF0F458, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.03,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E2CC0D3_9BBC_987A_41E2_80C3508F512D_1_HS_7_0.png",
      "width": 1006,
      "class": "ImageResourceLevel",
      "height": 396
     }
    ]
   },
   "pitch": -1.57,
   "yaw": 8.08,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.03,
   "yaw": 8.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E2CC0D3_9BBC_987A_41E2_80C3508F512D_1_HS_7_0_0_map.gif",
      "width": 40,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.57
  }
 ],
 "id": "overlay_85387F17_9BA7_89F9_41C3_641A7C09DA11",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_81EB9E2E_9B9F_882B_41BD_ADF9553F5931, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_82D5970D_9A6D_79E9_419C_E6B3D3CD4C74, this.ImageResource_82D5B70D_9A6D_79E9_41C4_A06438A21CF8, this.ImageResource_AB916357_A4A0_6DBD_41C7_7EA0356F5056, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.27,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E2CC0D3_9BBC_987A_41E2_80C3508F512D_1_HS_8_0.png",
      "width": 855,
      "class": "ImageResourceLevel",
      "height": 406
     }
    ]
   },
   "pitch": -1.55,
   "yaw": 3.24,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.27,
   "yaw": 3.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E2CC0D3_9BBC_987A_41E2_80C3508F512D_1_HS_8_0_0_map.gif",
      "width": 33,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.55
  }
 ],
 "id": "overlay_813B7198_9BA7_98F7_41CC_1CFF61033B35",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_8251E853_9B9C_8879_419E_B5427F612429, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_82D40714_9A6D_79FF_41C5_20056C193C17, this.ImageResource_82D41714_9A6D_79FF_41D7_122C93090448, this.ImageResource_AB965357_A4A0_6DBD_41DF_410B28BBC377, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.51,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E2CC0D3_9BBC_987A_41E2_80C3508F512D_1_HS_9_0.png",
      "width": 901,
      "class": "ImageResourceLevel",
      "height": 381
     }
    ]
   },
   "pitch": -1.61,
   "yaw": -1.65,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.51,
   "yaw": -1.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E2CC0D3_9BBC_987A_41E2_80C3508F512D_1_HS_9_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.61
  }
 ],
 "id": "overlay_8036F36E_9BA7_982A_41D4_7A332EA7BEB7",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_8431CFBC_9B9D_882F_41D6_7C0578300B58, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_82D68716_9A6D_79FB_41DC_B094EA52B69F, this.ImageResource_82D6A716_9A6D_79FB_41E1_9947A660FABC, this.ImageResource_AB963357_A4A0_6DBD_41DA_7B5ACD1C182C, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.63,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E2CC0D3_9BBC_987A_41E2_80C3508F512D_1_HS_10_0.png",
      "width": 927,
      "class": "ImageResourceLevel",
      "height": 384
     }
    ]
   },
   "pitch": -1.52,
   "yaw": -6.36,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.63,
   "yaw": -6.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E2CC0D3_9BBC_987A_41E2_80C3508F512D_1_HS_10_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.52
  }
 ],
 "id": "overlay_823FD656_9BA7_987A_41CE_3CDA1D42E6CF",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_82DE88F9_9B9C_8829_41E3_18BA9A6E2717, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_82C9D718_9A6D_79F7_41BD_3B3D35614813, this.ImageResource_82C9F718_9A6D_79F7_41E2_46F2F4B360B5, this.ImageResource_AB977357_A4A0_6DBD_41C6_097D00AD565B, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.11,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E2CC0D3_9BBC_987A_41E2_80C3508F512D_1_HS_11_0.png",
      "width": 1022,
      "class": "ImageResourceLevel",
      "height": 411
     }
    ]
   },
   "pitch": 1.6,
   "yaw": 8.21,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.11,
   "yaw": 8.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E2CC0D3_9BBC_987A_41E2_80C3508F512D_1_HS_11_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.6
  }
 ],
 "id": "overlay_85D60852_9BA7_887A_419B_48754041D4E7",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_82161BF0_9B9B_8836_41AF_E7B034F99A73, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_82C8471F_9A6D_79E9_41C4_DD2155194586, this.ImageResource_82C8671F_9A6D_79E9_41DD_4599AD9E2D3E, this.ImageResource_AB947357_A4A0_6DBD_41C3_F3D4C77E47E6, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.34,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E2CC0D3_9BBC_987A_41E2_80C3508F512D_1_HS_12_0.png",
      "width": 867,
      "class": "ImageResourceLevel",
      "height": 404
     }
    ]
   },
   "pitch": 1.58,
   "yaw": 3.28,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.34,
   "yaw": 3.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E2CC0D3_9BBC_987A_41E2_80C3508F512D_1_HS_12_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.58
  }
 ],
 "id": "overlay_813DCA8C_9BA7_88EE_41E1_319D1076B1A5",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_82F95727_9BA4_99D9_41AA_6222D3D7C1A9, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_82C8F722_9A6D_79DA_41BC_CE18B4824605, this.ImageResource_82C81723_9A6D_79DA_41C4_6D87FC796539, this.ImageResource_AB954357_A4A0_6DBD_41E1_2C61773FBAA2, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.59,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E2CC0D3_9BBC_987A_41E2_80C3508F512D_1_HS_13_0.png",
      "width": 917,
      "class": "ImageResourceLevel",
      "height": 384
     }
    ]
   },
   "pitch": 1.54,
   "yaw": -1.65,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.59,
   "yaw": -1.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E2CC0D3_9BBC_987A_41E2_80C3508F512D_1_HS_13_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.54
  }
 ],
 "id": "overlay_81F54DE4_9BA7_885E_41C3_3DCF2801BDA7",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_99BA27DF_97A4_F86A_41BE_8455B88BC42D, this.camera_B32EB9D7_A543_90B5_41C5_D93FD97D14D0); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 2.59,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98839B56_97AB_887B_41E2_BD3508A278E6_1_HS_0_0.png",
      "width": 433,
      "class": "ImageResourceLevel",
      "height": 203
     }
    ]
   },
   "pitch": -5.06,
   "yaw": -2.06,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.59,
   "yaw": -2.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98839B56_97AB_887B_41E2_BD3508A278E6_1_HS_0_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.06
  }
 ],
 "id": "overlay_9883FB57_97AB_8879_41DE_9F2F9989B47E",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9B8656D4_97A4_987E_41B7_89C105C3D02A, this.camera_BEFAF8E3_A543_908D_41DC_2E4FCDAFE0AD); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8D9F0235_9BFD_9839_41DB_63BDEE96FEB6",
   "yaw": -1.86,
   "pitch": -0.94,
   "distance": 100,
   "hfov": 2.59
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.59,
   "yaw": -1.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98839B56_97AB_887B_41E2_BD3508A278E6_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.94
  }
 ],
 "id": "overlay_9883EB58_97AB_8876_41C5_84D39312C658",
 "data": {
  "label": "Arrow 01a"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_87132137_979C_983A_41B1_3C79C12E949B, this.camera_BE8FA89A_A543_90BF_41CF_28B585292C95); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 1.04,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98839B56_97AB_887B_41E2_BD3508A278E6_1_HS_2_0.png",
      "width": 173,
      "class": "ImageResourceLevel",
      "height": 158
     }
    ]
   },
   "pitch": -1.89,
   "yaw": 5.56,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.04,
   "yaw": 5.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98839B56_97AB_887B_41E2_BD3508A278E6_1_HS_2_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.89
  }
 ],
 "id": "overlay_9883DB58_97AB_8876_41C9_ED7BE0689A15",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9BF4BFC0_97E4_8857_41D7_6F9E7EEF0251, this.camera_BEF748B8_A543_90FB_41A6_F5574241E784); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 0.73,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98839B56_97AB_887B_41E2_BD3508A278E6_1_HS_3_0.png",
      "width": 122,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ]
   },
   "pitch": 3.3,
   "yaw": 4.06,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 0.73,
   "yaw": 4.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98839B56_97AB_887B_41E2_BD3508A278E6_1_HS_3_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.3
  }
 ],
 "id": "overlay_98843B58_97AB_8876_41A4_9005964C1E8A",
 "data": {
  "label": "Image"
 }
},
{
 "viewerArea": "this.viewer_uidBF2C9777_A543_9076_41C0_6920E0D2C72A",
 "class": "VideoPlayer",
 "id": "viewer_uidBF2C9777_A543_9076_41C0_6920E0D2C72AVideoPlayer",
 "displayPlaybackBar": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_86394A4B_97AF_886A_41D6_5E279BC46D2D, this.camera_B2C37CC6_A543_9097_41D4_9D5350C84CFB); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 1.62,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98F4D827_97A4_97DA_41DF_006AE3C9C012_1_HS_0_0.png",
      "width": 323,
      "class": "ImageResourceLevel",
      "height": 256
     }
    ]
   },
   "pitch": -2.1,
   "yaw": 9.71,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.62,
   "yaw": 9.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98F4D827_97A4_97DA_41DF_006AE3C9C012_1_HS_0_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.1
  }
 ],
 "id": "overlay_98F4C827_97A4_97DA_41DA_22D8F806AFB8",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 1.45,
   "yaw": 9.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98F4D827_97A4_97DA_41DF_006AE3C9C012_1_HS_1_0_map.gif",
      "width": 25,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.03
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98F4D827_97A4_97DA_41DF_006AE3C9C012_1_HS_1_0.png",
      "width": 290,
      "class": "ImageResourceLevel",
      "height": 179
     }
    ]
   },
   "yaw": 9.75,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -3.03,
   "distance": 50,
   "hfov": 1.45
  }
 ],
 "id": "overlay_98F4F827_97A4_97DA_41D6_8FA1320E4383",
 "data": {
  "label": "BACK"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_B6FB7333_9556_7D94_41DA_F7EE251D45C9, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_8D73D604_9B9C_9BDE_41E0_7C99F94E98E6, this.ImageResource_84A202D9_9D1C_52D1_41DF_A09D2A70C1CE, this.ImageResource_ABAD3309_A4A0_6D92_41E1_C6A568A83F0B, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.98,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98F4D827_97A4_97DA_41DF_006AE3C9C012_1_HS_2_0.png",
      "width": 996,
      "class": "ImageResourceLevel",
      "height": 496
     }
    ]
   },
   "pitch": 1.26,
   "yaw": -9.18,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.98,
   "yaw": -9.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98F4D827_97A4_97DA_41DF_006AE3C9C012_1_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.26
  }
 ],
 "id": "overlay_98F41827_97A4_97DA_41A9_825F38170B26",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_B71C9C09_9556_2B74_41DA_630AC87ECBD2, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_8D730604_9B9C_9BDE_41DC_0B4FFDBC4009, this.ImageResource_84A372DA_9D1C_52D3_4194_BAAAC6F077A4, this.ImageResource_ABADA309_A4A0_6D92_4197_6479485C0B3C, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.97,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98F4D827_97A4_97DA_41DF_006AE3C9C012_1_HS_3_0.png",
      "width": 998,
      "class": "ImageResourceLevel",
      "height": 531
     }
    ]
   },
   "pitch": -5.12,
   "yaw": 5.6,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.97,
   "yaw": 5.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98F4D827_97A4_97DA_41DF_006AE3C9C012_1_HS_3_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.12
  }
 ],
 "id": "overlay_98F43827_97A4_97DA_419E_C2F91FDD6D0E",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_B6B1CD59_9556_2594_41CC_00A5966BE61E, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_8D749604_9B9C_9BDE_41D1_992F96F73E6A, this.ImageResource_84A4F2DC_9D1C_52D7_41D7_4ACADAFB5529, this.ImageResource_ABA2F309_A4A0_6D92_41CD_C051F17BD6DA, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.15,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98F4D827_97A4_97DA_41DF_006AE3C9C012_1_HS_4_0.png",
      "width": 832,
      "class": "ImageResourceLevel",
      "height": 511
     }
    ]
   },
   "pitch": -5.16,
   "yaw": 0.79,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.15,
   "yaw": 0.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98F4D827_97A4_97DA_41DF_006AE3C9C012_1_HS_4_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.16
  }
 ],
 "id": "overlay_98F45827_97A4_97DA_41D7_6EF4D9087587",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_B62B82DA_955A_1C94_41C9_A4E78AAA7076, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_8D74E604_9B9C_9BDE_41D9_D41CCADBD84F, this.ImageResource_84A462DE_9D1C_52D3_41CB_3688AC19D83C, this.ImageResource_ABA3E309_A4A0_6D92_41E2_C38EB48C268F, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.43,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98F4D827_97A4_97DA_41DF_006AE3C9C012_1_HS_5_0.png",
      "width": 888,
      "class": "ImageResourceLevel",
      "height": 500
     }
    ]
   },
   "pitch": -5.06,
   "yaw": -4.11,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.43,
   "yaw": -4.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98F4D827_97A4_97DA_41DF_006AE3C9C012_1_HS_5_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.06
  }
 ],
 "id": "overlay_98F44827_97A4_97DA_41E1_27D71E478E08",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_B1FC2E3E_955A_678D_41DB_154EB98C15C0, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_8D745604_9B9C_9BDE_41C2_6AF9ACE4D0C1, this.ImageResource_84A5F2DF_9D1C_52D1_41B0_F20FFFF677DD, this.ImageResource_ABA02309_A4A0_6D92_41D7_5228982CC2E1, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.71,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98F4D827_97A4_97DA_41DF_006AE3C9C012_1_HS_6_0.png",
      "width": 944,
      "class": "ImageResourceLevel",
      "height": 501
     }
    ]
   },
   "pitch": -5.05,
   "yaw": -8.88,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.71,
   "yaw": -8.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98F4D827_97A4_97DA_41DF_006AE3C9C012_1_HS_6_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "pitch": -5.05
  }
 ],
 "id": "overlay_98F46827_97A4_97DA_41D2_4B7F1F9C305D",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_B688882F_955A_EB8B_41DD_BEC2FDC6E4C0, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_8D75A604_9B9C_9BDE_41B1_2DF201EA3A15, this.ImageResource_84A582E1_9D1C_52F1_41E2_74CCB5CACDC2, this.ImageResource_ABA10309_A4A0_6D92_41D3_DCA8F196A8A1, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.78,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98F4D827_97A4_97DA_41DF_006AE3C9C012_1_HS_7_0.png",
      "width": 956,
      "class": "ImageResourceLevel",
      "height": 526
     }
    ]
   },
   "pitch": -1.81,
   "yaw": 5.63,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.78,
   "yaw": 5.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98F4D827_97A4_97DA_41DF_006AE3C9C012_1_HS_7_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.81
  }
 ],
 "id": "overlay_98F59827_97A4_97DA_41DB_6BA467134242",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_B66304F3_9559_E494_41E1_AF17A0E3BAE1, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_8D74D613_9B9C_9BF9_41BB_9CF99FAB53B8, this.ImageResource_84A6F2E2_9D1C_52F3_41DD_BF971AC033B8, this.ImageResource_ABA67309_A4A0_6D92_41DC_8DDFA3B1EFAA, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.29,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98F4D827_97A4_97DA_41DF_006AE3C9C012_1_HS_8_0.png",
      "width": 859,
      "class": "ImageResourceLevel",
      "height": 482
     }
    ]
   },
   "pitch": -1.78,
   "yaw": 0.89,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.29,
   "yaw": 0.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98F4D827_97A4_97DA_41DF_006AE3C9C012_1_HS_8_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.78
  }
 ],
 "id": "overlay_98F5B827_97A4_97DA_41B2_9A06C06CC729",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_B16D0D45_955E_E5FF_41E1_4C662FE2F0F0, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_8D743613_9B9C_9BF9_4195_2208AB3BDD50, this.ImageResource_84A412E4_9D1C_52F7_41BE_22D25D4766D7, this.ImageResource_ABA76309_A4A0_6D92_41C0_B82F3C1D02B0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.58,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98F4D827_97A4_97DA_41DF_006AE3C9C012_1_HS_9_0.png",
      "width": 916,
      "class": "ImageResourceLevel",
      "height": 479
     }
    ]
   },
   "pitch": -1.71,
   "yaw": -4.19,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.58,
   "yaw": -4.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98F4D827_97A4_97DA_41DF_006AE3C9C012_1_HS_9_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "pitch": -1.71
  }
 ],
 "id": "overlay_98F5A827_97A4_97DA_41B1_981E523FCDC4",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_B6DA1F34_955E_259D_41DB_93BE218293BC, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_8D759613_9B9C_9BF9_41AC_90497FB401B1, this.ImageResource_84A572E6_9D1C_52F3_41CD_39BAADF90AED, this.ImageResource_ABA44309_A4A0_6D92_41D0_B25111E6AB5B, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.63,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98F4D827_97A4_97DA_41DF_006AE3C9C012_1_HS_10_0.png",
      "width": 925,
      "class": "ImageResourceLevel",
      "height": 475
     }
    ]
   },
   "pitch": -1.76,
   "yaw": -8.92,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.63,
   "yaw": -8.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98F4D827_97A4_97DA_41DF_006AE3C9C012_1_HS_10_0_0_map.gif",
      "width": 31,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.76
  }
 ],
 "id": "overlay_98F5F827_97A4_97DA_4158_B21387BDF67A",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_B6C1269B_955E_2494_41E1_CC343C297961, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_8D75E613_9B9C_9BF9_41BA_BEE5E0F58BBA, this.ImageResource_84A6E2E7_9D1C_52F1_41D4_18CFD51650E9, this.ImageResource_ABBA9309_A4A0_6D92_41E1_53144BC0E018, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.02,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98F4D827_97A4_97DA_41DF_006AE3C9C012_1_HS_11_0.png",
      "width": 1005,
      "class": "ImageResourceLevel",
      "height": 532
     }
    ]
   },
   "pitch": 1.36,
   "yaw": 5.79,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.02,
   "yaw": 5.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98F4D827_97A4_97DA_41DF_006AE3C9C012_1_HS_11_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.36
  }
 ],
 "id": "overlay_98F5E827_97A4_97DA_417F_043E8F613AF7",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_B6A82354_955A_7D9C_41E1_F58CA8B7CEDF, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_8D757613_9B9C_9BF9_41C7_BF1A917E8DB3, this.ImageResource_84A672E9_9D1C_52F1_41C7_E2891EB38E12, this.ImageResource_ABBB9318_A4A0_6DB3_41E2_6845B050F0F9, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.35,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98F4D827_97A4_97DA_41DF_006AE3C9C012_1_HS_12_0.png",
      "width": 870,
      "class": "ImageResourceLevel",
      "height": 495
     }
    ]
   },
   "pitch": 1.31,
   "yaw": 0.84,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.35,
   "yaw": 0.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98F4D827_97A4_97DA_41DF_006AE3C9C012_1_HS_12_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.31
  }
 ],
 "id": "overlay_98F51827_97A4_97DA_41D6_B871BED2E692",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_B1EA68CE_955A_2C8C_41DB_E56A60D84CAC, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingRight':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_8D76C613_9B9C_9BF9_41DD_96AC5B58A87A, this.ImageResource_84A7F2EB_9D1C_52F1_41D4_ED638F581C61, this.ImageResource_ABBA4318_A4A0_6DB3_41C9_9BA5D54CE19A, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.63,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98F4D827_97A4_97DA_41DF_006AE3C9C012_1_HS_13_0.png",
      "width": 926,
      "class": "ImageResourceLevel",
      "height": 496
     }
    ]
   },
   "pitch": 1.29,
   "yaw": -4.29,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.63,
   "yaw": -4.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98F4D827_97A4_97DA_41DF_006AE3C9C012_1_HS_13_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.29
  }
 ],
 "id": "overlay_98F50827_97A4_97DA_41E0_2B006AD727A0",
 "data": {
  "label": "Image"
 }
},
{
 "frameDuration": 62,
 "id": "AnimatedImageResource_8D9FF235_9BFD_9839_41E3_1F1E3F53EE28",
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_98369766_97AC_B85B_4199_2CB4BEE25956_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "id": "AnimatedImageResource_8D914225_9BFD_9BD9_41D5_05AE04A8CF40",
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_9FE32371_952A_1D97_4187_224C5F74D5B6_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_8D80D235_9BFD_9839_41D2_E903B9E5FC1E",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_9A033A7C_97A4_882E_41B5_1A5A5BB15FA1_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 62,
 "id": "AnimatedImageResource_8D831235_9BFD_9839_41E0_5F5FF31E0343",
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_9A033A7C_97A4_882E_41B5_1A5A5BB15FA1_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_8D837235_9BFD_9839_41B5_7FC36AE73152",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_9A033A7C_97A4_882E_41B5_1A5A5BB15FA1_1_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 62,
 "id": "AnimatedImageResource_8D9D7235_9BFD_9839_41A4_0A380E846397",
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_9B8656D4_97A4_987E_41B7_89C105C3D02A_1_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "id": "AnimatedImageResource_8D843235_9BFD_9839_41DB_09DC858A686C",
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_99BA27DF_97A4_F86A_41BE_8455B88BC42D_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "id": "AnimatedImageResource_8D84B235_9BFD_9839_41D1_7C9ABD8B67A3",
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_99BA27DF_97A4_F86A_41BE_8455B88BC42D_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "id": "AnimatedImageResource_8D84F235_9BFD_9839_41CF_969CFFAD3619",
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_99BA27DF_97A4_F86A_41BE_8455B88BC42D_1_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "id": "AnimatedImageResource_8D875245_9BFD_985E_41B8_720F453A3CB4",
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_99BA27DF_97A4_F86A_41BE_8455B88BC42D_1_HS_3_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "id": "AnimatedImageResource_8D87B245_9BFD_985E_41DD_E6A82AFAA0F8",
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_99BA27DF_97A4_F86A_41BE_8455B88BC42D_1_HS_4_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "id": "AnimatedImageResource_8D9C6235_9BFD_9839_41C6_676DB2A17442",
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_9846488E_97A4_88EA_41BF_CD3C5F04F01D_1_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "rowCount": 3
},
{
 "frameDuration": 62,
 "id": "AnimatedImageResource_8D9F0235_9BFD_9839_41DB_63BDEE96FEB6",
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_98839B56_97AB_887B_41E2_BD3508A278E6_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3
}],
 "defaultVRPointer": "laser",
 "mobileMipmappingEnabled": false,
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "class": "Player",
 "gap": 10,
 "scrollBarMargin": 2,
 "scripts": {
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "registerKey": function(key, value){  window[key] = value; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "existsKey": function(key){  return key in window; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getKey": function(key){  return window[key]; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "unregisterKey": function(key){  delete window[key]; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } }
 },
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Player719"
 },
 "scrollBarOpacity": 0.5,
 "minWidth": 20,
 "downloadEnabled": false,
 "shadow": false,
 "vrPolyfillScale": 0.5,
 "height": "100%"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
