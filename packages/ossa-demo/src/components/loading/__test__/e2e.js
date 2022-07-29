/// <reference types="Cypress" />

//author by hzxuxinya
//Date on 2019/07/17
//Page in Loading

describe("Loading Testing", function () {
  //加载测试用例
  context("Loading Testing", function () {
    before(function () {
      // 进入Loading页
      cy.visit("#/components/loading/demo/index");
    });

    it("solution #1: 默认loading-样式", function () {
      cy.get(".ossa-loading")
        .eq(0)
        .find("taro-view-core")
        .and(($loadingNormal) => {
          //颜色
          expect($loadingNormal[0])
            .to.have.css("border-color")
            .eq("rgb(221, 26, 33) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0)");
          //线条宽度
          const loadingWidth = parseFloat($loadingNormal.css("border-width"));
          expect(loadingWidth).to.be.closeTo(2 / 2, 1);
          //TODO：顺时针检查
        });
    });

    it("solution #2: 自定义大小loading-样式", function () {
      cy.get(".ossa-loading")
        .eq(1)
        .find("taro-view-core")
        .and(($loadingSize) => {
          //颜色
          expect($loadingSize[0])
            .to.have.css("border-color")
            .eq("rgb(221, 26, 33) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0)");
          //线条宽度
          const width = parseFloat($loadingSize.css("border-width"));
          expect(width).to.be.closeTo(2 / 2, 1);
          //宽高相等
          const loadingWidth = parseFloat($loadingSize.css("width"));
          const loadingHeight = parseFloat($loadingSize.css("height"));
          expect(loadingWidth).to.be.eq(loadingHeight);
        });
    });

    it("solution #3: 自定义颜色loading-样式", function () {
      cy.get(".ossa-loading")
        .eq(2)
        .find("taro-view-core")
        .and(($loadingColor) => {
          //颜色
          expect($loadingColor[0])
            .to.have.css("border-color")
            .eq("rgb(0, 0, 255) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0)");
          //线条宽度
          const loadingWidth = parseFloat($loadingColor.css("border-width"));
          expect(loadingWidth).to.be.closeTo(2 / 2, 1);
        });
    });
  });
});
