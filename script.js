(function(){
    var script = {
 "start": "this.init()",
 "downloadEnabled": false,
 "data": {
  "name": "Player2929"
 },
 "height": "100%",
 "id": "rootPlayer",
 "layout": "absolute",
 "minHeight": 20,
 "children": [
  "this.MainViewer",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 20,
 "desktopMipmappingEnabled": false,
 "propagateClick": false,
 "borderSize": 0,
 "paddingLeft": 0,
 "definitions": [{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "camera_55939B99_4127_6DEA_41B5_C51EA6F59E5F"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_4EDCEB76_4121_6D27_415A_2C5EA113052A",
 "yaw": -7.49,
 "popupDistance": 100,
 "hfov": 2.05,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_4EDCEB76_4121_6D27_415A_2C5EA113052A_0_2.jpg",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": 4.66,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "class": "ImageResource",
 "id": "ImageResource_1B8B4724_3E0A_D794_41B3_3AC7B451D77B",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1B8B6724_3E0A_D794_41AE_DE7B70701E96_0_0.jpg",
   "width": 2000,
   "height": 2000
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1B8B6724_3E0A_D794_41AE_DE7B70701E96_0_1.jpg",
   "width": 1024,
   "height": 1024
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1B8B6724_3E0A_D794_41AE_DE7B70701E96_0_2.jpg",
   "width": 512,
   "height": 512
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_166A28FF_3E1A_7A73_41CA_7EFC4EB543E1",
 "yaw": -12.51,
 "popupDistance": 100,
 "hfov": 2.25,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_166A28FF_3E1A_7A73_41CA_7EFC4EB543E1_0_1.jpg",
    "width": 1024,
    "height": 1024
   }
  ]
 },
 "pitch": -0.92,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "class": "ImageResource",
 "id": "ImageResource_1428EE5A_3E0A_79BD_4187_4776634BD8B0",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_19595BC9_3E15_DE9F_41B7_2CB0740C4F90_0_0.jpg",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_19595BC9_3E15_DE9F_41B7_2CB0740C4F90_0_1.jpg",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_19595BC9_3E15_DE9F_41B7_2CB0740C4F90_0_2.jpg",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_19595BC9_3E15_DE9F_41B7_2CB0740C4F90_0_3.jpg",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "thumbnailUrl": "media/panorama_2C218AD1_3E3A_DE8C_41C3_85E76DE1BC79_t.jpg",
 "class": "Panorama",
 "label": "display62",
 "id": "panorama_2C218AD1_3E3A_DE8C_41C3_85E76DE1BC79",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_2C218AD1_3E3A_DE8C_41C3_85E76DE1BC79_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C218AD1_3E3A_DE8C_41C3_85E76DE1BC79_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_2C218AD1_3E3A_DE8C_41C3_85E76DE1BC79_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_2C218AD1_3E3A_DE8C_41C3_85E76DE1BC79_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2C218AD1_3E3A_DE8C_41C3_85E76DE1BC79_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2CFD31DB_3E3A_4ABC_41BF_0DDB1A254B82"
  }
 ],
 "vfov": 17.38,
 "hfovMax": 30,
 "overlays": [
  "this.overlay_1E0C35BA_3E36_4AFD_41B5_83133ECCBBD6",
  "this.overlay_1A30C967_3E36_FB93_41CC_3721BB3A7BD9",
  "this.overlay_1BB3AB09_3E36_FF9C_41B4_8F4FF24F8CB8",
  "this.overlay_18BF7CA5_3E36_FA97_41B5_43E6840AF5D0",
  "this.overlay_1E1A6EB5_3E36_F6F4_41B5_F565AC41CC54",
  "this.overlay_1E7CD094_3E36_CAB5_41C3_08C5FBC5F2B9",
  "this.overlay_1F80821E_3E36_C9B4_4175_D090E0EC8688",
  "this.overlay_1F6F63DD_3E36_CEB4_41CD_E72EC3D3DB4A",
  "this.overlay_1C445592_3E36_CA8C_41C1_827578EF0366",
  "this.overlay_1DF33794_3E36_D6B4_41C3_44C1CF4DEAD6",
  "this.overlay_1D411940_3E36_DB8D_41BE_03CD4CDB7A20",
  "this.overlay_1AB75B31_3E36_DF8C_41CF_1827E6705E76",
  "this.overlay_1F9BEC5E_3E3E_F9B5_41C7_10A6B0706672",
  "this.overlay_1CCBED87_3E3E_5A93_41C0_10D29118666C",
  "this.popup_189FBE19_3E0A_59BF_4193_C7A30C85D5DB",
  "this.popup_1667CCF9_3E0A_FA7F_41CC_2E27ADB3E07C",
  "this.popup_17BD3B74_3E0A_5E75_41BA_87E36FC2CD60",
  "this.popup_16E7621B_3FF5_C9BC_41B8_7B64B893E87D",
  "this.popup_194D1C46_3FF5_B995_41CC_47C8B24B4667",
  "this.popup_17C344D4_3FF6_CAB4_41BF_3138093A33A0",
  "this.popup_14A770D1_3FF6_4A8C_41CC_E9339BEDF090",
  "this.popup_14602613_3FF6_C98C_41A9_B6FE16C2A3F5",
  "this.popup_16FE6F72_3FF6_578C_41C9_C7646A8E7FDF",
  "this.popup_12D5AE15_3FF5_D9B4_4196_28D31329D2EE",
  "this.popup_19E45FC8_3FFA_769D_41CD_E12ACA652E1B",
  "this.popup_1BD084D7_3FFA_CAB4_41C0_B4AD17431F57"
 ],
 "hfovMin": "150%",
 "hfov": 30,
 "pitch": 0,
 "partial": true
},
{
 "class": "ImageResource",
 "id": "ImageResource_19A940DC_3E36_4AB5_419C_515A44A24CA5",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_19A900DC_3E36_4AB5_41B9_B7B98AD8B281_0_0.jpg",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_19A900DC_3E36_4AB5_41B9_B7B98AD8B281_0_1.jpg",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_19A900DC_3E36_4AB5_41B9_B7B98AD8B281_0_2.jpg",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_19A900DC_3E36_4AB5_41B9_B7B98AD8B281_0_3.jpg",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_191CF9DF_3E36_DAB3_41C8_3921C3322426",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_191C19DF_3E36_DAB3_41C4_2871D196C90A_0_0.jpg",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_191C19DF_3E36_DAB3_41C4_2871D196C90A_0_1.jpg",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_191C19DF_3E36_DAB3_41C4_2871D196C90A_0_2.jpg",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_191C19DF_3E36_DAB3_41C4_2871D196C90A_0_3.jpg",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_17BD3B74_3E0A_5E75_41BA_87E36FC2CD60",
 "yaw": -5.81,
 "popupDistance": 100,
 "hfov": 1.5,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_17BD3B74_3E0A_5E75_41BA_87E36FC2CD60_0_2.jpg",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": -7.73,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_1A70E061_3E0E_498F_41AD_9D0D89CA328E",
 "yaw": 9.03,
 "popupDistance": 100,
 "hfov": 2.25,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_1A70E061_3E0E_498F_41AD_9D0D89CA328E_0_1.jpg",
    "width": 1024,
    "height": 1024
   }
  ]
 },
 "pitch": -0.78,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "camera_55386A2F_4127_6F26_41B0_75AA1980F68D"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_17D95337_3E0A_4FF3_41C4_007E4BEF6392",
 "yaw": 1.97,
 "popupDistance": 100,
 "hfov": 1.5,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_17D95337_3E0A_4FF3_41C4_007E4BEF6392_0_2.jpg",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": -7.63,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "class": "ImageResource",
 "id": "ImageResource_19C24616_3E15_C9B5_41BB_FC779E4B8ECA",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_160D8E13_3E16_B9B3_41B7_FF97F446F022_0_0.jpg",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_160D8E13_3E16_B9B3_41B7_FF97F446F022_0_1.jpg",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_160D8E13_3E16_B9B3_41B7_FF97F446F022_0_2.jpg",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_160D8E13_3E16_B9B3_41B7_FF97F446F022_0_3.jpg",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_1A6FF52C_3E0A_CB94_418C_8153327EB610",
 "yaw": 12.85,
 "popupDistance": 100,
 "hfov": 2.25,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_1A6FF52C_3E0A_CB94_418C_8153327EB610_0_1.jpg",
    "width": 1024,
    "height": 1024
   }
  ]
 },
 "pitch": 2.7,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_1BE79D73_3E0E_7A73_41C3_E08C4D0056CF",
 "yaw": -3.01,
 "popupDistance": 100,
 "hfov": 1.51,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_1BE79D73_3E0E_7A73_41C3_E08C4D0056CF_0_2.jpg",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": 1.21,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_178B8605_3E0F_C997_41B1_35651F880DE7",
 "yaw": -2.88,
 "popupDistance": 100,
 "hfov": 1.51,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_178B8605_3E0F_C997_41B1_35651F880DE7_0_2.jpg",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": -3.26,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "class": "ImageResource",
 "id": "ImageResource_19C4C60D_3E15_C996_41C7_CDF58250AEA8",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_14E801EA_3E16_4A9D_41B4_9420E2E5A5A8_0_0.jpg",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_14E801EA_3E16_4A9D_41B4_9420E2E5A5A8_0_1.jpg",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_14E801EA_3E16_4A9D_41B4_9420E2E5A5A8_0_2.jpg",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_14E801EA_3E16_4A9D_41B4_9420E2E5A5A8_0_3.jpg",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_1BB1DFC0_3E36_B68D_41C6_9AE529EE3CEE",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1BB1EFC0_3E36_B68D_41C9_6BFA86E32FC8_0_0.jpg",
   "width": 2000,
   "height": 2000
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1BB1EFC0_3E36_B68D_41C9_6BFA86E32FC8_0_1.jpg",
   "width": 1024,
   "height": 1024
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1BB1EFC0_3E36_B68D_41C9_6BFA86E32FC8_0_2.jpg",
   "width": 512,
   "height": 512
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_1424BE52_3E0A_798D_41B8_9F8FB87A7048",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_182B4B6A_3E16_5F9D_41CC_B7A82E635989_0_0.jpg",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_182B4B6A_3E16_5F9D_41CC_B7A82E635989_0_1.jpg",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_182B4B6A_3E16_5F9D_41CC_B7A82E635989_0_2.jpg",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_182B4B6A_3E16_5F9D_41CC_B7A82E635989_0_3.jpg",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.16,
  "pitch": -0.96
 },
 "id": "camera_551AEA8D_4127_6FEA_41C8_F287E1707587"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_1BEADEBC_3E17_D6F4_41B2_3C1D28068696",
 "yaw": -1.6,
 "popupDistance": 100,
 "hfov": 1.74,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_1BEADEBC_3E17_D6F4_41B2_3C1D28068696_0_2.jpg",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": -7.61,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "camera_52F25966_4127_6D27_41AA_374871E6953A"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_1ABEB615_3E3E_49B7_41B7_38DDC78AD700",
 "yaw": -6.21,
 "popupDistance": 100,
 "hfov": 1.75,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_1ABEB615_3E3E_49B7_41B7_38DDC78AD700_0_2.jpg",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": -2.9,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "camera_525A486B_4127_6B2D_41AD_7A00AF8C55CF"
},
{
 "class": "ImageResource",
 "id": "ImageResource_1BEFD1F0_3E0E_4A8D_41C4_E76649C6A9EA",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1BEFA1EF_3E0E_4A93_4158_C7A881589B40_0_0.jpg",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1BEFA1EF_3E0E_4A93_4158_C7A881589B40_0_1.jpg",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1BEFA1EF_3E0E_4A93_4158_C7A881589B40_0_2.jpg",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1BEFA1EF_3E0E_4A93_4158_C7A881589B40_0_3.jpg",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_19595BC9_3E15_DE9F_41B7_2CB0740C4F90",
 "yaw": 7.48,
 "popupDistance": 100,
 "hfov": 1.75,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_19595BC9_3E15_DE9F_41B7_2CB0740C4F90_0_2.jpg",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": 1.13,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_1856F3B0_3E0B_CE8D_41A2_59CE97177F8D",
 "yaw": -12.82,
 "popupDistance": 100,
 "hfov": 2.25,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_1856F3B0_3E0B_CE8D_41A2_59CE97177F8D_0_1.jpg",
    "width": 1024,
    "height": 1024
   }
  ]
 },
 "pitch": 2.57,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_2E007ADD_3C1F_AD1D_41AB_459813FB0E74_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0.15,
  "pitch": -1
 },
 "id": "camera_5269E843_4127_6B5D_41C1_2F263D085C32"
},
{
 "class": "ImageResource",
 "id": "ImageResource_18294583_3E15_CA93_41BF_0597AFF14E88",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1856F3B0_3E0B_CE8D_41A2_59CE97177F8D_0_0.jpg",
   "width": 2000,
   "height": 2000
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1856F3B0_3E0B_CE8D_41A2_59CE97177F8D_0_1.jpg",
   "width": 1024,
   "height": 1024
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1856F3B0_3E0B_CE8D_41A2_59CE97177F8D_0_2.jpg",
   "width": 512,
   "height": 512
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_2D09BDD0_3C3E_6764_4195_5C239A573862_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_2D520B41_3E3A_5F8F_41CE_906BC02F0E46_camera"
},
{
 "mouseControlMode": "drag_acceleration",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation"
},
{
 "class": "ImageResource",
 "id": "ImageResource_165BD49E_3E37_CAB2_41C8_0DFF9A818431",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_165A049E_3E37_CAB5_41C3_C22ADFC29EE8_0_0.jpg",
   "width": 2000,
   "height": 2000
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_165A049E_3E37_CAB5_41C3_C22ADFC29EE8_0_1.jpg",
   "width": 1024,
   "height": 1024
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_165A049E_3E37_CAB5_41C3_C22ADFC29EE8_0_2.jpg",
   "width": 512,
   "height": 512
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_16F17C9A_3E3E_7ABD_41CB_177175B64893",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_194C1F23_3E3E_7793_41BD_21519733D19B_0_0.jpg",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_194C1F23_3E3E_7793_41BD_21519733D19B_0_1.jpg",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_194C1F23_3E3E_7793_41BD_21519733D19B_0_2.jpg",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_194C1F23_3E3E_7793_41BD_21519733D19B_0_3.jpg",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "camera_559DBBB7_4127_6D26_41AC_07C0F69EE68C"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_1690FB36_3E0D_BFF5_41C4_A3A1FB9659FB",
 "yaw": 12.71,
 "popupDistance": 100,
 "hfov": 2.25,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_1690FB36_3E0D_BFF5_41C4_A3A1FB9659FB_0_1.jpg",
    "width": 1024,
    "height": 1024
   }
  ]
 },
 "pitch": -0.82,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_1A85CCEB_3E15_FA93_41BD_2DFD0C60502F",
 "yaw": 2.77,
 "popupDistance": 100,
 "hfov": 1.75,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_1A85CCEB_3E15_FA93_41BD_2DFD0C60502F_0_2.jpg",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": -2.76,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_16BDA1B9_3E0A_4AFF_41B4_4FCB36C7C67C",
 "yaw": 8.92,
 "popupDistance": 100,
 "hfov": 2.25,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_16BDA1B9_3E0A_4AFF_41B4_4FCB36C7C67C_0_1.jpg",
    "width": 1024,
    "height": 1024
   }
  ]
 },
 "pitch": -4.57,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_1BFA689E_3E0E_DAB5_419C_D75ADFA12AED",
 "yaw": -2.74,
 "popupDistance": 100,
 "hfov": 1.5,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_1BFA689E_3E0E_DAB5_419C_D75ADFA12AED_0_2.jpg",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": -7.63,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_1AAB2148_3E0A_4B9D_41A5_3A75E641CA3D",
 "yaw": 7.38,
 "popupDistance": 100,
 "hfov": 2.09,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_1AAB2148_3E0A_4B9D_41A5_3A75E641CA3D_0_2.jpg",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": 4.88,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "class": "ImageResource",
 "id": "ImageResource_19CA85FB_3E15_CA73_41C6_6DA1A2E5DC3D",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_193FD649_3E15_C99F_41A0_B11C47334635_0_0.jpg",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_193FD649_3E15_C99F_41A0_B11C47334635_0_1.jpg",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_193FD649_3E15_C99F_41A0_B11C47334635_0_2.jpg",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_193FD649_3E15_C99F_41A0_B11C47334635_0_3.jpg",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_1BF49BED_3E16_DE97_41C4_88037FBD5619",
 "yaw": 2.8,
 "popupDistance": 100,
 "hfov": 1.75,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_1BF49BED_3E16_DE97_41C4_88037FBD5619_0_2.jpg",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": -2.94,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "class": "ImageResource",
 "id": "ImageResource_1A6FC52C_3E0A_CB94_41CA_AF09016D6B59",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1A6FF52C_3E0A_CB94_418C_8153327EB610_0_0.jpg",
   "width": 2000,
   "height": 2000
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1A6FF52C_3E0A_CB94_418C_8153327EB610_0_1.jpg",
   "width": 1024,
   "height": 1024
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1A6FF52C_3E0A_CB94_418C_8153327EB610_0_2.jpg",
   "width": 512,
   "height": 512
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_17A39D33_3FFA_FBF3_41CF_0C52973667F1",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_16FE6F72_3FF6_578C_41C9_C7646A8E7FDF_0_0.jpg",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_16FE6F72_3FF6_578C_41C9_C7646A8E7FDF_0_1.jpg",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_16FE6F72_3FF6_578C_41C9_C7646A8E7FDF_0_2.jpg",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_16FE6F72_3FF6_578C_41C9_C7646A8E7FDF_0_3.jpg",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "thumbnailUrl": "media/panorama_2CD889F5_3E3A_BA77_41C2_CF63F5C9736B_t.jpg",
 "class": "Panorama",
 "label": "display3",
 "id": "panorama_2CD889F5_3E3A_BA77_41C2_CF63F5C9736B",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_2CD889F5_3E3A_BA77_41C2_CF63F5C9736B_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2CD889F5_3E3A_BA77_41C2_CF63F5C9736B_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_2CD889F5_3E3A_BA77_41C2_CF63F5C9736B_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_2CD889F5_3E3A_BA77_41C2_CF63F5C9736B_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2CD889F5_3E3A_BA77_41C2_CF63F5C9736B_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2F59D4E2_3E3A_CA8D_41CE_06DD364A9706"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2CFD31DB_3E3A_4ABC_41BF_0DDB1A254B82"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2D520B41_3E3A_5F8F_41CE_906BC02F0E46"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922"
  }
 ],
 "vfov": 17.38,
 "hfovMax": 30,
 "overlays": [
  "this.overlay_27DA5F05_3EFA_D797_41B5_EC3C03BCEA3F",
  "this.overlay_25D458B3_3EFA_5AF3_41C2_4CD576C7A761",
  "this.overlay_274536B5_3EFD_D6F4_4193_3DB37B79F6E6",
  "this.overlay_272D849B_3EFE_CAB3_41C2_59969997382E"
 ],
 "hfovMin": "150%",
 "hfov": 30,
 "pitch": 0,
 "partial": true
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_510B77B6_4121_2526_41CE_4EE0B9EF6E07",
 "yaw": -6.79,
 "popupDistance": 100,
 "hfov": 2.09,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_510B77B6_4121_2526_41CE_4EE0B9EF6E07_0_2.jpg",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": 4.68,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "class": "ImageResource",
 "id": "ImageResource_18CD3B70_3FF6_5F8D_41BF_5B75BD63E41D",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_18CD2B6F_3FF6_5F93_41AC_6105CB6FC9AE_0_0.jpg",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_18CD2B6F_3FF6_5F93_41AC_6105CB6FC9AE_0_1.jpg",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_18CD2B6F_3FF6_5F93_41AC_6105CB6FC9AE_0_2.jpg",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_18CD2B6F_3FF6_5F93_41AC_6105CB6FC9AE_0_3.jpg",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_1813B560_3E15_CB8D_4181_43AD730F8436",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_166A28FF_3E1A_7A73_41CA_7EFC4EB543E1_0_0.jpg",
   "width": 2000,
   "height": 2000
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_166A28FF_3E1A_7A73_41CA_7EFC4EB543E1_0_1.jpg",
   "width": 1024,
   "height": 1024
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_166A28FF_3E1A_7A73_41CA_7EFC4EB543E1_0_2.jpg",
   "width": 512,
   "height": 512
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_17AACD1D_3FFA_FBB7_41B7_AEEBF39C1C43",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_183067AD_3E0B_D694_41B1_3AEB518070CA_0_0.jpg",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_183067AD_3E0B_D694_41B1_3AEB518070CA_0_1.jpg",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_183067AD_3E0B_D694_41B1_3AEB518070CA_0_2.jpg",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_183067AD_3E0B_D694_41B1_3AEB518070CA_0_3.jpg",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_1D49B103_3E0E_4B8C_41A7_AC0D1B1CDEA3",
 "yaw": 3.33,
 "popupDistance": 100,
 "hfov": 2.05,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_1D49B103_3E0E_4B8C_41A7_AC0D1B1CDEA3_0_2.jpg",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": 4.83,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "class": "ImageResource",
 "id": "ImageResource_183115DE_3E15_CAB5_41B4_B546895BC26D",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1AAB2148_3E0A_4B9D_41A5_3A75E641CA3D_0_0.jpg",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1AAB2148_3E0A_4B9D_41A5_3A75E641CA3D_0_1.jpg",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1AAB2148_3E0A_4B9D_41A5_3A75E641CA3D_0_2.jpg",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1AAB2148_3E0A_4B9D_41A5_3A75E641CA3D_0_3.jpg",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "thumbnailUrl": "media/panorama_2E007ADD_3C1F_AD1D_41AB_459813FB0E74_t.jpg",
 "class": "Panorama",
 "label": "photo1654226072",
 "id": "panorama_2E007ADD_3C1F_AD1D_41AB_459813FB0E74",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_2E007ADD_3C1F_AD1D_41AB_459813FB0E74_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E007ADD_3C1F_AD1D_41AB_459813FB0E74_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_2E007ADD_3C1F_AD1D_41AB_459813FB0E74_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_2E007ADD_3C1F_AD1D_41AB_459813FB0E74_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2E007ADD_3C1F_AD1D_41AB_459813FB0E74_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2F59D4E2_3E3A_CA8D_41CE_06DD364A9706"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2D09BDD0_3C3E_6764_4195_5C239A573862"
  }
 ],
 "vfov": 16.63,
 "hfovMax": 30,
 "overlays": [
  "this.overlay_2E005ADD_3C1F_AD1D_41B3_BE44B6D2E518",
  "this.overlay_2E01AADE_3C1F_AD1F_41CB_58F7A2D59310",
  "this.overlay_2E01BADE_3C1F_AD18_41C8_B3D658EDAA04",
  "this.overlay_2E019AE3_3C1F_AD25_41A0_49FFB89E7F64",
  "this.overlay_2E01EAE3_3C1F_AD25_41B2_133C817B7FAF",
  "this.overlay_2E538273_3C0E_DD24_41C1_25C1D0A69EF7"
 ],
 "hfovMin": "150%",
 "hfov": 30,
 "pitch": 0,
 "partial": true
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_1606E404_3E0A_4995_41C4_6AB2602CF42A",
 "yaw": 5.37,
 "popupDistance": 100,
 "hfov": 2.25,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_1606E404_3E0A_4995_41C4_6AB2602CF42A_0_1.jpg",
    "width": 1024,
    "height": 1024
   }
  ]
 },
 "pitch": -4.64,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "thumbnailUrl": "media/panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922_t.jpg",
 "class": "Panorama",
 "label": "display4",
 "id": "panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2CD889F5_3E3A_BA77_41C2_CF63F5C9736B"
  }
 ],
 "vfov": 17.38,
 "hfovMax": 30,
 "overlays": [
  "this.overlay_252B656B_3EF6_CB9C_41AA_3C6C168374D6",
  "this.overlay_238555FD_3E0E_CA77_41B1_17E36837CE11",
  "this.overlay_20EEEA74_3E0E_DE75_41C3_78EAF9D195EE",
  "this.overlay_21DCC3CB_3E0A_4E93_41CB_3F8DAEBD9704",
  "this.overlay_23BE0D46_3E0A_7B95_41BD_2CF6A743B762",
  "this.popup_1856F3B0_3E0B_CE8D_41A2_59CE97177F8D",
  "this.popup_1D59B7E6_3E16_5695_41B8_F2486426A92B",
  "this.popup_166A28FF_3E1A_7A73_41CA_7EFC4EB543E1",
  "this.popup_1D2342FB_3E1E_4E73_416B_827E841C9260",
  "this.overlay_193E62B9_3E37_CEFC_41B2_4DD465C24B60",
  "this.overlay_16431535_3E37_CBF4_41CD_5FA43D0E1E9C",
  "this.overlay_1710575C_3E37_B7B5_41C7_544BBB433E10",
  "this.overlay_1A5E8E14_3E36_B9B4_41BF_6E03DD9AC7F7",
  "this.overlay_1B5CA01C_3E36_49B5_41CC_105F157E39D4",
  "this.overlay_19D55308_3E36_4F9D_41A3_8F31917C8C32",
  "this.overlay_1A7A9C40_3E0A_D98D_41AA_3FDF2B8DD871",
  "this.overlay_1A034E10_3E0A_D98C_41AA_97DEEF219A51",
  "this.overlay_1BE6000F_3E0A_C993_41C7_43EE04525EF2",
  "this.overlay_19746F6C_3E0A_5794_41BF_8C2CE5FF7F67",
  "this.overlay_16952263_3E0A_4993_41CB_5ACC4CE6231D",
  "this.overlay_17E2F4AF_3E0A_4A93_4196_2BCE5B797F2F",
  "this.overlay_14468704_3E0B_B794_41BA_CDBF30218574",
  "this.overlay_1A78B58D_3E0A_CA97_41BB_98D49EEE7181",
  "this.overlay_1B9FE77C_3E0A_D674_41C9_D16DAE92D28B",
  "this.overlay_18376963_3E0A_DB93_41C8_3D23BD114720",
  "this.overlay_166B8BD9_3E0D_BEBF_41B1_19245A9867E2",
  "this.overlay_1A7C30C7_3E0E_4A93_41BF_0DC956C0B5C2",
  "this.overlay_1A1A935E_3E0E_4FB5_41C6_4EE1006D8DF9",
  "this.overlay_19C37673_3E0E_5673_41A4_6B750729965E",
  "this.popup_1919F203_3E37_C98C_41C2_4E240386FDFA",
  "this.popup_165A049E_3E37_CAB5_41C3_C22ADFC29EE8",
  "this.popup_17713707_3E37_B793_41AA_11812F2B0587",
  "this.popup_1AA91DA2_3E36_BA8C_41C0_84B66BA21558",
  "this.popup_1BB1EFC0_3E36_B68D_41C9_6BFA86E32FC8",
  "this.popup_182C7232_3E36_49F2_41CE_F7C4554A7F51",
  "this.popup_1A6E2BDC_3E0A_DEB5_41CA_972145AA7D46",
  "this.popup_1A395DBB_3E0A_DAFC_41C2_766AF50AEB36",
  "this.popup_1A15BFB0_3E0A_D68C_41C3_316C85DA4DB5",
  "this.popup_199A9EA7_3E0A_5694_41B8_463DDDF9C5BA",
  "this.popup_16BDA1B9_3E0A_4AFF_41B4_4FCB36C7C67C",
  "this.popup_1606E404_3E0A_4995_41C4_6AB2602CF42A",
  "this.popup_14636693_3E0B_B68C_41C1_DE4C7B264699",
  "this.popup_1A6FF52C_3E0A_CB94_418C_8153327EB610",
  "this.popup_1B8B6724_3E0A_D794_41AE_DE7B70701E96",
  "this.popup_185E88EE_3E0A_DA95_41BD_735C18887A26",
  "this.popup_1690FB36_3E0D_BFF5_41C4_A3A1FB9659FB",
  "this.popup_1A70E061_3E0E_498F_41AD_9D0D89CA328E",
  "this.popup_1A0882E5_3E0E_4E96_41CB_69705D98DD2D",
  "this.popup_19E905CF_3E0E_4A93_41C3_43367FCE477B"
 ],
 "hfovMin": "150%",
 "hfov": 30,
 "pitch": 0,
 "partial": true
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_177C0A63_3E0D_F993_41C7_41E080789D0F",
 "yaw": -7.69,
 "popupDistance": 100,
 "hfov": 1.51,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_177C0A63_3E0D_F993_41C7_41E080789D0F_0_2.jpg",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": -3.05,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "class": "ImageResource",
 "id": "ImageResource_182B8233_3E36_49F3_41AD_4E82D6E1C7FD",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_182C7232_3E36_49F2_41CE_F7C4554A7F51_0_0.jpg",
   "width": 2000,
   "height": 2000
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_182C7232_3E36_49F2_41CE_F7C4554A7F51_0_1.jpg",
   "width": 1024,
   "height": 1024
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_182C7232_3E36_49F2_41CE_F7C4554A7F51_0_2.jpg",
   "width": 512,
   "height": 512
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_19C05621_3E15_C98F_41CB_340D5CF62D7A",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1AD9A090_3E1A_4A8D_41CE_8518172EE7E9_0_0.jpg",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1AD9A090_3E1A_4A8D_41CE_8518172EE7E9_0_1.jpg",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1AD9A090_3E1A_4A8D_41CE_8518172EE7E9_0_2.jpg",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1AD9A090_3E1A_4A8D_41CE_8518172EE7E9_0_3.jpg",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_185E88EE_3E0A_DA95_41BD_735C18887A26",
 "yaw": 5.51,
 "popupDistance": 100,
 "hfov": 2.25,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_185E88EE_3E0A_DA95_41BD_735C18887A26_0_1.jpg",
    "width": 1024,
    "height": 1024
   }
  ]
 },
 "pitch": 2.7,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "thumbnailUrl": "media/panorama_2CEC47F5_3E3A_5676_41CC_026522C784D8_t.jpg",
 "class": "Panorama",
 "label": "display51",
 "id": "panorama_2CEC47F5_3E3A_5676_41CC_026522C784D8",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_2CEC47F5_3E3A_5676_41CC_026522C784D8_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2CEC47F5_3E3A_5676_41CC_026522C784D8_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_2CEC47F5_3E3A_5676_41CC_026522C784D8_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_2CEC47F5_3E3A_5676_41CC_026522C784D8_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2CEC47F5_3E3A_5676_41CC_026522C784D8_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2D7F90F7_3E3A_4A73_41BE_3EFAB44624F4"
  }
 ],
 "vfov": 17.38,
 "hfovMax": 30,
 "overlays": [
  "this.overlay_2339F288_3E1E_CE9C_41CC_174E641F3B87",
  "this.overlay_20471B68_3E1E_DF9D_41C2_8B9C998976C7",
  "this.overlay_20611CA4_3E1E_DA95_41C2_7B3B43AEADCF",
  "this.overlay_21C16FC8_3E1E_D69D_418E_C667AFCD0AC2",
  "this.overlay_21078092_3E1E_CA8C_41C6_9A5796E434E1",
  "this.overlay_20B143CC_3E1E_CE94_41C7_533A49558249",
  "this.overlay_20CFF49B_3E1E_CABC_41B1_916E9D9E63CB",
  "this.overlay_2042191F_3E1A_5BB3_41C1_CC5879720940",
  "this.overlay_20B5B62F_3E1B_C994_4172_8996D535558F",
  "this.popup_1AABC087_3E1A_4A94_41BD_D67E6109A99F",
  "this.popup_1AD9A090_3E1A_4A8D_41CE_8518172EE7E9",
  "this.popup_1A85CCEB_3E15_FA93_41BD_2DFD0C60502F",
  "this.popup_1AE4A945_3E16_5B97_419B_67FB64E2E44A",
  "this.popup_1ADD313E_3E16_CBF4_41C1_79AC04D2EF98",
  "this.popup_160D8E13_3E16_B9B3_41B7_FF97F446F022",
  "this.popup_14E801EA_3E16_4A9D_41B4_9420E2E5A5A8",
  "this.overlay_177969EA_3E3D_DA9D_419E_95B518B042EB",
  "this.popup_194C1F23_3E3E_7793_41BD_21519733D19B",
  "this.overlay_1AAA067A_3E3E_567D_41C3_E4340E70E342",
  "this.overlay_1B6DFF1B_3E3F_B7B3_41C1_8E3ADB60B47F",
  "this.popup_1ABEB615_3E3E_49B7_41B7_38DDC78AD700",
  "this.popup_1B7A4E4C_3E3F_B995_41B0_03EFDC8863C1",
  "this.overlay_1A6D335E_3E3B_CFB4_419D_D40BB3BA5343",
  "this.overlay_1A5689AE_3E3A_5A95_41C5_3FFA94C0915A",
  "this.popup_1A7FF2F4_3E3B_CE74_41B9_510FF99EFCD1",
  "this.popup_1AA2993D_3E3A_5BF7_41B5_AD0E8B8BCE59"
 ],
 "hfovMin": "150%",
 "hfov": 30,
 "pitch": 0,
 "partial": true
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_1A395DBB_3E0A_DAFC_41C2_766AF50AEB36",
 "yaw": -5.31,
 "popupDistance": 100,
 "hfov": 2.25,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_1A395DBB_3E0A_DAFC_41C2_766AF50AEB36_0_1.jpg",
    "width": 1024,
    "height": 1024
   }
  ]
 },
 "pitch": -4.64,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "class": "ImageResource",
 "id": "ImageResource_1690DB36_3E0D_BFF5_41C6_481076B870E4",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1690FB36_3E0D_BFF5_41C4_A3A1FB9659FB_0_0.jpg",
   "width": 2000,
   "height": 2000
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1690FB36_3E0D_BFF5_41C4_A3A1FB9659FB_0_1.jpg",
   "width": 1024,
   "height": 1024
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1690FB36_3E0D_BFF5_41C4_A3A1FB9659FB_0_2.jpg",
   "width": 512,
   "height": 512
  }
 ]
},
{
 "thumbnailUrl": "media/panorama_4C6515CB_4121_256E_41C4_1F7F3590FB77_t.jpg",
 "class": "Panorama",
 "label": "display2",
 "id": "panorama_4C6515CB_4121_256E_41C4_1F7F3590FB77",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_4C6515CB_4121_256E_41C4_1F7F3590FB77_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C6515CB_4121_256E_41C4_1F7F3590FB77_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_4C6515CB_4121_256E_41C4_1F7F3590FB77_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_4C6515CB_4121_256E_41C4_1F7F3590FB77_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_4C6515CB_4121_256E_41C4_1F7F3590FB77_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2F59D4E2_3E3A_CA8D_41CE_06DD364A9706"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4E6B7216_4123_5EE6_41BB_C5340D2146A7"
  }
 ],
 "vfov": 16.65,
 "hfovMax": 30,
 "overlays": [
  "this.overlay_4C6585CC_4121_256A_4187_21A9760C6C8E",
  "this.overlay_4C7A45CD_4121_256A_41C7_CA38E094F765"
 ],
 "hfovMin": "150%",
 "hfov": 30,
 "pitch": 0,
 "partial": true
},
{
 "class": "ImageResource",
 "id": "ImageResource_1A70F061_3E0E_498F_41C1_B535E8D9003A",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1A70E061_3E0E_498F_41AD_9D0D89CA328E_0_0.jpg",
   "width": 2000,
   "height": 2000
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1A70E061_3E0E_498F_41AD_9D0D89CA328E_0_1.jpg",
   "width": 1024,
   "height": 1024
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1A70E061_3E0E_498F_41AD_9D0D89CA328E_0_2.jpg",
   "width": 512,
   "height": 512
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_1A7FF2F4_3E3B_CE74_41B9_510FF99EFCD1",
 "yaw": -1.84,
 "popupDistance": 100,
 "hfov": 1.75,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_1A7FF2F4_3E3B_CE74_41B9_510FF99EFCD1_0_2.jpg",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": -2.83,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "camera_522AA78A_4127_65EF_41B6_49DF8C103BC1"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_14602613_3FF6_C98C_41A9_B6FE16C2A3F5",
 "yaw": 4.02,
 "popupDistance": 100,
 "hfov": 1.51,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_14602613_3FF6_C98C_41A9_B6FE16C2A3F5_0_2.jpg",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": -3.19,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_1D2342FB_3E1E_4E73_416B_827E841C9260",
 "yaw": -12.37,
 "popupDistance": 100,
 "hfov": 2.25,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_1D2342FB_3E1E_4E73_416B_827E841C9260_0_1.jpg",
    "width": 1024,
    "height": 1024
   }
  ]
 },
 "pitch": -4.61,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "class": "ImageResource",
 "id": "ImageResource_16BD91B9_3E0A_4AFF_41C0_3FA9D6F5A612",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_16BDA1B9_3E0A_4AFF_41B4_4FCB36C7C67C_0_0.jpg",
   "width": 2000,
   "height": 2000
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_16BDA1B9_3E0A_4AFF_41B4_4FCB36C7C67C_0_1.jpg",
   "width": 1024,
   "height": 1024
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_16BDA1B9_3E0A_4AFF_41B4_4FCB36C7C67C_0_2.jpg",
   "width": 512,
   "height": 512
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_1AABC087_3E1A_4A94_41BD_D67E6109A99F",
 "yaw": -6.07,
 "popupDistance": 100,
 "hfov": 1.75,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_1AABC087_3E1A_4A94_41BD_D67E6109A99F_0_2.jpg",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": 1.43,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "class": "ImageResource",
 "id": "ImageResource_179B9D50_3FFA_FB8D_41BA_24B680E61361",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_14A770D1_3FF6_4A8C_41CC_E9339BEDF090_0_0.jpg",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_14A770D1_3FF6_4A8C_41CC_E9339BEDF090_0_1.jpg",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_14A770D1_3FF6_4A8C_41CC_E9339BEDF090_0_2.jpg",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_14A770D1_3FF6_4A8C_41CC_E9339BEDF090_0_3.jpg",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_17ACFD27_3FFA_FB93_41B5_4C9A16680638",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_17488A8C_3E0A_7E95_41BA_74F7785060CA_0_0.jpg",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_17488A8C_3E0A_7E95_41BA_74F7785060CA_0_1.jpg",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_17488A8C_3E0A_7E95_41BA_74F7785060CA_0_2.jpg",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_17488A8C_3E0A_7E95_41BA_74F7785060CA_0_3.jpg",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_14636693_3E0B_B68C_41C1_DE4C7B264699",
 "yaw": 1.96,
 "popupDistance": 100,
 "hfov": 2.25,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_14636693_3E0B_B68C_41C1_DE4C7B264699_0_1.jpg",
    "width": 1024,
    "height": 1024
   }
  ]
 },
 "pitch": -4.57,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "class": "ImageResource",
 "id": "ImageResource_19E925CF_3E0E_4A93_41C1_066B4C82E028",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_19E905CF_3E0E_4A93_41C3_43367FCE477B_0_0.jpg",
   "width": 2000,
   "height": 2000
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_19E905CF_3E0E_4A93_41C3_43367FCE477B_0_1.jpg",
   "width": 1024,
   "height": 1024
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_19E905CF_3E0E_4A93_41C3_43367FCE477B_0_2.jpg",
   "width": 512,
   "height": 512
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_17AB0D1B_3FFA_FBB3_41AB_557E1419FA94",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_177C0A63_3E0D_F993_41C7_41E080789D0F_0_0.jpg",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_177C0A63_3E0D_F993_41C7_41E080789D0F_0_1.jpg",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_177C0A63_3E0D_F993_41C7_41E080789D0F_0_2.jpg",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_177C0A63_3E0D_F993_41C7_41E080789D0F_0_3.jpg",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_1A6E2BDC_3E0A_DEB5_41CA_972145AA7D46",
 "yaw": -1.83,
 "popupDistance": 100,
 "hfov": 2.25,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_1A6E2BDC_3E0A_DEB5_41CA_972145AA7D46_0_1.jpg",
    "width": 1024,
    "height": 1024
   }
  ]
 },
 "pitch": -4.71,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "camera_5281F937_4127_6D25_41C8_DAE046E6D3F2"
},
{
 "class": "ImageResource",
 "id": "ImageResource_19C1461F_3E15_C9B3_41AA_1B5F872B542D",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1ADD313E_3E16_CBF4_41C1_79AC04D2EF98_0_0.jpg",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1ADD313E_3E16_CBF4_41C1_79AC04D2EF98_0_1.jpg",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1ADD313E_3E16_CBF4_41C1_79AC04D2EF98_0_2.jpg",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1ADD313E_3E16_CBF4_41C1_79AC04D2EF98_0_3.jpg",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_1BD6FB0D_3E0E_DF94_41C8_A871A84A07E7",
 "yaw": 2.45,
 "popupDistance": 100,
 "hfov": 1.51,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_1BD6FB0D_3E0E_DF94_41C8_A871A84A07E7_0_2.jpg",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": -3.26,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": -2.69
 },
 "id": "camera_52B578C0_4127_6B5B_4197_2A0F3A320D84"
},
{
 "class": "ImageResource",
 "id": "ImageResource_1ABE8616_3E3E_49B5_41BF_D34B078F9D83",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1ABEB615_3E3E_49B7_41B7_38DDC78AD700_0_0.jpg",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1ABEB615_3E3E_49B7_41B7_38DDC78AD700_0_1.jpg",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1ABEB615_3E3E_49B7_41B7_38DDC78AD700_0_2.jpg",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1ABEB615_3E3E_49B7_41B7_38DDC78AD700_0_3.jpg",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_167FB068_3E0A_499C_41CD_54088F7B26E0",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_167C7068_3E0A_499C_41BA_10ED3C5FFF13_0_0.jpg",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_167C7068_3E0A_499C_41BA_10ED3C5FFF13_0_1.jpg",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_167C7068_3E0A_499C_41BA_10ED3C5FFF13_0_2.jpg",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_167C7068_3E0A_499C_41BA_10ED3C5FFF13_0_3.jpg",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_17F58827_3E0E_5993_41C3_6BE5989CFD56",
 "yaw": 1.87,
 "popupDistance": 100,
 "hfov": 1.51,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_17F58827_3E0E_5993_41C3_6BE5989CFD56_0_2.jpg",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": 1.18,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "class": "ImageResource",
 "id": "ImageResource_17AD2D25_3FFA_FB97_41C6_31BF2FC7CAB5",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1BE79D73_3E0E_7A73_41C3_E08C4D0056CF_0_0.jpg",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1BE79D73_3E0E_7A73_41C3_E08C4D0056CF_0_1.jpg",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1BE79D73_3E0E_7A73_41C3_E08C4D0056CF_0_2.jpg",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1BE79D73_3E0E_7A73_41C3_E08C4D0056CF_0_3.jpg",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_142C8E5F_3E0A_79B3_41A7_EC1DD318765A",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1A308236_3E1A_C9F5_41CD_225A718E80F8_0_0.jpg",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1A308236_3E1A_C9F5_41CD_225A718E80F8_0_1.jpg",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1A308236_3E1A_C9F5_41CD_225A718E80F8_0_2.jpg",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1A308236_3E1A_C9F5_41CD_225A718E80F8_0_3.jpg",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_17AF8D29_3FFA_FB9F_41B8_FDDCB7F77615",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_172F226A_3E0A_499C_41C1_920BE0ECD72E_0_0.jpg",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_172F226A_3E0A_499C_41C1_920BE0ECD72E_0_1.jpg",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_172F226A_3E0A_499C_41C1_920BE0ECD72E_0_2.jpg",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_172F226A_3E0A_499C_41C1_920BE0ECD72E_0_3.jpg",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_1AA2993D_3E3A_5BF7_41B5_AD0E8B8BCE59",
 "yaw": -1.94,
 "popupDistance": 100,
 "hfov": 1.74,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_1AA2993D_3E3A_5BF7_41B5_AD0E8B8BCE59_0_2.jpg",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": -7.54,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "class": "ImageResource",
 "id": "ImageResource_182A657F_3E15_CA73_41AA_D983982FEAB2",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1D2342FB_3E1E_4E73_416B_827E841C9260_0_0.jpg",
   "width": 2000,
   "height": 2000
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1D2342FB_3E1E_4E73_416B_827E841C9260_0_1.jpg",
   "width": 1024,
   "height": 1024
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1D2342FB_3E1E_4E73_416B_827E841C9260_0_2.jpg",
   "width": 512,
   "height": 512
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_19E905CF_3E0E_4A93_41C3_43367FCE477B",
 "yaw": 1.89,
 "popupDistance": 100,
 "hfov": 2.25,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_19E905CF_3E0E_4A93_41C3_43367FCE477B_0_1.jpg",
    "width": 1024,
    "height": 1024
   }
  ]
 },
 "pitch": -0.85,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "class": "ImageResource",
 "id": "ImageResource_17A5AD3C_3FFA_FBF5_41B6_0EA584D6DC7E",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_17BD3B74_3E0A_5E75_41BA_87E36FC2CD60_0_0.jpg",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_17BD3B74_3E0A_5E75_41BA_87E36FC2CD60_0_1.jpg",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_17BD3B74_3E0A_5E75_41BA_87E36FC2CD60_0_2.jpg",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_17BD3B74_3E0A_5E75_41BA_87E36FC2CD60_0_3.jpg",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_1A0882E5_3E0E_4E96_41CB_69705D98DD2D",
 "yaw": 5.41,
 "popupDistance": 100,
 "hfov": 2.25,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_1A0882E5_3E0E_4E96_41CB_69705D98DD2D_0_1.jpg",
    "width": 1024,
    "height": 1024
   }
  ]
 },
 "pitch": -0.82,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "class": "ImageResource",
 "id": "ImageResource_1A166FB0_3E0A_D68C_41BE_C9A5A149C496",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1A15BFB0_3E0A_D68C_41C3_316C85DA4DB5_0_0.jpg",
   "width": 2000,
   "height": 2000
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1A15BFB0_3E0A_D68C_41C3_316C85DA4DB5_0_1.jpg",
   "width": 1024,
   "height": 1024
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1A15BFB0_3E0A_D68C_41C3_316C85DA4DB5_0_2.jpg",
   "width": 512,
   "height": 512
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_1425FE54_3E0A_79B5_41C7_5B6A30EDD994",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_17400CF6_3E16_7A75_41CC_7ED2C76B83F2_0_0.jpg",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_17400CF6_3E16_7A75_41CC_7ED2C76B83F2_0_1.jpg",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_17400CF6_3E16_7A75_41CC_7ED2C76B83F2_0_2.jpg",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_17400CF6_3E16_7A75_41CC_7ED2C76B83F2_0_3.jpg",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_179AAD57_3FFA_FBB3_41B5_ED60EAB54E3E",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_17C344D4_3FF6_CAB4_41BF_3138093A33A0_0_0.jpg",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_17C344D4_3FF6_CAB4_41BF_3138093A33A0_0_1.jpg",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_17C344D4_3FF6_CAB4_41BF_3138093A33A0_0_2.jpg",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_17C344D4_3FF6_CAB4_41BF_3138093A33A0_0_3.jpg",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "class": "VideoPlayer",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer"
},
{
 "class": "ImageResource",
 "id": "ImageResource_17B42D0A_3FFA_FB9D_416A_38974CC84FE4",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1BFA689E_3E0E_DAB5_419C_D75ADFA12AED_0_0.jpg",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1BFA689E_3E0E_DAB5_419C_D75ADFA12AED_0_1.jpg",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1BFA689E_3E0E_DAB5_419C_D75ADFA12AED_0_2.jpg",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1BFA689E_3E0E_DAB5_419C_D75ADFA12AED_0_3.jpg",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_14E801EA_3E16_4A9D_41B4_9420E2E5A5A8",
 "yaw": 7.1,
 "popupDistance": 100,
 "hfov": 1.74,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_14E801EA_3E16_4A9D_41B4_9420E2E5A5A8_0_2.jpg",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": -7.51,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_2C2F4A4D_3E3A_B997_41B3_2A8629B14E39_camera"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_1B7A4E4C_3E3F_B995_41B0_03EFDC8863C1",
 "yaw": -6.17,
 "popupDistance": 100,
 "hfov": 1.74,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_1B7A4E4C_3E3F_B995_41B0_03EFDC8863C1_0_2.jpg",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": -7.41,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "thumbnailUrl": "media/panorama_2F59D4E2_3E3A_CA8D_41CE_06DD364A9706_t.jpg",
 "class": "Panorama",
 "label": "display",
 "id": "panorama_2F59D4E2_3E3A_CA8D_41CE_06DD364A9706",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_2F59D4E2_3E3A_CA8D_41CE_06DD364A9706_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2F59D4E2_3E3A_CA8D_41CE_06DD364A9706_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_2F59D4E2_3E3A_CA8D_41CE_06DD364A9706_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_2F59D4E2_3E3A_CA8D_41CE_06DD364A9706_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2F59D4E2_3E3A_CA8D_41CE_06DD364A9706_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2E007ADD_3C1F_AD1D_41AB_459813FB0E74"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2E007ADD_3C1F_AD1D_41AB_459813FB0E74"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4F91DFCA_4127_256E_41A7_FD29DD640F80"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2CD889F5_3E3A_BA77_41C2_CF63F5C9736B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4C6515CB_4121_256E_41C4_1F7F3590FB77"
  }
 ],
 "vfov": 17.38,
 "hfovMax": 30,
 "overlays": [
  "this.overlay_2A67F66E_3E3A_C994_41C3_DEE133064CD9",
  "this.overlay_2ABABCDB_3E3B_DAB3_41B1_8102172E879F",
  "this.overlay_2FE5AF90_3E3B_D68D_41CA_8BFCA0933250",
  "this.overlay_2015277A_3E0A_567C_41C3_CA882CD2ED93",
  "this.overlay_1E6B8A77_3E0A_FE73_41C2_6FC067F35EAF"
 ],
 "hfovMin": "150%",
 "hfov": 30,
 "pitch": 0,
 "partial": true
},
{
 "class": "ImageResource",
 "id": "ImageResource_17B7ED0C_3FFA_FB95_41B6_C552430D4877",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_158C7BF4_3E0A_BE75_41C7_002E44B652B7_0_0.jpg",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_158C7BF4_3E0A_BE75_41C7_002E44B652B7_0_1.jpg",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_158C7BF4_3E0A_BE75_41C7_002E44B652B7_0_2.jpg",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_158C7BF4_3E0A_BE75_41C7_002E44B652B7_0_3.jpg",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_19CDC5F0_3E15_CA8D_4196_5E6FBCE77030",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1DB9107B_3E0E_4A73_41B9_C79840BD7088_0_0.jpg",
   "width": 2000,
   "height": 2000
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1DB9107B_3E0E_4A73_41B9_C79840BD7088_0_1.jpg",
   "width": 1024,
   "height": 1024
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1DB9107B_3E0E_4A73_41B9_C79840BD7088_0_2.jpg",
   "width": 512,
   "height": 512
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_4F91DFCA_4127_256E_41A7_FD29DD640F80_camera"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_17713707_3E37_B793_41AA_11812F2B0587",
 "yaw": -9.17,
 "popupDistance": 100,
 "hfov": 2.25,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_17713707_3E37_B793_41AA_11812F2B0587_0_1.jpg",
    "width": 1024,
    "height": 1024
   }
  ]
 },
 "pitch": 2.57,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "class": "ImageResource",
 "id": "ImageResource_17DA2431_3E0A_498F_41BF_F5D6D55E0570",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_17D9C431_3E0A_498F_41C7_E10AA8F0A52F_0_0.jpg",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_17D9C431_3E0A_498F_41C7_E10AA8F0A52F_0_1.jpg",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_17D9C431_3E0A_498F_41C7_E10AA8F0A52F_0_2.jpg",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_17D9C431_3E0A_498F_41C7_E10AA8F0A52F_0_3.jpg",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_199A9EA7_3E0A_5694_41B8_463DDDF9C5BA",
 "yaw": 11.99,
 "popupDistance": 100,
 "hfov": 2.25,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_199A9EA7_3E0A_5694_41B8_463DDDF9C5BA_0_1.jpg",
    "width": 1024,
    "height": 1024
   }
  ]
 },
 "pitch": -4.5,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_194C1F23_3E3E_7793_41BD_21519733D19B",
 "yaw": -1.91,
 "popupDistance": 100,
 "hfov": 1.75,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_194C1F23_3E3E_7793_41BD_21519733D19B_0_2.jpg",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": 1.4,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_172F226A_3E0A_499C_41C1_920BE0ECD72E",
 "yaw": 6.1,
 "popupDistance": 100,
 "hfov": 1.5,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_172F226A_3E0A_499C_41C1_920BE0ECD72E_0_2.jpg",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": -7.63,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_1667CCF9_3E0A_FA7F_41CC_2E27ADB3E07C",
 "yaw": -5.95,
 "popupDistance": 100,
 "hfov": 1.51,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_1667CCF9_3E0A_FA7F_41CC_2E27ADB3E07C_0_2.jpg",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": -3.09,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "class": "ImageResource",
 "id": "ImageResource_1B7A2E4D_3E3F_B997_4194_97A02A88EFB4",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1B7A4E4C_3E3F_B995_41B0_03EFDC8863C1_0_0.jpg",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1B7A4E4C_3E3F_B995_41B0_03EFDC8863C1_0_1.jpg",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1B7A4E4C_3E3F_B995_41B0_03EFDC8863C1_0_2.jpg",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1B7A4E4C_3E3F_B995_41B0_03EFDC8863C1_0_3.jpg",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_18CD2B6F_3FF6_5F93_41AC_6105CB6FC9AE",
 "yaw": 1.87,
 "popupDistance": 100,
 "hfov": 1.51,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_18CD2B6F_3FF6_5F93_41AC_6105CB6FC9AE_0_2.jpg",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": 1.18,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "class": "ImageResource",
 "id": "ImageResource_142A3E5C_3E0A_79B5_41C8_F02AA801E73F",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_176B415F_3E15_CBB3_41BB_A3DD491C5372_0_0.jpg",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_176B415F_3E15_CBB3_41BB_A3DD491C5372_0_1.jpg",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_176B415F_3E15_CBB3_41BB_A3DD491C5372_0_2.jpg",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_176B415F_3E15_CBB3_41BB_A3DD491C5372_0_3.jpg",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_1BE4E38B_3E17_CE93_41C3_9E6F1547ED14",
 "yaw": 3.04,
 "popupDistance": 100,
 "hfov": 1.74,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_1BE4E38B_3E17_CE93_41C3_9E6F1547ED14_0_2.jpg",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": -7.65,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_1D59B7E6_3E16_5695_41B8_F2486426A92B",
 "yaw": 1.89,
 "popupDistance": 100,
 "hfov": 2.25,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_1D59B7E6_3E16_5695_41B8_F2486426A92B_0_1.jpg",
    "width": 1024,
    "height": 1024
   }
  ]
 },
 "pitch": 2.66,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "class": "ImageResource",
 "id": "ImageResource_17A13D30_3FFA_FB8D_41CC_5BD7FD1A5C62",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_189FBE19_3E0A_59BF_4193_C7A30C85D5DB_0_0.jpg",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_189FBE19_3E0A_59BF_4193_C7A30C85D5DB_0_1.jpg",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_189FBE19_3E0A_59BF_4193_C7A30C85D5DB_0_2.jpg",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_189FBE19_3E0A_59BF_4193_C7A30C85D5DB_0_3.jpg",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.41,
  "pitch": -0.17
 },
 "id": "camera_52DDA9DE_4127_6D66_41CE_B85C60D6E638"
},
{
 "class": "ImageResource",
 "id": "ImageResource_1A6E3BDC_3E0A_DEB5_41CB_FD3B4D012BCF",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1A6E2BDC_3E0A_DEB5_41CA_972145AA7D46_0_0.jpg",
   "width": 2000,
   "height": 2000
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1A6E2BDC_3E0A_DEB5_41CA_972145AA7D46_0_1.jpg",
   "width": 1024,
   "height": 1024
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1A6E2BDC_3E0A_DEB5_41CA_972145AA7D46_0_2.jpg",
   "width": 512,
   "height": 512
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "camera_5528FA5C_4127_6F6A_41C1_F04A947925C5"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_17488A8C_3E0A_7E95_41BA_74F7785060CA",
 "yaw": -7.9,
 "popupDistance": 100,
 "hfov": 1.51,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_17488A8C_3E0A_7E95_41BA_74F7785060CA_0_2.jpg",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": 1.28,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "class": "ImageResource",
 "id": "ImageResource_510B47B6_4121_2526_41CC_48B52EAEEAF6",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_510B77B6_4121_2526_41CE_4EE0B9EF6E07_0_0.jpg",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_510B77B6_4121_2526_41CE_4EE0B9EF6E07_0_1.jpg",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_510B77B6_4121_2526_41CE_4EE0B9EF6E07_0_2.jpg",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_510B77B6_4121_2526_41CE_4EE0B9EF6E07_0_3.jpg",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_19C5F60B_3E15_C993_41AA_AA978EC9A4CE",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1AABC087_3E1A_4A94_41BD_D67E6109A99F_0_0.jpg",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1AABC087_3E1A_4A94_41BD_D67E6109A99F_0_1.jpg",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1AABC087_3E1A_4A94_41BD_D67E6109A99F_0_2.jpg",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1AABC087_3E1A_4A94_41BD_D67E6109A99F_0_3.jpg",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_1814F8DF_3E1A_DAB3_41CB_ADB6722C8F17",
 "yaw": -2.67,
 "popupDistance": 100,
 "hfov": 2.05,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_1814F8DF_3E1A_DAB3_41CB_ADB6722C8F17_0_2.jpg",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": 4.76,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922_camera"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_14456BC8_3E1A_BE9C_41CD_D9905E086217",
 "yaw": 2.91,
 "popupDistance": 100,
 "hfov": 1.75,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_14456BC8_3E1A_BE9C_41CD_D9905E086217_0_2.png",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": 1.23,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_2CFD31DB_3E3A_4ABC_41BF_0DDB1A254B82_camera"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_1BD084D7_3FFA_CAB4_41C0_B4AD17431F57",
 "yaw": 7.7,
 "popupDistance": 100,
 "hfov": 1.5,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_1BD084D7_3FFA_CAB4_41C0_B4AD17431F57_0_2.jpg",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": -7.66,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0.33,
  "pitch": 0.87
 },
 "id": "camera_52A758E9_4127_6B2D_41CD_38B8053BF003"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_4FD7B14C_4121_DD6B_41A5_91D826F7F644_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.33,
  "pitch": -1.91
 },
 "id": "camera_5203E7C5_4127_6565_41CE_53F52D463D77"
},
{
 "class": "ImageResource",
 "id": "ImageResource_19C28618_3E15_C9BD_41B5_A1D9FE581CDA",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1A85CCEB_3E15_FA93_41BD_2DFD0C60502F_0_0.jpg",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1A85CCEB_3E15_FA93_41BD_2DFD0C60502F_0_1.jpg",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1A85CCEB_3E15_FA93_41BD_2DFD0C60502F_0_2.jpg",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1A85CCEB_3E15_FA93_41BD_2DFD0C60502F_0_3.jpg",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_1A0892E6_3E0E_4E95_4188_13C27CA0C0F6",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1A0882E5_3E0E_4E96_41CB_69705D98DD2D_0_0.jpg",
   "width": 2000,
   "height": 2000
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1A0882E5_3E0E_4E96_41CB_69705D98DD2D_0_1.jpg",
   "width": 1024,
   "height": 1024
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1A0882E5_3E0E_4E96_41CB_69705D98DD2D_0_2.jpg",
   "width": 512,
   "height": 512
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_17D9C431_3E0A_498F_41C7_E10AA8F0A52F",
 "yaw": 5.93,
 "popupDistance": 100,
 "hfov": 2.04,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_17D9C431_3E0A_498F_41C7_E10AA8F0A52F_0_2.jpg",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": -6.98,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_2D7F90F7_3E3A_4A73_41BE_3EFAB44624F4_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 2.33
 },
 "id": "camera_55FF9BFF_4127_6D26_41B1_BC5C033B6056"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_193FD649_3E15_C99F_41A0_B11C47334635",
 "yaw": -3.8,
 "popupDistance": 100,
 "hfov": 2.04,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_193FD649_3E15_C99F_41A0_B11C47334635_0_2.jpg",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": -6.81,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "class": "ImageResource",
 "id": "ImageResource_17A66D46_3FFA_FB95_41C8_8AABF5D58CB4",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_194D1C46_3FF5_B995_41CC_47C8B24B4667_0_0.jpg",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_194D1C46_3FF5_B995_41CC_47C8B24B4667_0_1.jpg",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_194D1C46_3FF5_B995_41CC_47C8B24B4667_0_2.jpg",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_194D1C46_3FF5_B995_41CC_47C8B24B4667_0_3.jpg",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_17B51D08_3FFA_FB9D_417C_6DACF51C7D1C",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_17D95337_3E0A_4FF3_41C4_007E4BEF6392_0_0.jpg",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_17D95337_3E0A_4FF3_41C4_007E4BEF6392_0_1.jpg",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_17D95337_3E0A_4FF3_41C4_007E4BEF6392_0_2.jpg",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_17D95337_3E0A_4FF3_41C4_007E4BEF6392_0_3.jpg",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_182168EF_3E0A_DA93_41C5_D3A70FA8E8DD",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_185E88EE_3E0A_DA95_41BD_735C18887A26_0_0.jpg",
   "width": 2000,
   "height": 2000
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_185E88EE_3E0A_DA95_41BD_735C18887A26_0_1.jpg",
   "width": 1024,
   "height": 1024
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_185E88EE_3E0A_DA95_41BD_735C18887A26_0_2.jpg",
   "width": 512,
   "height": 512
  }
 ]
},
{
 "thumbnailUrl": "media/panorama_2D09BDD0_3C3E_6764_4195_5C239A573862_t.jpg",
 "class": "Panorama",
 "label": "photo1654162767",
 "id": "panorama_2D09BDD0_3C3E_6764_4195_5C239A573862",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_2D09BDD0_3C3E_6764_4195_5C239A573862_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D09BDD0_3C3E_6764_4195_5C239A573862_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_2D09BDD0_3C3E_6764_4195_5C239A573862_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_2D09BDD0_3C3E_6764_4195_5C239A573862_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2D09BDD0_3C3E_6764_4195_5C239A573862_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2E007ADD_3C1F_AD1D_41AB_459813FB0E74"
  }
 ],
 "vfov": 14.97,
 "hfovMax": 30,
 "overlays": [
  "this.overlay_2D09ADD1_3C3E_6765_415D_9B19323D90B5"
 ],
 "hfovMin": "150%",
 "hfov": 30,
 "pitch": 0,
 "partial": true
},
{
 "class": "ImageResource",
 "id": "ImageResource_17A0DD31_3FFA_FB8F_41A3_B668AEBB4E70",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1BD084D7_3FFA_CAB4_41C0_B4AD17431F57_0_0.jpg",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1BD084D7_3FFA_CAB4_41C0_B4AD17431F57_0_1.jpg",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1BD084D7_3FFA_CAB4_41C0_B4AD17431F57_0_2.jpg",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1BD084D7_3FFA_CAB4_41C0_B4AD17431F57_0_3.jpg",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "camera_550BFAB7_4127_6F26_41B4_88AC651454C4"
},
{
 "class": "ImageResource",
 "id": "ImageResource_1919D203_3E37_C98C_41BB_5C4E3A74CDE2",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1919F203_3E37_C98C_41C2_4E240386FDFA_0_0.jpg",
   "width": 2000,
   "height": 2000
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1919F203_3E37_C98C_41C2_4E240386FDFA_0_1.jpg",
   "width": 1024,
   "height": 1024
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1919F203_3E37_C98C_41C2_4E240386FDFA_0_2.jpg",
   "width": 512,
   "height": 512
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_1A308236_3E1A_C9F5_41CD_225A718E80F8",
 "yaw": -1.87,
 "popupDistance": 100,
 "hfov": 1.75,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_1A308236_3E1A_C9F5_41CD_225A718E80F8_0_2.jpg",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": 1.19,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "camera_52CFAA08_4127_6EEA_41B4_7BE5343DC6B8"
},
{
 "thumbnailUrl": "media/panorama_2D520B41_3E3A_5F8F_41CE_906BC02F0E46_t.jpg",
 "class": "Panorama",
 "label": "display55",
 "id": "panorama_2D520B41_3E3A_5F8F_41CE_906BC02F0E46",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_2D520B41_3E3A_5F8F_41CE_906BC02F0E46_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D520B41_3E3A_5F8F_41CE_906BC02F0E46_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_2D520B41_3E3A_5F8F_41CE_906BC02F0E46_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_2D520B41_3E3A_5F8F_41CE_906BC02F0E46_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2D520B41_3E3A_5F8F_41CE_906BC02F0E46_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2CEC47F5_3E3A_5676_41CC_026522C784D8"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2CD626EF_3E3A_7693_41B5_6D78D09FCAE0"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2CD889F5_3E3A_BA77_41C2_CF63F5C9736B"
  }
 ],
 "vfov": 17.38,
 "hfovMax": 30,
 "overlays": [
  "this.overlay_1CC90120_3E0A_4B8D_4193_3354F7F33AA3",
  "this.overlay_2124E6CB_3E0D_D693_41C0_E2AAF089A78E",
  "this.overlay_1A20CA2E_3E0E_5995_41CD_A579AC5AD7C8"
 ],
 "hfovMin": "150%",
 "hfov": 30,
 "pitch": 0,
 "partial": true
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "camera_5297E910_4127_6AFB_41B6_61A2C9AC575C"
},
{
 "thumbnailUrl": "media/panorama_2C2F4A4D_3E3A_B997_41B3_2A8629B14E39_t.jpg",
 "class": "Panorama",
 "label": "display61",
 "id": "panorama_2C2F4A4D_3E3A_B997_41B3_2A8629B14E39",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_2C2F4A4D_3E3A_B997_41B3_2A8629B14E39_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C2F4A4D_3E3A_B997_41B3_2A8629B14E39_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_2C2F4A4D_3E3A_B997_41B3_2A8629B14E39_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_2C2F4A4D_3E3A_B997_41B3_2A8629B14E39_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2C2F4A4D_3E3A_B997_41B3_2A8629B14E39_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2CFD31DB_3E3A_4ABC_41BF_0DDB1A254B82"
  }
 ],
 "vfov": 17.38,
 "hfovMax": 30,
 "overlays": [
  "this.overlay_1DCEB986_3E3A_BA95_4159_31F44B9DB239",
  "this.overlay_1E03AEE7_3E3A_B693_41BE_7443D486AF1F",
  "this.overlay_1D80722B_3E3A_4993_41C5_B4841C095A36",
  "this.overlay_1DCE7352_3E3A_4F8D_41C3_EA50F5ABC6EB",
  "this.overlay_1DE6642D_3E3A_4997_41C6_2F2182D66B0F",
  "this.overlay_1D3EF4F4_3E3A_4A75_41A7_29FABA4DFA8B",
  "this.overlay_1D53B5EB_3E3A_4A9C_41C6_D77B23ACDD88",
  "this.overlay_1D7366B8_3E3A_56FC_41CB_5786A11101EA",
  "this.overlay_1A8EF7D3_3E3A_568C_41AE_C0DD08C3F1B8",
  "this.overlay_1AC438AE_3E3A_5A95_41C9_37662BD489DC",
  "this.overlay_1DD56BED_3E3A_DE97_4198_211239C8D333",
  "this.overlay_1E261D4C_3E3D_DB95_41C1_0B2E0A301193",
  "this.overlay_1E2AE9B8_3E3E_7AFD_419C_7DE8DDE40B9A",
  "this.popup_17488A8C_3E0A_7E95_41BA_74F7785060CA",
  "this.popup_177C0A63_3E0D_F993_41C7_41E080789D0F",
  "this.popup_1BFA689E_3E0E_DAB5_419C_D75ADFA12AED",
  "this.popup_1BE79D73_3E0E_7A73_41C3_E08C4D0056CF",
  "this.popup_178B8605_3E0F_C997_41B1_35651F880DE7",
  "this.popup_17F58827_3E0E_5993_41C3_6BE5989CFD56",
  "this.popup_1BD6FB0D_3E0E_DF94_41C8_A871A84A07E7",
  "this.popup_17D95337_3E0A_4FF3_41C4_007E4BEF6392",
  "this.popup_158C7BF4_3E0A_BE75_41C7_002E44B652B7",
  "this.popup_172F226A_3E0A_499C_41C1_920BE0ECD72E",
  "this.popup_183067AD_3E0B_D694_41B1_3AEB518070CA",
  "this.overlay_18B58BDF_3FF6_5EB3_4177_7E81E9CCEB81",
  "this.popup_18CD2B6F_3FF6_5F93_41AC_6105CB6FC9AE",
  "this.overlay_169AD106_3E0A_4B94_419B_351C314217D6",
  "this.popup_167C7068_3E0A_499C_41BA_10ED3C5FFF13"
 ],
 "hfovMin": "150%",
 "hfov": 30,
 "pitch": 0,
 "partial": true
},
{
 "class": "ImageResource",
 "id": "ImageResource_17AA6D1F_3FFA_FBB3_41C9_B5591EA75168",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_17F58827_3E0E_5993_41C3_6BE5989CFD56_0_0.jpg",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_17F58827_3E0E_5993_41C3_6BE5989CFD56_0_1.jpg",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_17F58827_3E0E_5993_41C3_6BE5989CFD56_0_2.jpg",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_17F58827_3E0E_5993_41C3_6BE5989CFD56_0_3.jpg",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.16,
  "pitch": -0.17
 },
 "id": "camera_55A33B7A_4127_6D2E_41B0_29E4976C4059"
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_2D09BDD0_3C3E_6764_4195_5C239A573862",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2D09BDD0_3C3E_6764_4195_5C239A573862_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_2E007ADD_3C1F_AD1D_41AB_459813FB0E74",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2E007ADD_3C1F_AD1D_41AB_459813FB0E74_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_2F59D4E2_3E3A_CA8D_41CE_06DD364A9706",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2F59D4E2_3E3A_CA8D_41CE_06DD364A9706_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_4F91DFCA_4127_256E_41A7_FD29DD640F80",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4F91DFCA_4127_256E_41A7_FD29DD640F80_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.panorama_4C6515CB_4121_256E_41C4_1F7F3590FB77",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4C6515CB_4121_256E_41C4_1F7F3590FB77_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.panorama_2CD889F5_3E3A_BA77_41C2_CF63F5C9736B",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2CD889F5_3E3A_BA77_41C2_CF63F5C9736B_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "media": "this.panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "media": "this.panorama_2D7F90F7_3E3A_4A73_41BE_3EFAB44624F4",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2D7F90F7_3E3A_4A73_41BE_3EFAB44624F4_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "media": "this.panorama_2CFD31DB_3E3A_4ABC_41BF_0DDB1A254B82",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2CFD31DB_3E3A_4ABC_41BF_0DDB1A254B82_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "media": "this.panorama_4FD7B14C_4121_DD6B_41A5_91D826F7F644",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4FD7B14C_4121_DD6B_41A5_91D826F7F644_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "media": "this.panorama_4E6B7216_4123_5EE6_41BB_C5340D2146A7",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4E6B7216_4123_5EE6_41BB_C5340D2146A7_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "media": "this.panorama_2CEC47F5_3E3A_5676_41CC_026522C784D8",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2CEC47F5_3E3A_5676_41CC_026522C784D8_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "media": "this.panorama_2CD626EF_3E3A_7693_41B5_6D78D09FCAE0",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2CD626EF_3E3A_7693_41B5_6D78D09FCAE0_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "media": "this.panorama_2D520B41_3E3A_5F8F_41CE_906BC02F0E46",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2D520B41_3E3A_5F8F_41CE_906BC02F0E46_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "media": "this.panorama_2C2F4A4D_3E3A_B997_41B3_2A8629B14E39",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2C2F4A4D_3E3A_B997_41B3_2A8629B14E39_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 0)",
   "media": "this.panorama_2C218AD1_3E3A_DE8C_41C3_85E76DE1BC79",
   "end": "this.trigger('tourEnded')",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2C218AD1_3E3A_DE8C_41C3_85E76DE1BC79_camera"
  }
 ],
 "id": "mainPlayList"
},
{
 "thumbnailUrl": "media/video_1139A5FA_3E0A_CA7C_41AF_4AA4FC1B3E33_t.jpg",
 "class": "Video",
 "label": "VIDEO KASIR",
 "scaleMode": "fit_inside",
 "width": 1280,
 "loop": false,
 "id": "video_1139A5FA_3E0A_CA7C_41AF_4AA4FC1B3E33",
 "height": 712,
 "video": {
  "class": "VideoResource",
  "mp4Url": "media/video_1139A5FA_3E0A_CA7C_41AF_4AA4FC1B3E33.mp4",
  "width": 1280,
  "height": 712
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 1.07,
  "pitch": -0.17
 },
 "id": "camera_52E3198C_4127_6DEB_41AA_8A6AFB102E49"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "camera_5557FB1F_4127_6EE6_41B6_B8C088A542D6"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_1B8B6724_3E0A_D794_41AE_DE7B70701E96",
 "yaw": 9.16,
 "popupDistance": 100,
 "hfov": 2.25,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_1B8B6724_3E0A_D794_41AE_DE7B70701E96_0_1.jpg",
    "width": 1024,
    "height": 1024
   }
  ]
 },
 "pitch": 2.66,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0.08,
  "pitch": -1.91
 },
 "id": "camera_52791817_4127_6AE5_41C1_1817DFCEED1C"
},
{
 "class": "ImageResource",
 "id": "ImageResource_17A6CD44_3FFA_FB95_41BA_6CE68C248512",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_14602613_3FF6_C98C_41A9_B6FE16C2A3F5_0_0.jpg",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_14602613_3FF6_C98C_41A9_B6FE16C2A3F5_0_1.jpg",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_14602613_3FF6_C98C_41A9_B6FE16C2A3F5_0_2.jpg",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_14602613_3FF6_C98C_41A9_B6FE16C2A3F5_0_3.jpg",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_142DDE60_3E0A_798D_41A3_0850E57145E7",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1BE4E38B_3E17_CE93_41C3_9E6F1547ED14_0_0.jpg",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1BE4E38B_3E17_CE93_41C3_9E6F1547ED14_0_1.jpg",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1BE4E38B_3E17_CE93_41C3_9E6F1547ED14_0_2.jpg",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1BE4E38B_3E17_CE93_41C3_9E6F1547ED14_0_3.jpg",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": -0.7
 },
 "id": "camera_52444891_4127_6BFD_41C3_71A0B159EB81"
},
{
 "class": "ImageResource",
 "id": "ImageResource_1464B694_3E0B_B6B4_41B5_F0DDD5146D7C",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_14636693_3E0B_B68C_41C1_DE4C7B264699_0_0.jpg",
   "width": 2000,
   "height": 2000
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_14636693_3E0B_B68C_41C1_DE4C7B264699_0_1.jpg",
   "width": 1024,
   "height": 1024
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_14636693_3E0B_B68C_41C1_DE4C7B264699_0_2.jpg",
   "width": 512,
   "height": 512
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_189FBE19_3E0A_59BF_4193_C7A30C85D5DB",
 "yaw": -5.92,
 "popupDistance": 100,
 "hfov": 1.51,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_189FBE19_3E0A_59BF_4193_C7A30C85D5DB_0_2.jpg",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": 1.28,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "class": "ImageResource",
 "id": "ImageResource_17A76D3D_3FFA_FBF7_41C5_ECA1301EC2DB",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_19E45FC8_3FFA_769D_41CD_E12ACA652E1B_0_0.jpg",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_19E45FC8_3FFA_769D_41CD_E12ACA652E1B_0_1.jpg",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_19E45FC8_3FFA_769D_41CD_E12ACA652E1B_0_2.jpg",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_19E45FC8_3FFA_769D_41CD_E12ACA652E1B_0_3.jpg",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "camera_55661B03_4127_6EDE_41C6_B6BDE3E664A8"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_1AE4A945_3E16_5B97_419B_67FB64E2E44A",
 "yaw": 2.77,
 "popupDistance": 100,
 "hfov": 1.74,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_1AE4A945_3E16_5B97_419B_67FB64E2E44A_0_2.jpg",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": -7.58,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "class": "ImageResource",
 "id": "ImageResource_16063405_3E0A_4997_41BA_78E5DA81A6C0",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1606E404_3E0A_4995_41C4_6AB2602CF42A_0_0.jpg",
   "width": 2000,
   "height": 2000
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1606E404_3E0A_4995_41C4_6AB2602CF42A_0_1.jpg",
   "width": 1024,
   "height": 1024
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1606E404_3E0A_4995_41C4_6AB2602CF42A_0_2.jpg",
   "width": 512,
   "height": 512
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_191C19DF_3E36_DAB3_41C4_2871D196C90A",
 "yaw": -5.9,
 "popupDistance": 100,
 "hfov": 2.09,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_191C19DF_3E36_DAB3_41C4_2871D196C90A_0_2.jpg",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": -0.78,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_1621002B_3E1A_4993_41BE_A8A281C12FC1",
 "yaw": -6.27,
 "popupDistance": 100,
 "hfov": 1.75,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_1621002B_3E1A_4993_41BE_A8A281C12FC1_0_2.jpg",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": 1.19,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "camera_5222C76B_4127_652D_4191_6EBA881338AA"
},
{
 "class": "ImageResource",
 "id": "ImageResource_19C39615_3E15_C9B7_41CD_0ABC92720434",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1AE4A945_3E16_5B97_419B_67FB64E2E44A_0_0.jpg",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1AE4A945_3E16_5B97_419B_67FB64E2E44A_0_1.jpg",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1AE4A945_3E16_5B97_419B_67FB64E2E44A_0_2.jpg",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1AE4A945_3E16_5B97_419B_67FB64E2E44A_0_3.jpg",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_1A7FE2F5_3E3B_CE74_41CE_C972D73DA192",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1A7FF2F4_3E3B_CE74_41B9_510FF99EFCD1_0_0.jpg",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1A7FF2F4_3E3B_CE74_41B9_510FF99EFCD1_0_1.jpg",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1A7FF2F4_3E3B_CE74_41B9_510FF99EFCD1_0_2.jpg",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1A7FF2F4_3E3B_CE74_41B9_510FF99EFCD1_0_3.jpg",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_4EDC8B76_4121_6D27_41BE_39231DD6E09E",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_4EDCEB76_4121_6D27_415A_2C5EA113052A_0_0.jpg",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_4EDCEB76_4121_6D27_415A_2C5EA113052A_0_1.jpg",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_4EDCEB76_4121_6D27_415A_2C5EA113052A_0_2.jpg",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_4EDCEB76_4121_6D27_415A_2C5EA113052A_0_3.jpg",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_1BE8C272_3E16_C98D_41A8_E452B9FD0889",
 "yaw": 7.58,
 "popupDistance": 100,
 "hfov": 1.74,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_1BE8C272_3E16_C98D_41A8_E452B9FD0889_0_2.jpg",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": -7.78,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_19BE2FB4_3E16_F6F5_41A2_4BF22E2EF046",
 "yaw": -6.1,
 "popupDistance": 100,
 "hfov": 1.75,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_19BE2FB4_3E16_F6F5_41A2_4BF22E2EF046_0_2.jpg",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": -2.83,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "thumbnailUrl": "media/panorama_4F91DFCA_4127_256E_41A7_FD29DD640F80_t.jpg",
 "class": "Panorama",
 "label": "display1",
 "id": "panorama_4F91DFCA_4127_256E_41A7_FD29DD640F80",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_4F91DFCA_4127_256E_41A7_FD29DD640F80_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F91DFCA_4127_256E_41A7_FD29DD640F80_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_4F91DFCA_4127_256E_41A7_FD29DD640F80_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_4F91DFCA_4127_256E_41A7_FD29DD640F80_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_4F91DFCA_4127_256E_41A7_FD29DD640F80_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2F59D4E2_3E3A_CA8D_41CE_06DD364A9706"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4FD7B14C_4121_DD6B_41A5_91D826F7F644"
  }
 ],
 "vfov": 16.65,
 "hfovMax": 30,
 "overlays": [
  "this.overlay_4F910FCA_4127_256E_41CE_FBC356D2ABBE",
  "this.overlay_4F911FCA_4127_256E_418D_B4EB3B5C436F"
 ],
 "hfovMin": "150%",
 "hfov": 30,
 "pitch": 0,
 "partial": true
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_183067AD_3E0B_D694_41B1_3AEB518070CA",
 "yaw": 7.43,
 "popupDistance": 100,
 "hfov": 1.51,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_183067AD_3E0B_D694_41B1_3AEB518070CA_0_2.jpg",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": 1.14,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_4C6515CB_4121_256E_41C4_1F7F3590FB77_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_2CD889F5_3E3A_BA77_41C2_CF63F5C9736B_camera"
},
{
 "class": "ImageResource",
 "id": "ImageResource_14236E50_3E0A_798D_41B8_DB74A86DBB4B",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1BEADEBC_3E17_D6F4_41B2_3C1D28068696_0_0.jpg",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1BEADEBC_3E17_D6F4_41B2_3C1D28068696_0_1.jpg",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1BEADEBC_3E17_D6F4_41B2_3C1D28068696_0_2.jpg",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1BEADEBC_3E17_D6F4_41B2_3C1D28068696_0_3.jpg",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_17C344D4_3FF6_CAB4_41BF_3138093A33A0",
 "yaw": -1.34,
 "popupDistance": 100,
 "hfov": 1.51,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_17C344D4_3FF6_CAB4_41BF_3138093A33A0_0_2.jpg",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": 1.14,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_182B4B6A_3E16_5F9D_41CC_B7A82E635989",
 "yaw": -5.63,
 "popupDistance": 100,
 "hfov": 1.74,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_182B4B6A_3E16_5F9D_41CC_B7A82E635989_0_2.jpg",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": -7.61,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "class": "ImageResource",
 "id": "ImageResource_142ECE62_3E0A_798D_4171_4820A52E9171",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1621002B_3E1A_4993_41BE_A8A281C12FC1_0_0.jpg",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1621002B_3E1A_4993_41BE_A8A281C12FC1_0_1.jpg",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1621002B_3E1A_4993_41BE_A8A281C12FC1_0_2.jpg",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1621002B_3E1A_4993_41BE_A8A281C12FC1_0_3.jpg",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_14271E55_3E0A_79B7_41C3_F12A36FBBF08",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1BF49BED_3E16_DE97_41C4_88037FBD5619_0_0.jpg",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1BF49BED_3E16_DE97_41C4_88037FBD5619_0_1.jpg",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1BF49BED_3E16_DE97_41C4_88037FBD5619_0_2.jpg",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1BF49BED_3E16_DE97_41C4_88037FBD5619_0_3.jpg",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_167C7068_3E0A_499C_41BA_10ED3C5FFF13",
 "yaw": -7.35,
 "popupDistance": 100,
 "hfov": 1.5,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_167C7068_3E0A_499C_41BA_10ED3C5FFF13_0_2.jpg",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": -7.35,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "class": "ImageResource",
 "id": "ImageResource_17993D4D_3FFA_FB97_41A0_8941DC741FB0",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1667CCF9_3E0A_FA7F_41CC_2E27ADB3E07C_0_0.jpg",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1667CCF9_3E0A_FA7F_41CC_2E27ADB3E07C_0_1.jpg",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1667CCF9_3E0A_FA7F_41CC_2E27ADB3E07C_0_2.jpg",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1667CCF9_3E0A_FA7F_41CC_2E27ADB3E07C_0_3.jpg",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_1AA91DA2_3E36_BA8C_41C0_84B66BA21558",
 "yaw": -2.07,
 "popupDistance": 100,
 "hfov": 2.25,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_1AA91DA2_3E36_BA8C_41C0_84B66BA21558_0_1.jpg",
    "width": 1024,
    "height": 1024
   }
  ]
 },
 "pitch": -0.72,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_16E7621B_3FF5_C9BC_41B8_7B64B893E87D",
 "yaw": -1.21,
 "popupDistance": 100,
 "hfov": 1.5,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_16E7621B_3FF5_C9BC_41B8_7B64B893E87D_0_2.jpg",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": -7.7,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_1BB1EFC0_3E36_B68D_41C9_6BFA86E32FC8",
 "yaw": -5.48,
 "popupDistance": 100,
 "hfov": 2.25,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_1BB1EFC0_3E36_B68D_41C9_6BFA86E32FC8_0_1.jpg",
    "width": 1024,
    "height": 1024
   }
  ]
 },
 "pitch": -0.85,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "thumbnailUrl": "media/panorama_4E6B7216_4123_5EE6_41BB_C5340D2146A7_t.jpg",
 "class": "Panorama",
 "label": "display22",
 "id": "panorama_4E6B7216_4123_5EE6_41BB_C5340D2146A7",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_4E6B7216_4123_5EE6_41BB_C5340D2146A7_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4E6B7216_4123_5EE6_41BB_C5340D2146A7_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_4E6B7216_4123_5EE6_41BB_C5340D2146A7_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_4E6B7216_4123_5EE6_41BB_C5340D2146A7_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_4E6B7216_4123_5EE6_41BB_C5340D2146A7_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4C6515CB_4121_256E_41C4_1F7F3590FB77"
  }
 ],
 "vfov": 16.63,
 "hfovMax": 30,
 "overlays": [
  "this.overlay_4E6B4217_4123_5EE6_413C_575BCFD4F8A0",
  "this.overlay_4E6B2217_4123_5EE6_41CF_830C1CD4BF7C",
  "this.overlay_4E6B0217_4123_5EE6_41CF_57051AB20544",
  "this.overlay_4E6AF217_4123_5EE6_41C1_502DBE2649A5",
  "this.overlay_4E6AD217_4123_5EE6_417A_1FC1AA06A3FD",
  "this.overlay_4E6A6218_4123_5EEA_4171_8768F2988E6C",
  "this.overlay_4E6A3218_4123_5EEA_41CC_616FB9167CF4",
  "this.overlay_4E65E219_4123_5EEA_418B_D1C0A1BA077A",
  "this.overlay_4E65C219_4123_5EEA_41B0_0B28396F0015",
  "this.overlay_513E8C17_4121_6AE5_41CF_C88226EB95B7",
  "this.popup_1DB9107B_3E0E_4A73_41B9_C79840BD7088",
  "this.popup_1D49B103_3E0E_4B8C_41A7_AC0D1B1CDEA3",
  "this.popup_193FD649_3E15_C99F_41A0_B11C47334635",
  "this.popup_1BEFA1EF_3E0E_4A93_4158_C7A881589B40",
  "this.popup_1A90A96A_3E0E_DB9D_41C9_F19694D83227",
  "this.popup_17D9C431_3E0A_498F_41C7_E10AA8F0A52F",
  "this.popup_1814F8DF_3E1A_DAB3_41CB_ADB6722C8F17",
  "this.popup_4EDCEB76_4121_6D27_415A_2C5EA113052A"
 ],
 "hfovMin": "150%",
 "hfov": 30,
 "pitch": 0,
 "partial": true
},
{
 "class": "ImageResource",
 "id": "ImageResource_19CCC5F2_3E15_CA8D_41CC_3073EB7338E2",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1D49B103_3E0E_4B8C_41A7_AC0D1B1CDEA3_0_0.jpg",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1D49B103_3E0E_4B8C_41A7_AC0D1B1CDEA3_0_1.jpg",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1D49B103_3E0E_4B8C_41A7_AC0D1B1CDEA3_0_2.jpg",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1D49B103_3E0E_4B8C_41A7_AC0D1B1CDEA3_0_3.jpg",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_1AD9A090_3E1A_4A8D_41CE_8518172EE7E9",
 "yaw": 2.8,
 "popupDistance": 100,
 "hfov": 1.75,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_1AD9A090_3E1A_4A8D_41CE_8518172EE7E9_0_2.jpg",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": 1.4,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "camera_521657A7_4127_6525_41C9_DB722BA843E6"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_2F59D4E2_3E3A_CA8D_41CE_06DD364A9706_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_2CEC47F5_3E3A_5676_41CC_026522C784D8_camera"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_1A90A96A_3E0E_DB9D_41C9_F19694D83227",
 "yaw": 4.94,
 "popupDistance": 100,
 "hfov": 2.06,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_1A90A96A_3E0E_DB9D_41C9_F19694D83227_0_1.jpg",
    "width": 1024,
    "height": 1024
   }
  ]
 },
 "pitch": -1.11,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "class": "ImageResource",
 "id": "ImageResource_142FEE64_3E0A_7995_41CA_62A3BA33E242",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1BE8C272_3E16_C98D_41A8_E452B9FD0889_0_0.jpg",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1BE8C272_3E16_C98D_41A8_E452B9FD0889_0_1.jpg",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1BE8C272_3E16_C98D_41A8_E452B9FD0889_0_2.jpg",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1BE8C272_3E16_C98D_41A8_E452B9FD0889_0_3.jpg",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_19A900DC_3E36_4AB5_41B9_B7B98AD8B281",
 "yaw": 7.11,
 "popupDistance": 100,
 "hfov": 2.09,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_19A900DC_3E36_4AB5_41B9_B7B98AD8B281_0_2.jpg",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": -0.61,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "class": "ImageResource",
 "id": "ImageResource_199AEEA7_3E0A_5694_41B2_EC3AAE7229DA",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_199A9EA7_3E0A_5694_41B8_463DDDF9C5BA_0_0.jpg",
   "width": 2000,
   "height": 2000
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_199A9EA7_3E0A_5694_41B8_463DDDF9C5BA_0_1.jpg",
   "width": 1024,
   "height": 1024
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_199A9EA7_3E0A_5694_41B8_463DDDF9C5BA_0_2.jpg",
   "width": 512,
   "height": 512
  }
 ]
},
{
 "thumbnailUrl": "media/panorama_2CD626EF_3E3A_7693_41B5_6D78D09FCAE0_t.jpg",
 "class": "Panorama",
 "label": "display52",
 "id": "panorama_2CD626EF_3E3A_7693_41B5_6D78D09FCAE0",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_2CD626EF_3E3A_7693_41B5_6D78D09FCAE0_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2CD626EF_3E3A_7693_41B5_6D78D09FCAE0_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_2CD626EF_3E3A_7693_41B5_6D78D09FCAE0_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_2CD626EF_3E3A_7693_41B5_6D78D09FCAE0_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2CD626EF_3E3A_7693_41B5_6D78D09FCAE0_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2D7F90F7_3E3A_4A73_41BE_3EFAB44624F4"
  }
 ],
 "vfov": 17.38,
 "hfovMax": 30,
 "overlays": [
  "this.overlay_202B0EF9_3E1A_B67F_41A9_7EF1042CAD1D",
  "this.overlay_20B9734F_3E1A_4F94_41AF_CC5EF3AB4907",
  "this.overlay_202D63E8_3E1A_4E9C_41BC_F69E34471809",
  "this.overlay_2025B495_3E1A_4AB4_41B8_2CC2C13BFADD",
  "this.overlay_203F051B_3E1A_4BBC_41C0_5A04F0D60974",
  "this.overlay_203055CB_3E1A_4A93_41B4_4B16EB0F4155",
  "this.overlay_20442658_3E1A_49BD_41CD_206D78420FC0",
  "this.overlay_2055A70B_3E1A_5793_415B_4DB18C549818",
  "this.overlay_206B7795_3E1A_56B7_41C4_D94373F296F1",
  "this.overlay_1F116E7A_3E16_767C_41C7_18E6620F7440",
  "this.overlay_20F8232A_3E16_4F9D_41B5_3E5CD447CA96",
  "this.overlay_1C98F96D_3E16_DB94_41B0_B0A232C311E8",
  "this.overlay_20128FA5_3E16_7696_41C5_E0118C77D904",
  "this.overlay_20FF57AB_3E17_D693_41BE_77C10750A622",
  "this.popup_1621002B_3E1A_4993_41BE_A8A281C12FC1",
  "this.popup_1A308236_3E1A_C9F5_41CD_225A718E80F8",
  "this.popup_14456BC8_3E1A_BE9C_41CD_D9905E086217",
  "this.popup_176B415F_3E15_CBB3_41BB_A3DD491C5372",
  "this.popup_19595BC9_3E15_DE9F_41B7_2CB0740C4F90",
  "this.popup_17400CF6_3E16_7A75_41CC_7ED2C76B83F2",
  "this.popup_1BE8C272_3E16_C98D_41A8_E452B9FD0889",
  "this.popup_1BF49BED_3E16_DE97_41C4_88037FBD5619",
  "this.popup_1BE4E38B_3E17_CE93_41C3_9E6F1547ED14",
  "this.popup_1BEADEBC_3E17_D6F4_41B2_3C1D28068696",
  "this.popup_1A152B36_3E16_7FF4_41A6_7C02D35396B6",
  "this.popup_19BE2FB4_3E16_F6F5_41A2_4BF22E2EF046",
  "this.popup_182B4B6A_3E16_5F9D_41CC_B7A82E635989"
 ],
 "hfovMin": "150%",
 "hfov": 30,
 "pitch": 0,
 "partial": true
},
{
 "class": "ImageResource",
 "id": "ImageResource_14285E57_3E0A_79B3_41CB_21C59752EFDF",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1A152B36_3E16_7FF4_41A6_7C02D35396B6_0_0.jpg",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1A152B36_3E16_7FF4_41A6_7C02D35396B6_0_1.jpg",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1A152B36_3E16_7FF4_41A6_7C02D35396B6_0_2.jpg",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1A152B36_3E16_7FF4_41A6_7C02D35396B6_0_3.jpg",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_182B657C_3E15_CA75_419F_247DDEEA6A93",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1D59B7E6_3E16_5695_41B8_F2486426A92B_0_0.jpg",
   "width": 2000,
   "height": 2000
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1D59B7E6_3E16_5695_41B8_F2486426A92B_0_1.jpg",
   "width": 1024,
   "height": 1024
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1D59B7E6_3E16_5695_41B8_F2486426A92B_0_2.jpg",
   "width": 512,
   "height": 512
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_1BEFA1EF_3E0E_4A93_4158_C7A881589B40",
 "yaw": 8.21,
 "popupDistance": 100,
 "hfov": 2.05,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_1BEFA1EF_3E0E_4A93_4158_C7A881589B40_0_2.jpg",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": 4.86,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_165A049E_3E37_CAB5_41C3_C22ADFC29EE8",
 "yaw": -5.48,
 "popupDistance": 100,
 "hfov": 2.25,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_165A049E_3E37_CAB5_41C3_C22ADFC29EE8_0_1.jpg",
    "width": 1024,
    "height": 1024
   }
  ]
 },
 "pitch": 2.54,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "camera_52ED19B3_4127_6D3E_41BE_8E71BE6B83CD"
},
{
 "class": "ImageResource",
 "id": "ImageResource_17A85D15_3FFA_FBB7_41BF_650FE552B6F3",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_178B8605_3E0F_C997_41B1_35651F880DE7_0_0.jpg",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_178B8605_3E0F_C997_41B1_35651F880DE7_0_1.jpg",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_178B8605_3E0F_C997_41B1_35651F880DE7_0_2.jpg",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_178B8605_3E0F_C997_41B1_35651F880DE7_0_3.jpg",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_4E6B7216_4123_5EE6_41BB_C5340D2146A7_camera"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_17400CF6_3E16_7A75_41CC_7ED2C76B83F2",
 "yaw": 7.28,
 "popupDistance": 100,
 "hfov": 1.75,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_17400CF6_3E16_7A75_41CC_7ED2C76B83F2_0_2.jpg",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": -2.94,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "class": "ImageResource",
 "id": "ImageResource_182E9D31_3E1E_BB8F_41AB_49E8CCF65BB1",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1814F8DF_3E1A_DAB3_41CB_ADB6722C8F17_0_0.jpg",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1814F8DF_3E1A_DAB3_41CB_ADB6722C8F17_0_1.jpg",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1814F8DF_3E1A_DAB3_41CB_ADB6722C8F17_0_2.jpg",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1814F8DF_3E1A_DAB3_41CB_ADB6722C8F17_0_3.jpg",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "camera_5540BB3C_4127_6D2A_41A3_D20DF8450C45"
},
{
 "class": "ImageResource",
 "id": "ImageResource_1427CE59_3E0A_79BF_41B8_79D81C611E11",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_19BE2FB4_3E16_F6F5_41A2_4BF22E2EF046_0_0.jpg",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_19BE2FB4_3E16_F6F5_41A2_4BF22E2EF046_0_1.jpg",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_19BE2FB4_3E16_F6F5_41A2_4BF22E2EF046_0_2.jpg",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_19BE2FB4_3E16_F6F5_41A2_4BF22E2EF046_0_3.jpg",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_1A396DBB_3E0A_DAFC_418A_5A87FFE844C3",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1A395DBB_3E0A_DAFC_41C2_766AF50AEB36_0_0.jpg",
   "width": 2000,
   "height": 2000
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1A395DBB_3E0A_DAFC_41C2_766AF50AEB36_0_1.jpg",
   "width": 1024,
   "height": 1024
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1A395DBB_3E0A_DAFC_41C2_766AF50AEB36_0_2.jpg",
   "width": 512,
   "height": 512
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_17A2BD3A_3FFA_FBFD_41A1_DC737C63A0A0",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_16E7621B_3FF5_C9BC_41B8_7B64B893E87D_0_0.jpg",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_16E7621B_3FF5_C9BC_41B8_7B64B893E87D_0_1.jpg",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_16E7621B_3FF5_C9BC_41B8_7B64B893E87D_0_2.jpg",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_16E7621B_3FF5_C9BC_41B8_7B64B893E87D_0_3.jpg",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_1A152B36_3E16_7FF4_41A6_7C02D35396B6",
 "yaw": -1.84,
 "popupDistance": 100,
 "hfov": 1.75,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_1A152B36_3E16_7FF4_41A6_7C02D35396B6_0_2.jpg",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": -3.07,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0.24,
  "pitch": 0
 },
 "id": "camera_520ED7E4_4127_655B_41C7_0C088215A781"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_2C218AD1_3E3A_DE8C_41C3_85E76DE1BC79_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "camera_558DFBDC_4127_6D6A_41CA_4A2620B2E550"
},
{
 "class": "ImageResource",
 "id": "ImageResource_142B7E5D_3E0A_79B7_41C2_8FB56929C63F",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_14456BC8_3E1A_BE9C_41CD_D9905E086217_0_0.png",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_14456BC8_3E1A_BE9C_41CD_D9905E086217_0_1.png",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_14456BC8_3E1A_BE9C_41CD_D9905E086217_0_2.png",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_14456BC8_3E1A_BE9C_41CD_D9905E086217_0_3.png",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_176EF708_3E37_B79D_41A3_8722F6135818",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_17713707_3E37_B793_41AA_11812F2B0587_0_0.jpg",
   "width": 2000,
   "height": 2000
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_17713707_3E37_B793_41AA_11812F2B0587_0_1.jpg",
   "width": 1024,
   "height": 1024
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_17713707_3E37_B793_41AA_11812F2B0587_0_2.jpg",
   "width": 512,
   "height": 512
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_1919F203_3E37_C98C_41C2_4E240386FDFA",
 "yaw": -2.07,
 "popupDistance": 100,
 "hfov": 2.25,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_1919F203_3E37_C98C_41C2_4E240386FDFA_0_1.jpg",
    "width": 1024,
    "height": 1024
   }
  ]
 },
 "pitch": 2.57,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_1ADD313E_3E16_CBF4_41C1_79AC04D2EF98",
 "yaw": 7.21,
 "popupDistance": 100,
 "hfov": 1.75,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_1ADD313E_3E16_CBF4_41C1_79AC04D2EF98_0_2.jpg",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": 1.37,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_194D1C46_3FF5_B995_41CC_47C8B24B4667",
 "yaw": -1.1,
 "popupDistance": 100,
 "hfov": 1.51,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_194D1C46_3FF5_B995_41CC_47C8B24B4667_0_2.jpg",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": -3.23,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "class": "ImageResource",
 "id": "ImageResource_1AA90DA2_3E36_BA8C_41BF_2B9BCBDB9A21",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1AA91DA2_3E36_BA8C_41C0_84B66BA21558_0_0.jpg",
   "width": 2000,
   "height": 2000
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1AA91DA2_3E36_BA8C_41C0_84B66BA21558_0_1.jpg",
   "width": 1024,
   "height": 1024
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1AA91DA2_3E36_BA8C_41C0_84B66BA21558_0_2.jpg",
   "width": 512,
   "height": 512
  }
 ]
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "media": "this.video_1139A5FA_3E0A_CA7C_41AF_4AA4FC1B3E33",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', false); this.pauseGlobalAudiosWhilePlayItem(this.playList_534D167B_4127_672E_41B3_2FE57D0BC0AA, 0)",
   "class": "VideoPlayListItem",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_534D167B_4127_672E_41B3_2FE57D0BC0AA"
},
{
 "class": "ImageResource",
 "id": "ImageResource_17B68D13_3FFA_FBB3_41C5_219E786625AB",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1BD6FB0D_3E0E_DF94_41C8_A871A84A07E7_0_0.jpg",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1BD6FB0D_3E0E_DF94_41C8_A871A84A07E7_0_1.jpg",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1BD6FB0D_3E0E_DF94_41C8_A871A84A07E7_0_2.jpg",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1BD6FB0D_3E0E_DF94_41C8_A871A84A07E7_0_3.jpg",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_12D5AE15_3FF5_D9B4_4196_28D31329D2EE",
 "yaw": 8.9,
 "popupDistance": 100,
 "hfov": 1.51,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_12D5AE15_3FF5_D9B4_4196_28D31329D2EE_0_2.jpg",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": 1.14,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "thumbnailUrl": "media/panorama_2D7F90F7_3E3A_4A73_41BE_3EFAB44624F4_t.jpg",
 "class": "Panorama",
 "label": "display5",
 "id": "panorama_2D7F90F7_3E3A_4A73_41BE_3EFAB44624F4",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_2D7F90F7_3E3A_4A73_41BE_3EFAB44624F4_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D7F90F7_3E3A_4A73_41BE_3EFAB44624F4_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_2D7F90F7_3E3A_4A73_41BE_3EFAB44624F4_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_2D7F90F7_3E3A_4A73_41BE_3EFAB44624F4_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2D7F90F7_3E3A_4A73_41BE_3EFAB44624F4_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2CEC47F5_3E3A_5676_41CC_026522C784D8"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2CD626EF_3E3A_7693_41B5_6D78D09FCAE0"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2CD889F5_3E3A_BA77_41C2_CF63F5C9736B"
  }
 ],
 "vfov": 17.38,
 "hfovMax": 30,
 "overlays": [
  "this.overlay_20216BC1_3EF7_BE8C_41C0_D978E50774EB",
  "this.overlay_23D64964_3E1B_BB95_41C4_4C93B09597CD",
  "this.overlay_1F024952_3E35_BB8C_41C2_9C1E8DD76E47"
 ],
 "hfovMin": "150%",
 "hfov": 30,
 "pitch": 0,
 "partial": true
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_14A770D1_3FF6_4A8C_41CC_E9339BEDF090",
 "yaw": 3.5,
 "popupDistance": 100,
 "hfov": 1.51,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_14A770D1_3FF6_4A8C_41CC_E9339BEDF090_0_2.jpg",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": 1.11,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "class": "ImageResource",
 "id": "ImageResource_1AA2A93D_3E3A_5BF7_41C0_7D0FD87604FB",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1AA2993D_3E3A_5BF7_41B5_AD0E8B8BCE59_0_0.jpg",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1AA2993D_3E3A_5BF7_41B5_AD0E8B8BCE59_0_1.jpg",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1AA2993D_3E3A_5BF7_41B5_AD0E8B8BCE59_0_2.jpg",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1AA2993D_3E3A_5BF7_41B5_AD0E8B8BCE59_0_3.jpg",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_1A15BFB0_3E0A_D68C_41C3_316C85DA4DB5",
 "yaw": -9.1,
 "popupDistance": 100,
 "hfov": 2.25,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_1A15BFB0_3E0A_D68C_41C3_316C85DA4DB5_0_1.jpg",
    "width": 1024,
    "height": 1024
   }
  ]
 },
 "pitch": -4.54,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "class": "ImageResource",
 "id": "ImageResource_1798DD4F_3FFA_FB93_4195_0347C5E1D33D",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_12D5AE15_3FF5_D9B4_4196_28D31329D2EE_0_0.jpg",
   "width": 3508,
   "height": 2480
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_12D5AE15_3FF5_D9B4_4196_28D31329D2EE_0_1.jpg",
   "width": 2048,
   "height": 1447
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_12D5AE15_3FF5_D9B4_4196_28D31329D2EE_0_2.jpg",
   "width": 1024,
   "height": 723
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_12D5AE15_3FF5_D9B4_4196_28D31329D2EE_0_3.jpg",
   "width": 512,
   "height": 361
  }
 ]
},
{
 "thumbnailUrl": "media/panorama_4FD7B14C_4121_DD6B_41A5_91D826F7F644_t.jpg",
 "class": "Panorama",
 "label": "display11",
 "id": "panorama_4FD7B14C_4121_DD6B_41A5_91D826F7F644",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_4FD7B14C_4121_DD6B_41A5_91D826F7F644_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FD7B14C_4121_DD6B_41A5_91D826F7F644_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_4FD7B14C_4121_DD6B_41A5_91D826F7F644_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_4FD7B14C_4121_DD6B_41A5_91D826F7F644_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_4FD7B14C_4121_DD6B_41A5_91D826F7F644_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4F91DFCA_4127_256E_41A7_FD29DD640F80"
  }
 ],
 "vfov": 16.63,
 "hfovMax": 30,
 "overlays": [
  "this.overlay_4FD7C14D_4121_DD65_41CD_331DF564672C",
  "this.overlay_4FD7E14D_4121_DD65_41B1_195D6C53A818",
  "this.overlay_4FD7014D_4121_DD65_41C4_E097C03C701E",
  "this.overlay_4FD7314D_4121_DD65_41CD_A6147E20AB61",
  "this.overlay_4FD7414D_4121_DD65_41C4_916B424E610E",
  "this.popup_1AAB2148_3E0A_4B9D_41A5_3A75E641CA3D",
  "this.popup_191C19DF_3E36_DAB3_41C4_2871D196C90A",
  "this.popup_19A900DC_3E36_4AB5_41B9_B7B98AD8B281",
  "this.overlay_51774812_4121_2AFE_41C6_EC4371075382",
  "this.popup_510B77B6_4121_2526_41CE_4EE0B9EF6E07"
 ],
 "hfovMin": "150%",
 "hfov": 30,
 "pitch": 0,
 "partial": true
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_182C7232_3E36_49F2_41CE_F7C4554A7F51",
 "yaw": -9.17,
 "popupDistance": 100,
 "hfov": 2.25,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_182C7232_3E36_49F2_41CE_F7C4554A7F51_0_1.jpg",
    "width": 1024,
    "height": 1024
   }
  ]
 },
 "pitch": -0.85,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_158C7BF4_3E0A_BE75_41C7_002E44B652B7",
 "yaw": 6.88,
 "popupDistance": 100,
 "hfov": 1.51,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_158C7BF4_3E0A_BE75_41C7_002E44B652B7_0_2.jpg",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": -3.23,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "camera_55B13B5C_4127_6D6A_4179_C3A0991558CC"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_19E45FC8_3FFA_769D_41CD_E12ACA652E1B",
 "yaw": 8.49,
 "popupDistance": 100,
 "hfov": 1.51,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_19E45FC8_3FFA_769D_41CD_E12ACA652E1B_0_2.jpg",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": -3.16,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_2CD626EF_3E3A_7693_41B5_6D78D09FCAE0_camera"
},
{
 "class": "ImageResource",
 "id": "ImageResource_1A90B96A_3E0E_DB9D_41B1_1EB8F2061541",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1A90A96A_3E0E_DB9D_41C9_F19694D83227_0_0.jpg",
   "width": 2000,
   "height": 2000
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1A90A96A_3E0E_DB9D_41C9_F19694D83227_0_1.jpg",
   "width": 1024,
   "height": 1024
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1A90A96A_3E0E_DB9D_41C9_F19694D83227_0_2.jpg",
   "width": 512,
   "height": 512
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_176B415F_3E15_CBB3_41BB_A3DD491C5372",
 "yaw": 2.91,
 "popupDistance": 100,
 "hfov": 1.75,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_176B415F_3E15_CBB3_41BB_A3DD491C5372_0_2.jpg",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": 1.23,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "camera_5575AAE6_4127_6F26_41C4_C6BC7C51E7B3"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_1DB9107B_3E0E_4A73_41B9_C79840BD7088",
 "yaw": -4.93,
 "popupDistance": 100,
 "hfov": 2.06,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_1DB9107B_3E0E_4A73_41B9_C79840BD7088_0_1.jpg",
    "width": 1024,
    "height": 1024
   }
  ]
 },
 "pitch": -1.31,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_16FE6F72_3FF6_578C_41C9_C7646A8E7FDF",
 "yaw": 3.47,
 "popupDistance": 100,
 "hfov": 1.5,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_16FE6F72_3FF6_578C_41C9_C7646A8E7FDF_0_2.jpg",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": -7.73,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_160D8E13_3E16_B9B3_41B7_FF97F446F022",
 "yaw": 7.1,
 "popupDistance": 100,
 "hfov": 1.75,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_160D8E13_3E16_B9B3_41B7_FF97F446F022_0_2.jpg",
    "width": 1024,
    "height": 723
   }
  ]
 },
 "pitch": -2.8,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "thumbnailUrl": "media/panorama_2CFD31DB_3E3A_4ABC_41BF_0DDB1A254B82_t.jpg",
 "class": "Panorama",
 "label": "display6",
 "id": "panorama_2CFD31DB_3E3A_4ABC_41BF_0DDB1A254B82",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_2CFD31DB_3E3A_4ABC_41BF_0DDB1A254B82_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2CFD31DB_3E3A_4ABC_41BF_0DDB1A254B82_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_2CFD31DB_3E3A_4ABC_41BF_0DDB1A254B82_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_2CFD31DB_3E3A_4ABC_41BF_0DDB1A254B82_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2CFD31DB_3E3A_4ABC_41BF_0DDB1A254B82_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2C218AD1_3E3A_DE8C_41C3_85E76DE1BC79"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2CD889F5_3E3A_BA77_41C2_CF63F5C9736B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2C2F4A4D_3E3A_B997_41B3_2A8629B14E39"
  }
 ],
 "vfov": 17.38,
 "hfovMax": 30,
 "overlays": [
  "this.overlay_215F2A6A_3EF6_599D_41CD_B44BEECF661A",
  "this.overlay_20855D33_3EF6_5BF3_41C3_08D319F060B2",
  "this.overlay_207DD401_3EF5_C98F_41B9_59950D828A0B"
 ],
 "hfovMin": "150%",
 "hfov": 30,
 "pitch": 0,
 "partial": true
},
{
 "progressBorderSize": 0,
 "id": "MainViewer",
 "toolTipPaddingTop": 4,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 10,
 "progressBorderRadius": 0,
 "minHeight": 50,
 "toolTipPaddingRight": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "paddingBottom": 0,
 "toolTipPaddingLeft": 6,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarBottom": 5,
 "borderSize": 0,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#000000",
 "toolTipShadowSpread": 0,
 "class": "ViewerArea",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderColor": "#000000",
 "paddingRight": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 0.16,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "paddingTop": 0,
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "height": "100%",
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "minWidth": 100,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "paddingLeft": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#336633",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "data": {
  "name": "Main Viewer"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 350
 },
 "minHeight": 0,
 "backgroundOpacity": 0.55,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "right": 0,
 "minWidth": 0,
 "propagateClick": false,
 "bottom": 0,
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": 0,
 "class": "UIComponent",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "UIComponent6714"
 },
 "paddingTop": 0,
 "visible": false
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "minHeight": 0,
 "backgroundOpacity": 1,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "right": 0,
 "minWidth": 0,
 "propagateClick": false,
 "bottom": 0,
 "backgroundColor": [],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": 0,
 "class": "ZoomImage",
 "backgroundColorRatios": [],
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "ZoomImage6715"
 },
 "paddingTop": 0,
 "visible": false,
 "scaleMode": "custom"
},
{
 "fontFamily": "Arial",
 "shadowBlurRadius": 6,
 "data": {
  "name": "CloseButton6716"
 },
 "id": "closeButtonPopupPanorama",
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 350
 },
 "layout": "horizontal",
 "pressedIconColor": "#888888",
 "minHeight": 0,
 "iconWidth": 20,
 "backgroundOpacity": 0.3,
 "shadowSpread": 1,
 "iconHeight": 20,
 "shadow": false,
 "paddingBottom": 5,
 "borderRadius": 0,
 "right": 10,
 "iconColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 0,
 "iconBeforeLabel": true,
 "propagateClick": false,
 "fontStyle": "normal",
 "rollOverIconColor": "#666666",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 5,
 "fontWeight": "normal",
 "mode": "push",
 "paddingRight": 5,
 "top": 10,
 "class": "CloseButton",
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "fontSize": "1.29vmin",
 "label": "",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 5,
 "visible": false,
 "textDecoration": "none",
 "cursor": "hand",
 "iconLineWidth": 5
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_189FBE19_3E0A_59BF_4193_C7A30C85D5DB, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_17A13D30_3FFA_FB8D_41CC_5BD7FD1A5C62, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -5.92,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.51,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2C218AD1_3E3A_DE8C_41C3_85E76DE1BC79_0_HS_0_0.png",
      "width": 50,
      "height": 50
     }
    ]
   },
   "pitch": 1.28
  }
 ],
 "id": "overlay_1E0C35BA_3E36_4AFD_41B5_83133ECCBBD6",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -5.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2C218AD1_3E3A_DE8C_41C3_85E76DE1BC79_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 1.28,
   "hfov": 1.51
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_1BD084D7_3FFA_CAB4_41C0_B4AD17431F57, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_17A0DD31_3FFA_FB8F_41A3_B668AEBB4E70, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 7.7,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.5,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2C218AD1_3E3A_DE8C_41C3_85E76DE1BC79_0_HS_1_0.png",
      "width": 50,
      "height": 50
     }
    ]
   },
   "pitch": -7.66
  }
 ],
 "id": "overlay_1A30C967_3E36_FB93_41CC_3721BB3A7BD9",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 7.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2C218AD1_3E3A_DE8C_41C3_85E76DE1BC79_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -7.66,
   "hfov": 1.5
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_16FE6F72_3FF6_578C_41C9_C7646A8E7FDF, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_17A39D33_3FFA_FBF3_41CF_0C52973667F1, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 3.47,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.5,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2C218AD1_3E3A_DE8C_41C3_85E76DE1BC79_0_HS_2_0.png",
      "width": 50,
      "height": 50
     }
    ]
   },
   "pitch": -7.73
  }
 ],
 "id": "overlay_1BB3AB09_3E36_FF9C_41B4_8F4FF24F8CB8",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 3.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2C218AD1_3E3A_DE8C_41C3_85E76DE1BC79_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -7.73,
   "hfov": 1.5
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_16E7621B_3FF5_C9BC_41B8_7B64B893E87D, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_17A2BD3A_3FFA_FBFD_41A1_DC737C63A0A0, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -1.21,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.5,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2C218AD1_3E3A_DE8C_41C3_85E76DE1BC79_0_HS_3_0.png",
      "width": 50,
      "height": 50
     }
    ]
   },
   "pitch": -7.7
  }
 ],
 "id": "overlay_18BF7CA5_3E36_FA97_41B5_43E6840AF5D0",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2C218AD1_3E3A_DE8C_41C3_85E76DE1BC79_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -7.7,
   "hfov": 1.5
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_17BD3B74_3E0A_5E75_41BA_87E36FC2CD60, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_17A5AD3C_3FFA_FBF5_41B6_0EA584D6DC7E, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -5.81,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.5,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2C218AD1_3E3A_DE8C_41C3_85E76DE1BC79_0_HS_4_0.png",
      "width": 50,
      "height": 50
     }
    ]
   },
   "pitch": -7.73
  }
 ],
 "id": "overlay_1E1A6EB5_3E36_F6F4_41B5_F565AC41CC54",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -5.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2C218AD1_3E3A_DE8C_41C3_85E76DE1BC79_0_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -7.73,
   "hfov": 1.5
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_19E45FC8_3FFA_769D_41CD_E12ACA652E1B, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_17A76D3D_3FFA_FBF7_41C5_ECA1301EC2DB, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 8.49,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.51,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2C218AD1_3E3A_DE8C_41C3_85E76DE1BC79_0_HS_5_0.png",
      "width": 50,
      "height": 50
     }
    ]
   },
   "pitch": -3.16
  }
 ],
 "id": "overlay_1E7CD094_3E36_CAB5_41C3_08C5FBC5F2B9",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 8.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2C218AD1_3E3A_DE8C_41C3_85E76DE1BC79_0_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.16,
   "hfov": 1.51
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_14602613_3FF6_C98C_41A9_B6FE16C2A3F5, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_17A6CD44_3FFA_FB95_41BA_6CE68C248512, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 4.02,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.51,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2C218AD1_3E3A_DE8C_41C3_85E76DE1BC79_0_HS_6_0.png",
      "width": 50,
      "height": 50
     }
    ]
   },
   "pitch": -3.19
  }
 ],
 "id": "overlay_1F80821E_3E36_C9B4_4175_D090E0EC8688",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 4.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2C218AD1_3E3A_DE8C_41C3_85E76DE1BC79_0_HS_6_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.19,
   "hfov": 1.51
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_194D1C46_3FF5_B995_41CC_47C8B24B4667, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_17A66D46_3FFA_FB95_41C8_8AABF5D58CB4, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -1.1,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.51,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2C218AD1_3E3A_DE8C_41C3_85E76DE1BC79_0_HS_7_0.png",
      "width": 50,
      "height": 50
     }
    ]
   },
   "pitch": -3.23
  }
 ],
 "id": "overlay_1F6F63DD_3E36_CEB4_41CD_E72EC3D3DB4A",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2C218AD1_3E3A_DE8C_41C3_85E76DE1BC79_0_HS_7_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.23,
   "hfov": 1.51
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_1667CCF9_3E0A_FA7F_41CC_2E27ADB3E07C, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_17993D4D_3FFA_FB97_41A0_8941DC741FB0, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -5.95,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.51,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2C218AD1_3E3A_DE8C_41C3_85E76DE1BC79_0_HS_8_0.png",
      "width": 50,
      "height": 50
     }
    ]
   },
   "pitch": -3.09
  }
 ],
 "id": "overlay_1C445592_3E36_CA8C_41C1_827578EF0366",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -5.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2C218AD1_3E3A_DE8C_41C3_85E76DE1BC79_0_HS_8_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.09,
   "hfov": 1.51
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_12D5AE15_3FF5_D9B4_4196_28D31329D2EE, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_1798DD4F_3FFA_FB93_4195_0347C5E1D33D, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 8.9,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.51,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2C218AD1_3E3A_DE8C_41C3_85E76DE1BC79_0_HS_9_0.png",
      "width": 50,
      "height": 50
     }
    ]
   },
   "pitch": 1.14
  }
 ],
 "id": "overlay_1DF33794_3E36_D6B4_41C3_44C1CF4DEAD6",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 8.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2C218AD1_3E3A_DE8C_41C3_85E76DE1BC79_0_HS_9_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 1.14,
   "hfov": 1.51
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_14A770D1_3FF6_4A8C_41CC_E9339BEDF090, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_179B9D50_3FFA_FB8D_41BA_24B680E61361, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 3.5,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.51,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2C218AD1_3E3A_DE8C_41C3_85E76DE1BC79_0_HS_10_0.png",
      "width": 50,
      "height": 50
     }
    ]
   },
   "pitch": 1.11
  }
 ],
 "id": "overlay_1D411940_3E36_DB8D_41BE_03CD4CDB7A20",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 3.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2C218AD1_3E3A_DE8C_41C3_85E76DE1BC79_0_HS_10_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 1.11,
   "hfov": 1.51
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_17C344D4_3FF6_CAB4_41BF_3138093A33A0, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_179AAD57_3FFA_FBB3_41B5_ED60EAB54E3E, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -1.34,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.51,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2C218AD1_3E3A_DE8C_41C3_85E76DE1BC79_0_HS_11_0.png",
      "width": 50,
      "height": 50
     }
    ]
   },
   "pitch": 1.14
  }
 ],
 "id": "overlay_1AB75B31_3E36_DF8C_41CF_1827E6705E76",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2C218AD1_3E3A_DE8C_41C3_85E76DE1BC79_0_HS_11_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 1.14,
   "hfov": 1.51
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2CFD31DB_3E3A_4ABC_41BF_0DDB1A254B82, this.camera_5540BB3C_4127_6D2A_41A3_D20DF8450C45); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -11.53,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.44,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2C218AD1_3E3A_DE8C_41C3_85E76DE1BC79_0_HS_12_0.png",
      "width": 81,
      "height": 85
     }
    ]
   },
   "pitch": -3.25
  }
 ],
 "id": "overlay_1F9BEC5E_3E3E_F9B5_41C7_10A6B0706672",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -11.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2C218AD1_3E3A_DE8C_41C3_85E76DE1BC79_0_HS_12_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.25,
   "hfov": 2.44
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "BACK"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2C218AD1_3E3A_DE8C_41C3_85E76DE1BC79_0_HS_13_0.png",
      "width": 111,
      "height": 47
     }
    ]
   },
   "pitch": -4.31,
   "yaw": -11.25,
   "hfov": 3.34,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_1CCBED87_3E3E_5A93_41C0_10D29118666C",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -11.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2C218AD1_3E3A_DE8C_41C3_85E76DE1BC79_0_HS_13_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -4.31,
   "hfov": 3.34
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922, this.camera_5281F937_4127_6D25_41C8_DAE046E6D3F2); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_24B31B64_3EFA_BF94_418A_A3A3AAC14570",
   "pitch": -4.41,
   "yaw": -0.17,
   "hfov": 4.45,
   "distance": 100
  }
 ],
 "id": "overlay_27DA5F05_3EFA_D797_41B5_EC3C03BCEA3F",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD889F5_3E3A_BA77_41C2_CF63F5C9736B_0_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -4.41,
   "hfov": 4.45
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2F59D4E2_3E3A_CA8D_41CE_06DD364A9706, this.camera_52B578C0_4127_6B5B_4197_2A0F3A320D84); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -0.18,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD889F5_3E3A_BA77_41C2_CF63F5C9736B_0_HS_1_0.png",
      "width": 101,
      "height": 59
     }
    ]
   },
   "pitch": -7.29
  }
 ],
 "id": "overlay_25D458B3_3EFA_5AF3_41C2_4CD576C7A761",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD889F5_3E3A_BA77_41C2_CF63F5C9736B_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -7.29,
   "hfov": 3
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2D520B41_3E3A_5F8F_41CE_906BC02F0E46, this.camera_5297E910_4127_6AFB_41B6_61A2C9AC575C); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_24B35B64_3EFA_BF94_4192_44BF7041BDDA",
   "pitch": -1.46,
   "yaw": -5.28,
   "hfov": 3,
   "distance": 50
  }
 ],
 "id": "overlay_274536B5_3EFD_D6F4_4193_3DB37B79F6E6",
 "data": {
  "label": "Arrow 02a Left"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -5.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD889F5_3E3A_BA77_41C2_CF63F5C9736B_0_HS_2_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -1.46,
   "hfov": 3
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2CFD31DB_3E3A_4ABC_41BF_0DDB1A254B82, this.camera_52A758E9_4127_6B2D_41CD_38B8053BF003); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_24B39B65_3EFA_BF94_41C2_E59725AE640F",
   "pitch": -1.49,
   "yaw": 4.93,
   "hfov": 3,
   "distance": 50
  }
 ],
 "id": "overlay_272D849B_3EFE_CAB3_41C2_59969997382E",
 "data": {
  "label": "Arrow 02a Right"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 4.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD889F5_3E3A_BA77_41C2_CF63F5C9736B_0_HS_3_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -1.49,
   "hfov": 3
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setMediaBehaviour(this.playList_534D167B_4127_672E_41B3_2FE57D0BC0AA, 0, this.panorama_2E007ADD_3C1F_AD1D_41AB_459813FB0E74); this.MainViewerVideoPlayer.play()"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 0.2,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.41,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2E007ADD_3C1F_AD1D_41AB_459813FB0E74_0_HS_0_0.png",
      "width": 80,
      "height": 85
     }
    ]
   },
   "pitch": 0.85
  }
 ],
 "id": "overlay_2E005ADD_3C1F_AD1D_41B3_BE44B6D2E518",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2E007ADD_3C1F_AD1D_41AB_459813FB0E74_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 17
     }
    ]
   },
   "pitch": 0.85,
   "hfov": 2.41
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2D09BDD0_3C3E_6764_4195_5C239A573862, this.camera_5269E843_4127_6B5D_41C1_2F263D085C32); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2C4A2AC6_3C1F_AD6C_41B9_AD0F99F92AFE",
   "pitch": -0.42,
   "yaw": 9.43,
   "hfov": 3,
   "distance": 50
  }
 ],
 "id": "overlay_2E01AADE_3C1F_AD1F_41CB_58F7A2D59310",
 "data": {
  "label": "Arrow 01 Right"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 9.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2E007ADD_3C1F_AD1D_41AB_459813FB0E74_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.42,
   "hfov": 3
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2F59D4E2_3E3A_CA8D_41CE_06DD364A9706, this.camera_52791817_4127_6AE5_41C1_1817DFCEED1C); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2C4BFAC6_3C1F_AD6C_41C6_E79196E6EB91",
   "pitch": -0.42,
   "yaw": -8.79,
   "hfov": 3,
   "distance": 50
  }
 ],
 "id": "overlay_2E01BADE_3C1F_AD18_41C8_B3D658EDAA04",
 "data": {
  "label": "Arrow 01 Left"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -8.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2E007ADD_3C1F_AD1D_41AB_459813FB0E74_1_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.42,
   "hfov": 3
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "PLEASE CLICK\u000dFOR PARTNERSHIP"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2E007ADD_3C1F_AD1D_41AB_459813FB0E74_0_HS_4_0.png",
      "width": 151,
      "height": 58
     }
    ]
   },
   "pitch": 5.71,
   "yaw": 5.87,
   "hfov": 4.52,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_2E019AE3_3C1F_AD25_41A0_49FFB89E7F64",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 5.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2E007ADD_3C1F_AD1D_41AB_459813FB0E74_0_HS_4_0_map.gif",
      "width": 41,
      "height": 16
     }
    ]
   },
   "pitch": 5.71,
   "hfov": 4.52
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.openLink('https://aci-agro.id/partnerships/', '_blank')"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 5.76,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.39,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2E007ADD_3C1F_AD1D_41AB_459813FB0E74_0_HS_5_0.png",
      "width": 80,
      "height": 85
     }
    ]
   },
   "pitch": 4.04
  }
 ],
 "id": "overlay_2E01EAE3_3C1F_AD25_41B2_133C817B7FAF",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 5.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2E007ADD_3C1F_AD1D_41AB_459813FB0E74_0_HS_5_0_0_map.gif",
      "width": 16,
      "height": 17
     }
    ]
   },
   "pitch": 4.04,
   "hfov": 2.39
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.openLink('https://aci-agro.id/partnerships/', '_blank')"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 5.7,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.96,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2E007ADD_3C1F_AD1D_41AB_459813FB0E74_0_HS_7_0.png",
      "width": 99,
      "height": 80
     }
    ]
   },
   "pitch": 4.07
  }
 ],
 "id": "overlay_2E538273_3C0E_DD24_41C1_25C1D0A69EF7",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 5.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2E007ADD_3C1F_AD1D_41AB_459813FB0E74_0_HS_7_0_0_map.gif",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": 4.07,
   "hfov": 2.96
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2CD889F5_3E3A_BA77_41C2_CF63F5C9736B, this.camera_550BFAB7_4127_6F26_41B4_88AC651454C4); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 0.12,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.32,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922_0_HS_0_0.png",
      "width": 111,
      "height": 68
     }
    ]
   },
   "pitch": -7.08
  }
 ],
 "id": "overlay_252B656B_3EF6_CB9C_41AA_3C6C168374D6",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922_0_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -7.08,
   "hfov": 3.32
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_166A28FF_3E1A_7A73_41CA_7EFC4EB543E1, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_1813B560_3E15_CB8D_4181_43AD730F8436, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -12.51,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.25,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922_0_HS_2_0.png",
      "width": 75,
      "height": 44
     }
    ]
   },
   "pitch": -0.92
  }
 ],
 "id": "overlay_238555FD_3E0E_CA77_41B1_17E36837CE11",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -12.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922_0_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -0.92,
   "hfov": 2.25
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_1D59B7E6_3E16_5695_41B8_F2486426A92B, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_182B657C_3E15_CA75_419F_247DDEEA6A93, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 1.89,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.25,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922_0_HS_6_0.png",
      "width": 75,
      "height": 44
     }
    ]
   },
   "pitch": 2.66
  }
 ],
 "id": "overlay_20EEEA74_3E0E_DE75_41C3_78EAF9D195EE",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922_0_HS_6_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": 2.66,
   "hfov": 2.25
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_1D2342FB_3E1E_4E73_416B_827E841C9260, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_182A657F_3E15_CA73_41AA_D983982FEAB2, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -12.37,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.25,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922_0_HS_15_0.png",
      "width": 75,
      "height": 44
     }
    ]
   },
   "pitch": -4.61
  }
 ],
 "id": "overlay_21DCC3CB_3E0A_4E93_41CB_3F8DAEBD9704",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -12.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922_0_HS_15_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -4.61,
   "hfov": 2.25
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_1856F3B0_3E0B_CE8D_41A2_59CE97177F8D, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_18294583_3E15_CA93_41BF_0597AFF14E88, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -12.82,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.25,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922_0_HS_24_0.png",
      "width": 75,
      "height": 44
     }
    ]
   },
   "pitch": 2.57
  }
 ],
 "id": "overlay_23BE0D46_3E0A_7B95_41BD_2CF6A743B762",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -12.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922_0_HS_24_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": 2.57,
   "hfov": 2.25
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_1919F203_3E37_C98C_41C2_4E240386FDFA, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_1919D203_3E37_C98C_41BB_5C4E3A74CDE2, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -2.07,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.25,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922_0_HS_45_0.png",
      "width": 75,
      "height": 44
     }
    ]
   },
   "pitch": 2.57
  }
 ],
 "id": "overlay_193E62B9_3E37_CEFC_41B2_4DD465C24B60",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922_0_HS_45_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": 2.57,
   "hfov": 2.25
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_165A049E_3E37_CAB5_41C3_C22ADFC29EE8, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_165BD49E_3E37_CAB2_41C8_0DFF9A818431, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -5.48,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.25,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922_0_HS_46_0.png",
      "width": 75,
      "height": 44
     }
    ]
   },
   "pitch": 2.54
  }
 ],
 "id": "overlay_16431535_3E37_CBF4_41CD_5FA43D0E1E9C",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -5.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922_0_HS_46_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": 2.54,
   "hfov": 2.25
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_17713707_3E37_B793_41AA_11812F2B0587, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_176EF708_3E37_B79D_41A3_8722F6135818, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -9.17,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.25,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922_0_HS_47_0.png",
      "width": 75,
      "height": 44
     }
    ]
   },
   "pitch": 2.57
  }
 ],
 "id": "overlay_1710575C_3E37_B7B5_41C7_544BBB433E10",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -9.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922_0_HS_47_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": 2.57,
   "hfov": 2.25
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_1AA91DA2_3E36_BA8C_41C0_84B66BA21558, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_1AA90DA2_3E36_BA8C_41BF_2B9BCBDB9A21, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -2.07,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.25,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922_0_HS_48_0.png",
      "width": 75,
      "height": 44
     }
    ]
   },
   "pitch": -0.72
  }
 ],
 "id": "overlay_1A5E8E14_3E36_B9B4_41BF_6E03DD9AC7F7",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922_0_HS_48_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -0.72,
   "hfov": 2.25
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_1BB1EFC0_3E36_B68D_41C9_6BFA86E32FC8, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_1BB1DFC0_3E36_B68D_41C6_9AE529EE3CEE, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -5.48,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.25,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922_0_HS_49_0.png",
      "width": 75,
      "height": 44
     }
    ]
   },
   "pitch": -0.85
  }
 ],
 "id": "overlay_1B5CA01C_3E36_49B5_41CC_105F157E39D4",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -5.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922_0_HS_49_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -0.85,
   "hfov": 2.25
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_182C7232_3E36_49F2_41CE_F7C4554A7F51, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_182B8233_3E36_49F3_41AD_4E82D6E1C7FD, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -9.17,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.25,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922_0_HS_50_0.png",
      "width": 75,
      "height": 44
     }
    ]
   },
   "pitch": -0.85
  }
 ],
 "id": "overlay_19D55308_3E36_4F9D_41A3_8F31917C8C32",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -9.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922_0_HS_50_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -0.85,
   "hfov": 2.25
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_1A6E2BDC_3E0A_DEB5_41CA_972145AA7D46, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_1A6E3BDC_3E0A_DEB5_41CB_FD3B4D012BCF, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -1.83,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.25,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922_0_HS_51_0.png",
      "width": 75,
      "height": 44
     }
    ]
   },
   "pitch": -4.71
  }
 ],
 "id": "overlay_1A7A9C40_3E0A_D98D_41AA_3FDF2B8DD871",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922_0_HS_51_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -4.71,
   "hfov": 2.25
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_1A395DBB_3E0A_DAFC_41C2_766AF50AEB36, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_1A396DBB_3E0A_DAFC_418A_5A87FFE844C3, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -5.31,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.25,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922_0_HS_52_0.png",
      "width": 75,
      "height": 44
     }
    ]
   },
   "pitch": -4.64
  }
 ],
 "id": "overlay_1A034E10_3E0A_D98C_41AA_97DEEF219A51",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -5.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922_0_HS_52_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -4.64,
   "hfov": 2.25
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_1A15BFB0_3E0A_D68C_41C3_316C85DA4DB5, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_1A166FB0_3E0A_D68C_41BE_C9A5A149C496, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -9.1,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.25,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922_0_HS_53_0.png",
      "width": 75,
      "height": 44
     }
    ]
   },
   "pitch": -4.54
  }
 ],
 "id": "overlay_1BE6000F_3E0A_C993_41C7_43EE04525EF2",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -9.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922_0_HS_53_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -4.54,
   "hfov": 2.25
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_199A9EA7_3E0A_5694_41B8_463DDDF9C5BA, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_199AEEA7_3E0A_5694_41B2_EC3AAE7229DA, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 11.99,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.25,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922_0_HS_54_0.png",
      "width": 75,
      "height": 44
     }
    ]
   },
   "pitch": -4.5
  }
 ],
 "id": "overlay_19746F6C_3E0A_5794_41BF_8C2CE5FF7F67",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 11.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922_0_HS_54_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -4.5,
   "hfov": 2.25
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_16BDA1B9_3E0A_4AFF_41B4_4FCB36C7C67C, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_16BD91B9_3E0A_4AFF_41C0_3FA9D6F5A612, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 8.92,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.25,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922_0_HS_55_0.png",
      "width": 75,
      "height": 44
     }
    ]
   },
   "pitch": -4.57
  }
 ],
 "id": "overlay_16952263_3E0A_4993_41CB_5ACC4CE6231D",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 8.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922_0_HS_55_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -4.57,
   "hfov": 2.25
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_1606E404_3E0A_4995_41C4_6AB2602CF42A, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_16063405_3E0A_4997_41BA_78E5DA81A6C0, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 5.37,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.25,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922_0_HS_56_0.png",
      "width": 75,
      "height": 44
     }
    ]
   },
   "pitch": -4.64
  }
 ],
 "id": "overlay_17E2F4AF_3E0A_4A93_4196_2BCE5B797F2F",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 5.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922_0_HS_56_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -4.64,
   "hfov": 2.25
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_14636693_3E0B_B68C_41C1_DE4C7B264699, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_1464B694_3E0B_B6B4_41B5_F0DDD5146D7C, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 1.96,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.25,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922_0_HS_57_0.png",
      "width": 75,
      "height": 44
     }
    ]
   },
   "pitch": -4.57
  }
 ],
 "id": "overlay_14468704_3E0B_B794_41BA_CDBF30218574",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922_0_HS_57_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -4.57,
   "hfov": 2.25
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_1A6FF52C_3E0A_CB94_418C_8153327EB610, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_1A6FC52C_3E0A_CB94_41CA_AF09016D6B59, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 12.85,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.25,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922_0_HS_58_0.png",
      "width": 75,
      "height": 44
     }
    ]
   },
   "pitch": 2.7
  }
 ],
 "id": "overlay_1A78B58D_3E0A_CA97_41BB_98D49EEE7181",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 12.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922_0_HS_58_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": 2.7,
   "hfov": 2.25
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_1B8B6724_3E0A_D794_41AE_DE7B70701E96, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_1B8B4724_3E0A_D794_41B3_3AC7B451D77B, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 9.16,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.25,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922_0_HS_59_0.png",
      "width": 75,
      "height": 44
     }
    ]
   },
   "pitch": 2.66
  }
 ],
 "id": "overlay_1B9FE77C_3E0A_D674_41C9_D16DAE92D28B",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 9.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922_0_HS_59_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": 2.66,
   "hfov": 2.25
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_185E88EE_3E0A_DA95_41BD_735C18887A26, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_182168EF_3E0A_DA93_41C5_D3A70FA8E8DD, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 5.51,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.25,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922_0_HS_60_0.png",
      "width": 75,
      "height": 44
     }
    ]
   },
   "pitch": 2.7
  }
 ],
 "id": "overlay_18376963_3E0A_DB93_41C8_3D23BD114720",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 5.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922_0_HS_60_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": 2.7,
   "hfov": 2.25
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_1690FB36_3E0D_BFF5_41C4_A3A1FB9659FB, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_1690DB36_3E0D_BFF5_41C6_481076B870E4, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 12.71,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.25,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922_0_HS_61_0.png",
      "width": 75,
      "height": 44
     }
    ]
   },
   "pitch": -0.82
  }
 ],
 "id": "overlay_166B8BD9_3E0D_BEBF_41B1_19245A9867E2",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 12.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922_0_HS_61_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -0.82,
   "hfov": 2.25
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_1A70E061_3E0E_498F_41AD_9D0D89CA328E, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_1A70F061_3E0E_498F_41C1_B535E8D9003A, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 9.03,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.25,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922_0_HS_62_0.png",
      "width": 75,
      "height": 44
     }
    ]
   },
   "pitch": -0.78
  }
 ],
 "id": "overlay_1A7C30C7_3E0E_4A93_41BF_0DC956C0B5C2",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 9.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922_0_HS_62_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -0.78,
   "hfov": 2.25
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_1A0882E5_3E0E_4E96_41CB_69705D98DD2D, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_1A0892E6_3E0E_4E95_4188_13C27CA0C0F6, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 5.41,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.25,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922_0_HS_63_0.png",
      "width": 75,
      "height": 44
     }
    ]
   },
   "pitch": -0.82
  }
 ],
 "id": "overlay_1A1A935E_3E0E_4FB5_41C6_4EE1006D8DF9",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 5.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922_0_HS_63_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -0.82,
   "hfov": 2.25
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_19E905CF_3E0E_4A93_41C3_43367FCE477B, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_19E925CF_3E0E_4A93_41C1_066B4C82E028, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 1.89,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.25,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922_0_HS_64_0.png",
      "width": 75,
      "height": 44
     }
    ]
   },
   "pitch": -0.85
  }
 ],
 "id": "overlay_19C37673_3E0E_5673_41A4_6B750729965E",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD29A0E_3E3A_5994_41CD_7473B52BF922_0_HS_64_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -0.85,
   "hfov": 2.25
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_1AABC087_3E1A_4A94_41BD_D67E6109A99F, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_19C5F60B_3E15_C993_41AA_AA978EC9A4CE, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -6.07,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.75,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CEC47F5_3E3A_5676_41CC_026522C784D8_0_HS_0_0.png",
      "width": 58,
      "height": 51
     }
    ]
   },
   "pitch": 1.43
  }
 ],
 "id": "overlay_2339F288_3E1E_CE9C_41CC_174E641F3B87",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -6.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CEC47F5_3E3A_5676_41CC_026522C784D8_0_HS_0_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": 1.43,
   "hfov": 1.75
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_14E801EA_3E16_4A9D_41B4_9420E2E5A5A8, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_19C4C60D_3E15_C996_41C7_CDF58250AEA8, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 7.1,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.74,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CEC47F5_3E3A_5676_41CC_026522C784D8_0_HS_1_0.png",
      "width": 58,
      "height": 51
     }
    ]
   },
   "pitch": -7.51
  }
 ],
 "id": "overlay_20471B68_3E1E_DF9D_41C2_8B9C998976C7",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 7.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CEC47F5_3E3A_5676_41CC_026522C784D8_0_HS_1_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -7.51,
   "hfov": 1.74
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_1AE4A945_3E16_5B97_419B_67FB64E2E44A, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_19C39615_3E15_C9B7_41CD_0ABC92720434, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 2.77,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.74,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CEC47F5_3E3A_5676_41CC_026522C784D8_0_HS_2_0.png",
      "width": 58,
      "height": 51
     }
    ]
   },
   "pitch": -7.58
  }
 ],
 "id": "overlay_20611CA4_3E1E_DA95_41C2_7B3B43AEADCF",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CEC47F5_3E3A_5676_41CC_026522C784D8_0_HS_2_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -7.58,
   "hfov": 1.74
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_160D8E13_3E16_B9B3_41B7_FF97F446F022, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_19C24616_3E15_C9B5_41BB_FC779E4B8ECA, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 7.1,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.75,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CEC47F5_3E3A_5676_41CC_026522C784D8_0_HS_5_0.png",
      "width": 58,
      "height": 51
     }
    ]
   },
   "pitch": -2.8
  }
 ],
 "id": "overlay_21C16FC8_3E1E_D69D_418E_C667AFCD0AC2",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 7.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CEC47F5_3E3A_5676_41CC_026522C784D8_0_HS_5_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -2.8,
   "hfov": 1.75
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_1A85CCEB_3E15_FA93_41BD_2DFD0C60502F, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_19C28618_3E15_C9BD_41B5_A1D9FE581CDA, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 2.77,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.75,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CEC47F5_3E3A_5676_41CC_026522C784D8_0_HS_6_0.png",
      "width": 58,
      "height": 51
     }
    ]
   },
   "pitch": -2.76
  }
 ],
 "id": "overlay_21078092_3E1E_CA8C_41C6_9A5796E434E1",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CEC47F5_3E3A_5676_41CC_026522C784D8_0_HS_6_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -2.76,
   "hfov": 1.75
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_1ADD313E_3E16_CBF4_41C1_79AC04D2EF98, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_19C1461F_3E15_C9B3_41AA_1B5F872B542D, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 7.21,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.75,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CEC47F5_3E3A_5676_41CC_026522C784D8_0_HS_9_0.png",
      "width": 58,
      "height": 51
     }
    ]
   },
   "pitch": 1.37
  }
 ],
 "id": "overlay_20B143CC_3E1E_CE94_41C7_533A49558249",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 7.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CEC47F5_3E3A_5676_41CC_026522C784D8_0_HS_9_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": 1.37,
   "hfov": 1.75
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_1AD9A090_3E1A_4A8D_41CE_8518172EE7E9, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_19C05621_3E15_C98F_41CB_340D5CF62D7A, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 2.8,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.75,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CEC47F5_3E3A_5676_41CC_026522C784D8_0_HS_10_0.png",
      "width": 58,
      "height": 51
     }
    ]
   },
   "pitch": 1.4
  }
 ],
 "id": "overlay_20CFF49B_3E1E_CABC_41B1_916E9D9E63CB",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CEC47F5_3E3A_5676_41CC_026522C784D8_0_HS_10_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": 1.4,
   "hfov": 1.75
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2D7F90F7_3E3A_4A73_41BE_3EFAB44624F4, this.camera_559DBBB7_4127_6D26_41AC_07C0F69EE68C); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 11.41,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.44,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CEC47F5_3E3A_5676_41CC_026522C784D8_0_HS_12_0.png",
      "width": 81,
      "height": 85
     }
    ]
   },
   "pitch": -2.36
  }
 ],
 "id": "overlay_2042191F_3E1A_5BB3_41C1_CC5879720940",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 11.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CEC47F5_3E3A_5676_41CC_026522C784D8_0_HS_12_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.36,
   "hfov": 2.44
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "BACK"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CEC47F5_3E3A_5676_41CC_026522C784D8_0_HS_13_0.png",
      "width": 111,
      "height": 47
     }
    ]
   },
   "pitch": -3.49,
   "yaw": 11.79,
   "hfov": 3.34,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_20B5B62F_3E1B_C994_4172_8996D535558F",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 11.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CEC47F5_3E3A_5676_41CC_026522C784D8_0_HS_13_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -3.49,
   "hfov": 3.34
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_194C1F23_3E3E_7793_41BD_21519733D19B, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_16F17C9A_3E3E_7ABD_41CB_177175B64893, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -1.91,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.75,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CEC47F5_3E3A_5676_41CC_026522C784D8_0_HS_19_0.png",
      "width": 58,
      "height": 51
     }
    ]
   },
   "pitch": 1.4
  }
 ],
 "id": "overlay_177969EA_3E3D_DA9D_419E_95B518B042EB",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CEC47F5_3E3A_5676_41CC_026522C784D8_0_HS_19_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": 1.4,
   "hfov": 1.75
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_1ABEB615_3E3E_49B7_41B7_38DDC78AD700, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_1ABE8616_3E3E_49B5_41BF_D34B078F9D83, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -6.21,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.75,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CEC47F5_3E3A_5676_41CC_026522C784D8_0_HS_20_0.png",
      "width": 58,
      "height": 51
     }
    ]
   },
   "pitch": -2.9
  }
 ],
 "id": "overlay_1AAA067A_3E3E_567D_41C3_E4340E70E342",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -6.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CEC47F5_3E3A_5676_41CC_026522C784D8_0_HS_20_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -2.9,
   "hfov": 1.75
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_1B7A4E4C_3E3F_B995_41B0_03EFDC8863C1, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_1B7A2E4D_3E3F_B997_4194_97A02A88EFB4, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -6.17,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.74,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CEC47F5_3E3A_5676_41CC_026522C784D8_0_HS_23_0.png",
      "width": 58,
      "height": 51
     }
    ]
   },
   "pitch": -7.41
  }
 ],
 "id": "overlay_1B6DFF1B_3E3F_B7B3_41C1_8E3ADB60B47F",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -6.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CEC47F5_3E3A_5676_41CC_026522C784D8_0_HS_23_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -7.41,
   "hfov": 1.74
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_1A7FF2F4_3E3B_CE74_41B9_510FF99EFCD1, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_1A7FE2F5_3E3B_CE74_41CE_C972D73DA192, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -1.84,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.75,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CEC47F5_3E3A_5676_41CC_026522C784D8_0_HS_24_0.png",
      "width": 58,
      "height": 51
     }
    ]
   },
   "pitch": -2.83
  }
 ],
 "id": "overlay_1A6D335E_3E3B_CFB4_419D_D40BB3BA5343",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CEC47F5_3E3A_5676_41CC_026522C784D8_0_HS_24_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -2.83,
   "hfov": 1.75
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_1AA2993D_3E3A_5BF7_41B5_AD0E8B8BCE59, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_1AA2A93D_3E3A_5BF7_41C0_7D0FD87604FB, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -1.94,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.74,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CEC47F5_3E3A_5676_41CC_026522C784D8_0_HS_25_0.png",
      "width": 58,
      "height": 51
     }
    ]
   },
   "pitch": -7.54
  }
 ],
 "id": "overlay_1A5689AE_3E3A_5A95_41C5_3FFA94C0915A",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CEC47F5_3E3A_5676_41CC_026522C784D8_0_HS_25_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -7.54,
   "hfov": 1.74
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4E6B7216_4123_5EE6_41BB_C5340D2146A7, this.camera_55A33B7A_4127_6D2E_41B0_29E4976C4059); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 0.33,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.88,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_4C6515CB_4121_256E_41C4_1F7F3590FB77_1_HS_0_0.png",
      "width": 61,
      "height": 51
     }
    ]
   },
   "pitch": 0.37
  }
 ],
 "id": "overlay_4C6585CC_4121_256A_4187_21A9760C6C8E",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_4C6515CB_4121_256E_41C4_1F7F3590FB77_1_HS_0_0_0_map.gif",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": 0.37,
   "hfov": 2.88
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2F59D4E2_3E3A_CA8D_41CE_06DD364A9706, this.camera_55B13B5C_4127_6D6A_4179_C3A0991558CC); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 0.52,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.43,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_4C6515CB_4121_256E_41C4_1F7F3590FB77_1_HS_1_0.png",
      "width": 65,
      "height": 35
     }
    ]
   },
   "pitch": -7.23
  }
 ],
 "id": "overlay_4C7A45CD_4121_256A_41C7_CA38E094F765",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_4C6515CB_4121_256E_41C4_1F7F3590FB77_1_HS_1_0_0_map.gif",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -7.23,
   "hfov": 2.43
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4C6515CB_4121_256E_41C4_1F7F3590FB77, this.camera_520ED7E4_4127_655B_41C7_0C088215A781); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_120B333E_3E3E_4FF4_4193_FBBD962DE6BD",
   "pitch": -6.52,
   "yaw": 0.5,
   "hfov": 3.53,
   "distance": 100
  }
 ],
 "id": "overlay_2A67F66E_3E3A_C994_41C3_DEE133064CD9",
 "data": {
  "label": "Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2F59D4E2_3E3A_CA8D_41CE_06DD364A9706_0_HS_0_0_0_map.gif",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -6.52,
   "hfov": 3.53
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2CD889F5_3E3A_BA77_41C2_CF63F5C9736B, this.camera_5203E7C5_4127_6565_41CE_53F52D463D77); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_294C4B33_3E0E_BFF3_41AC_71DC612778C3",
   "pitch": -6.52,
   "yaw": -8.65,
   "hfov": 3.53,
   "distance": 100
  }
 ],
 "id": "overlay_2ABABCDB_3E3B_DAB3_41B1_8102172E879F",
 "data": {
  "label": "Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -8.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2F59D4E2_3E3A_CA8D_41CE_06DD364A9706_1_HS_1_0_0_map.gif",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -6.52,
   "hfov": 3.53
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4F91DFCA_4127_256E_41A7_FD29DD640F80, this.camera_521657A7_4127_6525_41C9_DB722BA843E6); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1A891F68_3E35_D79D_41AC_BFF80B028146",
   "pitch": -6.52,
   "yaw": 9.54,
   "hfov": 3.53,
   "distance": 100
  }
 ],
 "id": "overlay_2FE5AF90_3E3B_D68D_41CA_8BFCA0933250",
 "data": {
  "label": "Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 9.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2F59D4E2_3E3A_CA8D_41CE_06DD364A9706_0_HS_2_0_0_map.gif",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -6.52,
   "hfov": 3.53
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2E007ADD_3C1F_AD1D_41AB_459813FB0E74, this.camera_5222C76B_4127_652D_4191_6EBA881338AA); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -4.38,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.1,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2F59D4E2_3E3A_CA8D_41CE_06DD364A9706_0_HS_4_0.png",
      "width": 70,
      "height": 56
     }
    ]
   },
   "pitch": -7.65
  }
 ],
 "id": "overlay_2015277A_3E0A_567C_41C3_CA882CD2ED93",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.38,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2F59D4E2_3E3A_CA8D_41CE_06DD364A9706_0_HS_4_0_0_map.gif",
      "width": 20,
      "height": 16
     }
    ]
   },
   "pitch": -7.65,
   "hfov": 2.1
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2E007ADD_3C1F_AD1D_41AB_459813FB0E74, this.camera_522AA78A_4127_65EF_41B6_49DF8C103BC1); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 5.17,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.1,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2F59D4E2_3E3A_CA8D_41CE_06DD364A9706_0_HS_5_0.png",
      "width": 70,
      "height": 56
     }
    ]
   },
   "pitch": -7.65
  }
 ],
 "id": "overlay_1E6B8A77_3E0A_FE73_41C2_6FC067F35EAF",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 5.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2F59D4E2_3E3A_CA8D_41CE_06DD364A9706_0_HS_5_0_0_map.gif",
      "width": 20,
      "height": 16
     }
    ]
   },
   "pitch": -7.65,
   "hfov": 2.1
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2E007ADD_3C1F_AD1D_41AB_459813FB0E74, this.camera_55FF9BFF_4127_6D26_41B1_BC5C033B6056); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2D8A52AB_3C3A_FD24_41B6_96594203791E",
   "pitch": -6.43,
   "yaw": -6.53,
   "hfov": 3.95,
   "distance": 100
  }
 ],
 "id": "overlay_2D09ADD1_3C3E_6765_415D_9B19323D90B5",
 "data": {
  "label": "Arrow 01c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -6.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2D09BDD0_3C3E_6764_4195_5C239A573862_1_HS_0_0_0_map.gif",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -6.43,
   "hfov": 3.95
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2CEC47F5_3E3A_5676_41CC_026522C784D8, this.camera_55386A2F_4127_6F26_41B0_75AA1980F68D); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -8.29,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.17,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2D520B41_3E3A_5F8F_41CE_906BC02F0E46_0_HS_0_0.png",
      "width": 72,
      "height": 64
     }
    ]
   },
   "pitch": 0.25
  }
 ],
 "id": "overlay_1CC90120_3E0A_4B8D_4193_3354F7F33AA3",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -8.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2D520B41_3E3A_5F8F_41CE_906BC02F0E46_0_HS_0_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": 0.25,
   "hfov": 2.17
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2CD626EF_3E3A_7693_41B5_6D78D09FCAE0, this.camera_5528FA5C_4127_6F6A_41C1_F04A947925C5); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 7.76,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.17,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2D520B41_3E3A_5F8F_41CE_906BC02F0E46_0_HS_1_0.png",
      "width": 72,
      "height": 64
     }
    ]
   },
   "pitch": 0.18
  }
 ],
 "id": "overlay_2124E6CB_3E0D_D693_41C0_E2AAF089A78E",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 7.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2D520B41_3E3A_5F8F_41CE_906BC02F0E46_0_HS_1_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": 0.18,
   "hfov": 2.17
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2CD889F5_3E3A_BA77_41C2_CF63F5C9736B, this.camera_551AEA8D_4127_6FEA_41C8_F287E1707587); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 0.01,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.52,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2D520B41_3E3A_5F8F_41CE_906BC02F0E46_0_HS_2_0.png",
      "width": 118,
      "height": 61
     }
    ]
   },
   "pitch": -6.19
  }
 ],
 "id": "overlay_1A20CA2E_3E0E_5995_41CD_A579AC5AD7C8",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2D520B41_3E3A_5F8F_41CE_906BC02F0E46_0_HS_2_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -6.19,
   "hfov": 3.52
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_17D95337_3E0A_4FF3_41C4_007E4BEF6392, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_17B51D08_3FFA_FB9D_417C_6DACF51C7D1C, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 1.97,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.5,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2C2F4A4D_3E3A_B997_41B3_2A8629B14E39_0_HS_0_0.png",
      "width": 50,
      "height": 50
     }
    ]
   },
   "pitch": -7.63
  }
 ],
 "id": "overlay_1DCEB986_3E3A_BA95_4159_31F44B9DB239",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2C2F4A4D_3E3A_B997_41B3_2A8629B14E39_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -7.63,
   "hfov": 1.5
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_1BFA689E_3E0E_DAB5_419C_D75ADFA12AED, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_17B42D0A_3FFA_FB9D_416A_38974CC84FE4, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -2.74,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.5,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2C2F4A4D_3E3A_B997_41B3_2A8629B14E39_0_HS_1_0.png",
      "width": 50,
      "height": 50
     }
    ]
   },
   "pitch": -7.63
  }
 ],
 "id": "overlay_1E03AEE7_3E3A_B693_41BE_7443D486AF1F",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.74,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2C2F4A4D_3E3A_B997_41B3_2A8629B14E39_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -7.63,
   "hfov": 1.5
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_158C7BF4_3E0A_BE75_41C7_002E44B652B7, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_17B7ED0C_3FFA_FB95_41B6_C552430D4877, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 6.88,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.51,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2C2F4A4D_3E3A_B997_41B3_2A8629B14E39_0_HS_3_0.png",
      "width": 50,
      "height": 50
     }
    ]
   },
   "pitch": -3.23
  }
 ],
 "id": "overlay_1D80722B_3E3A_4993_41C5_B4841C095A36",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 6.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2C2F4A4D_3E3A_B997_41B3_2A8629B14E39_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.23,
   "hfov": 1.51
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_1BD6FB0D_3E0E_DF94_41C8_A871A84A07E7, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_17B68D13_3FFA_FBB3_41C5_219E786625AB, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 2.45,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.51,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2C2F4A4D_3E3A_B997_41B3_2A8629B14E39_0_HS_4_0.png",
      "width": 50,
      "height": 50
     }
    ]
   },
   "pitch": -3.26
  }
 ],
 "id": "overlay_1DCE7352_3E3A_4F8D_41C3_EA50F5ABC6EB",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2C2F4A4D_3E3A_B997_41B3_2A8629B14E39_0_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.26,
   "hfov": 1.51
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_178B8605_3E0F_C997_41B1_35651F880DE7, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_17A85D15_3FFA_FBB7_41BF_650FE552B6F3, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -2.88,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.51,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2C2F4A4D_3E3A_B997_41B3_2A8629B14E39_0_HS_5_0.png",
      "width": 50,
      "height": 50
     }
    ]
   },
   "pitch": -3.26
  }
 ],
 "id": "overlay_1DE6642D_3E3A_4997_41C6_2F2182D66B0F",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2C2F4A4D_3E3A_B997_41B3_2A8629B14E39_0_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.26,
   "hfov": 1.51
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_177C0A63_3E0D_F993_41C7_41E080789D0F, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_17AB0D1B_3FFA_FBB3_41AB_557E1419FA94, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -7.69,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.51,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2C2F4A4D_3E3A_B997_41B3_2A8629B14E39_0_HS_6_0.png",
      "width": 50,
      "height": 50
     }
    ]
   },
   "pitch": -3.05
  }
 ],
 "id": "overlay_1D3EF4F4_3E3A_4A75_41A7_29FABA4DFA8B",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -7.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2C2F4A4D_3E3A_B997_41B3_2A8629B14E39_0_HS_6_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.05,
   "hfov": 1.51
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_183067AD_3E0B_D694_41B1_3AEB518070CA, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_17AACD1D_3FFA_FBB7_41B7_AEEBF39C1C43, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 7.43,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.51,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2C2F4A4D_3E3A_B997_41B3_2A8629B14E39_0_HS_7_0.png",
      "width": 50,
      "height": 50
     }
    ]
   },
   "pitch": 1.14
  }
 ],
 "id": "overlay_1D53B5EB_3E3A_4A9C_41C6_D77B23ACDD88",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 7.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2C2F4A4D_3E3A_B997_41B3_2A8629B14E39_0_HS_7_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 1.14,
   "hfov": 1.51
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_17F58827_3E0E_5993_41C3_6BE5989CFD56, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_17AA6D1F_3FFA_FBB3_41C9_B5591EA75168, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 1.87,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.51,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2C2F4A4D_3E3A_B997_41B3_2A8629B14E39_0_HS_8_0.png",
      "width": 50,
      "height": 50
     }
    ]
   },
   "pitch": 1.18
  }
 ],
 "id": "overlay_1D7366B8_3E3A_56FC_41CB_5786A11101EA",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2C2F4A4D_3E3A_B997_41B3_2A8629B14E39_0_HS_8_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 1.18,
   "hfov": 1.51
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_1BE79D73_3E0E_7A73_41C3_E08C4D0056CF, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_17AD2D25_3FFA_FB97_41C6_31BF2FC7CAB5, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -3.01,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.51,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2C2F4A4D_3E3A_B997_41B3_2A8629B14E39_0_HS_9_0.png",
      "width": 50,
      "height": 50
     }
    ]
   },
   "pitch": 1.21
  }
 ],
 "id": "overlay_1A8EF7D3_3E3A_568C_41AE_C0DD08C3F1B8",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -3.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2C2F4A4D_3E3A_B997_41B3_2A8629B14E39_0_HS_9_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 1.21,
   "hfov": 1.51
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_17488A8C_3E0A_7E95_41BA_74F7785060CA, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_17ACFD27_3FFA_FB93_41B5_4C9A16680638, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -7.9,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.51,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2C2F4A4D_3E3A_B997_41B3_2A8629B14E39_0_HS_10_0.png",
      "width": 50,
      "height": 50
     }
    ]
   },
   "pitch": 1.28
  }
 ],
 "id": "overlay_1AC438AE_3E3A_5A95_41C9_37662BD489DC",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -7.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2C2F4A4D_3E3A_B997_41B3_2A8629B14E39_0_HS_10_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 1.28,
   "hfov": 1.51
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_172F226A_3E0A_499C_41C1_920BE0ECD72E, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_17AF8D29_3FFA_FB9F_41B8_FDDCB7F77615, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 6.1,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.5,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2C2F4A4D_3E3A_B997_41B3_2A8629B14E39_0_HS_11_0.png",
      "width": 50,
      "height": 50
     }
    ]
   },
   "pitch": -7.63
  }
 ],
 "id": "overlay_1DD56BED_3E3A_DE97_4198_211239C8D333",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 6.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2C2F4A4D_3E3A_B997_41B3_2A8629B14E39_0_HS_11_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -7.63,
   "hfov": 1.5
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2CFD31DB_3E3A_4ABC_41BF_0DDB1A254B82, this.camera_52F25966_4127_6D27_41AA_374871E6953A); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 11.41,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.44,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2C2F4A4D_3E3A_B997_41B3_2A8629B14E39_0_HS_12_0.png",
      "width": 81,
      "height": 85
     }
    ]
   },
   "pitch": -2.36
  }
 ],
 "id": "overlay_1E261D4C_3E3D_DB95_41C1_0B2E0A301193",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 11.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2C2F4A4D_3E3A_B997_41B3_2A8629B14E39_0_HS_12_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.36,
   "hfov": 2.44
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "BACK"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2C2F4A4D_3E3A_B997_41B3_2A8629B14E39_0_HS_13_0.png",
      "width": 111,
      "height": 47
     }
    ]
   },
   "pitch": -3.49,
   "yaw": 11.79,
   "hfov": 3.34,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_1E2AE9B8_3E3E_7AFD_419C_7DE8DDE40B9A",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 11.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2C2F4A4D_3E3A_B997_41B3_2A8629B14E39_0_HS_13_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -3.49,
   "hfov": 3.34
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_18CD2B6F_3FF6_5F93_41AC_6105CB6FC9AE, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_18CD3B70_3FF6_5F8D_41BF_5B75BD63E41D, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 1.87,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.51,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2C2F4A4D_3E3A_B997_41B3_2A8629B14E39_0_HS_14_0.png",
      "width": 50,
      "height": 50
     }
    ]
   },
   "pitch": 1.18
  }
 ],
 "id": "overlay_18B58BDF_3FF6_5EB3_4177_7E81E9CCEB81",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2C2F4A4D_3E3A_B997_41B3_2A8629B14E39_0_HS_14_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 1.18,
   "hfov": 1.51
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_167C7068_3E0A_499C_41BA_10ED3C5FFF13, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_167FB068_3E0A_499C_41CD_54088F7B26E0, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -7.35,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.5,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2C2F4A4D_3E3A_B997_41B3_2A8629B14E39_0_HS_15_0.png",
      "width": 50,
      "height": 50
     }
    ]
   },
   "pitch": -7.35
  }
 ],
 "id": "overlay_169AD106_3E0A_4B94_419B_351C314217D6",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -7.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2C2F4A4D_3E3A_B997_41B3_2A8629B14E39_0_HS_15_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -7.35,
   "hfov": 1.5
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2F59D4E2_3E3A_CA8D_41CE_06DD364A9706, this.camera_525A486B_4127_6B2D_41AD_7A00AF8C55CF); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 0.9,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.39,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_4F91DFCA_4127_256E_41A7_FD29DD640F80_1_HS_0_0.png",
      "width": 64,
      "height": 36
     }
    ]
   },
   "pitch": -7.18
  }
 ],
 "id": "overlay_4F910FCA_4127_256E_41CE_FBC356D2ABBE",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_4F91DFCA_4127_256E_41A7_FD29DD640F80_1_HS_0_0_0_map.gif",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -7.18,
   "hfov": 2.39
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4FD7B14C_4121_DD6B_41A5_91D826F7F644, this.camera_52444891_4127_6BFD_41C3_71A0B159EB81); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 0.79,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.95,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_4F91DFCA_4127_256E_41A7_FD29DD640F80_1_HS_1_0.png",
      "width": 52,
      "height": 47
     }
    ]
   },
   "pitch": 0.17
  }
 ],
 "id": "overlay_4F911FCA_4127_256E_418D_B4EB3B5C436F",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_4F91DFCA_4127_256E_41A7_FD29DD640F80_1_HS_1_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 0.17,
   "hfov": 1.95
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_1DB9107B_3E0E_4A73_41B9_C79840BD7088, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_19CDC5F0_3E15_CA8D_4196_5E6FBCE77030, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -4.93,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.06,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_4E6B7216_4123_5EE6_41BB_C5340D2146A7_1_HS_1_0.png",
      "width": 68,
      "height": 60
     }
    ]
   },
   "pitch": -1.31
  }
 ],
 "id": "overlay_4E6B4217_4123_5EE6_413C_575BCFD4F8A0",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_4E6B7216_4123_5EE6_41BB_C5340D2146A7_1_HS_1_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -1.31,
   "hfov": 2.06
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_1D49B103_3E0E_4B8C_41A7_AC0D1B1CDEA3, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_19CCC5F2_3E15_CA8D_41CC_3073EB7338E2, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 3.33,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.05,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_4E6B7216_4123_5EE6_41BB_C5340D2146A7_1_HS_3_0.png",
      "width": 68,
      "height": 60
     }
    ]
   },
   "pitch": 4.83
  }
 ],
 "id": "overlay_4E6B2217_4123_5EE6_41CF_830C1CD4BF7C",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 3.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_4E6B7216_4123_5EE6_41BB_C5340D2146A7_1_HS_3_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": 4.83,
   "hfov": 2.05
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_193FD649_3E15_C99F_41A0_B11C47334635, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_19CA85FB_3E15_CA73_41C6_6DA1A2E5DC3D, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -3.8,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.04,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_4E6B7216_4123_5EE6_41BB_C5340D2146A7_1_HS_5_0.png",
      "width": 68,
      "height": 60
     }
    ]
   },
   "pitch": -6.81
  }
 ],
 "id": "overlay_4E6B0217_4123_5EE6_41CF_57051AB20544",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -3.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_4E6B7216_4123_5EE6_41BB_C5340D2146A7_1_HS_5_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -6.81,
   "hfov": 2.04
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4C6515CB_4121_256E_41C4_1F7F3590FB77, this.camera_558DFBDC_4127_6D6A_41CA_4A2620B2E550); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -0.2,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.44,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_4E6B7216_4123_5EE6_41BB_C5340D2146A7_1_HS_8_0.png",
      "width": 81,
      "height": 82
     }
    ]
   },
   "pitch": -3.26
  }
 ],
 "id": "overlay_4E6AF217_4123_5EE6_41C1_502DBE2649A5",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_4E6B7216_4123_5EE6_41BB_C5340D2146A7_1_HS_8_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.26,
   "hfov": 2.44
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "BACK"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_4E6B7216_4123_5EE6_41BB_C5340D2146A7_1_HS_9_0.png",
      "width": 111,
      "height": 43
     }
    ]
   },
   "pitch": -4.44,
   "yaw": 0.05,
   "hfov": 3.33,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_4E6AD217_4123_5EE6_417A_1FC1AA06A3FD",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_4E6B7216_4123_5EE6_41BB_C5340D2146A7_1_HS_9_0_map.gif",
      "width": 41,
      "height": 16
     }
    ]
   },
   "pitch": -4.44,
   "hfov": 3.33
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_1BEFA1EF_3E0E_4A93_4158_C7A881589B40, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_1BEFD1F0_3E0E_4A8D_41C4_E76649C6A9EA, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 8.21,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.05,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_4E6B7216_4123_5EE6_41BB_C5340D2146A7_1_HS_13_0.png",
      "width": 68,
      "height": 60
     }
    ]
   },
   "pitch": 4.86
  }
 ],
 "id": "overlay_4E6A6218_4123_5EEA_4171_8768F2988E6C",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 8.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_4E6B7216_4123_5EE6_41BB_C5340D2146A7_1_HS_13_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": 4.86,
   "hfov": 2.05
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_1A90A96A_3E0E_DB9D_41C9_F19694D83227, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_1A90B96A_3E0E_DB9D_41B1_1EB8F2061541, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 4.94,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.06,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_4E6B7216_4123_5EE6_41BB_C5340D2146A7_1_HS_14_0.png",
      "width": 68,
      "height": 60
     }
    ]
   },
   "pitch": -1.11
  }
 ],
 "id": "overlay_4E6A3218_4123_5EEA_41CC_616FB9167CF4",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 4.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_4E6B7216_4123_5EE6_41BB_C5340D2146A7_1_HS_14_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -1.11,
   "hfov": 2.06
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_17D9C431_3E0A_498F_41C7_E10AA8F0A52F, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_17DA2431_3E0A_498F_41BF_F5D6D55E0570, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 5.93,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.04,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_4E6B7216_4123_5EE6_41BB_C5340D2146A7_1_HS_15_0.png",
      "width": 68,
      "height": 60
     }
    ]
   },
   "pitch": -6.98
  }
 ],
 "id": "overlay_4E65E219_4123_5EEA_418B_D1C0A1BA077A",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 5.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_4E6B7216_4123_5EE6_41BB_C5340D2146A7_1_HS_15_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -6.98,
   "hfov": 2.04
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_1814F8DF_3E1A_DAB3_41CB_ADB6722C8F17, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_182E9D31_3E1E_BB8F_41AB_49E8CCF65BB1, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -2.67,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.05,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_4E6B7216_4123_5EE6_41BB_C5340D2146A7_1_HS_19_0.png",
      "width": 68,
      "height": 60
     }
    ]
   },
   "pitch": 4.76
  }
 ],
 "id": "overlay_4E65C219_4123_5EEA_41B0_0B28396F0015",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_4E6B7216_4123_5EE6_41BB_C5340D2146A7_1_HS_19_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": 4.76,
   "hfov": 2.05
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_4EDCEB76_4121_6D27_415A_2C5EA113052A, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_4EDC8B76_4121_6D27_41BE_39231DD6E09E, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -7.49,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.05,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_4E6B7216_4123_5EE6_41BB_C5340D2146A7_1_HS_22_0.png",
      "width": 68,
      "height": 60
     }
    ]
   },
   "pitch": 4.66
  }
 ],
 "id": "overlay_513E8C17_4121_6AE5_41CF_C88226EB95B7",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -7.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_4E6B7216_4123_5EE6_41BB_C5340D2146A7_1_HS_22_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": 4.66,
   "hfov": 2.05
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_1BEADEBC_3E17_D6F4_41B2_3C1D28068696, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_14236E50_3E0A_798D_41B8_DB74A86DBB4B, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -1.6,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.74,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD626EF_3E3A_7693_41B5_6D78D09FCAE0_0_HS_0_0.png",
      "width": 58,
      "height": 51
     }
    ]
   },
   "pitch": -7.61
  }
 ],
 "id": "overlay_202B0EF9_3E1A_B67F_41A9_7EF1042CAD1D",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD626EF_3E3A_7693_41B5_6D78D09FCAE0_0_HS_0_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -7.61,
   "hfov": 1.74
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_182B4B6A_3E16_5F9D_41CC_B7A82E635989, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_1424BE52_3E0A_798D_41B8_9F8FB87A7048, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -5.63,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.74,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD626EF_3E3A_7693_41B5_6D78D09FCAE0_0_HS_1_0.png",
      "width": 58,
      "height": 51
     }
    ]
   },
   "pitch": -7.61
  }
 ],
 "id": "overlay_20B9734F_3E1A_4F94_41AF_CC5EF3AB4907",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -5.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD626EF_3E3A_7693_41B5_6D78D09FCAE0_0_HS_1_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -7.61,
   "hfov": 1.74
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_17400CF6_3E16_7A75_41CC_7ED2C76B83F2, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_1425FE54_3E0A_79B5_41C7_5B6A30EDD994, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 7.28,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.75,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD626EF_3E3A_7693_41B5_6D78D09FCAE0_0_HS_2_0.png",
      "width": 58,
      "height": 51
     }
    ]
   },
   "pitch": -2.94
  }
 ],
 "id": "overlay_202D63E8_3E1A_4E9C_41BC_F69E34471809",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 7.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD626EF_3E3A_7693_41B5_6D78D09FCAE0_0_HS_2_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -2.94,
   "hfov": 1.75
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_1BF49BED_3E16_DE97_41C4_88037FBD5619, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_14271E55_3E0A_79B7_41C3_F12A36FBBF08, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 2.8,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.75,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD626EF_3E3A_7693_41B5_6D78D09FCAE0_0_HS_3_0.png",
      "width": 58,
      "height": 51
     }
    ]
   },
   "pitch": -2.94
  }
 ],
 "id": "overlay_2025B495_3E1A_4AB4_41B8_2CC2C13BFADD",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD626EF_3E3A_7693_41B5_6D78D09FCAE0_0_HS_3_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -2.94,
   "hfov": 1.75
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_1A152B36_3E16_7FF4_41A6_7C02D35396B6, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_14285E57_3E0A_79B3_41CB_21C59752EFDF, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -1.84,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.75,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD626EF_3E3A_7693_41B5_6D78D09FCAE0_0_HS_4_0.png",
      "width": 58,
      "height": 51
     }
    ]
   },
   "pitch": -3.07
  }
 ],
 "id": "overlay_203F051B_3E1A_4BBC_41C0_5A04F0D60974",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD626EF_3E3A_7693_41B5_6D78D09FCAE0_0_HS_4_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -3.07,
   "hfov": 1.75
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_19BE2FB4_3E16_F6F5_41A2_4BF22E2EF046, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_1427CE59_3E0A_79BF_41B8_79D81C611E11, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -6.1,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.75,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD626EF_3E3A_7693_41B5_6D78D09FCAE0_0_HS_5_0.png",
      "width": 58,
      "height": 51
     }
    ]
   },
   "pitch": -2.83
  }
 ],
 "id": "overlay_203055CB_3E1A_4A93_41B4_4B16EB0F4155",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -6.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD626EF_3E3A_7693_41B5_6D78D09FCAE0_0_HS_5_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -2.83,
   "hfov": 1.75
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_19595BC9_3E15_DE9F_41B7_2CB0740C4F90, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_1428EE5A_3E0A_79BD_4187_4776634BD8B0, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 7.48,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.75,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD626EF_3E3A_7693_41B5_6D78D09FCAE0_0_HS_6_0.png",
      "width": 58,
      "height": 51
     }
    ]
   },
   "pitch": 1.13
  }
 ],
 "id": "overlay_20442658_3E1A_49BD_41CD_206D78420FC0",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 7.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD626EF_3E3A_7693_41B5_6D78D09FCAE0_0_HS_6_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": 1.13,
   "hfov": 1.75
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_14456BC8_3E1A_BE9C_41CD_D9905E086217, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_142B7E5D_3E0A_79B7_41C2_8FB56929C63F, null, null, null, null, false); this.showPopupPanoramaOverlay(this.popup_176B415F_3E15_CBB3_41BB_A3DD491C5372, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_142A3E5C_3E0A_79B5_41C8_F02AA801E73F, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 2.91,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.75,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD626EF_3E3A_7693_41B5_6D78D09FCAE0_0_HS_7_0.png",
      "width": 58,
      "height": 51
     }
    ]
   },
   "pitch": 1.23
  }
 ],
 "id": "overlay_2055A70B_3E1A_5793_415B_4DB18C549818",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD626EF_3E3A_7693_41B5_6D78D09FCAE0_0_HS_7_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": 1.23,
   "hfov": 1.75
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_1A308236_3E1A_C9F5_41CD_225A718E80F8, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_142C8E5F_3E0A_79B3_41A7_EC1DD318765A, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -1.87,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.75,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD626EF_3E3A_7693_41B5_6D78D09FCAE0_0_HS_8_0.png",
      "width": 58,
      "height": 51
     }
    ]
   },
   "pitch": 1.19
  }
 ],
 "id": "overlay_206B7795_3E1A_56B7_41C4_D94373F296F1",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD626EF_3E3A_7693_41B5_6D78D09FCAE0_0_HS_8_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": 1.19,
   "hfov": 1.75
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_1BE4E38B_3E17_CE93_41C3_9E6F1547ED14, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_142DDE60_3E0A_798D_41A3_0850E57145E7, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 3.04,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.74,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD626EF_3E3A_7693_41B5_6D78D09FCAE0_0_HS_9_0.png",
      "width": 58,
      "height": 51
     }
    ]
   },
   "pitch": -7.65
  }
 ],
 "id": "overlay_1F116E7A_3E16_767C_41C7_18E6620F7440",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 3.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD626EF_3E3A_7693_41B5_6D78D09FCAE0_0_HS_9_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -7.65,
   "hfov": 1.74
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_1621002B_3E1A_4993_41BE_A8A281C12FC1, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_142ECE62_3E0A_798D_4171_4820A52E9171, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -6.27,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.75,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD626EF_3E3A_7693_41B5_6D78D09FCAE0_0_HS_10_0.png",
      "width": 58,
      "height": 51
     }
    ]
   },
   "pitch": 1.19
  }
 ],
 "id": "overlay_20F8232A_3E16_4F9D_41B5_3E5CD447CA96",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -6.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD626EF_3E3A_7693_41B5_6D78D09FCAE0_0_HS_10_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": 1.19,
   "hfov": 1.75
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_1BE8C272_3E16_C98D_41A8_E452B9FD0889, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_142FEE64_3E0A_7995_41CA_62A3BA33E242, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 7.58,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.74,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD626EF_3E3A_7693_41B5_6D78D09FCAE0_0_HS_11_0.png",
      "width": 58,
      "height": 51
     }
    ]
   },
   "pitch": -7.78
  }
 ],
 "id": "overlay_1C98F96D_3E16_DB94_41B0_B0A232C311E8",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 7.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD626EF_3E3A_7693_41B5_6D78D09FCAE0_0_HS_11_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -7.78,
   "hfov": 1.74
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2D7F90F7_3E3A_4A73_41BE_3EFAB44624F4, this.camera_52CFAA08_4127_6EEA_41B4_7BE5343DC6B8); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -11.37,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.54,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD626EF_3E3A_7693_41B5_6D78D09FCAE0_0_HS_12_0.png",
      "width": 84,
      "height": 92
     }
    ]
   },
   "pitch": -1.61
  }
 ],
 "id": "overlay_20128FA5_3E16_7696_41C5_E0118C77D904",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -11.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD626EF_3E3A_7693_41B5_6D78D09FCAE0_0_HS_12_0_0_map.gif",
      "width": 16,
      "height": 17
     }
    ]
   },
   "pitch": -1.61,
   "hfov": 2.54
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "BACK"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD626EF_3E3A_7693_41B5_6D78D09FCAE0_0_HS_13_0.png",
      "width": 111,
      "height": 47
     }
    ]
   },
   "pitch": -2.81,
   "yaw": -11.08,
   "hfov": 3.34,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_20FF57AB_3E17_D693_41BE_77C10750A622",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -11.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD626EF_3E3A_7693_41B5_6D78D09FCAE0_0_HS_13_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -2.81,
   "hfov": 3.34
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2CD889F5_3E3A_BA77_41C2_CF63F5C9736B, this.camera_5557FB1F_4127_6EE6_41B6_B8C088A542D6); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 0.02,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.19,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2D7F90F7_3E3A_4A73_41BE_3EFAB44624F4_0_HS_0_0.png",
      "width": 107,
      "height": 61
     }
    ]
   },
   "pitch": -6.67
  }
 ],
 "id": "overlay_20216BC1_3EF7_BE8C_41C0_D978E50774EB",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2D7F90F7_3E3A_4A73_41BE_3EFAB44624F4_0_HS_0_0_0_map.gif",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -6.67,
   "hfov": 3.19
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2CEC47F5_3E3A_5676_41CC_026522C784D8, this.camera_5575AAE6_4127_6F26_41C4_C6BC7C51E7B3); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -8.63,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.89,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2D7F90F7_3E3A_4A73_41BE_3EFAB44624F4_0_HS_2_0.png",
      "width": 63,
      "height": 72
     }
    ]
   },
   "pitch": 0.37
  }
 ],
 "id": "overlay_23D64964_3E1B_BB95_41C4_4C93B09597CD",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -8.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2D7F90F7_3E3A_4A73_41BE_3EFAB44624F4_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 18
     }
    ]
   },
   "pitch": 0.37,
   "hfov": 1.89
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2CD626EF_3E3A_7693_41B5_6D78D09FCAE0, this.camera_55661B03_4127_6EDE_41C6_B6BDE3E664A8); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 9.05,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.89,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2D7F90F7_3E3A_4A73_41BE_3EFAB44624F4_0_HS_3_0.png",
      "width": 63,
      "height": 72
     }
    ]
   },
   "pitch": 0.44
  }
 ],
 "id": "overlay_1F024952_3E35_BB8C_41C2_9C1E8DD76E47",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 9.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2D7F90F7_3E3A_4A73_41BE_3EFAB44624F4_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 18
     }
    ]
   },
   "pitch": 0.44,
   "hfov": 1.89
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_1AAB2148_3E0A_4B9D_41A5_3A75E641CA3D, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_183115DE_3E15_CAB5_41B4_B546895BC26D, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 7.38,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.09,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_4FD7B14C_4121_DD6B_41A5_91D826F7F644_0_HS_1_0.png",
      "width": 69,
      "height": 139
     }
    ]
   },
   "pitch": 4.88
  }
 ],
 "id": "overlay_4FD7C14D_4121_DD65_41CD_331DF564672C",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 7.38,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_4FD7B14C_4121_DD6B_41A5_91D826F7F644_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 32
     }
    ]
   },
   "pitch": 4.88,
   "hfov": 2.09
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4F91DFCA_4127_256E_41A7_FD29DD640F80, this.camera_55939B99_4127_6DEA_41B5_C51EA6F59E5F); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 0.35,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.91,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_4FD7B14C_4121_DD6B_41A5_91D826F7F644_1_HS_6_0.png",
      "width": 97,
      "height": 96
     }
    ]
   },
   "pitch": -3.95
  }
 ],
 "id": "overlay_4FD7E14D_4121_DD65_41B1_195D6C53A818",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_4FD7B14C_4121_DD6B_41A5_91D826F7F644_1_HS_6_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.95,
   "hfov": 2.91
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "BACK"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_4FD7B14C_4121_DD6B_41A5_91D826F7F644_0_HS_7_0.png",
      "width": 111,
      "height": 43
     }
    ]
   },
   "pitch": -5.26,
   "yaw": 0.73,
   "hfov": 3.33,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_4FD7014D_4121_DD65_41C4_E097C03C701E",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.73,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_4FD7B14C_4121_DD6B_41A5_91D826F7F644_0_HS_7_0_map.gif",
      "width": 41,
      "height": 16
     }
    ]
   },
   "pitch": -5.26,
   "hfov": 3.33
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_191C19DF_3E36_DAB3_41C4_2871D196C90A, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_191CF9DF_3E36_DAB3_41C8_3921C3322426, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -5.9,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.09,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_4FD7B14C_4121_DD6B_41A5_91D826F7F644_0_HS_10_0.png",
      "width": 69,
      "height": 139
     }
    ]
   },
   "pitch": -0.78
  }
 ],
 "id": "overlay_4FD7314D_4121_DD65_41CD_A6147E20AB61",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -5.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_4FD7B14C_4121_DD6B_41A5_91D826F7F644_0_HS_10_0_0_map.gif",
      "width": 16,
      "height": 32
     }
    ]
   },
   "pitch": -0.78,
   "hfov": 2.09
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_19A900DC_3E36_4AB5_41B9_B7B98AD8B281, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_19A940DC_3E36_4AB5_419C_515A44A24CA5, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 7.11,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.09,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_4FD7B14C_4121_DD6B_41A5_91D826F7F644_0_HS_11_0.png",
      "width": 69,
      "height": 139
     }
    ]
   },
   "pitch": -0.61
  }
 ],
 "id": "overlay_4FD7414D_4121_DD65_41C4_916B424E610E",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 7.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_4FD7B14C_4121_DD6B_41A5_91D826F7F644_0_HS_11_0_0_map.gif",
      "width": 16,
      "height": 32
     }
    ]
   },
   "pitch": -0.61,
   "hfov": 2.09
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_510B77B6_4121_2526_41CE_4EE0B9EF6E07, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_510B47B6_4121_2526_41CC_48B52EAEEAF6, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -6.79,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.09,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_4FD7B14C_4121_DD6B_41A5_91D826F7F644_0_HS_17_0.png",
      "width": 69,
      "height": 139
     }
    ]
   },
   "pitch": 4.68
  }
 ],
 "id": "overlay_51774812_4121_2AFE_41C6_EC4371075382",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -6.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_4FD7B14C_4121_DD6B_41A5_91D826F7F644_0_HS_17_0_0_map.gif",
      "width": 16,
      "height": 32
     }
    ]
   },
   "pitch": 4.68,
   "hfov": 2.09
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2CD889F5_3E3A_BA77_41C2_CF63F5C9736B, this.camera_52ED19B3_4127_6D3E_41BE_8E71BE6B83CD); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 0.84,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.2,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CFD31DB_3E3A_4ABC_41BF_0DDB1A254B82_0_HS_0_0.png",
      "width": 107,
      "height": 61
     }
    ]
   },
   "pitch": -5.55
  }
 ],
 "id": "overlay_215F2A6A_3EF6_599D_41CD_B44BEECF661A",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CFD31DB_3E3A_4ABC_41BF_0DDB1A254B82_0_HS_0_0_0_map.gif",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -5.55,
   "hfov": 3.2
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2C218AD1_3E3A_DE8C_41C3_85E76DE1BC79, this.camera_52E3198C_4127_6DEB_41AA_8A6AFB102E49); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 8.64,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.17,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CFD31DB_3E3A_4ABC_41BF_0DDB1A254B82_0_HS_1_0.png",
      "width": 72,
      "height": 59
     }
    ]
   },
   "pitch": 0.76
  }
 ],
 "id": "overlay_20855D33_3EF6_5BF3_41C3_08D319F060B2",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 8.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CFD31DB_3E3A_4ABC_41BF_0DDB1A254B82_0_HS_1_0_0_map.gif",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": 0.76,
   "hfov": 2.17
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2C2F4A4D_3E3A_B997_41B3_2A8629B14E39, this.camera_52DDA9DE_4127_6D66_41CE_B85C60D6E638); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -7.06,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.17,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CFD31DB_3E3A_4ABC_41BF_0DDB1A254B82_0_HS_2_0.png",
      "width": 72,
      "height": 59
     }
    ]
   },
   "pitch": 0.7
  }
 ],
 "id": "overlay_207DD401_3EF5_C98F_41B9_59950D828A0B",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -7.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CFD31DB_3E3A_4ABC_41BF_0DDB1A254B82_0_HS_2_0_0_map.gif",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": 0.7,
   "hfov": 2.17
  }
 ]
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_2CD889F5_3E3A_BA77_41C2_CF63F5C9736B_0_HS_0_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_24B31B64_3EFA_BF94_418A_A3A3AAC14570",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_2CD889F5_3E3A_BA77_41C2_CF63F5C9736B_0_HS_2_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_24B35B64_3EFA_BF94_4192_44BF7041BDDA",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_2CD889F5_3E3A_BA77_41C2_CF63F5C9736B_0_HS_3_0.png",
   "width": 400,
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_24B39B65_3EFA_BF94_41C2_E59725AE640F",
 "frameDuration": 41
},
{
 "colCount": 3,
 "frameCount": 9,
 "rowCount": 3,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_2E007ADD_3C1F_AD1D_41AB_459813FB0E74_1_HS_1_0.png",
   "width": 300,
   "height": 300
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2C4A2AC6_3C1F_AD6C_41B9_AD0F99F92AFE",
 "frameDuration": 62
},
{
 "colCount": 3,
 "frameCount": 9,
 "rowCount": 3,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_2E007ADD_3C1F_AD1D_41AB_459813FB0E74_1_HS_3_0.png",
   "width": 300,
   "height": 300
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2C4BFAC6_3C1F_AD6C_41C6_E79196E6EB91",
 "frameDuration": 62
},
{
 "colCount": 3,
 "frameCount": 9,
 "rowCount": 3,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_2F59D4E2_3E3A_CA8D_41CE_06DD364A9706_0_HS_0_0.png",
   "width": 330,
   "height": 180
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_120B333E_3E3E_4FF4_4193_FBBD962DE6BD",
 "frameDuration": 62
},
{
 "colCount": 3,
 "frameCount": 9,
 "rowCount": 3,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_2F59D4E2_3E3A_CA8D_41CE_06DD364A9706_1_HS_1_0.png",
   "width": 330,
   "height": 180
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_294C4B33_3E0E_BFF3_41AC_71DC612778C3",
 "frameDuration": 62
},
{
 "colCount": 3,
 "frameCount": 9,
 "rowCount": 3,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_2F59D4E2_3E3A_CA8D_41CE_06DD364A9706_0_HS_2_0.png",
   "width": 330,
   "height": 180
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_1A891F68_3E35_D79D_41AC_BFF80B028146",
 "frameDuration": 62
},
{
 "colCount": 3,
 "frameCount": 9,
 "rowCount": 3,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_2D09BDD0_3C3E_6764_4195_5C239A573862_1_HS_0_0.png",
   "width": 330,
   "height": 180
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2D8A52AB_3C3A_FD24_41B6_96594203791E",
 "frameDuration": 62
}],
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "class": "Player",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "mouseWheelEnabled": true,
 "scripts": {
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "unregisterKey": function(key){  delete window[key]; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "existsKey": function(key){  return key in window; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "registerKey": function(key, value){  window[key] = value; },
  "getKey": function(key){  return window[key]; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "backgroundPreloadEnabled": true,
 "scrollBarMargin": 2,
 "width": "100%",
 "defaultVRPointer": "laser",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
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
