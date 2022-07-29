//// <reference types="Cypress" />

//author by hzhuangchong
//Date on 2019/07/22
//Page in Tabbar

describe("Tabbar Testing", function () {
  //矩形类测试用例
  context("Tabbar Normal Testing", function () {
    before(function () {
      // 进入Tabbar页
      cy.visit("#/components/tabbar/demo/index");
    });

    it("solution #1: 点击tab", function () {
      var indexData = [2, 4, 3, 1, 5];
      var iconText = ["首页", "分类", "识物", "购物车", "个人"];
      var pressName = ["home", "classify", "subject", "cart", "user"];
      for (let i = 0; i < indexData.length; i++) {
        let index = indexData[i];
        let tabIndex = index - 1;
        cy.get(".ossa-tabbar")
          .eq(0)
          .within(() => {
            cy.get(".ossa-tabbar__item")
              .eq(tabIndex)
              .within(($tab) => {
                expect($tab).to.have.css("color").eq("rgb(127, 127, 127)");
                $tab.click();
                cy.get(
                  ".ossa-icon.ossa-icon--" + pressName[index - 1] + "-pressed"
                ).should("is.exist");
                cy.get(".ossa-tabbar__txt").contains(iconText[index - 1]);
              })
              .should(($tab) => {
                expect($tab).to.have.css("color").eq("rgb(221, 26, 33)");
              });
          });
      }
    });
  });
});
