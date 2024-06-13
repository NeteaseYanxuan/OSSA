/// <reference types="Cypress" />

//author by hzxuxinya
//Date on 2019/07/26
//Page in Search

describe("Search Testing", function () {
  //搜索导航栏测试用例
  context("Search Normal Testing", function () {
    before(function () {
      // 进入Search页
      cy.visit("#/components/search/demo/index");
    });

    it("solution #1: 搜索栏-普通状态", function () {
      cy.get(".ossa-search.ossa-search--show-split-line")
        //搜索外框
        .should(($search) => {
          //背景色
          expect($search)
            .to.have.css("background-color")
            .eq("rgb(250, 250, 250)");
          //padding
          const paddingTop = parseFloat($search.css("padding-top"));
          const paddingRight = parseFloat($search.css("padding-right"));
          expect(paddingTop).to.be.closeTo(12 / 2, 1);
          expect(paddingRight).to.be.closeTo(30 / 2, 1);
        })
        .find("taro-view-core")
        //搜索框
        .should(($searchBody) => {
          //圆角
          const radius = parseFloat($searchBody.css("border-radius"));
          expect(radius).to.be.closeTo(8 / 2, 1);
          //背景色
          expect($searchBody)
            .to.have.css("background-color")
            .eq("rgb(237, 237, 237)");
          //字体颜色
          //1.这里文字颜色要分类别：应该检查输入文本颜色 #333333 hzwangjing1
          //expect($searchBody).to.have.css('color').eq('rgb(127, 127, 127)')
          expect($searchBody).to.have.css("color").eq("rgb(51, 51, 51)");
          //字号
          const fontSize = parseFloat($searchBody.css("font-size"));
          expect(fontSize).to.be.closeTo(28 / 2, 1);
          //宽高
          const width = parseFloat($searchBody.css("width"));
          const height = parseFloat($searchBody.css("height"));
          // expect(width).to.be.closeTo(690 / 2 - 30, 1); //这里30是demo 左右边距
          expect(height).to.be.closeTo(64 / 2, 1);
        });

      cy.get(".ossa-search__placeholder") //2.这里应该检查一下placeholder文字颜色 #7f7f7f hzwangjing1
        .should("have.css", "text-align", "center");
    });

    it("solution #2: 搜索栏-聚焦操作", function () {
      cy.get(".ossa-search.ossa-search--show-split-line")
        .click()
        .find("taro-text-core")
        .should(($searchMousedown) => {
          const cancelName = $searchMousedown[0].className;
          expect(cancelName).to.match(/--cancel/);
          //文案检查
          expect($searchMousedown).to.contain("取消");
        });
    });

    it("solution #3: 搜索栏-输入操作", function () {
      cy.get(".ossa-search.ossa-search--show-split-line")
        .click()
        .find("input")
        .type("test123456test123456test123456test123456");
      cy.get(".ossa-icon--delete-input").should(
        "have.css",
        "color",
        "rgb(204, 204, 204)"
      );
    });

    it("solution #4: 搜索栏-清空操作", function () {
      cy.get(".ossa-search.ossa-search--show-split-line")
        .click()
        .find("input")
        .type("test123456test123456test123456test123456");
      cy.get(".ossa-icon--delete-input").click();
      cy.get(".ossa-search.ossa-search--show-split-line")
        .find("input")
        .should("have.value", "");
    });

    it("solution #5: 搜索栏-取消操作", function () {
      cy.get(".ossa-search.ossa-search--show-split-line")
        .click()
        .find("input")
        .type("test123456test123456test123456test123456");
      cy.get(".ossa-search--cancel").click();
      cy.get(".ossa-search--show-split-line")
        .find("taro-text-core")
        .contains("搜索商品，共X款好物");
    });
  });
});
