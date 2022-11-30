/// <reference types="Cypress" />

describe("Countdown Testing", function () {
  //Countdown测试用例
  context("Countdown Testing", function () {
    before(function () {
      // 进入Countdown页
      cy.visit("#/components/countdown/demo/index");
    });

    it("solution #1: 剩余时间倒计时", function () {
      cy.get(".cd2-btn").eq(0).find("taro-view-core").click();
      cy.get(".cd2")
        .eq(0)
        .find("taro-view-core")
        .clock()
        .tick(4000)
        .should(($cd2) => {
          const text = $cd2.text();
          expect(text).to.eq("1");
        });
    });
  });
});
