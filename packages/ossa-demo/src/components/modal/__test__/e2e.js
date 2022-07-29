//author by hzhuangchong
//Date on 2019/07/30
//Page in Modal

describe("Modal Testing", () => {
  before(function () {
    cy.visit("#/components/modal/demo/index");
  });

  it("case #1: 基础弹框", function () {
    cy.get(".block")
      .eq(0)
      .within(() => {
        cy.get(".ossa-button.ossa-button--normal.ossa-button--default")
          .eq(0)
          .click();
      });
    cy.get(".ossa-modal.ossa-modal--show")
      .eq(0)
      .within(() => {
        cy.get(".ossa-modal__mask").should("be.exist");
        cy.get(".ossa-modal__container")
          .eq(0)
          .within(() => {
            cy.get(".ossa-modal__header").contains("基础弹窗");
            cy.get(".ossa-modal__content").contains(
              "这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文"
            );
            cy.get(".ossa-modal__footer")
              .eq(0)
              .within(() => {
                cy.get(".ossa-action-btn--confirm").click();
              });
          });
      });
    cy.get(".ossa-modal.ossa-modal--show").should("not.exist");

    cy.get(".block")
      .eq(0)
      .within(() => {
        cy.get(".ossa-button.ossa-button--normal.ossa-button--default")
          .eq(0)
          .click();
      });
    cy.get(".ossa-modal.ossa-modal--show")
      .eq(0)
      .within(() => {
        cy.get(".ossa-modal__container")
          .eq(0)
          .within(() => {
            cy.get(".ossa-modal__footer")
              .eq(0)
              .within(() => {
                cy.get(".ossa-action-btn--cancel").click();
              });
          });
      });
    cy.get(".ossa-modal.ossa-modal--show").should("not.exist");
  });

  it("case #2: 单个按钮的弹框", function () {
    cy.get(".block")
      .eq(1)
      .within(() => {
        cy.get(".ossa-button.ossa-button--normal.ossa-button--default")
          .eq(0)
          .click();
      });
    cy.get(".ossa-modal.ossa-modal--show")
      .eq(0)
      .within(() => {
        cy.get(".ossa-modal__mask").should("be.exist");
        cy.get(".ossa-modal__container")
          .eq(0)
          .within(() => {
            cy.get(".ossa-modal__header").contains("单个按钮");
            cy.get(".ossa-modal__content").contains(
              "这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文"
            );
            cy.get(".ossa-modal__footer")
              .eq(0)
              .within(() => {
                cy.get(".ossa-action-btn--cancel").click();
              });
          });
      });
    cy.get(".ossa-modal.ossa-modal--show").should("not.exist");
  });

  it("case #3: 高级用法-内容插槽自定义的弹框", function () {
    cy.get(".block")
      .eq(2)
      .within(() => {
        cy.get(".ossa-button.ossa-button--normal.ossa-button--default")
          .eq(0)
          .click();
      });
    cy.get(".ossa-modal.ossa-modal--show")
      .eq(0)
      .within(() => {
        cy.get(".ossa-modal__mask").should("be.exist");
        cy.get(".ossa-modal__container")
          .eq(0)
          .within(() => {
            cy.get(".custom-content")
              .eq(0)
              .within(() => {
                cy.get(".custom-content__title").eq(0).contains("活动优惠");
                cy.get(".custom-content__row").eq(0).contains("套装");
                cy.get(".custom-content__row").eq(0).contains("-￥18.00");
                cy.get(".custom-content__row").eq(1).contains("满额减");
                cy.get(".custom-content__row").eq(1).contains("-￥18.00");
                cy.get(".custom-content__row").eq(2).contains("全场满额减");
                cy.get(".custom-content__row").eq(2).contains("-￥18.00");
              });
            cy.get(".ossa-modal__footer")
              .eq(0)
              .within(() => {
                cy.get(".ossa-action-btn--cancel").click();
              });
          });
      });
    cy.get(".ossa-modal.ossa-modal--show").should("not.exist");
  });

  it("case #4: 高级用法-内容实例自定义的弹框", function () {
    cy.get(".block")
      .eq(3)
      .within(() => {
        cy.get(".ossa-button.ossa-button--normal.ossa-button--default")
          .eq(0)
          .click();
      });
    cy.get(".ossa-modal.ossa-modal--show")
      .eq(0)
      .within(() => {
        cy.get(".ossa-modal__mask").should("be.exist");
        cy.get(".ossa-modal__container")
          .eq(0)
          .within(() => {
            cy.get(".custom-content-1")
              .eq(0)
              .within(() => {
                cy.get(".custom-content-1__img").eq(0).should("be.exist");
              });
            cy.get(".ossa-modal__footer")
              .eq(0)
              .within(() => {
                cy.get(".ossa-action-btn--cancel").click();
              });
          });
      });
    cy.get(".ossa-modal.ossa-modal--show").should("not.exist");
  });
});
