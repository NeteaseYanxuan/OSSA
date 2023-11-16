/// <reference types="Cypress" />

//author by hzxuxinya
//Date on 2019/07/31
//Page in Picker

describe("Picker Testing", function () {
  //picker测试用例
  context("Picker Testing", function () {
    before(function () {
      // 进入Picker页
      cy.visit("#/components/picker/demo/index");
    });

    it("solution #1: picker-样式", function () {
      cy.get(".ossa-picker__trigger").eq(0).click();
      cy.get(".ossa-picker-popup.ossa-picker-popup--show")
        //选择器浮层展示
        .should("have.css", "visibility", "visible")
        .find("taro-view-core")
        .should(($mask) => {
          //样式
          const mastClassname = $mask[0].className;
          expect(mastClassname).to.be.match(/picker-popup__mask/);
          //层级
          expect($mask).have.css("opacity").eq("1");
        });
      cy.get(".ossa-picker-popup__header")
        .eq(0)
        .find("taro-view-core")
        .should(($header) => {
          expect($header).to.have.length(3);
          const cancelBtn = $header[0].className;
          const title = $header[1].className;
          const confirmBtn = $header[2].className;
          expect(cancelBtn).to.be.match(/__btn-cancel/);
          expect(title).to.be.match(/__title/);
          expect(confirmBtn).to.be.match(/__btn-confirm/);
        });
      cy.get(".ossa-picker-popup__body")
        .eq(0)
        //浮层内容非空
        .find("taro-view-core")
        .should(($pickerBodyContent) => {
          expect($pickerBodyContent.length).not.be.eq(0);
        });
    });

    it("solution #2: picker-确定取消功能", function () {
      //点击取消窗口回收
      cy.get(".ossa-picker-popup__btn-cancel").eq(0).click().wait(1000);
      cy.get(".ossa-picker.ossa-picker-popup.ossa-picker-popup--show").should(
        "not.have.css",
        "visibility",
        "visible"
      );
      //点击出浮层
      cy.get(".ossa-picker__trigger").eq(0).click();
      //点击确定窗口回收
      cy.get(".ossa-picker-popup__btn-confirm").eq(0).click();
      cy.get(".ossa-picker.ossa-picker-popup.ossa-picker-popup--show")
        //选择器浮层隐藏
        .should("not.have.css", "visibility", "visible");
      //TODO: console中value获取不到，验证不到确定的数据准确性
      //TODO: 滑动后确定验证数据是否准确
    });
  });
});
