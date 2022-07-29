//author by hzhuangchong
//Date on 2019/07/
//Page in Actionsheet

describe("Actionsheet Testing", () => {
  context("Input Normal Testing", function () {
    before(function () {
      cy.visit("#/components/actionsheet/demo/index");
    });

    it("case #1: 基础的Actionsheet", function () {
      cy.get(".ossa-button.ossa-button--normal.ossa-button--default")
        .eq(0)
        .click();
      cy.get(".ossa-actionsheet.ossa-actionsheet--show")
        .eq(0)
        .within(() => {
          cy.get(".ossa-actionsheet-item").eq(0).contains("满599元减去100");
          cy.get(".ossa-actionsheet-item.ossa-actionsheet-item--disabled")
            .eq(0)
            .contains("满249元减50");
          cy.get(".ossa-actionsheet-item").eq(0).click();
        });
    });

    it("case #2: 带取消按钮的Actionsheet", function () {
      cy.get(".ossa-button.ossa-button--normal.ossa-button--default")
        .eq(1)
        .click();
      cy.get(".ossa-actionsheet.ossa-actionsheet--show")
        .eq(0)
        .within(() => {
          cy.get(".ossa-actionsheet-item").eq(0).contains("满599元减去100");
          cy.get(".ossa-actionsheet-item").eq(1).contains("满249元减50");
          cy.get(".ossa-actionsheet__cancel-btn").eq(0).contains("取消");
          cy.get(".ossa-actionsheet__cancel-btn").eq(0).click();
        });
    });

    it("case #3: 带标题的Actionsheet", function () {
      cy.get(".ossa-button.ossa-button--normal.ossa-button--default")
        .eq(2)
        .click();
      cy.get(".ossa-actionsheet.ossa-actionsheet--show")
        .eq(0)
        .within(() => {
          cy.get(".ossa-actionsheet__title")
            .eq(0)
            .contains("带标题的 Actionsheet");
          cy.get(".ossa-actionsheet-item").eq(0).contains("满599元减去100");
          cy.get(".ossa-actionsheet-item").eq(1).contains("满249元减50");
          cy.get(".ossa-actionsheet-item").eq(0).click();
        });
    });

    it("case #4: 自定义内容的Actionsheet", function () {
      cy.get(".ossa-button.ossa-button--normal.ossa-button--default")
        .eq(3)
        .click();
      cy.get(".ossa-actionsheet.ossa-actionsheet--show")
        .eq(0)
        .within(() => {
          cy.get(".ossa-actionsheet__title")
            .eq(0)
            .contains("自定义内容的 Actionsheet");
          cy.get(".custom-content").eq(0).contains("这是自定义内容");
          cy.get(".ossa-icon.ossa-icon--close.ossa-actionsheet__close-btn")
            .eq(0)
            .click();
        });
    });
  });
});
