/// <reference types="Cypress" />

//author by hzxuxinya
//Date on 2019/07/29
//Page in DatePicker

describe("DatePicker Testing", function () {
  //时间选择器测试用例
  context("DatePicker Testing", function () {
    before(function () {
      // 进入DatePicker页
      cy.visit("#/components/datePicker/demo/index");
    });

    it("solution #1: picker-样式", function () {
      cy.get(".ossa-date-picker__trigger").eq(0).click();
      cy.get(".picker.picker-popup.picker-popup--show")
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
      cy.get(".picker-popup__header")
        .eq(0)
        .should(($tab) => {
          //浮层头部高度
          const tabWidth = parseFloat($tab.css("height"));
          expect(tabWidth).to.be.closeTo(90 / 2, 1);
        })
        .find("taro-view-core")
        .should(($header) => {
          //包含2个按钮
          expect($header).to.have.length(2);
          const cancelBtn = $header[0].className;
          const confirmBtn = $header[1].className;
          expect(cancelBtn).to.be.match(/__btn-cancel/);
          expect(confirmBtn).to.be.match(/__btn-confirm/);
        });
      cy.get(".picker-popup__body")
        .eq(0)
        //浮层内容非空
        .find("taro-view-core")
        .should(($pickerBodyContent) => {
          expect($pickerBodyContent.length).not.be.eq(0);
        });
    });

    it("solution #2: 时间-确定取消功能", function () {
      //点击取消窗口回收
      cy.get(".picker-popup__btn-cancel").eq(0).click().wait(1000);
      cy.get(".picker.picker-popup.picker-popup--show").should(
        "not.have.css",
        "visibility",
        "visible"
      );
      //点击出浮层
      cy.get(".ossa-date-picker__trigger").eq(0).click();
      //点击确定窗口回收
      cy.get(".picker-popup__btn-confirm").eq(0).click();
      cy.get(".picker.picker-popup.picker-popup--show")
        //选择器浮层隐藏
        .should("not.have.css", "visibility", "visible");
      //TODO: console中value获取不到，验证不到确定的数据准确性

      // //列表内容数量验证
      // cy
      //   .get('.picker-group__items').eq(0)
      //   .find('taro-view-core')
      //   .should(($pickerLeft) => {
      //     expect($pickerLeft).to.have.length(24)
      //   })
      // cy
      //   .get('.picker-group__items').eq(1)
      //   .find('taro-view-core')
      //   .should(($pickeerRight) => {
      //     expect($pickeerRight).to.have.length(60)
      //   })
    });

    it("solution #3: 日期-样式", function () {
      cy.get(".ossa-date-picker__trigger").eq(1).click();
      cy.get(".picker.picker-popup.picker-popup--show")
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
      cy.get(".picker-popup__header")
        .eq(1)
        .should(($tab) => {
          //浮层头部高度
          const tabWidth = parseFloat($tab.css("height"));
          expect(tabWidth).to.be.closeTo(90 / 2, 1);
        })
        .find("taro-view-core")
        .should(($header) => {
          //包含2个按钮
          expect($header).to.have.length(2);
          const cancelBtn = $header[0].className;
          const confirmBtn = $header[1].className;
          expect(cancelBtn).to.be.match(/__btn-cancel/);
          expect(confirmBtn).to.be.match(/__btn-confirm/);
        });
      cy.get(".picker-popup__body")
        .eq(1)
        //浮层内容非空
        .find("taro-view-core")
        .should(($pickerBodyContent) => {
          expect($pickerBodyContent.length).not.be.eq(0);
        });
    });

    it("solution #4: 日期-确定取消功能", function () {
      //点击取消窗口回收
      cy.get(".picker-popup__btn-cancel").eq(1).click().wait(1000);
      cy.get(".picker.picker-popup.picker-popup--show").should(
        "not.have.css",
        "visibility",
        "visible"
      );
      //点击出浮层
      cy.get(".ossa-date-picker__trigger").eq(1).click().wait(1000);
      //点击确定窗口回收
      cy.get(".picker-popup__btn-confirm").eq(1).click();
      cy.get(".picker.picker-popup.picker-popup--show")
        //选择器浮层隐藏
        .should("not.have.css", "visibility", "visible");
      //TODO: console中value获取不到，验证不到确定的数据准确性
    });

    it("solution #5: 年月-样式", function () {
      cy.get(".ossa-date-picker__trigger").eq(2).click();
      cy.get(".picker.picker-popup.picker-popup--show")
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
      cy.get(".picker-popup__header")
        .eq(2)
        .should(($tab) => {
          //浮层头部高度
          const tabWidth = parseFloat($tab.css("height"));
          expect(tabWidth).to.be.closeTo(90 / 2, 1);
        })
        .find("taro-view-core")
        .should(($header) => {
          //包含2个按钮
          expect($header).to.have.length(2);
          const cancelBtn = $header[0].className;
          const confirmBtn = $header[1].className;
          expect(cancelBtn).to.be.match(/__btn-cancel/);
          expect(confirmBtn).to.be.match(/__btn-confirm/);
        });
      cy.get(".picker-popup__body")
        .eq(2)
        //浮层内容非空
        .find("taro-view-core")
        .should(($pickerBodyContent) => {
          expect($pickerBodyContent.length).not.be.eq(0);
        });
    });

    it("solution #6: 年月-确定取消功能", function () {
      //点击取消窗口回收
      cy.get(".picker-popup__btn-cancel").eq(2).click().wait(1000);
      cy.get(".picker.picker-popup.picker-popup--show").should(
        "not.have.css",
        "visibility",
        "visible"
      );
      //点击出浮层
      cy.get(".ossa-date-picker__trigger").eq(2).click().wait(1000);
      //点击确定窗口回收
      cy.get(".picker-popup__btn-confirm").eq(2).click();
      cy.get(".picker.picker-popup.picker-popup--show")
        //选择器浮层隐藏
        .should("not.have.css", "visibility", "visible");
      //TODO: console中value获取不到，验证不到确定的数据准确性
    });

    it("solution #7: 日期&时间-样式", function () {
      cy.get(".ossa-date-picker__trigger").eq(3).click();
      cy.get(".picker.picker-popup.picker-popup--show")
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
      cy.get(".picker-popup__header")
        .eq(3)
        .should(($tab) => {
          //浮层头部高度
          const tabWidth = parseFloat($tab.css("height"));
          expect(tabWidth).to.be.closeTo(90 / 2, 1);
        })
        .find("taro-view-core")
        .should(($header) => {
          //包含2个按钮
          expect($header).to.have.length(2);
          const cancelBtn = $header[0].className;
          const confirmBtn = $header[1].className;
          expect(cancelBtn).to.be.match(/__btn-cancel/);
          expect(confirmBtn).to.be.match(/__btn-confirm/);
        });
      cy.get(".picker-popup__body")
        .eq(3)
        //浮层内容非空
        .find("taro-view-core")
        .should(($pickerBodyContent) => {
          expect($pickerBodyContent.length).not.be.eq(0);
        });
    });

    it("solution #8: 日期&时间-确定取消功能", function () {
      //点击取消窗口回收
      cy.get(".picker-popup__btn-cancel").eq(3).click().wait(1000);
      cy.get(".picker.picker-popup.picker-popup--show").should(
        "not.have.css",
        "visibility",
        "visible"
      );
      //点击出浮层
      cy.get(".ossa-date-picker__trigger").eq(3).click();
      //点击确定窗口回收
      cy.get(".picker-popup__btn-confirm").eq(3).click();
      cy.get(".picker.picker-popup.picker-popup--show")
        //选择器浮层隐藏
        .should("not.have.css", "visibility", "visible");
      //TODO: console中value获取不到，验证不到确定的数据准确性
    });
  });
});
