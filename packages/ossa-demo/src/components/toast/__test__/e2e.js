/// <reference types="Cypress" />

//author by hzxuxinya
//Date on 2019/07/29
//Page in Toast

describe("Toast Testing", function () {
  //轻提示测试用例
  context("Toast Testing", function () {
    before(function () {
      // 进入Toast页
      cy.visit("#/components/toast/demo/index");
    });

    it("solution #1: 基础-样式", function () {
      cy.get(".ossa-toast").should(($toastHidden) => {
        //默认不展示
        expect($toastHidden).to.have.css("display").eq("none");
      });

      //点击按钮
      cy.get(".ossa-button").eq(0).click();

      cy.get(".ossa-toast").should(($toast1) => {
        //toast展示
        const classname = $toast1[0].className;
        expect(classname).to.be.match(/--show/);

        //toast背景样式
        // toast 背景色 为 #000 透明度0.8 hzwangjing1
        //expect($toast1).to.have.css('background-color').eq('rgb(51, 51, 51)')
        expect($toast1)
          .to.have.css("background-color")
          .eq("rgba(0, 0, 0, 0.8)");

        expect($toast1).to.have.css("text-align").eq("center");

        const radius = parseFloat($toast1.css("border-radius"));
        expect(radius).to.be.closeTo(4 / 2, 1);
        expect($toast1).to.have.css("opacity").eq("1");
        //TODO:获取页面全部元素z-index，验证toast最高
        expect($toast1).to.have.css("z-index").eq("9999");
        //toast展示时间
        const transition = $toast1.css("transition");
        expect(transition).to.be.match(/3s/);
      });

      //   .find('span')
      //   .should(($toastText) => {
      //       //toast文字样式
      //       const classname = $toastText.className
      //       expect(classname).to.be.match(/toast__text/)
      //       expect($toastText).to.have.css('color').eq('rgb(255, 255, 255)')
      //       const fontSize = parseFloat($toastText.css(font-size))
      //       expect(fontSize).to.be.closeTo(28 / 2, 10)
      //   })

      //文本样式 单独拎出来 hzwangjing1
      //点击按钮
      cy.get(".ossa-button").eq(1).click();
      cy.get(".ossa-toast")
        .eq(0)
        .find("taro-text-core")
        .should(($toastText) => {
          //toast文字样式
          const classname = $toastText[0].className;
          expect(classname).to.be.match(/toast__text/);
          expect($toastText).to.have.css("color").eq("rgb(255, 255, 255)");
          const fontSize = parseFloat($toastText.css("font-size"));
          expect(fontSize).to.be.closeTo(28 / 2, 10);
        });
    });

    it("solution #2: 长文本-样式", function () {
      //点击按钮
      cy.get(".ossa-button").eq(1).click();

      cy.get(".ossa-toast")
        .eq(0)
        .should(($toast2) => {
          //toast最长宽度检查
          const width = parseFloat($toast2.css("width"));
          expect(width).to.be.closeTo(372 / 2, 10);
        });
    });
  });
});
